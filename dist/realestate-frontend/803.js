"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[803],{

/***/ 608
/*!*****************************************************************!*\
  !*** ./src/app/shared/property-card/property-card.component.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyCardComponent: () => (/* binding */ PropertyCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/image-url.util */ 8681);
/* harmony import */ var _pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/indian-price.pipe */ 5551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/config.service */ 8802);







const _c0 = a0 => ["/property", a0];
function PropertyCardComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u2B50 Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PropertyCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.mediaGalleryLabel, " ");
  }
}
function PropertyCardComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDECF\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.property.bedrooms, " BHK ");
  }
}
function PropertyCardComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDEBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.property.bathrooms, " Bath ");
  }
}
function PropertyCardComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDCD0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.property.areaSqft, " sq.ft ");
  }
}
function PropertyCardComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \uD83D\uDC41\uFE0F ", ctx_r0.property.viewCount, " ");
  }
}
let PropertyCardComponent = /*#__PURE__*/(() => {
  class PropertyCardComponent {
    constructor(config) {
      this.config = config;
    }
    get imgUrl() {
      const all = this.property.images || [];
      const imgs = all.filter(i => !i.mediaType || i.mediaType === 'IMAGE');
      if (imgs.length) return (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_2__.resolvePropertyImageUrl)(imgs[0].imageUrl, this.config.apiUrl);
      const videos = all.filter(i => i.mediaType === 'VIDEO');
      if (videos.length) {
        const poster = (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_2__.resolveVideoCardPosterUrl)(videos[0].imageUrl, this.config.apiUrl);
        if (poster) return poster;
      }
      return 'https://placehold.co/400x250?text=Property';
    }
    get mediaGalleryLabel() {
      const all = this.property.images || [];
      const n = all.length;
      const hasVideo = all.some(i => i.mediaType === 'VIDEO');
      return `${hasVideo ? '▶' : '📷'} ${n}`;
    }
    onImgError(event) {
      const img = event.target;
      if (img) {
        img.src = 'https://placehold.co/400x250?text=Property';
        img.onerror = null;
      }
    }
    static {
      this.ɵfac = function PropertyCardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PropertyCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: PropertyCardComponent,
        selectors: [["app-property-card"]],
        inputs: {
          property: "property"
        },
        decls: 28,
        vars: 19,
        consts: [[1, "card", "property-card", 3, "routerLink"], [1, "img-wrap"], [3, "error", "src", "alt"], [1, "overlay-badges"], [1, "badge", "badge-listing"], [1, "badge", "badge-verified"], ["class", "badge badge-premium", 4, "ngIf"], ["class", "img-count", 4, "ngIf"], [1, "body"], [1, "price-tag"], [1, "location"], [1, "features"], ["class", "feature-item", 4, "ngIf"], [1, "footer"], [1, "property-type"], ["class", "views", 4, "ngIf"], [1, "badge", "badge-premium"], [1, "img-count"], [1, "feature-item"], [1, "views"]],
        template: function PropertyCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 0)(1, "div", 1)(2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("error", function PropertyCardComponent_Template_img_error_2_listener($event) {
              return ctx.onImgError($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u2714 Verified");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PropertyCardComponent_span_8_Template, 2, 0, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, PropertyCardComponent_div_9_Template, 2, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "indianPrice");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 10)(17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\uD83D\uDCCD");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PropertyCardComponent_span_21_Template, 4, 1, "span", 12)(22, PropertyCardComponent_span_22_Template, 4, 1, "span", 12)(23, PropertyCardComponent_span_23_Template, 4, 1, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, PropertyCardComponent_span_27_Template, 2, 1, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c0, ctx.property.id));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx.property.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.property.listingType);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.property.isPremium);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.property.images && ctx.property.images.length > 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 15, ctx.property.price));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.property.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.property.city, "", ctx.property.locality ? ", " + ctx.property.locality : "", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.property.bedrooms);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.property.bathrooms);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.property.areaSqft);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.property.propertyType);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.property.viewCount);
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_3__.IndianPricePipe],
        styles: [".property-card[_ngcontent-%COMP%] {\n  display: block;\n  color: inherit;\n  transition: var(--transition-slow);\n  border: 1px solid var(--border);\n  overflow: hidden;\n  background: var(--surface);\n  position: relative;\n}\n\n.property-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-2xl);\n  border-color: var(--primary-light);\n}\n\n.img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 16/11;\n  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);\n  overflow: hidden;\n}\n\n.img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.property-card[_ngcontent-%COMP%]:hover   .img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n\n.overlay-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.875rem;\n  left: 0.875rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  z-index: 2;\n}\n\n.badge-listing[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  padding: 0.4375rem 0.875rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.75rem;\n  font-weight: 700;\n  box-shadow: var(--shadow-lg);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.badge-premium[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);\n  color: white;\n  padding: 0.4375rem 0.875rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.75rem;\n  font-weight: 700;\n  box-shadow: var(--shadow-lg);\n}\n\n.badge-verified[_ngcontent-%COMP%] {\n  background: var(--verified-gradient);\n  color: #fff;\n  padding: 0.4375rem 0.875rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.75rem;\n  font-weight: 700;\n  box-shadow: var(--shadow-lg);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.img-count[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.875rem;\n  right: 0.875rem;\n  background: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 0.4375rem 0.875rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.75rem;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n.body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.price-tag[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 0.625rem;\n  letter-spacing: -0.5px;\n}\n\n.body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  font-weight: 700;\n  margin-bottom: 0.625rem;\n  color: var(--text);\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  min-height: 3em;\n}\n\n.location[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin: 0 0 1rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-weight: 500;\n}\n\n.features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid var(--border-light);\n}\n\n.feature-item[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-weight: 500;\n  padding: 0.25rem 0;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  color: var(--text-muted);\n  padding-top: 0.5rem;\n}\n\n.property-type[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n\n.views[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Byb3BlcnR5LWNhcmQvcHJvcGVydHktY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFFSTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtBQUNOOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9GQUFBO0VBQ0EsZ0JBQUE7QUFFTjs7QUFBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1REFBQTtBQUdOOztBQURJO0VBQ0Usc0JBQUE7QUFJTjs7QUFGSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUtOOztBQUhJO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFNTjs7QUFKSTtFQUNFLCtFQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFPTjs7QUFMSTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBUU47O0FBTkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFTTjs7QUFQSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0FBVU47O0FBUkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBV047O0FBVEk7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBWU47O0FBVkk7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFhTjs7QUFYSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtBQWNOOztBQVpJO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZU47O0FBYkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBZ0JOOztBQWRJO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBaUJOOztBQWZJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBa0JOIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnByb3BlcnR5LWNhcmQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc2xvdyk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAucHJvcGVydHktY2FyZDpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMnhsKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgfVxuICAgIC5pbWctd3JhcCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBhc3BlY3QtcmF0aW86IDE2LzExO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYmctc2Vjb25kYXJ5KSAwJSwgdmFyKC0tYmctdGVydGlhcnkpIDEwMCUpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLmltZy13cmFwIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICB9XG4gICAgLnByb3BlcnR5LWNhcmQ6aG92ZXIgLmltZy13cmFwIGltZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICAgIH1cbiAgICAub3ZlcmxheS1iYWRnZXMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwLjg3NXJlbTtcbiAgICAgIGxlZnQ6IDAuODc1cmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5iYWRnZS1saXN0aW5nIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JhZGllbnQpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG4gICAgLmJhZGdlLXByZW1pdW0ge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYWNjZW50KSAwJSwgdmFyKC0tYWNjZW50LWxpZ2h0KSAxMDAlKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDAuNDM3NXJlbSAwLjg3NXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgICB9XG4gICAgLmJhZGdlLXZlcmlmaWVkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXZlcmlmaWVkLWdyYWRpZW50KTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG4gICAgLmltZy1jb3VudCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDAuODc1cmVtO1xuICAgICAgcmlnaHQ6IDAuODc1cmVtO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDAuNDM3NXJlbSAwLjg3NXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC4yNXJlbTtcbiAgICB9XG4gICAgLmJvZHkge1xuICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDA7XG4gICAgfVxuICAgIC5wcmljZS10YWcge1xuICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JhZGllbnQpO1xuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgfVxuICAgIC5ib2R5IGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtaW4taGVpZ2h0OiAzZW07XG4gICAgfVxuICAgIC5sb2NhdGlvbiB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDAuMzc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmZlYXR1cmVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDFyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICB9XG4gICAgLmZlYXR1cmUtaXRlbSB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAwLjM3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDA7XG4gICAgfVxuICAgIC5mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICB9XG4gICAgLnByb3BlcnR5LXR5cGUge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG4gICAgLnZpZXdzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAwLjM3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return PropertyCardComponent;
})();

/***/ },

/***/ 4540
/*!*********************************************************************!*\
  !*** ./src/app/shared/skeleton-loader/skeleton-loader.component.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkeletonLoaderComponent: () => (/* binding */ SkeletonLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);


let SkeletonLoaderComponent = /*#__PURE__*/(() => {
  class SkeletonLoaderComponent {
    constructor() {
      this.width = '100%';
      this.height = '1rem';
      this.radius = 'var(--radius-sm)';
    }
    static {
      this.ɵfac = function SkeletonLoaderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SkeletonLoaderComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SkeletonLoaderComponent,
        selectors: [["app-skeleton-loader"]],
        inputs: {
          width: "width",
          height: "height",
          radius: "radius"
        },
        decls: 1,
        vars: 6,
        consts: [[1, "skeleton"]],
        template: function SkeletonLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](0, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width)("height", ctx.height)("border-radius", ctx.radius);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
        styles: [".skeleton[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--bg-secondary) 25%, var(--border-light) 50%, var(--bg-secondary) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NrZWxldG9uLWxvYWRlci9za2VsZXRvbi1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsNkdBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FBQU47O0FBRUk7RUFDRTtJQUFLLDJCQUFBO0VBRVQ7RUFESTtJQUFPLDRCQUFBO0VBSVg7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5za2VsZXRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWJnLXNlY29uZGFyeSkgMjUlLCB2YXIoLS1ib3JkZXItbGlnaHQpIDUwJSwgdmFyKC0tYmctc2Vjb25kYXJ5KSA3NSUpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gICAgICBhbmltYXRpb246IGxvYWRpbmcgMS41cyBpbmZpbml0ZTtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgICAgIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwOyB9XG4gICAgICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDsgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return SkeletonLoaderComponent;
})();

/***/ },

/***/ 5551
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/indian-price.pipe.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndianPricePipe: () => (/* binding */ IndianPricePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);

let IndianPricePipe = /*#__PURE__*/(() => {
  class IndianPricePipe {
    transform(value) {
      if (value === null || value === undefined || value === '') return '₹ 0';
      const amount = Number(value);
      if (!Number.isFinite(amount)) return '₹ 0';
      const absAmount = Math.abs(amount);
      const sign = amount < 0 ? '-' : '';
      const crore = 1_00_00_000;
      const lakh = 1_00_000;
      if (absAmount >= crore) {
        return `₹ ${sign}${this.trimZeros((absAmount / crore).toFixed(2))} Cr`;
      }
      if (absAmount >= lakh) {
        return `₹ ${sign}${this.trimZeros((absAmount / lakh).toFixed(2))} L`;
      }
      return `₹ ${sign}${absAmount.toLocaleString('en-IN')}`;
    }
    trimZeros(input) {
      return input.replace(/\.00$/, '').replace(/(\.\d*[1-9])0$/, '$1');
    }
    static {
      this.ɵfac = function IndianPricePipe_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IndianPricePipe)();
      };
    }
    static {
      this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "indianPrice",
        type: IndianPricePipe,
        pure: true
      });
    }
  }
  return IndianPricePipe;
})();

/***/ }

}]);
//# sourceMappingURL=803.js.map