"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[722],{

/***/ 315
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/fesm2022/ngx-bootstrap-carousel.mjs ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarouselComponent: () => (/* binding */ CarouselComponent),
/* harmony export */   CarouselConfig: () => (/* binding */ CarouselConfig),
/* harmony export */   CarouselModule: () => (/* binding */ CarouselModule),
/* harmony export */   SlideComponent: () => (/* binding */ SlideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/utils */ 2341);




const _c0 = ["*"];
const _c1 = a0 => ({
  "display": a0
});
function CarouselComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Conditional_1_For_2_Template_li_click_0_listener() {
      const ɵ$index_6_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectSlide(ɵ$index_6_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", slide_r4.active === true);
  }
}
function CarouselComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](1, CarouselComponent_Conditional_1_For_2_Template, 1, 2, "li", 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r2.indicatorsSlides());
  }
}
function CarouselComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Conditional_2_For_2_Template_button_click_0_listener() {
      const ɵ$index_12_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5).$index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectSlide(ɵ$index_12_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r7 = ctx.$implicit;
    const ɵ$index_12_r6 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", slide_r7.active === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-bs-target", "#carousel" + ctx_r2.currentId)("data-bs-slide-to", ɵ$index_12_r6);
  }
}
function CarouselComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](1, CarouselComponent_Conditional_2_For_2_Template, 1, 4, "button", 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r2.indicatorsSlides());
  }
}
function CarouselComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Conditional_5_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.previousSlide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r2.checkDisabledClass("prev"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-bs-target", "#carousel" + ctx_r2.currentId);
  }
}
function CarouselComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Conditional_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.nextSlide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r2.checkDisabledClass("next"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-bs-target", "#carousel" + ctx_r2.currentId);
  }
}
let CarouselConfig = /*#__PURE__*/(() => {
  class CarouselConfig {
    constructor() {
      /* Default interval of auto changing of slides */
      this.interval = 5000;
      /* Is loop of auto changing of slides can be paused */
      this.noPause = false;
      /* Is slides can wrap from the last to the first slide */
      this.noWrap = false;
      /* Show carousel-indicators */
      this.showIndicators = true;
      /* Slides can be paused on focus */
      this.pauseOnFocus = false;
      /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
      this.indicatorsByChunk = false;
      /* If value more then 1 — carousel works in multilist mode */
      this.itemsPerSlide = 1;
      /* If `true` — carousel shifts by one element. By default carousel shifts by number
        of visible elements (itemsPerSlide field) */
      this.singleSlideOffset = false;
    }
    static {
      this.ɵfac = function CarouselConfig_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CarouselConfig)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CarouselConfig,
        factory: CarouselConfig.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CarouselConfig;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @param array The source array to search in
 * @param predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 */
function findLastIndex(array, predicate) {
  let l = array.length;
  while (l--) {
    if (predicate(array[l], l, array)) {
      return l;
    }
  }
  return -1;
}
function chunkByNumber(array, size) {
  const out = [];
  const n = Math.ceil(array.length / size);
  let i = 0;
  while (i < n) {
    const chunk = array.splice(0, i === n - 1 && size < array.length ? array.length : size);
    out.push(chunk);
    i++;
  }
  return out;
}
function isNumber(value) {
  return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}

/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */
var Direction = /*#__PURE__*/function (Direction) {
  Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
  Direction[Direction["NEXT"] = 1] = "NEXT";
  Direction[Direction["PREV"] = 2] = "PREV";
  return Direction;
}(Direction || {});
let _currentId = 1;
/**
 * Base element to create carousel
 */
let CarouselComponent = /*#__PURE__*/(() => {
  class CarouselComponent {
    /** Index of currently displayed slide(started for 0) */
    set activeSlide(index) {
      if (this.multilist) {
        return;
      }
      if (isNumber(index)) {
        this.customActiveSlide = index;
      }
      if (this._slides.length && index !== this._currentActiveSlide) {
        this._select(index);
      }
    }
    get activeSlide() {
      return this._currentActiveSlide || 0;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     */
    get interval() {
      return this._interval;
    }
    set interval(value) {
      this._interval = value;
      this.restartTimer();
    }
    get slides() {
      return this._slides.toArray();
    }
    get isFirstSlideVisible() {
      const indexes = this.getVisibleIndexes();
      if (!indexes || indexes instanceof Array && !indexes.length) {
        return false;
      }
      return indexes.includes(0);
    }
    get isLastSlideVisible() {
      const indexes = this.getVisibleIndexes();
      if (!indexes || indexes instanceof Array && !indexes.length) {
        return false;
      }
      return indexes.includes(this._slides.length - 1);
    }
    get _bsVer() {
      return (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__.getBsVer)();
    }
    constructor(config, ngZone, platformId) {
      this.ngZone = ngZone;
      this.platformId = platformId;
      /* If `true` — carousel will not cycle continuously and will have hard stops (prevent looping) */
      this.noWrap = false;
      /*  If `true` — will disable pausing on carousel mouse hover */
      this.noPause = false;
      /*  If `true` — carousel-indicators are visible  */
      this.showIndicators = true;
      /*  If `true` - autoplay will be stopped on focus */
      this.pauseOnFocus = false;
      /* If `true` - carousel indicators indicate slides chunks
         works ONLY if singleSlideOffset = FALSE */
      this.indicatorsByChunk = false;
      /* If value more then 1 — carousel works in multilist mode */
      this.itemsPerSlide = 1;
      /* If `true` — carousel shifts by one element. By default carousel shifts by number
         of visible elements (itemsPerSlide field) */
      this.singleSlideOffset = false;
      /** Turn on/off animation. Animation doesn't work for multilist carousel */
      this.isAnimated = false;
      /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
      this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
      /** Will be emitted when active slides has been changed in multilist mode */
      this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /* Index to start display slides from it */
      this.startFromIndex = 0;
      this._interval = 5000;
      this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__.LinkedList();
      this._currentVisibleSlidesIndex = 0;
      this.isPlaying = false;
      this.destroyed = false;
      this.currentId = 0;
      this.getActive = slide => slide.active;
      this.makeSlidesConsistent = slides => {
        slides.forEach((slide, index) => slide.item.order = index);
      };
      Object.assign(this, config);
      this.currentId = _currentId++;
    }
    ngAfterViewInit() {
      setTimeout(() => {
        if (this.singleSlideOffset) {
          this.indicatorsByChunk = false;
        }
        if (this.multilist) {
          this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
          this.selectInitialSlides();
        }
        if (this.customActiveSlide && !this.multilist) {
          this._select(this.customActiveSlide);
        }
      }, 0);
    }
    ngOnDestroy() {
      this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    addSlide(slide) {
      this._slides.add(slide);
      if (this.multilist && this._slides.length <= this.itemsPerSlide) {
        slide.active = true;
      }
      if (!this.multilist && this.isAnimated) {
        slide.isAnimated = true;
      }
      if (!this.multilist && this._slides.length === 1) {
        this._currentActiveSlide = undefined;
        if (!this.customActiveSlide) {
          this.activeSlide = 0;
        }
        this.play();
      }
      if (this.multilist && this._slides.length > this.itemsPerSlide) {
        this.play();
      }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    removeSlide(slide) {
      const remIndex = this._slides.indexOf(slide);
      if (this._currentActiveSlide === remIndex) {
        // removing of active slide
        let nextSlideIndex;
        if (this._slides.length > 1) {
          // if this slide last - will roll to first slide, if noWrap flag is
          // FALSE or to previous, if noWrap is TRUE in case, if this slide in
          // middle of collection, index of next slide is same to removed
          nextSlideIndex = !this.isLast(remIndex) ? remIndex : this.noWrap ? remIndex - 1 : 0;
        }
        this._slides.remove(remIndex);
        // prevents exception with changing some value after checking
        setTimeout(() => {
          this._select(nextSlideIndex);
        }, 0);
      } else {
        this._slides.remove(remIndex);
        const currentSlideIndex = this.getCurrentSlideIndex();
        setTimeout(() => {
          // after removing, need to actualize index of current active slide
          this._currentActiveSlide = currentSlideIndex;
          this.activeSlideChange.emit(this._currentActiveSlide);
        }, 0);
      }
    }
    nextSlideFromInterval(force = false) {
      this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    nextSlide(force = false) {
      if (this.isPlaying) {
        this.restartTimer();
      }
      this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    previousSlide(force = false) {
      if (this.isPlaying) {
        this.restartTimer();
      }
      this.move(Direction.PREV, force);
    }
    getFirstVisibleIndex() {
      return this.slides.findIndex(this.getActive);
    }
    getLastVisibleIndex() {
      return findLastIndex(this.slides, this.getActive);
    }
    move(direction, force = false) {
      const firstVisibleIndex = this.getFirstVisibleIndex();
      const lastVisibleIndex = this.getLastVisibleIndex();
      if (this.noWrap) {
        if (direction === Direction.NEXT && this.isLast(lastVisibleIndex) || direction === Direction.PREV && firstVisibleIndex === 0) {
          return;
        }
      }
      if (!this.multilist) {
        this.activeSlide = this.findNextSlideIndex(direction, force) || 0;
      } else {
        this.moveMultilist(direction);
      }
    }
    /**
     * Swith slides by enter, space and arrows keys
     * @internal
     */
    keydownPress(event) {
      if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
        this.nextSlide();
        event.preventDefault();
        return;
      }
      if (event.keyCode === 37 || event.key === 'LeftArrow') {
        this.previousSlide();
        return;
      }
      if (event.keyCode === 39 || event.key === 'RightArrow') {
        this.nextSlide();
        return;
      }
    }
    /**
     * Play on mouse leave
     * @internal
     */
    onMouseLeave() {
      if (!this.pauseOnFocus) {
        this.play();
      }
    }
    /**
     * Play on mouse up
     * @internal
     */
    onMouseUp() {
      if (!this.pauseOnFocus) {
        this.play();
      }
    }
    /**
     * When slides on focus autoplay is stopped(optional)
     * @internal
     */
    pauseFocusIn() {
      if (this.pauseOnFocus) {
        this.isPlaying = false;
        this.resetTimer();
      }
    }
    /**
     * When slides out of focus autoplay is started
     * @internal
     */
    pauseFocusOut() {
      this.play();
    }
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    selectSlide(index) {
      if (this.isPlaying) {
        this.restartTimer();
      }
      if (!this.multilist) {
        this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
      } else {
        this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
      }
    }
    /**
     * Starts a auto changing of slides
     */
    play() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.restartTimer();
      }
    }
    /**
     * Stops a auto changing of slides
     */
    pause() {
      if (!this.noPause) {
        this.isPlaying = false;
        this.resetTimer();
      }
    }
    /**
     * Finds and returns index of currently displayed slide
     */
    getCurrentSlideIndex() {
      return this._slides.findIndex(this.getActive);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     */
    isLast(index) {
      return index + 1 >= this._slides.length;
    }
    /**
     * Defines, whether the specified index is first in collection
     * @param index
     */
    isFirst(index) {
      return index === 0;
    }
    indicatorsSlides() {
      return this.slides.filter((slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0);
    }
    selectInitialSlides() {
      const startIndex = this.startFromIndex <= this._slides.length ? this.startFromIndex : 0;
      this.hideSlides();
      if (this.singleSlideOffset) {
        this._slidesWithIndexes = this.mapSlidesAndIndexes();
        if (this._slides.length - startIndex < this.itemsPerSlide) {
          const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
          this._slidesWithIndexes = [...this._slidesWithIndexes, ...slidesToAppend].slice(slidesToAppend.length).slice(0, this.itemsPerSlide);
        } else {
          this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
        }
        this._slidesWithIndexes.forEach(slide => slide.item.active = true);
        this.makeSlidesConsistent(this._slidesWithIndexes);
      } else {
        this.selectRangeByNestedIndex(startIndex);
      }
      this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     */
    findNextSlideIndex(direction, force) {
      let nextSlideIndex = 0;
      if (!force && this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap) {
        return;
      }
      switch (direction) {
        case Direction.NEXT:
          // if this is last slide, not force, looping is disabled
          // and need to going forward - select current slide, as a next
          if (typeof this._currentActiveSlide === 'undefined') {
            nextSlideIndex = 0;
            break;
          }
          if (!this.isLast(this._currentActiveSlide)) {
            nextSlideIndex = this._currentActiveSlide + 1;
            break;
          }
          nextSlideIndex = !force && this.noWrap ? this._currentActiveSlide : 0;
          break;
        case Direction.PREV:
          // if this is first slide, not force, looping is disabled
          // and need to going backward - select current slide, as a next
          if (typeof this._currentActiveSlide === 'undefined') {
            nextSlideIndex = 0;
            break;
          }
          if (this._currentActiveSlide > 0) {
            nextSlideIndex = this._currentActiveSlide - 1;
            break;
          }
          if (!force && this.noWrap) {
            nextSlideIndex = this._currentActiveSlide;
            break;
          }
          nextSlideIndex = this._slides.length - 1;
          break;
        default:
          throw new Error('Unknown direction');
      }
      return nextSlideIndex;
    }
    mapSlidesAndIndexes() {
      return this.slides.slice().map((slide, index) => {
        return {
          index,
          item: slide
        };
      });
    }
    selectSlideRange(index) {
      if (this.isIndexInRange(index)) {
        return;
      }
      this.hideSlides();
      if (!this.singleSlideOffset) {
        this.selectRangeByNestedIndex(index);
      } else {
        const startIndex = this.isIndexOnTheEdges(index) ? index : index - this.itemsPerSlide + 1;
        const endIndex = this.isIndexOnTheEdges(index) ? index + this.itemsPerSlide : index + 1;
        this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
        this.makeSlidesConsistent(this._slidesWithIndexes);
        this._slidesWithIndexes.forEach(slide => slide.item.active = true);
      }
      this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    selectRangeByNestedIndex(index) {
      if (!this._chunkedSlides) {
        return;
      }
      const selectedRange = this._chunkedSlides.map((slidesList, i) => {
        return {
          index: i,
          list: slidesList
        };
      }).find(slidesList => {
        return slidesList.list.find(slide => slide.index === index) !== undefined;
      });
      if (!selectedRange) {
        return;
      }
      this._currentVisibleSlidesIndex = selectedRange.index;
      this._chunkedSlides[selectedRange.index].forEach(slide => {
        slide.item.active = true;
      });
    }
    isIndexOnTheEdges(index) {
      return index + 1 - this.itemsPerSlide <= 0 || index + this.itemsPerSlide <= this._slides.length;
    }
    isIndexInRange(index) {
      if (this.singleSlideOffset && this._slidesWithIndexes) {
        const visibleIndexes = this._slidesWithIndexes.map(slide => slide.index);
        return visibleIndexes.indexOf(index) >= 0;
      }
      return index <= this.getLastVisibleIndex() && index >= this.getFirstVisibleIndex();
    }
    hideSlides() {
      this.slides.forEach(slide => slide.active = false);
    }
    isVisibleSlideListLast() {
      if (!this._chunkedSlides) {
        return false;
      }
      return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    isVisibleSlideListFirst() {
      return this._currentVisibleSlidesIndex === 0;
    }
    moveSliderByOneItem(direction) {
      let firstVisibleIndex;
      let lastVisibleIndex;
      let indexToHide;
      let indexToShow;
      if (this.noWrap) {
        firstVisibleIndex = this.getFirstVisibleIndex();
        lastVisibleIndex = this.getLastVisibleIndex();
        indexToHide = direction === Direction.NEXT ? firstVisibleIndex : lastVisibleIndex;
        indexToShow = direction !== Direction.NEXT ? firstVisibleIndex - 1 : !this.isLast(lastVisibleIndex) ? lastVisibleIndex + 1 : 0;
        const slideToHide = this._slides.get(indexToHide);
        if (slideToHide) {
          slideToHide.active = false;
        }
        const slideToShow = this._slides.get(indexToShow);
        if (slideToShow) {
          slideToShow.active = true;
        }
        const slidesToReorder = this.mapSlidesAndIndexes().filter(slide => slide.item.active);
        this.makeSlidesConsistent(slidesToReorder);
        if (this.singleSlideOffset) {
          this._slidesWithIndexes = slidesToReorder;
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
        return;
      }
      if (!this._slidesWithIndexes || !this._slidesWithIndexes[0]) {
        return;
      }
      let index;
      firstVisibleIndex = this._slidesWithIndexes[0].index;
      lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
      if (direction === Direction.NEXT) {
        this._slidesWithIndexes.shift();
        index = this.isLast(lastVisibleIndex) ? 0 : lastVisibleIndex + 1;
        const item = this._slides.get(index);
        if (item) {
          this._slidesWithIndexes.push({
            index,
            item
          });
        }
      } else {
        this._slidesWithIndexes.pop();
        index = this.isFirst(firstVisibleIndex) ? this._slides.length - 1 : firstVisibleIndex - 1;
        const item = this._slides.get(index);
        if (item) {
          this._slidesWithIndexes = [{
            index,
            item
          }, ...this._slidesWithIndexes];
        }
      }
      this.hideSlides();
      this._slidesWithIndexes.forEach(slide => slide.item.active = true);
      this.makeSlidesConsistent(this._slidesWithIndexes);
      this.slideRangeChange.emit(this._slidesWithIndexes.map(slide => slide.index));
    }
    moveMultilist(direction) {
      if (this.singleSlideOffset) {
        this.moveSliderByOneItem(direction);
      } else {
        this.hideSlides();
        if (this.noWrap) {
          this._currentVisibleSlidesIndex = direction === Direction.NEXT ? this._currentVisibleSlidesIndex + 1 : this._currentVisibleSlidesIndex - 1;
        } else if (direction === Direction.NEXT) {
          this._currentVisibleSlidesIndex = this.isVisibleSlideListLast() ? 0 : this._currentVisibleSlidesIndex + 1;
        } else {
          if (this.isVisibleSlideListFirst()) {
            this._currentVisibleSlidesIndex = this._chunkedSlides ? this._chunkedSlides.length - 1 : 0;
          } else {
            this._currentVisibleSlidesIndex = this._currentVisibleSlidesIndex - 1;
          }
        }
        if (this._chunkedSlides) {
          this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(slide => slide.item.active = true);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
      }
    }
    getVisibleIndexes() {
      if (!this.singleSlideOffset && this._chunkedSlides) {
        return this._chunkedSlides[this._currentVisibleSlidesIndex].map(slide => slide.index);
      }
      if (this._slidesWithIndexes) {
        return this._slidesWithIndexes.map(slide => slide.index);
      }
    }
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     */
    _select(index) {
      if (isNaN(index)) {
        this.pause();
        return;
      }
      if (!this.multilist && typeof this._currentActiveSlide !== 'undefined') {
        const currentSlide = this._slides.get(this._currentActiveSlide);
        if (typeof currentSlide !== 'undefined') {
          currentSlide.active = false;
        }
      }
      const nextSlide = this._slides.get(index);
      if (typeof nextSlide !== 'undefined') {
        this._currentActiveSlide = index;
        nextSlide.active = true;
        this.activeSlide = index;
        this.activeSlideChange.emit(index);
      }
    }
    /**
     * Starts loop of auto changing of slides
     */
    restartTimer() {
      this.resetTimer();
      const interval = +this.interval;
      if (!isNaN(interval) && interval > 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
        this.currentInterval = this.ngZone.runOutsideAngular(() => {
          return window.setInterval(() => {
            const nInterval = +this.interval;
            this.ngZone.run(() => {
              if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
                this.nextSlideFromInterval();
              } else {
                this.pause();
              }
            });
          }, interval);
        });
      }
    }
    get multilist() {
      return this.itemsPerSlide > 1;
    }
    /**
     * Stops loop of auto changing of slides
     */
    resetTimer() {
      if (this.currentInterval) {
        clearInterval(this.currentInterval);
        this.currentInterval = void 0;
      }
    }
    checkDisabledClass(buttonType) {
      if (buttonType === 'prev') {
        return this.activeSlide === 0 && this.noWrap && !this.multilist || this.isFirstSlideVisible && this.noWrap && this.multilist;
      }
      return this.isLast(this.activeSlide) && this.noWrap && !this.multilist || this.isLastSlideVisible && this.noWrap && this.multilist;
    }
    static {
      this.ɵfac = function CarouselComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CarouselComponent,
        selectors: [["carousel"]],
        inputs: {
          noWrap: "noWrap",
          noPause: "noPause",
          showIndicators: "showIndicators",
          pauseOnFocus: "pauseOnFocus",
          indicatorsByChunk: "indicatorsByChunk",
          itemsPerSlide: "itemsPerSlide",
          singleSlideOffset: "singleSlideOffset",
          isAnimated: "isAnimated",
          activeSlide: "activeSlide",
          startFromIndex: "startFromIndex",
          interval: "interval"
        },
        outputs: {
          activeSlideChange: "activeSlideChange",
          slideRangeChange: "slideRangeChange"
        },
        ngContentSelectors: _c0,
        decls: 7,
        vars: 8,
        consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout", "id"], [1, "carousel-indicators"], [1, "carousel-inner", 3, "ngStyle"], ["href", "javascript:void(0);", "tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "disabled"], ["href", "javascript:void(0);", "tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "disabled"], [3, "active"], [3, "click"], ["type", "button", "aria-current", "true", 3, "active"], ["type", "button", "aria-current", "true", 3, "click"], ["href", "javascript:void(0);", "tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], [1, "sr-only", "visually-hidden"], ["href", "javascript:void(0);", "tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() {
              return ctx.pause();
            })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
              return ctx.onMouseLeave();
            })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() {
              return ctx.onMouseUp();
            })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) {
              return ctx.keydownPress($event);
            })("focusin", function CarouselComponent_Template_div_focusin_0_listener() {
              return ctx.pauseFocusIn();
            })("focusout", function CarouselComponent_Template_div_focusout_0_listener() {
              return ctx.pauseFocusOut();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](1, CarouselComponent_Conditional_1_Template, 3, 0, "ol", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](2, CarouselComponent_Conditional_2_Template, 3, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](5, CarouselComponent_Conditional_5_Template, 4, 3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](6, CarouselComponent_Conditional_6_Template, 4, 3, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "carousel" + ctx.currentId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx._bsVer.isBs5 && ctx.showIndicators && ctx.slides.length > 1 ? 1 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx._bsVer.isBs5 && ctx.showIndicators && ctx.slides.length > 1 ? 2 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx.multilist ? "flex" : "block"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.slides.length > 1 ? 5 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.slides.length > 1 ? 6 : -1);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
        encapsulation: 2
      });
    }
  }
  return CarouselComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SlideComponent = /*#__PURE__*/(() => {
  class SlideComponent {
    constructor(carousel) {
      /** Is current slide active */
      this.active = false;
      this.itemWidth = '100%';
      this.order = 0;
      this.isAnimated = false;
      /** Wraps element by appropriate CSS classes */
      this.addClass = true;
      this.multilist = false;
      this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    ngOnInit() {
      this.carousel.addSlide(this);
      this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
      this.multilist = this.carousel?.itemsPerSlide > 1;
    }
    /** Fires changes in container collection after removing of this slide instance */
    ngOnDestroy() {
      this.carousel.removeSlide(this);
    }
    static {
      this.ɵfac = function SlideComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselComponent));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SlideComponent,
        selectors: [["slide"]],
        hostVars: 15,
        hostBindings: function SlideComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", !ctx.active);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.itemWidth)("order", ctx.order);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("multilist-margin", ctx.multilist)("active", ctx.active)("carousel-animation", ctx.isAnimated)("item", ctx.addClass)("carousel-item", ctx.addClass);
          }
        },
        inputs: {
          active: "active"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 2,
        consts: [[1, "item"]],
        template: function SlideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.active);
          }
        },
        styles: [".carousel-animation[_nghost-%COMP%]{transition:opacity .6s ease,visibility .6s ease;float:left}.carousel-animation.active[_nghost-%COMP%]{opacity:1;visibility:visible}.carousel-animation[_nghost-%COMP%]:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}.multilist-margin[_nghost-%COMP%]{margin-right:auto}.carousel-item[_nghost-%COMP%]{perspective:1000px}"]
      });
    }
  }
  return SlideComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CarouselModule = /*#__PURE__*/(() => {
  class CarouselModule {
    // @deprecated method not required anymore, will be deleted in v19.0.0
    static forRoot() {
      return {
        ngModule: CarouselModule,
        providers: []
      };
    }
    static {
      this.ɵfac = function CarouselModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CarouselModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CarouselModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    }
  }
  return CarouselModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ },

/***/ 722
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/image-url.util */ 8681);
/* harmony import */ var _shared_property_card_property_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/property-card/property-card.component */ 608);
/* harmony import */ var _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/skeleton-loader/skeleton-loader.component */ 4540);
/* harmony import */ var _shared_property_growth_calculator_property_growth_calculator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/property-growth-calculator/property-growth-calculator.component */ 6382);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/services/api.service */ 1776);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/services/config.service */ 8802);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3305);















const _c0 = () => ({
  propertyType: "HOUSE"
});
const _c1 = () => ({
  propertyType: "APARTMENT"
});
const _c2 = () => ({
  propertyType: "LAND"
});
const _c3 = () => ({
  propertyType: "COMMERCIAL"
});
const _c4 = () => [1, 2, 3, 4, 5, 6];
function HomeComponent_carousel_1_slide_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", slide_r1.linkUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", slide_r1.resolvedImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", slide_r1.altText || "Homepage banner");
  }
}
function HomeComponent_carousel_1_slide_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", slide_r1.resolvedImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", slide_r1.altText || "Homepage banner");
  }
}
function HomeComponent_carousel_1_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomeComponent_carousel_1_slide_1_a_1_Template, 2, 3, "a", 68)(2, HomeComponent_carousel_1_slide_1_div_2_Template, 2, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", slide_r1.linkUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !slide_r1.linkUrl);
  }
}
function HomeComponent_carousel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "carousel", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomeComponent_carousel_1_slide_1_Template, 3, 2, "slide", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("interval", ctx_r1.displayCarouselSlides.length > 1 ? ctx_r1.carouselIntervalMs : 0)("noWrap", false)("noPause", true)("isAnimated", true)("showIndicators", ctx_r1.displayCarouselSlides.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.displayCarouselSlides);
  }
}
function HomeComponent_article_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h3", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_article_64_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openQuotePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Get Quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", "assets/images/" + s_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", s_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](s_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](s_r4.description);
  }
}
function HomeComponent_div_164_app_property_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-property-card", 81);
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("property", p_r5);
  }
}
function HomeComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomeComponent_div_164_app_property_card_1_Template, 1, 1, "app-property-card", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.featured);
  }
}
function HomeComponent_div_165_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-skeleton-loader", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-skeleton-loader", 86)(4, "app-skeleton-loader", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomeComponent_div_165_div_1_Template, 5, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](1, _c4));
  }
}
function HomeComponent_p_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No featured properties available at the moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    constructor(api, config, router, cdr) {
      this.api = api;
      this.config = config;
      this.router = router;
      this.cdr = cdr;
      this.featured = [];
      this.loading = true;
      this.searchType = 'buy';
      this.searchQuery = '';
      this.displayCarouselSlides = [];
      this.carouselMaxHeightPx = 330;
      this.carouselIntervalMs = 5000;
      this.fallbackCarouselSlides = [{
        imageUrl: 'assets/images/carousel/1.jpg',
        resolvedImageUrl: 'assets/images/carousel/1.jpg',
        altText: 'Banner 1'
      }, {
        imageUrl: 'assets/images/carousel/2.jpg',
        resolvedImageUrl: 'assets/images/carousel/2.jpg',
        altText: 'Banner 2'
      }, {
        imageUrl: 'assets/images/carousel/3.jpg',
        resolvedImageUrl: 'assets/images/carousel/3.jpg',
        altText: 'Banner 3'
      }];
      this.services = [{
        img: 'poplogo.png',
        title: 'POP service',
        description: 'Modern POP (Plaster of Paris) designs blend architectural elegance with functional lighting to transform any ceiling into a masterpiece.'
      }, {
        img: 'paintlogo.png',
        title: 'Paint service',
        description: 'The professional touch — transforming spaces with a stroke of perfection. Quality finishes that stand the test of time.'
      }, {
        img: 'lightlogo.png',
        title: 'Electrical service',
        description: 'We craft lighting solutions that transform ordinary spaces into extraordinary experiences. From concept to installation, brilliance in every corner.'
      }, {
        img: 'constructionlogo.png',
        title: 'Construction & reconstruction',
        description: 'Reconstruction restores what matters most — your space, your comfort, your peace of mind. We rebuild with precision, care, and craftsmanship you can trust.'
      }, {
        img: 'doorlogo.png',
        title: 'Door and framing',
        description: 'Precision-built doors and framing that define the character of every space — strength, style, and craftsmanship at every threshold.'
      }, {
        img: 'tileslogo.png',
        title: 'Tiles service',
        description: 'Exquisite design and superior quality for floors and walls — surfaces that inspire and endure.'
      }, {
        img: 'hardwarelogo.png',
        title: 'Hardware service',
        description: 'Premium fittings, fixtures, and accessories — from the smallest hinge to the grandest finish, quality you can see and feel.'
      }, {
        img: 'fabrication.png',
        title: 'Fabrication service',
        description: 'Precision-engineered metal and structural solutions — fabricated with skill, accuracy, and durability that stands the test of time.'
      }, {
        img: 'furniturelogo.png',
        title: 'Furniture service',
        description: 'Beautifully crafted pieces for warmth, character, and purpose — from custom designs to timeless classics built for generations.'
      }];
      this.slides = [{
        image: 'assets/images/nature/5.jpg'
      }, {
        image: 'assets/images/nature/4.jpg'
      }, {
        image: 'assets/images/nature/3.jpg'
      }];
      this.showIndicator = true;
    }
    openQuotePopup() {
      const w = window;
      w.showpopup?.();
    }
    switchIndicator() {
      this.showIndicator = !this.showIndicator;
    }
    ngOnInit() {
      this.loadCarouselSlides();
      this.api.get('/properties/public/featured').subscribe({
        next: data => {
          this.featured = Array.isArray(data) ? data : [];
          this.loading = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.loading = false;
          this.cdr.markForCheck();
        }
      });
    }
    goToSearch() {
      const params = {};
      if (this.searchQuery) params.city = this.searchQuery;
      if (this.searchType === 'rent') params.listingType = 'RENT';else params.listingType = 'SALE';
      this.router.navigate(['/search'], {
        queryParams: params
      });
    }
    loadCarouselSlides() {
      this.api.get('/carousel/slides').subscribe({
        next: slides => {
          const list = Array.isArray(slides) ? slides : [];
          if (list.length) {
            this.displayCarouselSlides = list.map(slide => this.toDisplaySlide(slide));
          } else {
            this.displayCarouselSlides = [...this.fallbackCarouselSlides];
          }
          this.cdr.markForCheck();
        },
        error: () => {
          this.displayCarouselSlides = [...this.fallbackCarouselSlides];
          this.cdr.markForCheck();
        }
      });
    }
    toDisplaySlide(slide) {
      return {
        id: slide.id,
        imageUrl: slide.imageUrl,
        linkUrl: slide.linkUrl,
        altText: slide.altText,
        resolvedImageUrl: (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_3__.resolvePropertyImageUrl)(slide.imageUrl, this.config.apiUrl) || slide.imageUrl
      };
    }
    static {
      this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_12__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 176,
        vars: 18,
        consts: [["aria-label", "Featured banners", 1, "home-carousel-wrap"], [3, "interval", "noWrap", "noPause", "isAnimated", "showIndicators", 4, "ngIf"], ["id", "loancalcid", "onClick", "showpopup1()", 1, "loancalcicon"], ["src", "assets/images/calcicon.jpg"], ["id", "wtsapshareid", "onClick", "wtsapsharehandle()", 1, "loancalcicon", 2, "top", "60%"], ["src", "assets/images/whatsapicon.png"], ["id", "popupid1", 1, "popup"], ["id", "closeiconid", 1, "closeicon", "popupody"], ["onClick", "hidepopup1()", 1, ""], [1, "formdata"], ["type", "text", "id", "initamtid", "name", "name", "size", "12", "maxlength", "32", "value", "300000"], ["type", "text", "id", "roiid", "name", "roi", "size", "4", "value", "12"], ["type", "text", "id", "tenureid", "name", "tenure", "size", "4", "maxlength", "12", "value", "3"], ["type", "submit", "value", "Calculate!", "onClick", "calcval()", 1, "btn", "btn-primary", "btn-sm"], ["type", "text", "name", "finalamt", "id", "finalamtid", "size", "16", "maxlength", "12", "disabled", ""], [1, "hero"], [1, "hero-bg"], [1, "container", "hero-content"], [1, "hero-subtitle"], [1, "hero-search"], [1, "search-tabs"], [3, "click"], [1, "search-box"], ["type", "text", "placeholder", "Search by location, city, or locality...", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click"], ["aria-label", "Home improvement services", 1, "services-section"], [1, "container", "service-cards-wrap"], [1, "services-heading"], [1, "services-sub"], [1, "service-cards-grid"], ["class", "service-card", 4, "ngFor", "ngForOf"], ["id", "popupid", 1, "popup"], ["id", "closeiconid1", "onClick", "hidepopup()", 1, "closeicon", "popupody"], [1, ""], ["action", "/action_page.php"], [1, "mb-3", "mt-3"], ["for", "name", 1, "form-label"], ["type", "name", "size", "12", "id", "name", "placeholder", "Enter name", "name", "namename", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "size", "12", "id", "email", "placeholder", "Enter email", "name", "email", 1, "form-control"], ["for", "number", 1, "form-label"], ["type", "number", "size", "12", "id", "number", "placeholder", "Enter number", "name", "number", 1, "form-control"], ["for", "comment", 1, "form-label"], ["rows", "5", "id", "comment", "name", "text", 1, "form-control"], ["onclick", "send_handle()", 1, "btn", "btn-success"], [1, "stats-section"], [1, "container"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], [1, "categories-section"], [1, "section-title"], [1, "categories-grid"], ["routerLink", "/search", 1, "category-card", 3, "queryParams"], [1, "category-icon"], [1, "featured-section"], [1, "section-header"], [1, "section-subtitle"], ["routerLink", "/search", 1, "btn", "btn-outline"], ["class", "grid grid-3", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "cta-section"], [1, "cta-card"], ["routerLink", "/signup", 1, "btn", "btn-primary", "btn-lg"], [3, "interval", "noWrap", "noPause", "isAnimated", "showIndicators"], [4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener", "class", "carouselimg", 3, "href", 4, "ngIf"], ["class", "carouselimg", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 1, "carouselimg", 3, "href"], [3, "src", "alt"], [1, "carouselimg"], [1, "service-card"], [1, "service-card-inner"], ["width", "56", "height", "56", "loading", "lazy", 1, "service-card-icon", 3, "src", "alt"], [1, "service-card-title"], [1, "service-card-desc"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "service-card-cta", 3, "click"], [1, "grid", "grid-3"], [3, "property", 4, "ngFor", "ngForOf"], [3, "property"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["height", "200px", "radius", "var(--radius-lg) 0 0 var(--radius-lg)"], [2, "padding", "1rem"], ["height", "24px", "width", "80%", 2, "margin-bottom", "0.5rem"], ["height", "16px", "width", "60%"], [1, "empty-state"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomeComponent_carousel_1_Template, 2, 6, "carousel", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "x");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9)(11, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Enter Amount:");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "br")(14, "input", 10)(15, "br")(16, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Rate of Intrest");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "br")(20, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "br")(23, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Enter Tenure in Years");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "br")(27, "input", 12)(28, "br")(29, "br")(30, "input", 13)(31, "br")(32, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Final Amount will be");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "br")(36, "input", 14)(37, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "section", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 17)(41, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Find Your Dream Property");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Discover the perfect home, apartment, or commercial space in India. Buy, sell, or rent with confidence on 1Guntha.");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 19)(46, "div", 20)(47, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_47_listener() {
              return ctx.searchType = "buy";
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Buy");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_49_listener() {
              return ctx.searchType = "rent";
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Rent");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 22)(52, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_52_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_53_listener() {
              return ctx.goToSearch();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "\uD83D\uDD0D");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, " Search ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "section", 25)(58, "div", 26)(59, "h2", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "Home services");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "p", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "Quality partners for POP, paint, electrical, construction, and more \u2014 request a quote in one tap.");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, HomeComponent_article_64_Template, 9, 4, "article", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 31)(66, "div", 32)(67, "span", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "x");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 9)(70, "form", 34)(71, "div", 35)(72, "label", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "Your Name: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](74, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "div", 35)(76, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "Email: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](78, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 35)(80, "label", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "Your Mobile Number: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "label", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "Comments: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](85, "textarea", 43)(86, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "button", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, "Enquiry on WhatsApp");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "section", 45)(90, "div", 46)(91, "div", 47)(92, "div", 48)(93, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "\uD83C\uDFE0");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "10,000+");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "Properties");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "div", 48)(100, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, "\uD83D\uDC65");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, "50,000+");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "Happy Customers");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "div", 48)(107, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](108, "\uD83C\uDFC6");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "500+");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "Verified Agents");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "div", 48)(114, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, "\u2B50");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "4.8/5");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, "Average Rating");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "section", 52)(121, "div", 46)(122, "h2", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, "Browse by Category");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "div", 54)(125, "a", 55)(126, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "\uD83C\uDFD8\uFE0F");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, "Houses");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "Independent houses and villas");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "a", 55)(133, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, "\uD83C\uDFE2");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "Apartments");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](138, "Flats and apartments");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "a", 55)(140, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](141, "\uD83C\uDF3E");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](143, "Land");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145, "Plots and land parcels");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "a", 55)(147, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](148, "\uD83C\uDFEC");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](149, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150, "Commercial");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](152, "Shops, offices, and more");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](153, "app-property-growth-calculator");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "section", 57)(155, "div", 46)(156, "div", 58)(157, "div")(158, "h2", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](159, "Featured Properties");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "p", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](161, "Handpicked properties just for you");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, "View All");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](164, HomeComponent_div_164_Template, 2, 1, "div", 61)(165, HomeComponent_div_165_Template, 2, 2, "div", 61)(166, HomeComponent_p_166_Template, 2, 0, "p", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "section", 63)(168, "div", 46)(169, "div", 64)(170, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](171, "Ready to List Your Property?");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](172, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](173, "Join thousands of property owners on 1Guntha and reach millions of potential buyers across India");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "a", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, "Get Started Free");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.displayCarouselSlides.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.searchType === "buy");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.searchType === "rent");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.services);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](14, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](15, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](16, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](17, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.featured.length && !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.featured.length);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _shared_property_card_property_card_component__WEBPACK_IMPORTED_MODULE_4__.PropertyCardComponent, _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_5__.SkeletonLoaderComponent, _shared_property_growth_calculator_property_growth_calculator_component__WEBPACK_IMPORTED_MODULE_6__.PropertyGrowthCalculatorComponent, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__.CarouselModule, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__.SlideComponent, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__.CarouselComponent],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.home-carousel-wrap[_ngcontent-%COMP%] {\n  --home-carousel-max-height: 330px;\n  margin-bottom: 1.5rem;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n}\n\n.home-carousel-wrap[_ngcontent-%COMP%]     carousel {\n  display: block;\n}\n\n.home-carousel-wrap[_ngcontent-%COMP%]     .carousel-inner, \n.home-carousel-wrap[_ngcontent-%COMP%]     .item, \n.home-carousel-wrap[_ngcontent-%COMP%]     slide {\n  max-height: var(--home-carousel-max-height);\n}\n\n.carouselimg[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 0;\n}\n\n.carouselimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: var(--home-carousel-max-height);\n  object-fit: cover;\n}\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--primary-gradient);\n  color: white;\n  padding: 5rem 0 4.5rem;\n  overflow: hidden;\n}\n\n.hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: url('data:image/svg+xml,<svg width=\"60\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"grid\" width=\"60\" height=\"60\" patternUnits=\"userSpaceOnUse\"><path d=\"M 60 0 L 0 0 0 60\" fill=\"none\" stroke=\"rgba(255,255,255,0.08)\" stroke-width=\"1\"/></pattern></defs><rect width=\"60\" height=\"60\" fill=\"url(%23grid)\"/></svg>');\n  opacity: 0.5;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  max-width: 950px;\n}\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.75rem;\n  font-weight: 800;\n  margin-bottom: 1.25rem;\n  color: white;\n  line-height: 1.1;\n  letter-spacing: -1px;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  opacity: 0.95;\n  margin-bottom: 3rem;\n  line-height: 1.6;\n  font-weight: 400;\n}\n\n.hero-search[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-xl);\n  padding: 2rem;\n  box-shadow: var(--shadow-2xl);\n  max-width: 900px;\n  margin: 0 auto;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.search-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n  background: var(--bg);\n  padding: 0.5rem;\n  border-radius: var(--radius);\n}\n\n.search-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.875rem 1.25rem;\n  border: none;\n  background: transparent;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--transition);\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n}\n\n.search-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: var(--shadow-md);\n}\n\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: stretch;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.125rem 1.5rem;\n  color: var(--text);\n  border: 2px solid var(--border);\n  border-radius: var(--radius);\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);\n}\n\n.search-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 1.125rem 2rem;\n  font-size: 1rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.stats-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: linear-gradient(to bottom, var(--surface) 0%, var(--bg) 100%);\n  border-top: 1px solid var(--border-light);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 2rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.5rem 2rem;\n  background: var(--surface);\n  border-radius: var(--radius-lg);\n  transition: var(--transition-slow);\n  border: 2px solid var(--border-light);\n  position: relative;\n  overflow: hidden;\n}\n\n.stat-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--primary-gradient);\n  transform: scaleX(0);\n  transition: transform 0.3s;\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-xl);\n  border-color: var(--primary-light);\n}\n\n.stat-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 1.25rem;\n  filter: drop-shadow(0 4px 8px rgba(14, 165, 233, 0.2));\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-weight: 600;\n  font-size: 0.9375rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.categories-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--surface);\n}\n\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 2rem;\n}\n\n.category-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  padding: 2.5rem 2rem;\n  border-radius: var(--radius-lg);\n  text-align: center;\n  transition: var(--transition-slow);\n  border: 2px solid var(--border);\n  position: relative;\n  overflow: hidden;\n}\n\n.category-card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.category-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-xl);\n}\n\n.category-card[_ngcontent-%COMP%]:hover::after {\n  opacity: 0.05;\n}\n\n.category-card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 1.25rem;\n  filter: drop-shadow(0 4px 8px rgba(14, 165, 233, 0.15));\n}\n\n.category-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  color: var(--text);\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n\n.category-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0;\n  font-size: 0.9375rem;\n}\n\n.featured-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 2rem;\n}\n\n.cta-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--primary-gradient);\n  position: relative;\n  overflow: hidden;\n}\n\n.cta-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: url('data:image/svg+xml,<svg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"dots\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><circle cx=\"10\" cy=\"10\" r=\"1.5\" fill=\"rgba(255,255,255,0.1)\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23dots)\"/></svg>');\n}\n\n.cta-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  padding: 4rem 3rem;\n  border-radius: var(--radius-xl);\n  text-align: center;\n  max-width: 750px;\n  margin: 0 auto;\n  box-shadow: var(--shadow-2xl);\n  position: relative;\n  z-index: 1;\n  border: 1px solid var(--border-light);\n}\n\n.cta-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text);\n  margin-bottom: 1rem;\n  font-size: 2.25rem;\n  font-weight: 800;\n}\n\n.cta-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 2.5rem;\n  font-size: 1.1875rem;\n  line-height: 1.6;\n}\n\n.loancalcicon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  left: 0px;\n  top: 50%;\n  display: flex;\n  cursor: pointer;\n  z-index: 99;\n}\n\n.popup1[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 90%;\n  background-color: rgba(73, 73, 77, 0.78);\n  z-index: 99;\n  position: absolute;\n  display: none;\n}\n\n.closeicon1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  display: flex;\n  cursor: pointer;\n  z-index: 999;\n  color: var(--footer-text);\n  font-weight: bold;\n  font-size: 25pt;\n}\n\n.visibleok[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.popup[_ngcontent-%COMP%] {\n  width: min(100%, 520px);\n  height: 100%;\n  background-color: rgba(15, 23, 42, 0.88);\n  z-index: 9999;\n  position: fixed;\n  display: none;\n  right: 0;\n  top: 0;\n  left: auto;\n}\n\n.closeicon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  display: flex;\n  cursor: pointer;\n  z-index: 999;\n  color: var(--footer-text);\n  font-weight: bold;\n  font-size: 25pt;\n}\n\n.visibleok[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.hidepopup[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.formdata[_ngcontent-%COMP%] {\n  text-align: left;\n  transform: translateY(5%);\n  color: var(--text);\n  margin: 0 auto;\n  width: min(92%, 420px);\n  background: var(--surface);\n  padding: 1.5rem;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-xl);\n}\n\n.form-label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.services-section[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 2rem;\n  background: linear-gradient(180deg, var(--bg) 0%, var(--surface) 45%, var(--bg) 100%);\n  border-block: 1px solid var(--border-light);\n}\n\n.service-cards-wrap[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n.services-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 2.5vw, 2rem);\n  font-weight: 800;\n  text-align: center;\n  margin: 0 0 0.5rem;\n  color: var(--text);\n}\n\n.services-sub[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  max-width: 42rem;\n  margin: 0 auto 1.75rem;\n  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);\n  line-height: 1.55;\n}\n\n.service-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));\n  gap: 1.25rem;\n  align-items: stretch;\n}\n\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n}\n\n.service-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 1.25rem 1.125rem 1.35rem;\n  text-align: center;\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n}\n\n.service-card-inner[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n  box-shadow: var(--shadow-md);\n}\n\n.service-card-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  object-fit: contain;\n  flex-shrink: 0;\n}\n\n.service-card-title[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0.5rem;\n  color: var(--text);\n  font-size: clamp(1rem, 2vw, 1.125rem);\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.service-card-desc[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin: 0 0 1rem;\n  color: var(--text-secondary);\n  font-size: clamp(0.8125rem, 1.4vw, 0.9375rem);\n  line-height: 1.5;\n  text-wrap: pretty;\n}\n\n.service-card-cta[_ngcontent-%COMP%] {\n  margin-top: auto;\n  align-self: center;\n  width: auto;\n  min-width: 9.5rem;\n  max-width: 100%;\n}\n\n.servicename[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n\n.hidepopup[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: var(--text-muted);\n}\n\n.carouselimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform 0.25s ease;\n}\n\n.carouselimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    color: var(--text);\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .popup[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    left: 0;\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFRLGNBQUE7QUFDWjs7QUFBSTtFQUNFLGlDQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFHTjs7QUFESTtFQUF5QyxjQUFBO0FBSzdDOztBQUpJOzs7RUFFc0MsMkNBQUE7QUFRMUM7O0FBUEk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQVVOOztBQVJJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FBV047O0FBVEk7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFZTjs7QUFWSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxzVkFBQTtFQUNBLFlBQUE7QUFhTjs7QUFYSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFjTjs7QUFaSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMENBQUE7QUFlTjs7QUFiSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWdCTjs7QUFkSTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQWlCTjs7QUFmSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQWtCTjs7QUFoQkk7RUFDRSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQW1CTjs7QUFqQkk7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQW9CTjs7QUFsQkk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBcUJOOztBQW5CSTtFQUNFLE9BQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXNCTjs7QUFwQkk7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtBQXVCTjs7QUFyQkk7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBd0JOOztBQXRCSTtFQUNFLGVBQUE7RUFDQSx5RUFBQTtFQUNBLHlDQUFBO0FBeUJOOztBQXZCSTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUEwQk47O0FBeEJJO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTJCTjs7QUF6Qkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBNEJOOztBQTFCSTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQTZCTjs7QUEzQkk7RUFDRSxvQkFBQTtBQThCTjs7QUE1Qkk7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0RBQUE7QUErQk47O0FBN0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFnQ047O0FBOUJJO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQWlDTjs7QUEvQkk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFrQ047O0FBaENJO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQW1DTjs7QUFqQ0k7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBb0NOOztBQWxDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQXFDTjs7QUFuQ0k7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFzQ047O0FBcENJO0VBQ0UsYUFBQTtBQXVDTjs7QUFyQ0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUF3Q047O0FBdENJO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVEQUFBO0FBeUNOOztBQXZDSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBMENOOztBQXhDSTtFQUNFLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBMkNOOztBQXpDSTtFQUNFLGVBQUE7QUE0Q047O0FBMUNJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQTZDTjs7QUEzQ0k7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBOENOOztBQTVDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw4VEFBQTtBQStDTjs7QUE3Q0k7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7QUFnRE47O0FBOUNJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFpRE47O0FBL0NJO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFrRE47O0FBaERNO0VBQ0MsV0FBQTtFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0YsZUFBQTtFQUNBLFdBQUE7QUFtRE47O0FBaERBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFtREQ7O0FBakRBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNILGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFvREQ7O0FBakRBO0VBQ0MseUJBQUE7QUFvREQ7O0FBaERBO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFtREQ7O0FBakRBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNILGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFvREQ7O0FBakRBO0VBQ0MseUJBQUE7QUFvREQ7O0FBakRBO0VBQ0MsYUFBQTtBQW9ERDs7QUFqREE7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBb0RGOztBQWxEQTtFQUNDLHdCQUFBO0FBcUREOztBQWxEQTtFQUNFLHNCQUFBO0VBQ0EscUZBQUE7RUFDQSwyQ0FBQTtBQXFERjs7QUFuREE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFzREY7O0FBcERBO0VBQ0UsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBdURGOztBQXJEQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtBQXdERjs7QUF0REE7RUFDRSxhQUFBO0VBQ0EsdUVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUF5REY7O0FBdkRBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUEwREY7O0FBeERBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQTJERjs7QUF6REE7RUFDRSxrQ0FBQTtFQUNBLDRCQUFBO0FBNERGOztBQTFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBNkRGOztBQTNEQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE4REY7O0FBNURBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUErREY7O0FBN0RBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFnRUY7O0FBN0RBO0VBQ0MsNEJBQUE7QUFnRUQ7O0FBN0RBO0VBQ0MsYUFBQTtBQWdFRDs7QUE5REk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQWlFTjs7QUEvREk7RUFDRSxnQ0FBQTtBQWtFTjs7QUFoRUk7RUFDRSxzQkFBQTtBQW1FTjs7QUFqRUk7RUFFRTtJQUFXLGlCQUFBO0VBb0VmO0VBbkVJO0lBQWlCLG1CQUFBO0VBc0VyQjtFQXJFSTtJQUFjLHNCQUFBO0lBQXdCLGtCQUFBO0VBeUUxQztFQXhFSTtJQUFrQixzQkFBQTtJQUF3Qix1QkFBQTtJQUF5QixTQUFBO0VBNkV2RTtFQTNFSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7RUE2RU47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAgICAuaG9tZS1jYXJvdXNlbC13cmFwIHtcbiAgICAgIC0taG9tZS1jYXJvdXNlbC1tYXgtaGVpZ2h0OiAzMzBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gICAgLmhvbWUtY2Fyb3VzZWwtd3JhcCA6Om5nLWRlZXAgY2Fyb3VzZWwgeyBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5ob21lLWNhcm91c2VsLXdyYXAgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbm5lcixcbiAgICAuaG9tZS1jYXJvdXNlbC13cmFwIDo6bmctZGVlcCAuaXRlbSxcbiAgICAuaG9tZS1jYXJvdXNlbC13cmFwIDo6bmctZGVlcCBzbGlkZSB7IG1heC1oZWlnaHQ6IHZhcigtLWhvbWUtY2Fyb3VzZWwtbWF4LWhlaWdodCk7IH1cbiAgICAuY2Fyb3VzZWxpbWcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMDtcbiAgICB9XG4gICAgLmNhcm91c2VsaW1nIGltZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogdmFyKC0taG9tZS1jYXJvdXNlbC1tYXgtaGVpZ2h0KTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaGVybyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyYWRpZW50KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDVyZW0gMCA0LjVyZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAuaGVybzo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHdpZHRoPVwiNjBcIiBoZWlnaHQ9XCI2MFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48cGF0dGVybiBpZD1cImdyaWRcIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxwYXRoIGQ9XCJNIDYwIDAgTCAwIDAgMCA2MFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwicmdiYSgyNTUsMjU1LDI1NSwwLjA4KVwiIHN0cm9rZS13aWR0aD1cIjFcIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiBmaWxsPVwidXJsKCUyM2dyaWQpXCIvPjwvc3ZnPicpO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAuaGVyby1jb250ZW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXgtd2lkdGg6IDk1MHB4O1xuICAgIH1cbiAgICAuaGVybyBoMSB7XG4gICAgICBmb250LXNpemU6IDMuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gICAgLmhlcm8tc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5oZXJvLXNlYXJjaCB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTJ4bCk7XG4gICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgfVxuICAgIC5zZWFyY2gtdGFicyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgICB9XG4gICAgLnNlYXJjaC10YWJzIGJ1dHRvbiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICB9XG4gICAgLnNlYXJjaC10YWJzIGJ1dHRvbi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIH1cbiAgICAuc2VhcmNoLWJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxcmVtO1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgfVxuICAgIC5zZWFyY2gtYm94IGlucHV0IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nOiAxLjEyNXJlbSAxLjVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMTQsIDE2NSwgMjMzLCAwLjEpO1xuICAgIH1cbiAgICAuc2VhcmNoLWJveCAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDEuMTI1cmVtIDJyZW07XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gICAgLnN0YXRzLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tc3VyZmFjZSkgMCUsIHZhcigtLWJnKSAxMDAlKTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgIH1cbiAgICAuc3RhdHMtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XG4gICAgICBnYXA6IDJyZW07XG4gICAgfVxuICAgIC5zdGF0LWNhcmQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMi41cmVtIDJyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNsb3cpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5zdGF0LWNhcmQ6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgICAuc3RhdC1jYXJkOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIH1cbiAgICAuc3RhdC1jYXJkOmhvdmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgfVxuICAgIC5zdGF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDRweCA4cHggcmdiYSgxNCwgMTY1LCAyMzMsIDAuMikpO1xuICAgIH1cbiAgICAuc3RhdC12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgICAuc3RhdC1sYWJlbCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbiAgICAuY2F0ZWdvcmllcy1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICAgIH1cbiAgICAuY2F0ZWdvcmllcy1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMnJlbTtcbiAgICB9XG4gICAgLmNhdGVnb3J5LWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gICAgICBwYWRkaW5nOiAyLjVyZW0gMnJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNsb3cpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5jYXRlZ29yeS1jYXJkOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiAwO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgIH1cbiAgICAuY2F0ZWdvcnktY2FyZDpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgICB9XG4gICAgLmNhdGVnb3J5LWNhcmQ6aG92ZXI6OmFmdGVyIHtcbiAgICAgIG9wYWNpdHk6IDAuMDU7XG4gICAgfVxuICAgIC5jYXRlZ29yeS1jYXJkID4gKiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICAuY2F0ZWdvcnktaWNvbiB7XG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNHB4IDhweCByZ2JhKDE0LCAxNjUsIDIzMywgMC4xNSkpO1xuICAgIH1cbiAgICAuY2F0ZWdvcnktY2FyZCBoNSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gICAgLmNhdGVnb3J5LWNhcmQgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICB9XG4gICAgLmZlYXR1cmVkLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogNHJlbSAwO1xuICAgIH1cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuICAgIC5jdGEtc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyYWRpZW50KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5jdGEtc2VjdGlvbjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzPjxwYXR0ZXJuIGlkPVwiZG90c1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxLjVcIiBmaWxsPVwicmdiYSgyNTUsMjU1LDI1NSwwLjEpXCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBmaWxsPVwidXJsKCUyM2RvdHMpXCIvPjwvc3ZnPicpO1xuICAgIH1cbiAgICAuY3RhLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gICAgICBwYWRkaW5nOiA0cmVtIDNyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTJ4bCk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICB9XG4gICAgLmN0YS1jYXJkIGgyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cbiAgICAuY3RhLWNhcmQgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gICAgICBmb250LXNpemU6IDEuMTg3NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgfVxuICAgICAgLmxvYW5jYWxjaWNvbntcblx0ICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICB6LWluZGV4Ojk5O1xuICAgIH1cblxuLnBvcHVwMXtcblx0d2lkdGggOjUwJTtcblx0aGVpZ2h0IDogOTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzcsIDAuNzgpO1xuXHR6LWluZGV4Ojk5O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6bm9uZTtcbn1cbi5jbG9zZWljb24xe1xuXHR3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cdGN1cnNvcjpwb2ludGVyO1xuXHR6LWluZGV4Ojk5OTtcblx0Y29sb3I6IHZhcigtLWZvb3Rlci10ZXh0KTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZToyNXB0O1xufVxuXG4udmlzaWJsZW9re1xuXHRkaXNwbGF5OmJsb2NrIWltcG9ydGFudDtcbn1cblxuXG4ucG9wdXB7XG5cdHdpZHRoIDogbWluKDEwMCUsIDUyMHB4KTtcblx0aGVpZ2h0IDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMjMsIDQyLCAwLjg4KTtcblx0ei1pbmRleDo5OTk5O1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGRpc3BsYXk6bm9uZTtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMDtcblx0bGVmdDogYXV0bztcbn1cbi5jbG9zZWljb257XG5cdHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcblx0Y3Vyc29yOnBvaW50ZXI7XG5cdHotaW5kZXg6OTk5O1xuXHRjb2xvcjogdmFyKC0tZm9vdGVyLXRleHQpO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOjI1cHQ7XG59XG5cbi52aXNpYmxlb2t7XG5cdGRpc3BsYXk6YmxvY2shaW1wb3J0YW50O1xufVxuXG4uaGlkZXBvcHVwe1xuXHRkaXNwbGF5Om5vbmU7XHRcbn1cblxuLmZvcm1kYXRhe1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNSUpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogbWluKDkyJSwgNDIwcHgpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xufVxuLmZvcm0tbGFiZWx7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLnNlcnZpY2VzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAyLjVyZW0gMCAycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZykgMCUsIHZhcigtLXN1cmZhY2UpIDQ1JSwgdmFyKC0tYmcpIDEwMCUpO1xuICBib3JkZXItYmxvY2s6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xufVxuLnNlcnZpY2UtY2FyZHMtd3JhcCB7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zZXJ2aWNlcy1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZGlzcGxheSk7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAyLjV2dywgMnJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4uc2VydmljZXMtc3ViIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIG1heC13aWR0aDogNDJyZW07XG4gIG1hcmdpbjogMCBhdXRvIDEuNzVyZW07XG4gIGZvbnQtc2l6ZTogY2xhbXAoMC45Mzc1cmVtLCAxLjV2dywgMS4wNjI1cmVtKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTU7XG59XG4uc2VydmljZS1jYXJkcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgobWluKDEwMCUsIDI2MHB4KSwgMWZyKSk7XG4gIGdhcDogMS4yNXJlbTtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uc2VydmljZS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAwO1xufVxuLnNlcnZpY2UtY2FyZC1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgcGFkZGluZzogMS4yNXJlbSAxLjEyNXJlbSAxLjM1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuLnNlcnZpY2UtY2FyZC1pbm5lcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG59XG4uc2VydmljZS1jYXJkLWljb24ge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5zZXJ2aWNlLWNhcmQtdGl0bGUge1xuICBtYXJnaW46IDAuNzVyZW0gMCAwLjVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuMTI1cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uc2VydmljZS1jYXJkLWRlc2Mge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiBjbGFtcCgwLjgxMjVyZW0sIDEuNHZ3LCAwLjkzNzVyZW0pO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LXdyYXA6IHByZXR0eTtcbn1cbi5zZXJ2aWNlLWNhcmQtY3RhIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiA5LjVyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNlcnZpY2VuYW1le1xuXHRmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG4uaGlkZXBvcHVwe1xuXHRkaXNwbGF5Om5vbmU7XHRcbn1cbiAgICAuZW1wdHktc3RhdGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogM3JlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICB9XG4gICAgLmNhcm91c2VsaW1nIGltZyB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcbiAgICB9XG4gICAgLmNhcm91c2VsaW1nIGltZzpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblxuICAgICAgLmhlcm8gaDEgeyBmb250LXNpemU6IDIuNXJlbTsgfVxuICAgICAgLmhlcm8tc3VidGl0bGUgeyBmb250LXNpemU6IDEuMTI1cmVtOyB9XG4gICAgICAuc2VhcmNoLWJveCB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuICAgICAgLnNlY3Rpb24taGVhZGVyIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogMXJlbTsgfVxuXG4gICAgICAucG9wdXB7XG4gICAgICAgIHdpZHRoIDoxMDAlO1xuICAgICAgICBoZWlnaHQgOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return HomeComponent;
})();

/***/ },

/***/ 2341
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BsVerions: () => (/* binding */ BsVerions),
/* harmony export */   LinkedList: () => (/* binding */ LinkedList),
/* harmony export */   OnChange: () => (/* binding */ OnChange),
/* harmony export */   Trigger: () => (/* binding */ Trigger),
/* harmony export */   Utils: () => (/* binding */ Utils),
/* harmony export */   currentBsVersion: () => (/* binding */ currentBsVersion),
/* harmony export */   document: () => (/* binding */ document),
/* harmony export */   getBsVer: () => (/* binding */ getBsVer),
/* harmony export */   listenToTriggers: () => (/* binding */ listenToTriggers),
/* harmony export */   listenToTriggersV2: () => (/* binding */ listenToTriggersV2),
/* harmony export */   parseTriggers: () => (/* binding */ parseTriggers),
/* harmony export */   registerEscClick: () => (/* binding */ registerEscClick),
/* harmony export */   registerOutsideClick: () => (/* binding */ registerOutsideClick),
/* harmony export */   setTheme: () => (/* binding */ setTheme),
/* harmony export */   warnOnce: () => (/* binding */ warnOnce),
/* harmony export */   window: () => (/* binding */ win)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class Trigger {
  constructor(open, close) {
    this.open = open;
    this.close = close || open;
  }
  isManual() {
    return this.open === 'manual' || this.close === 'manual';
  }
}
const DEFAULT_ALIASES = {
  hover: ['mouseover', 'mouseout'],
  focus: ['focusin', 'focusout']
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
  const trimmedTriggers = (triggers || '').trim();
  if (trimmedTriggers.length === 0) {
    return [];
  }
  const parsedTriggers = trimmedTriggers.split(/\s+/).map(trigger => trigger.split(':')).map(triggerPair => {
    const alias = aliases[triggerPair[0]] || triggerPair;
    return new Trigger(alias[0], alias[1]);
  });
  const manualTriggers = parsedTriggers.filter(triggerPair => triggerPair.isManual());
  if (manualTriggers.length > 1) {
    throw new Error('Triggers parse error: only one manual trigger is allowed');
  }
  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
  }
  return parsedTriggers;
}
function listenToTriggers(renderer,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
target, triggers, showFn, hideFn, toggleFn) {
  const parsedTriggers = parseTriggers(triggers);
  const listeners = [];
  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return Function.prototype;
  }
  parsedTriggers.forEach(trigger => {
    if (trigger.open === trigger.close) {
      listeners.push(renderer.listen(target, trigger.open, toggleFn));
      return;
    }
    listeners.push(renderer.listen(target, trigger.open, showFn));
    if (trigger.close) {
      listeners.push(renderer.listen(target, trigger.close, hideFn));
    }
  });
  return () => {
    listeners.forEach(unsubscribeFn => unsubscribeFn());
  };
}
function listenToTriggersV2(renderer, options) {
  const parsedTriggers = parseTriggers(options.triggers);
  const target = options.target;
  // do nothing
  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return Function.prototype;
  }
  // all listeners
  const listeners = [];
  // lazy listeners registration
  const _registerHide = [];
  const registerHide = () => {
    // add hide listeners to unregister array
    _registerHide.forEach(fn => listeners.push(fn()));
    // register hide events only once
    _registerHide.length = 0;
  };
  // register open\close\toggle listeners
  parsedTriggers.forEach(trigger => {
    const useToggle = trigger.open === trigger.close;
    const showFn = useToggle ? options.toggle : options.show;
    if (!useToggle && trigger.close && options.hide) {
      const triggerClose = trigger.close;
      const optionsHide = options.hide;
      const _hide = () => renderer.listen(target, triggerClose, optionsHide);
      _registerHide.push(_hide);
    }
    if (showFn) {
      listeners.push(renderer.listen(target, trigger.open, () => showFn(registerHide)));
    }
  });
  return () => {
    listeners.forEach(unsubscribeFn => unsubscribeFn());
  };
}
function registerOutsideClick(renderer, options) {
  if (!options.outsideClick) {
    return Function.prototype;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return renderer.listen('document', 'click', event => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }
    if (options.targets && options.targets.some(target => target.contains(event.target))) {
      return;
    }
    if (options.hide) {
      options.hide();
    }
  });
}
function registerEscClick(renderer, options) {
  if (!options.outsideEsc) {
    return Function.prototype;
  }
  return renderer.listen('document', 'keyup.esc', event => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }
    if (options.targets && options.targets.some(target => target.contains(event.target))) {
      return;
    }
    if (options.hide) {
      options.hide();
    }
  });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const win = typeof window !== 'undefined' && window || {};
const document = win.document;
const location = win.location;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const gc = win.gc ? () => win.gc() : () => null;
const performance = win.performance ? win.performance : null;
const Event = win.Event;
const MouseEvent = win.MouseEvent;
const KeyboardEvent = win.KeyboardEvent;
const EventTarget = win.EventTarget;
const History = win.History;
const Location = win.Location;
const EventListener = win.EventListener;
var BsVerions = /*#__PURE__*/function (BsVerions) {
  BsVerions["isBs4"] = "bs4";
  BsVerions["isBs5"] = "bs5";
  return BsVerions;
}(BsVerions || {});
let guessedVersion;
function _guessBsVersion() {
  const spanEl = win.document.createElement('span');
  spanEl.innerText = 'testing bs version';
  spanEl.classList.add('d-none');
  spanEl.classList.add('pl-1');
  win.document.head.appendChild(spanEl);
  const checkPadding = win.getComputedStyle(spanEl).paddingLeft;
  if (checkPadding && parseFloat(checkPadding)) {
    win.document.head.removeChild(spanEl);
    return 'bs4';
  }
  win.document.head.removeChild(spanEl);
  return 'bs5';
}
function setTheme(theme) {
  guessedVersion = theme;
}
function isBs4() {
  if (guessedVersion) return guessedVersion === 'bs4';
  guessedVersion = _guessBsVersion();
  return guessedVersion === 'bs4';
}
function isBs5() {
  if (guessedVersion) return guessedVersion === 'bs5';
  guessedVersion = _guessBsVersion();
  return guessedVersion === 'bs5';
}
function getBsVer() {
  return {
    isBs4: isBs4(),
    isBs5: isBs5()
  };
}
function currentBsVersion() {
  const bsVer = getBsVer();
  const resVersion = Object.keys(bsVer).find(key => bsVer[key]);
  return BsVerions[resVersion];
}
class LinkedList {
  constructor() {
    this.length = 0;
    this.asArray = [];
    // Array methods overriding END
  }
  get(position) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      return void 0;
    }
    let current = this.head;
    for (let index = 0; index < position; index++) {
      current = current?.next;
    }
    return current?.value;
  }
  add(value, position = this.length) {
    if (position < 0 || position > this.length) {
      throw new Error('Position is out of the list');
    }
    const node = {
      value,
      next: undefined,
      previous: undefined
    };
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.current = node;
    } else {
      if (position === 0 && this.head) {
        // first node
        node.next = this.head;
        this.head.previous = node;
        this.head = node;
      } else if (position === this.length && this.tail) {
        // last node
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
      } else {
        // node in middle
        const currentPreviousNode = this.getNode(position - 1);
        const currentNextNode = currentPreviousNode?.next;
        if (currentPreviousNode && currentNextNode) {
          currentPreviousNode.next = node;
          currentNextNode.previous = node;
          node.previous = currentPreviousNode;
          node.next = currentNextNode;
        }
      }
    }
    this.length++;
    this.createInternalArrayRepresentation();
  }
  remove(position = 0) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      throw new Error('Position is out of the list');
    }
    if (position === 0 && this.head) {
      // first node
      this.head = this.head.next;
      if (this.head) {
        // there is no second node
        this.head.previous = undefined;
      } else {
        // there is no second node
        this.tail = undefined;
      }
    } else if (position === this.length - 1 && this.tail?.previous) {
      // last node
      this.tail = this.tail.previous;
      this.tail.next = undefined;
    } else {
      // middle node
      const removedNode = this.getNode(position);
      if (removedNode?.next && removedNode.previous) {
        removedNode.next.previous = removedNode.previous;
        removedNode.previous.next = removedNode.next;
      }
    }
    this.length--;
    this.createInternalArrayRepresentation();
  }
  set(position, value) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      throw new Error('Position is out of the list');
    }
    const node = this.getNode(position);
    if (node) {
      node.value = value;
      this.createInternalArrayRepresentation();
    }
  }
  toArray() {
    return this.asArray;
  }
  findAll(fn) {
    let current = this.head;
    const result = [];
    if (!current) {
      return result;
    }
    for (let index = 0; index < this.length; index++) {
      if (!current) {
        return result;
      }
      if (fn(current.value, index)) {
        result.push({
          index,
          value: current.value
        });
      }
      current = current.next;
    }
    return result;
  }
  // Array methods overriding start
  push(...args) {
    args.forEach(arg => {
      this.add(arg);
    });
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const last = this.tail;
    this.remove(this.length - 1);
    return last?.value;
  }
  unshift(...args) {
    args.reverse();
    args.forEach(arg => {
      this.add(arg, 0);
    });
    return this.length;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const lastItem = this.head?.value;
    this.remove();
    return lastItem;
  }
  forEach(fn) {
    let current = this.head;
    for (let index = 0; index < this.length; index++) {
      if (!current) {
        return;
      }
      fn(current.value, index);
      current = current.next;
    }
  }
  indexOf(value) {
    let current = this.head;
    let position = -1;
    for (let index = 0; index < this.length; index++) {
      if (!current) {
        return position;
      }
      if (current.value === value) {
        position = index;
        break;
      }
      current = current.next;
    }
    return position;
  }
  some(fn) {
    let current = this.head;
    let result = false;
    while (current && !result) {
      if (fn(current.value)) {
        result = true;
        break;
      }
      current = current.next;
    }
    return result;
  }
  every(fn) {
    let current = this.head;
    let result = true;
    while (current && result) {
      if (!fn(current.value)) {
        result = false;
      }
      current = current.next;
    }
    return result;
  }
  toString() {
    return '[Linked List]';
  }
  find(fn) {
    let current = this.head;
    for (let index = 0; index < this.length; index++) {
      if (!current) {
        return;
      }
      if (fn(current.value, index)) {
        return current.value;
      }
      current = current.next;
    }
  }
  findIndex(fn) {
    let current = this.head;
    for (let index = 0; index < this.length; index++) {
      if (!current) {
        return -1;
      }
      if (fn(current.value, index)) {
        return index;
      }
      current = current.next;
    }
    return -1;
  }
  getNode(position) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      throw new Error('Position is out of the list');
    }
    let current = this.head;
    for (let index = 0; index < position; index++) {
      current = current?.next;
    }
    return current;
  }
  createInternalArrayRepresentation() {
    const outArray = [];
    let current = this.head;
    while (current) {
      outArray.push(current.value);
      current = current.next;
    }
    this.asArray = outArray;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function OnChange() {
  const sufix = 'Change';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function OnChangeHandler(target, propertyKey) {
    const _key = ` __${propertyKey}Value`;
    Object.defineProperty(target, propertyKey, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      get() {
        return this[_key];
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(value) {
        const prevValue = this[_key];
        this[_key] = value;
        if (prevValue !== value && this[propertyKey + sufix]) {
          this[propertyKey + sufix].emit(value);
        }
      }
    });
  };
}
class Utils {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static reflow(element) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (bs => bs)(element.offsetHeight);
  }
  // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    let view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = win;
    }
    return view.getComputedStyle(elem);
  }
  static stackOverflowConfig() {
    const bsVer = currentBsVersion();
    return {
      crossorigin: "anonymous",
      integrity: bsVer === 'bs5' ? 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65' : 'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2',
      cdnLink: bsVer === 'bs5' ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' : 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
    };
  }
}
const _messagesHash = {};
const _hideMsg = typeof console === 'undefined' || !('warn' in console);
function warnOnce(msg) {
  if (!(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() || _hideMsg || msg in _messagesHash) {
    return;
  }
  _messagesHash[msg] = true;
  console.warn(msg);
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ },

/***/ 6382
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/property-growth-calculator/property-growth-calculator.component.ts ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_INVESTMENT: () => (/* binding */ DEFAULT_INVESTMENT),
/* harmony export */   DEFAULT_MONTHLY: () => (/* binding */ DEFAULT_MONTHLY),
/* harmony export */   DEFAULT_YEARS: () => (/* binding */ DEFAULT_YEARS),
/* harmony export */   MAX_INVESTMENT: () => (/* binding */ MAX_INVESTMENT),
/* harmony export */   MAX_MONTHLY: () => (/* binding */ MAX_MONTHLY),
/* harmony export */   MAX_RATE: () => (/* binding */ MAX_RATE),
/* harmony export */   MAX_YEARS: () => (/* binding */ MAX_YEARS),
/* harmony export */   MIN_INVESTMENT: () => (/* binding */ MIN_INVESTMENT),
/* harmony export */   MIN_MONTHLY: () => (/* binding */ MIN_MONTHLY),
/* harmony export */   MIN_RATE: () => (/* binding */ MIN_RATE),
/* harmony export */   MIN_YEARS: () => (/* binding */ MIN_YEARS),
/* harmony export */   PropertyGrowthCalculatorComponent: () => (/* binding */ PropertyGrowthCalculatorComponent),
/* harmony export */   REGIONAL_ANNUAL_APPRECIATION_PCT: () => (/* binding */ REGIONAL_ANNUAL_APPRECIATION_PCT)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/indian-price.pipe */ 5551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);






function PropertyGrowthCalculatorComponent__svg_g_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "g", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "line");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "text", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const gy_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("x1", ctx_r1.pad.l)("x2", ctx_r1.innerW + ctx_r1.pad.l)("y1", gy_r1.y)("y2", gy_r1.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("x", ctx_r1.pad.l - 8)("y", gy_r1.y + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](gy_r1.label);
  }
}
function PropertyGrowthCalculatorComponent__svg_g_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "g", 44)(1, "text", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const gx_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("x", gx_r3.x)("y", ctx_r1.pad.t + ctx_r1.innerH + 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Y", gx_r3.year);
  }
}
function PropertyGrowthCalculatorComponent__svg_circle_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "circle", 46);
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("cx", p_r4.rx)("cy", p_r4.ry);
  }
}
function PropertyGrowthCalculatorComponent__svg_circle_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "circle", 47);
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("cx", p_r5.ux)("cy", p_r5.uy);
  }
}
/**
 * Indicative real-estate growth assumptions (not investment advice).
 *
 * REGIONAL_ANNUAL_APPRECIATION_PCT (8.5): baseline CAGR for urban/metro
 * residential property in India over recent multi-year periods — used for the
 * "Regional market" chart line.
 *
 * User line compounds the same initial investment plus optional monthly
 * contributions at the user-selected expected appreciation rate.
 */
const REGIONAL_ANNUAL_APPRECIATION_PCT = 8.5;
const DEFAULT_INVESTMENT = 25_00_000;
const DEFAULT_MONTHLY = 25_000;
const DEFAULT_YEARS = 10;
const MIN_INVESTMENT = 1_00_000;
const MAX_INVESTMENT = 5_00_00_000;
const MIN_MONTHLY = 0;
const MAX_MONTHLY = 5_00_000;
const MIN_YEARS = 1;
const MAX_YEARS = 20;
const MIN_RATE = 3;
const MAX_RATE = 18;
let PropertyGrowthCalculatorComponent = /*#__PURE__*/(() => {
  class PropertyGrowthCalculatorComponent {
    constructor() {
      this.regionalRatePct = REGIONAL_ANNUAL_APPRECIATION_PCT;
      this.minInvestment = MIN_INVESTMENT;
      this.maxInvestment = MAX_INVESTMENT;
      this.minMonthly = MIN_MONTHLY;
      this.maxMonthly = MAX_MONTHLY;
      this.minYears = MIN_YEARS;
      this.maxYears = MAX_YEARS;
      this.minRate = MIN_RATE;
      this.maxRate = MAX_RATE;
      this.pad = {
        l: 56,
        r: 16,
        t: 16,
        b: 36
      };
      this.innerW = 640 - 56 - 16;
      this.innerH = 360 - 16 - 36;
      this.investmentAmount = DEFAULT_INVESTMENT;
      this.monthlyContribution = DEFAULT_MONTHLY;
      this.years = DEFAULT_YEARS;
      this.expectedRatePct = REGIONAL_ANNUAL_APPRECIATION_PCT;
      this.regionalFinal = 0;
      this.userFinal = 0;
      this.regionalPolyline = '';
      this.userPolyline = '';
      this.yGrid = [];
      this.xLabels = [];
      this.chartDots = [];
      this.chartAriaLabel = '';
      this.recompute();
    }
    setInvestment(v) {
      this.investmentAmount = this.clamp(Number(v), this.minInvestment, this.maxInvestment);
      this.recompute();
    }
    setMonthly(v) {
      this.monthlyContribution = this.clamp(Number(v), this.minMonthly, this.maxMonthly);
      this.recompute();
    }
    setYears(v) {
      this.years = Math.round(this.clamp(Number(v), this.minYears, this.maxYears));
      this.recompute();
    }
    setRate(v) {
      const n = Number(v);
      if (!Number.isFinite(n)) return;
      this.expectedRatePct = Math.round(this.clamp(n, this.minRate, this.maxRate) * 10) / 10;
      this.recompute();
    }
    recompute() {
      const points = this.buildPoints();
      const maxValue = Math.max(1, ...points.map(p => Math.max(p.regional, p.user))) * 1.08;
      this.regionalFinal = points[points.length - 1]?.regional ?? 0;
      this.userFinal = points[points.length - 1]?.user ?? 0;
      this.regionalPolyline = points.map(p => `${this.xForYear(p.year)},${this.yForValue(p.regional, maxValue)}`).join(' ');
      this.userPolyline = points.map(p => `${this.xForYear(p.year)},${this.yForValue(p.user, maxValue)}`).join(' ');
      const steps = 4;
      this.yGrid = [];
      for (let i = 0; i <= steps; i++) {
        const val = maxValue * i / steps;
        this.yGrid.push({
          y: this.pad.t + this.innerH - val / maxValue * this.innerH,
          label: this.shortInr(val)
        });
      }
      const xStep = Math.max(1, Math.ceil(this.years / 5));
      this.xLabels = [];
      for (let y = 0; y <= this.years; y += xStep) {
        this.xLabels.push({
          x: this.xForYear(y),
          year: y
        });
      }
      if (this.xLabels[this.xLabels.length - 1]?.year !== this.years) {
        this.xLabels.push({
          x: this.xForYear(this.years),
          year: this.years
        });
      }
      const dotStep = Math.max(1, Math.ceil(this.years / 6));
      this.chartDots = points.filter(p => p.year % dotStep === 0 || p.year === this.years).map(p => ({
        rx: this.xForYear(p.year),
        ry: this.yForValue(p.regional, maxValue),
        ux: this.xForYear(p.year),
        uy: this.yForValue(p.user, maxValue)
      }));
      this.chartAriaLabel = `Line chart comparing regional property growth at ${this.regionalRatePct}% ` + `with your projection at ${this.expectedRatePct}% over ${this.years} years.`;
    }
    buildPoints() {
      const out = [];
      const rRegion = this.regionalRatePct / 100;
      const rUser = this.expectedRatePct / 100;
      for (let y = 0; y <= this.years; y++) {
        out.push({
          year: y,
          regional: this.lumpSumFuture(this.investmentAmount, rRegion, y),
          user: this.portfolioFuture(this.investmentAmount, this.monthlyContribution, rUser, y)
        });
      }
      return out;
    }
    /** Lump-sum compound: P * (1 + r)^t */
    lumpSumFuture(principal, annualRate, years) {
      return principal * Math.pow(1 + annualRate, years);
    }
    /**
     * Lump sum + monthly SIP-style contributions compounded monthly.
     * FV = P*(1+r_m)^(12t) + M * [((1+r_m)^(12t) - 1) / r_m]
     */
    portfolioFuture(principal, monthly, annualRate, years) {
      if (years <= 0) return principal;
      const months = years * 12;
      const rm = annualRate / 12;
      const lump = principal * Math.pow(1 + rm, months);
      if (monthly <= 0 || rm === 0) {
        return lump + monthly * months;
      }
      const sip = monthly * ((Math.pow(1 + rm, months) - 1) / rm);
      return lump + sip;
    }
    xForYear(year) {
      const t = this.years === 0 ? 0 : year / this.years;
      return this.pad.l + t * this.innerW;
    }
    yForValue(value, maxValue) {
      return this.pad.t + this.innerH - value / maxValue * this.innerH;
    }
    shortInr(n) {
      if (n >= 1_00_00_000) return `${(n / 1_00_00_000).toFixed(1)}Cr`;
      if (n >= 1_00_000) return `${(n / 1_00_000).toFixed(0)}L`;
      if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
      return `${Math.round(n)}`;
    }
    clamp(n, min, max) {
      if (!Number.isFinite(n)) return min;
      return Math.min(max, Math.max(min, n));
    }
    static {
      this.ɵfac = function PropertyGrowthCalculatorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PropertyGrowthCalculatorComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: PropertyGrowthCalculatorComponent,
        selectors: [["app-property-growth-calculator"]],
        decls: 99,
        vars: 58,
        consts: [["aria-labelledby", "growth-calc-title", 1, "growth-calc"], [1, "container"], [1, "growth-calc-header"], ["id", "growth-calc-title", 1, "growth-calc-title"], [1, "growth-calc-sub"], [1, "growth-calc-layout"], [1, "growth-calc-controls"], [1, "control-group"], [1, "control-label-row"], ["for", "inv-amount"], [1, "control-input-wrap"], [1, "prefix"], ["id", "inv-amount", "type", "number", "step", "50000", 3, "ngModelChange", "ngModel", "min", "max"], ["type", "range", "step", "50000", "aria-label", "Initial investment slider", 1, "slider", 3, "ngModelChange", "ngModel", "min", "max"], [1, "range-hints"], ["for", "monthly-amt"], ["id", "monthly-amt", "type", "number", "step", "1000", 3, "ngModelChange", "ngModel", "min", "max"], ["type", "range", "step", "1000", "aria-label", "Monthly contribution slider", 1, "slider", 3, "ngModelChange", "ngModel", "min", "max"], ["for", "tenure-yrs"], ["id", "tenure-yrs", "type", "number", "step", "1", 3, "ngModelChange", "ngModel", "min", "max"], [1, "suffix"], ["type", "range", "step", "1", "aria-label", "Investment horizon slider", 1, "slider", 3, "ngModelChange", "ngModel", "min", "max"], ["for", "user-rate"], ["id", "user-rate", "type", "number", "step", "0.1", 3, "ngModelChange", "ngModel", "min", "max"], ["type", "range", "step", "0.1", "aria-label", "Expected appreciation rate slider", 1, "slider", 3, "ngModelChange", "ngModel", "min", "max"], [1, "summary-row"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value", "regional"], [1, "summary-value", "user"], [1, "assumption-note"], ["role", "img", 1, "growth-calc-chart"], ["viewBox", "0 0 640 360", "preserveAspectRatio", "xMidYMid meet", "aria-hidden", "true", 1, "chart-svg"], ["class", "grid-line", 4, "ngFor", "ngForOf"], ["class", "x-label", 4, "ngFor", "ngForOf"], ["fill", "none", 1, "line-regional"], ["fill", "none", 1, "line-user"], ["class", "dot-regional", "r", "3.5", 4, "ngFor", "ngForOf"], ["class", "dot-user", "r", "3.5", 4, "ngFor", "ngForOf"], [1, "chart-legend"], [1, "legend-item", "regional"], [1, "legend-item", "user"], [1, "grid-line"], ["text-anchor", "end"], [1, "x-label"], ["text-anchor", "middle"], ["r", "3.5", 1, "dot-regional"], ["r", "3.5", 1, "dot-user"]],
        template: function PropertyGrowthCalculatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Property growth projector");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Compare an indicative regional real-estate appreciation path with your own investment projection over the same horizon. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Initial investment");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u20B9");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PropertyGrowthCalculatorComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.setInvestment($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PropertyGrowthCalculatorComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.setInvestment($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14)(19, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "indianPrice");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "indianPrice");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 7)(26, "div", 8)(27, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Monthly add-on");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 10)(30, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\u20B9");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PropertyGrowthCalculatorComponent_Template_input_ngModelChange_32_listener($event) {
              return ctx.setMonthly($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PropertyGrowthCalculatorComponent_Template_input_ngModelChange_33_listener($event) {
              return ctx.setMonthly($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 14)(35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "indianPrice");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "indianPrice");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 7)(42, "div", 8)(43, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Horizon (years)");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 10)(46, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PropertyGrowthCalculatorComponent_Template_input_ngModelChange_46_listener($event) {
              return ctx.setYears($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "yr");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PropertyGrowthCalculatorComponent_Template_input_ngModelChange_49_listener($event) {
              return ctx.setYears($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 14)(51, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 7)(56, "div", 8)(57, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Your expected appreciation");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 10)(60, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PropertyGrowthCalculatorComponent_Template_input_ngModelChange_60_listener($event) {
              return ctx.setRate($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PropertyGrowthCalculatorComponent_Template_input_ngModelChange_63_listener($event) {
              return ctx.setRate($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 14)(65, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 25)(70, "div", 26)(71, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "strong", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](75, "indianPrice");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 26)(77, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "strong", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](81, "indianPrice");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "p", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "svg", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, PropertyGrowthCalculatorComponent__svg_g_86_Template, 4, 7, "g", 33)(87, PropertyGrowthCalculatorComponent__svg_g_87_Template, 3, 3, "g", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "polyline", 35)(89, "polyline", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, PropertyGrowthCalculatorComponent__svg_circle_90_Template, 1, 2, "circle", 37)(91, PropertyGrowthCalculatorComponent__svg_circle_91_Template, 1, 2, "circle", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 39)(93, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "span", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.investmentAmount)("min", ctx.minInvestment)("max", ctx.maxInvestment);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.investmentAmount)("min", ctx.minInvestment)("max", ctx.maxInvestment);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 46, ctx.minInvestment));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 48, ctx.maxInvestment));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.monthlyContribution)("min", ctx.minMonthly)("max", ctx.maxMonthly);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.monthlyContribution)("min", ctx.minMonthly)("max", ctx.maxMonthly);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 50, ctx.minMonthly));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 52, ctx.maxMonthly));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.years)("min", ctx.minYears)("max", ctx.maxYears);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.years)("min", ctx.minYears)("max", ctx.maxYears);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.minYears, " yr");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.maxYears, " yr");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.expectedRatePct)("min", ctx.minRate)("max", ctx.maxRate);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.expectedRatePct)("min", ctx.minRate)("max", ctx.maxRate);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.minRate, "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.maxRate, "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Regional market (", ctx.regionalRatePct, "% p.a.)");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](75, 54, ctx.regionalFinal));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Your projection (", ctx.expectedRatePct, "% p.a.)");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](81, 56, ctx.userFinal));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Regional line assumes ", ctx.regionalRatePct, "% annual appreciation (indicative urban India CAGR). Your line compounds the initial amount plus monthly add-ons at your rate. Figures are illustrative only. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.chartAriaLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.yGrid);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.xLabels);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("points", ctx.regionalPolyline);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("points", ctx.userPolyline);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.chartDots);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.chartDots);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Regional market @ ", ctx.regionalRatePct, "% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Your investment @ ", ctx.expectedRatePct, "% ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_2__.IndianPricePipe],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.growth-calc[_ngcontent-%COMP%] {\n  padding: 3.5rem 0 4rem;\n  background: radial-gradient(ellipse 80% 60% at 10% 0%, rgba(14, 165, 233, 0.08), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 100%, rgba(2, 132, 199, 0.06), transparent 50%), linear-gradient(180deg, var(--bg) 0%, var(--surface) 40%, var(--bg) 100%);\n  border-block: 1px solid var(--border-light);\n}\n\n.growth-calc-header[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 40rem;\n  margin: 0 auto 2.25rem;\n}\n\n.growth-calc-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 2.8vw, 2.125rem);\n  font-weight: 800;\n  margin: 0 0 0.5rem;\n  color: var(--text);\n  letter-spacing: -0.02em;\n}\n\n.growth-calc-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);\n  line-height: 1.55;\n}\n\n.growth-calc-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);\n  gap: 2rem;\n  align-items: start;\n  max-width: 1120px;\n  margin: 0 auto;\n}\n\n.growth-calc-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.35rem;\n}\n\n.control-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n\n.control-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.control-label-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: var(--text);\n}\n\n.control-input-wrap[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  padding: 0.2rem 0.5rem;\n  min-width: 7.5rem;\n}\n\n.control-input-wrap[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%], \n.control-input-wrap[_ngcontent-%COMP%]   .suffix[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n\n.control-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  width: 5.5rem;\n  font-family: var(--font-sans);\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: var(--text);\n  padding: 0.25rem 0;\n  outline: none;\n  -moz-appearance: textfield;\n}\n\n.control-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.control-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  appearance: none;\n  width: 100%;\n  height: 6px;\n  border-radius: 999px;\n  background: var(--bg-tertiary);\n  outline: none;\n  cursor: pointer;\n}\n\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--primary);\n  border: 2px solid var(--surface);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n}\n\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {\n  background: var(--primary-dark);\n}\n\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--primary);\n  border: 2px solid var(--surface);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n}\n\n.range-hints[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  color: var(--text-light);\n}\n\n.summary-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  margin-top: 0.25rem;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 0.35rem;\n  line-height: 1.3;\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n\n.summary-value.regional[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n\n.summary-value.user[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n}\n\n.assumption-note[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: var(--text-light);\n  line-height: 1.45;\n}\n\n.growth-calc-chart[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 1.25rem 1rem 1rem;\n  box-shadow: var(--shadow);\n}\n\n.chart-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\n.grid-line[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: var(--border);\n  stroke-width: 1;\n}\n\n.grid-line[_ngcontent-%COMP%]   text[_ngcontent-%COMP%], \n.x-label[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  fill: var(--text-muted);\n  font-size: 11px;\n  font-family: var(--font-sans);\n}\n\n.line-regional[_ngcontent-%COMP%] {\n  stroke: var(--text-secondary);\n  stroke-width: 2.25;\n  stroke-dasharray: 6 4;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.line-user[_ngcontent-%COMP%] {\n  stroke: var(--primary);\n  stroke-width: 2.75;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.dot-regional[_ngcontent-%COMP%] {\n  fill: var(--text-secondary);\n}\n\n.dot-user[_ngcontent-%COMP%] {\n  fill: var(--primary);\n}\n\n.chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem 1.5rem;\n  justify-content: center;\n  margin-top: 0.75rem;\n  font-size: 0.8125rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n\n.legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.legend-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.legend-item.regional[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: var(--text-secondary);\n  background: repeating-linear-gradient(90deg, var(--text-secondary) 0 6px, transparent 6px 10px);\n  height: 3px;\n}\n\n.legend-item.user[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n\n@media (max-width: 900px) {\n  .growth-calc-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .summary-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .control-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 4.75rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Byb3BlcnR5LWdyb3d0aC1jYWxjdWxhdG9yL3Byb3BlcnR5LWdyb3d0aC1jYWxjdWxhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFRLGNBQUE7QUFDWjs7QUFDSTtFQUNFLHNCQUFBO0VBQ0Esb1FBQ0U7RUFHRiwyQ0FBQTtBQUROOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBRE47O0FBSUk7RUFDRSxnQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFETjs7QUFJSTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7QUFETjs7QUFJSTtFQUNFLGFBQUE7RUFDQSx1REFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUROOztBQUlJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUROOztBQUlJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUROOztBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUROOztBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBRE47O0FBSUk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFETjs7QUFJSTs7RUFFRSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFETjs7QUFJSTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FBRE47O0FBSUk7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBRE47O0FBSUk7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRE47O0FBSUk7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBQUROOztBQUlJO0VBQ0UsK0JBQUE7QUFETjs7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBRE47O0FBSUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBRE47O0FBSUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFETjs7QUFJSTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBRE47O0FBSUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFETjs7QUFJSTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUROOztBQUlJO0VBQTBCLDRCQUFBO0FBQTlCOztBQUNJO0VBQXNCLDBCQUFBO0FBRzFCOztBQURJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQUlOOztBQURJO0VBQ0UsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUlOOztBQURJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSU47O0FBREk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFJTjs7QUFESTs7RUFFRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUlOOztBQURJO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUlOOztBQURJO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFJTjs7QUFESTtFQUFnQiwyQkFBQTtBQUtwQjs7QUFKSTtFQUFZLG9CQUFBO0FBUWhCOztBQU5JO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFTTjs7QUFOSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBU047O0FBTkk7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFTTjs7QUFOSTtFQUNFLGlDQUFBO0VBQ0EsK0ZBQUE7RUFLQSxXQUFBO0FBS047O0FBRkk7RUFDRSwwQkFBQTtBQUtOOztBQUZJO0VBQ0U7SUFDRSwwQkFBQTtFQUtOO0FBQ0Y7QUFGSTtFQUNFO0lBQ0UsMEJBQUE7RUFJTjtFQUZJO0lBQ0UsY0FBQTtFQUlOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG5cbiAgICAuZ3Jvd3RoLWNhbGMge1xuICAgICAgcGFkZGluZzogMy41cmVtIDAgNHJlbTtcbiAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIDgwJSA2MCUgYXQgMTAlIDAlLCByZ2JhKDE0LCAxNjUsIDIzMywgMC4wOCksIHRyYW5zcGFyZW50IDU1JSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIDcwJSA1MCUgYXQgOTAlIDEwMCUsIHJnYmEoMiwgMTMyLCAxOTksIDAuMDYpLCB0cmFuc3BhcmVudCA1MCUpLFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZykgMCUsIHZhcigtLXN1cmZhY2UpIDQwJSwgdmFyKC0tYmcpIDEwMCUpO1xuICAgICAgYm9yZGVyLWJsb2NrOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICB9XG5cbiAgICAuZ3Jvd3RoLWNhbGMtaGVhZGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1heC13aWR0aDogNDByZW07XG4gICAgICBtYXJnaW46IDAgYXV0byAyLjI1cmVtO1xuICAgIH1cblxuICAgIC5ncm93dGgtY2FsYy10aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1kaXNwbGF5KTtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAyLjh2dywgMi4xMjVyZW0pO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIG1hcmdpbjogMCAwIDAuNXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgIH1cblxuICAgIC5ncm93dGgtY2FsYy1zdWIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjkzNzVyZW0sIDEuNXZ3LCAxLjA2MjVyZW0pO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTU7XG4gICAgfVxuXG4gICAgLmdyb3d0aC1jYWxjLWxheW91dCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMS4xNWZyKTtcbiAgICAgIGdhcDogMnJlbTtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgIG1heC13aWR0aDogMTEyMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLmdyb3d0aC1jYWxjLWNvbnRyb2xzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxLjM1cmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAwLjQ1cmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sLWxhYmVsLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGdhcDogMC43NXJlbTtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAuY29udHJvbC1sYWJlbC1yb3cgbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIH1cblxuICAgIC5jb250cm9sLWlucHV0LXdyYXAge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAwLjI1cmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gICAgICBtaW4td2lkdGg6IDcuNXJlbTtcbiAgICB9XG5cbiAgICAuY29udHJvbC1pbnB1dC13cmFwIC5wcmVmaXgsXG4gICAgLmNvbnRyb2wtaW5wdXQtd3JhcCAuc3VmZml4IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuY29udHJvbC1pbnB1dC13cmFwIGlucHV0IHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgd2lkdGg6IDUuNXJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgIH1cblxuICAgIC5jb250cm9sLWlucHV0LXdyYXAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgLmNvbnRyb2wtaW5wdXQtd3JhcCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLnNsaWRlciB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1cmZhY2UpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XG4gICAgfVxuXG4gICAgLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VyZmFjZSk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5yYW5nZS1oaW50cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgIC5zdW1tYXJ5LXJvdyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICB9XG5cbiAgICAuc3VtbWFyeS1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDAuODVyZW0gMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gICAgfVxuXG4gICAgLnN1bW1hcnktbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjM1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG5cbiAgICAuc3VtbWFyeS12YWx1ZSB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1kaXNwbGF5KTtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cblxuICAgIC5zdW1tYXJ5LXZhbHVlLnJlZ2lvbmFsIHsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTsgfVxuICAgIC5zdW1tYXJ5LXZhbHVlLnVzZXIgeyBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTsgfVxuXG4gICAgLmFzc3VtcHRpb24tbm90ZSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogMS40NTtcbiAgICB9XG5cbiAgICAuZ3Jvd3RoLWNhbGMtY2hhcnQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgICAgIHBhZGRpbmc6IDEuMjVyZW0gMXJlbSAxcmVtO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICB9XG5cbiAgICAuY2hhcnQtc3ZnIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmdyaWQtbGluZSBsaW5lIHtcbiAgICAgIHN0cm9rZTogdmFyKC0tYm9yZGVyKTtcbiAgICAgIHN0cm9rZS13aWR0aDogMTtcbiAgICB9XG5cbiAgICAuZ3JpZC1saW5lIHRleHQsXG4gICAgLngtbGFiZWwgdGV4dCB7XG4gICAgICBmaWxsOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgIH1cblxuICAgIC5saW5lLXJlZ2lvbmFsIHtcbiAgICAgIHN0cm9rZTogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAyLjI1O1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNiA0O1xuICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICB9XG5cbiAgICAubGluZS11c2VyIHtcbiAgICAgIHN0cm9rZTogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBzdHJva2Utd2lkdGg6IDIuNzU7XG4gICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgIH1cblxuICAgIC5kb3QtcmVnaW9uYWwgeyBmaWxsOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IH1cbiAgICAuZG90LXVzZXIgeyBmaWxsOiB2YXIoLS1wcmltYXJ5KTsgfVxuXG4gICAgLmNoYXJ0LWxlZ2VuZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiAxcmVtIDEuNXJlbTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmxlZ2VuZC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC40cmVtO1xuICAgIH1cblxuICAgIC5sZWdlbmQtaXRlbSBpIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuXG4gICAgLmxlZ2VuZC1pdGVtLnJlZ2lvbmFsIGkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgOTBkZWcsXG4gICAgICAgIHZhcigtLXRleHQtc2Vjb25kYXJ5KSAwIDZweCxcbiAgICAgICAgdHJhbnNwYXJlbnQgNnB4IDEwcHhcbiAgICAgICk7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICB9XG5cbiAgICAubGVnZW5kLWl0ZW0udXNlciBpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgLmdyb3d0aC1jYWxjLWxheW91dCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgLnN1bW1hcnktcm93IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICB9XG4gICAgICAuY29udHJvbC1pbnB1dC13cmFwIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDQuNzVyZW07XG4gICAgICB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return PropertyGrowthCalculatorComponent;
})();

/***/ }

}]);
//# sourceMappingURL=722.js.map