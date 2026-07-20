"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[354],{

/***/ 4198
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distinctUntilChanged: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/identity */ 1440);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__.identity) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}

/***/ },

/***/ 9354
/*!********************************************************!*\
  !*** ./src/app/features/blog/blog-detail.component.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetailComponent: () => (/* binding */ BlogDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4198);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _core_models_blog_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/models/blog.model */ 4256);
/* harmony import */ var _core_services_blog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/services/blog.service */ 9244);
/* harmony import */ var _core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/utils/image-url.util */ 8681);
/* harmony import */ var _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/skeleton-loader/skeleton-loader.component */ 4540);
/* harmony import */ var _core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/utils/http-error-message.util */ 3947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 6124);














function BlogDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "app-skeleton-loader", 7)(2, "app-skeleton-loader", 8)(3, "app-skeleton-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function BlogDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, "Article not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8, "Browse all articles");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r0.loadError);
  }
}
function BlogDetailComponent_article_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r0.heroImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"])("alt", ctx_r0.post.title);
  }
}
function BlogDetailComponent_article_6_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r0.post.category);
  }
}
function BlogDetailComponent_article_6_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("#", t_r2);
  }
}
function BlogDetailComponent_article_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, BlogDetailComponent_article_6_div_3_span_1_Template, 2, 1, "span", 23)(2, BlogDetailComponent_article_6_div_3_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r0.post.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r0.tagList)("ngForTrackBy", ctx_r0.trackByStr);
  }
}
function BlogDetailComponent_article_6_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 30);
  }
  if (rf & 2) {
    const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("innerHTML", b_r3.html, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeHtml"]);
  }
}
function BlogDetailComponent_article_6_ng_container_10_figure_2_figcaption_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](b_r3.caption);
  }
}
function BlogDetailComponent_article_6_ng_container_10_figure_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "figure", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, BlogDetailComponent_article_6_ng_container_10_figure_2_figcaption_2_Template, 2, 1, "figcaption", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", b_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"])("alt", b_r3.caption || ctx_r0.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", b_r3.caption);
  }
}
function BlogDetailComponent_article_6_ng_container_10_figure_3_figcaption_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](b_r3.caption);
  }
}
function BlogDetailComponent_article_6_ng_container_10_figure_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "figure", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "iframe", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, BlogDetailComponent_article_6_ng_container_10_figure_3_figcaption_2_Template, 2, 1, "figcaption", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", b_r3.embedUrl, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", b_r3.caption);
  }
}
function BlogDetailComponent_article_6_ng_container_10_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "p", 35)(1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("href", b_r3.linkUrl || "#", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](b_r3.content);
  }
}
function BlogDetailComponent_article_6_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, BlogDetailComponent_article_6_ng_container_10_div_1_Template, 1, 1, "div", 27)(2, BlogDetailComponent_article_6_ng_container_10_figure_2_Template, 3, 3, "figure", 28)(3, BlogDetailComponent_article_6_ng_container_10_figure_3_Template, 3, 2, "figure", 28)(4, BlogDetailComponent_article_6_ng_container_10_p_4_Template, 3, 2, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", b_r3.blockType === "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", b_r3.blockType === "IMAGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", b_r3.blockType === "VIDEO" && b_r3.embedUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", b_r3.blockType === "LINK");
  }
}
function BlogDetailComponent_article_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "article", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, BlogDetailComponent_article_6_div_1_Template, 2, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, BlogDetailComponent_article_6_div_3_Template, 3, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](10, BlogDetailComponent_article_6_ng_container_10_Template, 5, 4, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r0.post.coverImageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r0.post.category || ctx_r0.post.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r0.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("By ", ctx_r0.post.authorName || "Editor", " \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](8, 7, ctx_r0.postDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r0.renderBlocks)("ngForTrackBy", ctx_r0.trackByBlockId);
  }
}
let BlogDetailComponent = /*#__PURE__*/(() => {
  class BlogDetailComponent {
    constructor() {
      this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
      this.blog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_blog_service__WEBPACK_IMPORTED_MODULE_16__.BlogService);
      this.sanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer);
      this.title = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title);
      this.meta = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Meta);
      this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
      this.post = null;
      this.renderBlocks = [];
      this.heroImageUrl = '';
      this.tagList = [];
      this.postDate = '';
      this.loading = true;
      this.loadError = '';
      this.trackByBlockId = (_, b) => b.id ?? b.displayOrder ?? _;
      this.trackByStr = (_, v) => v;
    }
    ngOnInit() {
      this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(p => p.get('slug')?.trim() || ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(slug => !!slug), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(() => {
        this.loading = true;
        this.loadError = '';
        this.post = null;
        this.renderBlocks = [];
        this.cdr.markForCheck();
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)(slug => this.blog.getPublishedBySlug(slug).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
        this.loadError = err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse ? (0,_core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_19__.extractHttpErrorMessage)(err) : 'This article could not be loaded.';
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
      }))), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(res => {
        this.loading = false;
        if (res) {
          this.applyPost(res);
        }
        this.cdr.markForCheck();
      });
    }
    applyPost(p) {
      this.post = p;
      this.postDate = p.publishedAt || p.createdAt;
      this.tagList = p.tags ? p.tags.split(',').map(t => t.trim()).filter(Boolean) : [];
      this.heroImageUrl = p.coverImageUrl ? (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_17__.resolvePropertyImageUrl)(p.coverImageUrl) : '';
      this.renderBlocks = [...(p.blocks || [])].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)).map(b => this.toRenderBlock(b));
      this.applySeo(p);
    }
    toRenderBlock(b) {
      const block = {
        ...b
      };
      if (b.blockType === 'TEXT') {
        const raw = (b.content || '').trim();
        const html = raw.startsWith('<') ? raw : `<p>${this.escapeHtml(raw)}</p>`;
        block.html = this.sanitizer.bypassSecurityTrustHtml(html);
      } else if (b.blockType === 'IMAGE') {
        block.imageUrl = (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_17__.resolvePropertyImageUrl)(b.mediaUrl || '');
      } else if (b.blockType === 'VIDEO') {
        const embed = (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_17__.resolveVideoEmbedUrl)(b.mediaUrl || '');
        if (embed) {
          block.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
        }
      }
      return block;
    }
    escapeHtml(text) {
      return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    applySeo(p) {
      const pageTitle = p.metaTitle?.trim() || p.title;
      const description = p.metaDescription?.trim() || p.excerpt?.trim() || `Read ${p.title} on 1Guntha Blog.`;
      this.title.setTitle(`${pageTitle} | 1Guntha Blog`);
      this.meta.updateTag({
        name: 'description',
        content: description
      });
      this.meta.updateTag({
        property: 'og:title',
        content: pageTitle
      });
      this.meta.updateTag({
        property: 'og:description',
        content: description
      });
      if (p.coverImageUrl) {
        this.meta.updateTag({
          property: 'og:image',
          content: this.heroImageUrl
        });
      }
    }
    static {
      this.ɵfac = function BlogDetailComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BlogDetailComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
        type: BlogDetailComponent,
        selectors: [["app-blog-detail"]],
        decls: 7,
        vars: 3,
        consts: [[1, "blog-detail-page"], [1, "blog-wrap"], ["routerLink", "/blog", 1, "back"], ["class", "blog-surface loading", 4, "ngIf"], ["class", "blog-surface not-found", 4, "ngIf"], ["class", "blog-surface article", 4, "ngIf"], [1, "blog-surface", "loading"], ["height", "280px", 2, "margin-bottom", "1rem", "border-radius", "var(--radius-lg)"], ["height", "32px", "width", "70%"], ["height", "14px", "width", "40%", 2, "margin-top", "0.75rem"], [1, "blog-surface", "not-found"], [1, "nf-icon"], ["routerLink", "/blog", 1, "btn", "btn-primary"], [1, "blog-surface", "article"], ["class", "article-hero", 4, "ngIf"], [1, "article-inner"], ["class", "badges", 4, "ngIf"], [1, "meta"], [1, "content"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "article-hero"], [1, "hero-image", 3, "src", "alt"], [1, "badges"], ["class", "badge badge-category", 4, "ngIf"], ["class", "badge badge-tag", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "badge", "badge-category"], [1, "badge", "badge-tag"], ["class", "text-block blog-rich-text", 3, "innerHTML", 4, "ngIf"], ["class", "media-block", 4, "ngIf"], ["class", "link-block", 4, "ngIf"], [1, "text-block", "blog-rich-text", 3, "innerHTML"], [1, "media-block"], ["loading", "lazy", 3, "src", "alt"], [4, "ngIf"], ["title", "Video", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "allowfullscreen", "", "referrerpolicy", "strict-origin-when-cross-origin", "loading", "lazy", 3, "src"], [1, "link-block"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]],
        template: function BlogDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3, "\u2190 Back to Blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, BlogDetailComponent_div_4_Template, 4, 0, "div", 3)(5, BlogDetailComponent_div_5_Template, 9, 1, "div", 4)(6, BlogDetailComponent_article_6_Template, 11, 10, "article", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.loadError);
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.post);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_18__.SkeletonLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.blog-detail-page[_ngcontent-%COMP%] {\n  padding: 2rem 0 4rem;\n  background: var(--bg);\n  min-height: calc(100vh - 80px);\n}\n\n.blog-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  box-sizing: border-box;\n}\n\n.blog-surface[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n}\n\n.back[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 1.25rem;\n  font-weight: 600;\n}\n\n.back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.loading[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.not-found[_ngcontent-%COMP%] {\n  padding: 2.5rem 2rem;\n  text-align: center;\n}\n\n.nf-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.not-found[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n}\n\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0 0 1.25rem;\n}\n\n.article[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 0;\n}\n\n.article-hero[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow: hidden;\n  background: var(--bg-secondary);\n}\n\n.hero-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  display: block;\n}\n\n.article-inner[_ngcontent-%COMP%] {\n  padding: 2rem 2.25rem 2.5rem;\n}\n\n.badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-bottom: 0.75rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.25rem 0.65rem;\n  border-radius: 999px;\n}\n\n.badge-category[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.12);\n  color: var(--primary);\n}\n\n.badge-tag[_ngcontent-%COMP%] {\n  background: var(--bg);\n  color: var(--text-muted);\n  border: 1px solid var(--border-light);\n}\n\n.article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  margin: 0 0 0.5rem;\n  font-size: clamp(1.75rem, 3vw, 2.35rem);\n  line-height: 1.2;\n}\n\n.meta[_ngcontent-%COMP%] {\n  margin: 0 0 1.75rem;\n  color: var(--text-muted);\n  font-size: 0.9375rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n\n.text-block[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  line-height: 1.8;\n}\n\n.media-block[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.media-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .media-block[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .media-block[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  border-radius: var(--radius);\n  aspect-ratio: 16/9;\n  background: #0f172a;\n  object-fit: contain;\n}\n\n.media-block[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  text-align: center;\n}\n\n.link-block[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem 1.15rem;\n  background: var(--info-bg);\n  border-radius: var(--radius);\n}\n\n.link-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n  text-decoration: none;\n  word-break: break-word;\n}\n\n@media (max-width: 640px) {\n  .article-inner[_ngcontent-%COMP%] {\n    padding: 1.25rem 1rem 2rem;\n  }\n  .hero-image[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy9ibG9nLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBUSxjQUFBO0FBQ1o7O0FBQUk7RUFBb0Isb0JBQUE7RUFBc0IscUJBQUE7RUFBdUIsOEJBQUE7QUFNckU7O0FBTEk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQVFOOztBQU5JO0VBQ0UsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUFTTjs7QUFQSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVVOOztBQVJJO0VBQWMsMEJBQUE7QUFZbEI7O0FBWEk7RUFBVyxlQUFBO0FBZWY7O0FBZEk7RUFBYSxvQkFBQTtFQUFzQixrQkFBQTtBQW1CdkM7O0FBbEJJO0VBQVcsaUJBQUE7RUFBbUIscUJBQUE7QUF1QmxDOztBQXRCSTtFQUFnQixrQkFBQTtBQTBCcEI7O0FBekJJO0VBQWUsd0JBQUE7RUFBMEIsbUJBQUE7QUE4QjdDOztBQTdCSTtFQUFXLGdCQUFBO0VBQWtCLFVBQUE7QUFrQ2pDOztBQWpDSTtFQUFnQixpQkFBQTtFQUFtQixnQkFBQTtFQUFrQiwrQkFBQTtBQXVDekQ7O0FBdENJO0VBQWMsV0FBQTtFQUFhLGFBQUE7RUFBZSxpQkFBQTtFQUFtQixjQUFBO0FBNkNqRTs7QUE1Q0k7RUFBaUIsNEJBQUE7QUFnRHJCOztBQS9DSTtFQUFVLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7RUFBYSxzQkFBQTtBQXNEM0Q7O0FBckRJO0VBQVMsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0Isd0JBQUE7RUFBMEIsb0JBQUE7QUE0RDdFOztBQTNESTtFQUFrQixvQ0FBQTtFQUFzQyxxQkFBQTtBQWdFNUQ7O0FBL0RJO0VBQWEscUJBQUE7RUFBdUIsd0JBQUE7RUFBMEIscUNBQUE7QUFxRWxFOztBQXBFSTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FBdUVOOztBQXJFSTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7QUF3RU47O0FBdEVJO0VBQVcsYUFBQTtFQUFlLFlBQUE7QUEyRTlCOztBQTFFSTtFQUFjLG9CQUFBO0VBQXNCLGdCQUFBO0FBK0V4Qzs7QUE5RUk7RUFBZSxTQUFBO0FBa0ZuQjs7QUFqRkk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBb0ZOOztBQWxGSTtFQUEwQixrQkFBQTtFQUFvQix3QkFBQTtFQUEwQixtQkFBQTtFQUFxQixrQkFBQTtBQXlGakc7O0FBeEZJO0VBQWMsU0FBQTtFQUFXLHFCQUFBO0VBQXVCLDBCQUFBO0VBQTRCLDRCQUFBO0FBK0ZoRjs7QUE5Rkk7RUFBZ0IscUJBQUE7RUFBdUIsZ0JBQUE7RUFBa0IscUJBQUE7RUFBdUIsc0JBQUE7QUFxR3BGOztBQXBHSTtFQUNFO0lBQWlCLDBCQUFBO0VBd0dyQjtFQXZHSTtJQUFjLGFBQUE7RUEwR2xCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLmJsb2ctZGV0YWlsLXBhZ2UgeyBwYWRkaW5nOiAycmVtIDAgNHJlbTsgYmFja2dyb3VuZDogdmFyKC0tYmcpOyBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7IH1cbiAgICAuYmxvZy13cmFwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiA4NjBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICAuYmxvZy1zdXJmYWNlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgIH1cbiAgICAuYmFjayB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLmJhY2s6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuICAgIC5sb2FkaW5nIHsgcGFkZGluZzogMS41cmVtOyB9XG4gICAgLm5vdC1mb3VuZCB7IHBhZGRpbmc6IDIuNXJlbSAycmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAubmYtaWNvbiB7IGZvbnQtc2l6ZTogMi41cmVtOyBtYXJnaW4tYm90dG9tOiAwLjVyZW07IH1cbiAgICAubm90LWZvdW5kIGgyIHsgbWFyZ2luOiAwIDAgMC41cmVtOyB9XG4gICAgLm5vdC1mb3VuZCBwIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW46IDAgMCAxLjI1cmVtOyB9XG4gICAgLmFydGljbGUgeyBvdmVyZmxvdzogaGlkZGVuOyBwYWRkaW5nOiAwOyB9XG4gICAgLmFydGljbGUtaGVybyB7IG1heC1oZWlnaHQ6IDQwMHB4OyBvdmVyZmxvdzogaGlkZGVuOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpOyB9XG4gICAgLmhlcm8taW1hZ2UgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MDBweDsgb2JqZWN0LWZpdDogY292ZXI7IGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLmFydGljbGUtaW5uZXIgeyBwYWRkaW5nOiAycmVtIDIuMjVyZW0gMi41cmVtOyB9XG4gICAgLmJhZGdlcyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiAwLjRyZW07IG1hcmdpbi1ib3R0b206IDAuNzVyZW07IH1cbiAgICAuYmFkZ2UgeyBmb250LXNpemU6IDAuNzJyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDAuMjVyZW0gMC42NXJlbTsgYm9yZGVyLXJhZGl1czogOTk5cHg7IH1cbiAgICAuYmFkZ2UtY2F0ZWdvcnkgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAxNjUsIDIzMywgMC4xMik7IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxuICAgIC5iYWRnZS10YWcgeyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTsgfVxuICAgIC5hcnRpY2xlIGgxIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWRpc3BsYXkpO1xuICAgICAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjc1cmVtLCAzdncsIDIuMzVyZW0pO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG4gICAgLm1ldGEge1xuICAgICAgbWFyZ2luOiAwIDAgMS43NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICB9XG4gICAgLmNvbnRlbnQgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDEuMjVyZW07IH1cbiAgICAudGV4dC1ibG9jayB7IGZvbnQtc2l6ZTogMS4wNjI1cmVtOyBsaW5lLWhlaWdodDogMS44OyB9XG4gICAgLm1lZGlhLWJsb2NrIHsgbWFyZ2luOiAwOyB9XG4gICAgLm1lZGlhLWJsb2NrIGltZywgLm1lZGlhLWJsb2NrIGlmcmFtZSwgLm1lZGlhLWJsb2NrIHZpZGVvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcbiAgICAgIGJhY2tncm91bmQ6ICMwZjE3MmE7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbiAgICAubWVkaWEtYmxvY2sgZmlnY2FwdGlvbiB7IG1hcmdpbi10b3A6IDAuNXJlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDAuODc1cmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAubGluay1ibG9jayB7IG1hcmdpbjogMDsgcGFkZGluZzogMXJlbSAxLjE1cmVtOyBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWJnKTsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsgfVxuICAgIC5saW5rLWJsb2NrIGEgeyBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgd29yZC1icmVhazogYnJlYWstd29yZDsgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgLmFydGljbGUtaW5uZXIgeyBwYWRkaW5nOiAxLjI1cmVtIDFyZW0gMnJlbTsgfVxuICAgICAgLmhlcm8taW1hZ2UgeyBoZWlnaHQ6IDIyMHB4OyB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return BlogDetailComponent;
})();

/***/ }

}]);
//# sourceMappingURL=354.js.map