"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[306],{

/***/ 306
/*!***************************************************!*\
  !*** ./src/app/features/admin/admin.component.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _shared_pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/indian-price.pipe */ 5551);
/* harmony import */ var _core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/image-url.util */ 8681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/api.service */ 1776);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/services/config.service */ 8802);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4285);












const _c0 = () => [];
const _c1 = a0 => ["/property", a0];
const _c2 = a0 => ["/property", a0, "edit"];
function AdminComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\uD83C\uDFE0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 50)(5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Total Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 48)(10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\uD83D\uDC41");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 50)(13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Total Views");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 48)(18, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\u23F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 50)(21, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Pending Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 48)(26, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "\uD83D\uDCC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 50)(29, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Pending Visits");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 48)(34, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "\uD83D\uDCB0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 50)(37, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Revenue (30d)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 48)(43, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "\u2753");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 50)(46, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Unmatched FAQs");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.metrics.totalProperties || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.metrics.totalViews ?? 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.metrics.pendingProperties || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.metrics.pendingSiteVisits || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9 ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](39, 6, ctx_r0.metrics.revenueLast30Days || 0, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.metrics.unmatchedFaqPending ?? 0);
  }
}
function AdminComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53)(1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function AdminComponent_div_33_Template_img_error_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onCarouselImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r0.newCarouselPreviewUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function AdminComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Loading carousel slides\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 59)(1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function AdminComponent_div_35_div_1_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onCarouselImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 61)(3, "div", 10)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_35_div_1_Template_input_ngModelChange_6_listener($event) {
      const slide_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](slide_r4.imageUrl, $event) || (slide_r4.imageUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 10)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Link URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_35_div_1_Template_input_ngModelChange_10_listener($event) {
      const slide_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](slide_r4.linkUrl, $event) || (slide_r4.linkUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 10)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Alt text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_35_div_1_Template_input_ngModelChange_14_listener($event) {
      const slide_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](slide_r4.altText, $event) || (slide_r4.altText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "label", 63)(16, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_35_div_1_Template_input_ngModelChange_16_listener($event) {
      const slide_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](slide_r4.active, $event) || (slide_r4.active = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AdminComponent_div_35_div_1_Template_input_change_16_listener() {
      const slide_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.saveCarouselSlide(slide_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Active on homepage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 65)(19, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_35_div_1_Template_button_click_19_listener() {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.moveCarouselSlide(i_r5, -1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "\u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_35_div_1_Template_button_click_21_listener() {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.moveCarouselSlide(i_r5, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_35_div_1_Template_button_click_23_listener() {
      const slide_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.saveCarouselSlide(slide_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_35_div_1_Template_button_click_25_listener() {
      const slide_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.deleteCarouselSlide(slide_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r0.carouselImageUrl(slide_r4.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", slide_r4.altText || "Carousel slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", slide_r4.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", slide_r4.linkUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", slide_r4.altText);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", slide_r4.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", i_r5 === 0 || ctx_r0.reorderingCarousel[slide_r4.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", i_r5 === ctx_r0.carouselSlides.length - 1 || ctx_r0.reorderingCarousel[slide_r4.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.savingCarouselId[slide_r4.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.savingCarouselId[slide_r4.id] ? "Saving\u2026" : "Save", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.deletingCarousel[slide_r4.id]);
  }
}
function AdminComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AdminComponent_div_35_div_1_Template, 27, 11, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.carouselSlides);
  }
}
function AdminComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69)(1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\uD83D\uDDBC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "No carousel slides yet. Add an image URL above or the homepage will show default banners.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 73)(1, "div", 74)(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 76)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "indianPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 77)(13, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_43_div_1_Template_button_click_13_listener() {
      const p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.approve(p_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " \u2713 Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_43_div_1_Template_button_click_15_listener() {
      const p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.reject(p_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " \u2717 Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Owner: ", p_r7.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 4, p_r7.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Type: ", p_r7.propertyType);
  }
}
function AdminComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AdminComponent_div_43_div_1_Template, 17, 6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.pending);
  }
}
function AdminComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69)(1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "All properties have been reviewed. No pending approvals.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Loading pending properties...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_60_tr_17_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_60_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AdminComponent_div_60_tr_17_span_4_Template, 2, 0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td")(8, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td")(11, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_60_tr_17_Template_button_click_11_listener() {
      const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleFeatured(p_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td")(17, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_60_tr_17_Template_button_click_17_listener() {
      const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.openViewers(p_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Views");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_60_tr_17_Template_button_click_19_listener() {
      const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.openLikers(p_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Likes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_60_tr_17_Template_button_click_23_listener() {
      const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.deleteProperty(p_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("new-row", ctx_r0.isNewProperty(p_r9.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](17, _c1, p_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isNewProperty(p_r9.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r9.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("status-" + (p_r9.status || "").toLowerCase().replace("_", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.updatingFeatured[p_r9.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", p_r9.featured ? "\u2605 Featured" : "\u2606 Mark featured", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 14, p_r9.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c2, p_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.deleting[p_r9.id]);
  }
}
function AdminComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 80)(1, "table", 81)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Featured");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, AdminComponent_div_60_tr_17_Template, 25, 21, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", (ctx_r0.allPropertiesResponse == null ? null : ctx_r0.allPropertiesResponse.content) ?? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}
function AdminComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No properties match the filter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Loading properties...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 89)(1, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_63_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.prevPropertiesPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u2190 Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_63_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.nextPropertiesPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Next \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.pageAllProperties === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Page ", ctx_r0.pageAllProperties + 1, " of ", ctx_r0.allPropertiesResponse.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.pageAllProperties >= ctx_r0.allPropertiesResponse.totalPages - 1);
  }
}
function AdminComponent_div_64_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_64_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.modalError);
  }
}
function AdminComponent_div_64_div_10_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](u_r12.mobile);
  }
}
function AdminComponent_div_64_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 103)(1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AdminComponent_div_64_div_10_div_1_div_5_Template, 2, 1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](u_r12.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](u_r12.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", u_r12.mobile);
  }
}
function AdminComponent_div_64_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AdminComponent_div_64_div_10_div_1_Template, 6, 3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.modalUsers);
  }
}
function AdminComponent_div_64_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.modalEmptyMessage);
  }
}
function AdminComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_64_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closeUsersModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_64_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 92)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_64_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closeUsersModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AdminComponent_div_64_p_8_Template, 2, 0, "p", 95)(9, AdminComponent_div_64_p_9_Template, 2, 1, "p", 96)(10, AdminComponent_div_64_div_10_Template, 2, 1, "div", 97)(11, AdminComponent_div_64_p_11_Template, 2, 1, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.usersModalTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.loadingModalUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.modalError && !ctx_r0.loadingModalUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.loadingModalUsers && !ctx_r0.modalError && ctx_r0.modalUsers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.loadingModalUsers && !ctx_r0.modalError && !ctx_r0.modalUsers.length);
  }
}
function AdminComponent_div_71_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td")(6, "div", 110)(7, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 111)(10, "select", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_71_tr_15_Template_select_ngModelChange_10_listener($event) {
      const u_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.changeUserRole(u_r14, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "USER");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "BLOG");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "AGENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td")(20, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "td")(23, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_71_tr_15_Template_button_click_23_listener() {
      const u_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleUserStatus(u_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_71_tr_15_Template_button_click_25_listener() {
      const u_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.deleteUser(u_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const u_r14 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](u_r14.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](u_r14.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("status-assigned", u_r14.role === "AGENT")("status-completed", u_r14.role === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", u_r14.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", u_r14.role)("disabled", ctx_r0.changingUserRole[u_r14.id] || u_r14.id === ctx_r0.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("status-completed", u_r14.active)("status-rejected", u_r14.active === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", u_r14.active ? "ACTIVE" : "SUSPENDED", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.updatingUserStatus[u_r14.id] || ctx_r0.deletingUser[u_r14.id] || u_r14.id === ctx_r0.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", u_r14.active ? "Suspend" : "Activate", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.deletingUser[u_r14.id] || u_r14.id === ctx_r0.currentUserId);
  }
}
function AdminComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 80)(1, "table", 81)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, AdminComponent_div_71_tr_15_Template, 27, 17, "tr", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.allUsers);
  }
}
function AdminComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Loading users...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_79_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Notes: ", v_r16.userNotes);
  }
}
function AdminComponent_div_79_div_1_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", a_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", a_r17.fullName, " (", a_r17.role, ")");
  }
}
function AdminComponent_div_79_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118)(1, "div", 74)(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 76)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AdminComponent_div_79_div_1_span_10_Template, 2, 1, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 120)(12, "select", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_79_div_1_Template_select_ngModelChange_12_listener($event) {
      const v_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.selectedAgentId[v_r16.id], $event) || (ctx_r0.selectedAgentId[v_r16.id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Select agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, AdminComponent_div_79_div_1_option_15_Template, 2, 3, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_79_div_1_Template_button_click_16_listener() {
      const v_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.assignAgent(v_r16.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const v_r16 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](v_r16.propertyTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("User: ", v_r16.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Scheduled: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 10, v_r16.scheduledAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", v_r16.userNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedAgentId[v_r16.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.agents.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.agents);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.selectedAgentId[v_r16.id] || ctx_r0.assigning[v_r16.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.assigning[v_r16.id] ? "Assigning..." : "Assign Agent", " ");
  }
}
function AdminComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AdminComponent_div_79_div_1_Template, 18, 13, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.pendingVisits);
  }
}
function AdminComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69)(1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\uD83D\uDCC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "No pending site visit requests.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Loading pending site visits...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_span_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Due today: ", ctx_r0.allVisitsResponse.dueTodayCount);
  }
}
function AdminComponent_option_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", a_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", a_r18.fullName, " (", a_r18.role, ")");
  }
}
function AdminComponent_div_105_tr_17_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", a_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](a_r21.fullName);
  }
}
function AdminComponent_div_105_tr_17_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_105_tr_17_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const v_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.reassignVisit(v_r20.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.reassignAgentId[v_r20.id] || ctx_r0.reassigning[v_r20.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.reassigning[v_r20.id] ? "..." : "Reassign", " ");
  }
}
function AdminComponent_div_105_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td")(11, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td")(14, "select", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_105_tr_17_Template_select_ngModelChange_14_listener($event) {
      const v_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.reassignAgentId[v_r20.id], $event) || (ctx_r0.reassignAgentId[v_r20.id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Select agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, AdminComponent_div_105_tr_17_option_17_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, AdminComponent_div_105_tr_17_button_18_Template, 2, 2, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const v_r20 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("due-today", ctx_r0.isDueToday(v_r20.scheduledAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](v_r20.propertyTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](v_r20.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 14, v_r20.scheduledAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](v_r20.agentName || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("status-" + (v_r20.status || "").toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](v_r20.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.reassignAgentId[v_r20.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.reassigning[v_r20.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.agents);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.canReassign(v_r20));
  }
}
function AdminComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 80)(1, "table", 81)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Scheduled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Assigned to");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Reassign");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, AdminComponent_div_105_tr_17_Template, 19, 17, "tr", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", (ctx_r0.allVisitsResponse == null ? null : ctx_r0.allVisitsResponse.content) ?? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}
function AdminComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No site visits match the filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Loading all visits...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 89)(1, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_108_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.prevVisitsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u2190 Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_108_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.nextVisitsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Next \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.pageAllVisits === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Page ", ctx_r0.pageAllVisits + 1, " of ", ctx_r0.allVisitsResponse.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.pageAllVisits >= ctx_r0.allVisitsResponse.totalPages - 1);
  }
}
function AdminComponent_div_115_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td")(12, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_115_tr_17_Template_button_click_12_listener() {
      const f_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.openFaqForm(f_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_115_tr_17_Template_button_click_14_listener() {
      const f_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.deleteFaq(f_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const f_r25 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r25.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r25.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r25.keywords || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r25.active ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r25.sortOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.deletingFaq[f_r25.id]);
  }
}
function AdminComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 80)(1, "table", 81)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Keywords");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, AdminComponent_div_115_tr_17_Template, 16, 6, "tr", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.faqs);
  }
}
function AdminComponent_div_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No FAQs yet. Add questions and answers for the chatbot.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Loading FAQs...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_span_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r0.unmatchedFaqs.length, " Pending");
  }
}
function AdminComponent_div_129_tr_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](u_r26.userEmail);
  }
}
function AdminComponent_div_129_tr_15_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_129_tr_15_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const u_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.resolveUnmatched(u_r26.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.resolvingUnmatched[u_r26.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.resolvingUnmatched[u_r26.id] ? "..." : "Resolve");
  }
}
function AdminComponent_div_129_tr_15_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_129_tr_15_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const u_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.openPromoteModal(u_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Promote to FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_129_tr_15_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Promoted #", u_r26.promotedFaqId);
  }
}
function AdminComponent_div_129_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td")(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AdminComponent_div_129_tr_15_div_6_Template, 2, 1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td")(11, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, AdminComponent_div_129_tr_15_button_14_Template, 2, 2, "button", 124)(15, AdminComponent_div_129_tr_15_button_15_Template, 2, 0, "button", 127)(16, AdminComponent_div_129_tr_15_span_16_Template, 2, 1, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const u_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](u_r26.questionText);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](u_r26.userFullName || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", u_r26.userEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 12, u_r26.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("status-pending", u_r26.status === "PENDING")("status-resolved", u_r26.status === "RESOLVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](u_r26.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", u_r26.status === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", u_r26.status === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", u_r26.status === "RESOLVED" && u_r26.promotedFaqId);
  }
}
function AdminComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 80)(1, "table", 81)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Asked by");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "When");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, AdminComponent_div_129_tr_15_Template, 17, 15, "tr", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.unmatchedFaqs);
  }
}
function AdminComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("No ", ctx_r0.unmatchedStatusFilter === "PENDING" ? "pending" : "resolved", " out-of-scope questions.");
  }
}
function AdminComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Loading questions...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_132_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closeFaqForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_132_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 92)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_132_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closeFaqForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 94)(8, "div", 10)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_132_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.faqForm.question, $event) || (ctx_r0.faqForm.question = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 10)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "textarea", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_132_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.faqForm.answer, $event) || (ctx_r0.faqForm.answer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 10)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Keywords (comma-separated, optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_132_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.faqForm.keywords, $event) || (ctx_r0.faqForm.keywords = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 134)(21, "label", 135)(22, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_132_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.faqForm.active, $event) || (ctx_r0.faqForm.active = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 137)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Sort order");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_132_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.faqForm.sortOrder, $event) || (ctx_r0.faqForm.sortOrder = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 139)(29, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_132_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closeFaqForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_132_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.saveFaq());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.editingFaqId ? "Edit FAQ" : "Add FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.faqForm.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.faqForm.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.faqForm.keywords);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.faqForm.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.faqForm.sortOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.savingFaq);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.savingFaq ? "Saving..." : "Save", " ");
  }
}
function AdminComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_133_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closePromoteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_133_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 92)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Promote to FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_133_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closePromoteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 94)(8, "div", 10)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_133_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.promoteForm.question, $event) || (ctx_r0.promoteForm.question = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 10)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "textarea", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_133_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.promoteForm.answer, $event) || (ctx_r0.promoteForm.answer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 10)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Keywords (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_133_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.promoteForm.keywords, $event) || (ctx_r0.promoteForm.keywords = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 139)(21, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_133_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closePromoteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_div_133_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.promoteUnmatched());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.promoteForm.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.promoteForm.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.promoteForm.keywords);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.promoting || !ctx_r0.promoteForm.answer.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.promoting ? "Promoting..." : "Create FAQ", " ");
  }
}
let AdminComponent = /*#__PURE__*/(() => {
  class AdminComponent {
    constructor(api, config, toast, cdr, ngZone) {
      this.api = api;
      this.config = config;
      this.toast = toast;
      this.cdr = cdr;
      this.ngZone = ngZone;
      this.metrics = null;
      this.pending = [];
      this.pendingVisits = [];
      this.agents = [];
      this.selectedAgentId = {};
      this.assigning = {};
      this.loadingPending = true;
      this.loadingVisits = true;
      this.allVisitsResponse = null;
      this.filterFrom = '';
      this.filterTo = '';
      this.filterAgentId = null;
      this.loadingAllVisits = false;
      this.pageAllVisits = 0;
      this.reassignAgentId = {};
      this.reassigning = {};
      this.allPropertiesResponse = null;
      this.filterAllProperties = 'all';
      this.pageAllProperties = 0;
      this.loadingAllProperties = false;
      this.updatingFeatured = {};
      this.deleting = {};
      this.usersModalTitle = '';
      this.modalUsers = [];
      this.loadingModalUsers = false;
      this.modalError = '';
      this.modalEmptyMessage = '';
      this.allUsers = [];
      this.loadingUsers = false;
      this.updatingUserStatus = {};
      this.deletingUser = {};
      this.changingUserRole = {};
      this.currentUserId = null;
      this.carouselSlides = [];
      this.loadingCarousel = false;
      this.savingCarousel = false;
      this.savingCarouselId = {};
      this.deletingCarousel = {};
      this.reorderingCarousel = {};
      this.newCarousel = {
        imageUrl: '',
        linkUrl: '',
        altText: ''
      };
      this.faqs = [];
      this.loadingFaqs = false;
      this.faqFormOpen = false;
      this.editingFaqId = null;
      this.savingFaq = false;
      this.deletingFaq = {};
      this.faqForm = {
        question: '',
        answer: '',
        keywords: '',
        active: true,
        sortOrder: 0
      };
      this.unmatchedFaqs = [];
      this.loadingUnmatched = false;
      this.unmatchedStatusFilter = 'PENDING';
      this.resolvingUnmatched = {};
      this.promoteModalOpen = false;
      this.promoting = false;
      this.promoteTargetId = null;
      this.promoteForm = {
        question: '',
        answer: '',
        keywords: ''
      };
    }
    ngOnInit() {
      const userRaw = localStorage.getItem('user');
      if (userRaw) {
        try {
          const parsed = JSON.parse(userRaw);
          this.currentUserId = parsed?.id ?? null;
        } catch {
          this.currentUserId = null;
        }
      }
      this.api.get('/admin/metrics').subscribe({
        next: m => {
          this.metrics = m;
          this.cdr.markForCheck();
        }
      });
      this.api.get('/admin/properties/pending', {
        page: 0,
        size: 50
      }).subscribe({
        next: list => {
          this.pending = Array.isArray(list) ? list : [];
          this.loadingPending = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.loadingPending = false;
          this.cdr.markForCheck();
        }
      });
      this.loadAgents();
      this.loadPendingVisits();
      this.loadAllVisits();
      this.loadAllProperties();
      this.loadAllUsers();
      this.loadCarouselSlides();
      this.loadFaqs();
      this.loadUnmatchedFaqs();
    }
    isNewProperty(createdAt) {
      if (!createdAt) return false;
      const d = new Date(createdAt);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return d >= weekAgo;
    }
    prevPropertiesPage() {
      this.pageAllProperties--;
      this.loadAllProperties();
    }
    nextPropertiesPage() {
      this.pageAllProperties++;
      this.loadAllProperties();
    }
    prevVisitsPage() {
      this.pageAllVisits--;
      this.loadAllVisits();
    }
    nextVisitsPage() {
      this.pageAllVisits++;
      this.loadAllVisits();
    }
    loadAllProperties() {
      this.loadingAllProperties = true;
      const params = {
        page: this.pageAllProperties,
        size: 20
      };
      if (this.filterAllProperties === 'featured') params['featuredOnly'] = true;
      if (this.filterAllProperties === 'new') params['newOnly'] = true;
      this.api.get('/admin/properties', params).subscribe({
        next: res => {
          this.allPropertiesResponse = res;
          this.loadingAllProperties = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.loadingAllProperties = false;
          this.toast.error('Failed to load properties');
          this.cdr.markForCheck();
        }
      });
    }
    toggleFeatured(p) {
      if (!p.id) return;
      this.updatingFeatured[p.id] = true;
      const featured = !p.featured;
      this.api.put('/admin/properties/' + p.id + '/featured?featured=' + featured, {}).subscribe({
        next: updated => {
          this.updatingFeatured[p.id] = false;
          p.featured = updated.featured;
          this.toast.success(updated.featured ? 'Marked as featured' : 'Removed from featured');
        },
        error: e => {
          this.updatingFeatured[p.id] = false;
          this.toast.error(e.error?.message || 'Failed');
        }
      });
    }
    deleteProperty(id) {
      if (!confirm('Delete this property? This cannot be undone.')) return;
      this.deleting[id] = true;
      this.api.delete('/admin/properties/' + id).subscribe({
        next: () => {
          this.deleting[id] = false;
          this.toast.success('Property deleted');
          this.loadAllProperties();
          if (this.metrics?.totalProperties != null) this.metrics.totalProperties--;
        },
        error: e => {
          this.deleting[id] = false;
          this.toast.error(e.error?.message || 'Delete failed');
        }
      });
    }
    parseUsersResponse(res) {
      if (Array.isArray(res)) return res;
      if (res && typeof res === 'object' && Array.isArray(res.content)) return res.content;
      return [];
    }
    openViewers(propertyId) {
      this.usersModalTitle = 'Users who viewed this property';
      this.modalEmptyMessage = '0 views';
      this.modalUsers = [];
      this.modalError = '';
      this.loadingModalUsers = true;
      this.cdr.detectChanges();
      this.api.get('/admin/properties/' + propertyId + '/viewers').subscribe({
        next: res => {
          this.ngZone.run(() => {
            this.modalUsers = this.parseUsersResponse(res);
            this.loadingModalUsers = false;
            this.modalError = '';
            this.cdr.detectChanges();
          });
        },
        error: () => {
          this.ngZone.run(() => {
            this.loadingModalUsers = false;
            this.modalError = 'Error loading viewers. Please try again.';
            this.modalUsers = [];
            this.toast.error('Failed to load viewers');
            this.cdr.detectChanges();
          });
        }
      });
    }
    openLikers(propertyId) {
      this.usersModalTitle = 'Users who liked this property';
      this.modalEmptyMessage = '0 likes';
      this.modalUsers = [];
      this.modalError = '';
      this.loadingModalUsers = true;
      this.cdr.detectChanges();
      this.api.get('/admin/properties/' + propertyId + '/likers').subscribe({
        next: res => {
          this.ngZone.run(() => {
            this.modalUsers = this.parseUsersResponse(res);
            this.loadingModalUsers = false;
            this.modalError = '';
            this.cdr.detectChanges();
          });
        },
        error: () => {
          this.ngZone.run(() => {
            this.loadingModalUsers = false;
            this.modalError = 'Error loading likes. Please try again.';
            this.modalUsers = [];
            this.toast.error('Failed to load likers');
            this.cdr.detectChanges();
          });
        }
      });
    }
    closeUsersModal() {
      this.usersModalTitle = '';
      this.modalUsers = [];
      this.modalError = '';
      this.modalEmptyMessage = '';
    }
    loadAllUsers() {
      this.loadingUsers = true;
      this.api.get('/admin/users').subscribe({
        next: users => {
          this.allUsers = users || [];
          this.loadingUsers = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.loadingUsers = false;
          this.toast.error('Failed to load users');
          this.cdr.markForCheck();
        }
      });
    }
    toggleUserStatus(user) {
      const nextActive = !user.active;
      this.updatingUserStatus[user.id] = true;
      this.api.put('/admin/users/' + user.id + '/status?active=' + nextActive, {}).subscribe({
        next: updated => {
          this.updatingUserStatus[user.id] = false;
          user.active = updated.active;
          this.toast.success(updated.active ? 'User activated' : 'User suspended');
        },
        error: e => {
          this.updatingUserStatus[user.id] = false;
          this.toast.error(e.error?.message || 'Failed to update status');
        }
      });
    }
    changeUserRole(user, nextRole) {
      if (!nextRole || nextRole === user.role || user.id === this.currentUserId) return;
      this.changingUserRole[user.id] = true;
      this.api.put('/admin/users/' + user.id + '/role?role=' + nextRole, {}).subscribe({
        next: updated => {
          this.changingUserRole[user.id] = false;
          user.role = updated.role;
          this.toast.success('User role updated');
        },
        error: e => {
          this.changingUserRole[user.id] = false;
          this.toast.error(e.error?.message || 'Failed to update role');
        }
      });
    }
    deleteUser(user) {
      if (!confirm(`Delete user ${user.fullName}? This also deletes properties and related data.`)) return;
      this.deletingUser[user.id] = true;
      this.api.delete('/admin/users/' + user.id).subscribe({
        next: () => {
          this.deletingUser[user.id] = false;
          this.allUsers = this.allUsers.filter(u => u.id !== user.id);
          this.toast.success('User deleted');
        },
        error: e => {
          this.deletingUser[user.id] = false;
          this.toast.error(e.error?.message || 'Failed to delete user');
        }
      });
    }
    loadAllVisits() {
      this.loadingAllVisits = true;
      const params = {
        page: this.pageAllVisits,
        size: 20
      };
      if (this.filterFrom) params['from'] = new Date(this.filterFrom).toISOString();
      if (this.filterTo) params['to'] = new Date(this.filterTo).toISOString();
      if (this.filterAgentId != null) params['agentId'] = this.filterAgentId;
      this.api.get('/admin/sitevisits', params).subscribe({
        next: res => {
          this.allVisitsResponse = res;
          this.loadingAllVisits = false;
        },
        error: () => {
          this.loadingAllVisits = false;
          this.toast.error('Failed to load visits');
        }
      });
    }
    isDueToday(scheduledAt) {
      if (!scheduledAt) return false;
      const d = new Date(scheduledAt);
      const today = new Date();
      return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();
    }
    canReassign(v) {
      return v.status === 'PENDING_ASSIGNMENT' || v.status === 'ASSIGNED';
    }
    reassignVisit(visitId) {
      const agentId = this.reassignAgentId[visitId];
      if (!agentId) return;
      this.reassigning[visitId] = true;
      this.api.put('/admin/sitevisits/' + visitId + '/reassign?agentId=' + agentId, {}).subscribe({
        next: () => {
          this.reassigning[visitId] = false;
          this.toast.success('Visit reassigned');
          this.loadAllVisits();
          this.loadPendingVisits();
          if (this.metrics != null && this.metrics.pendingSiteVisits != null) {
            this.api.get('/admin/metrics').subscribe({
              next: m => this.metrics = m
            });
          }
        },
        error: e => {
          this.reassigning[visitId] = false;
          this.toast.error(e.error?.message || 'Reassign failed');
        }
      });
    }
    loadAgents() {
      this.api.get('/admin/agents').subscribe({
        next: list => this.agents = list,
        error: () => this.toast.error('Failed to load agents')
      });
    }
    loadPendingVisits() {
      this.loadingVisits = true;
      this.api.get('/admin/sitevisits/pending', {
        page: 0,
        size: 50
      }).subscribe({
        next: list => {
          this.pendingVisits = list;
          this.loadingVisits = false;
        },
        error: () => {
          this.loadingVisits = false;
          this.toast.error('Failed to load pending site visits');
        }
      });
    }
    assignAgent(visitId) {
      const agentId = this.selectedAgentId[visitId];
      if (!agentId) return;
      this.assigning[visitId] = true;
      this.api.put('/admin/sitevisits/' + visitId + '/assign?agentId=' + agentId, {}).subscribe({
        next: () => {
          this.assigning[visitId] = false;
          this.toast.success('Agent assigned');
          this.pendingVisits = this.pendingVisits.filter(v => v.id !== visitId);
          if (this.metrics && this.metrics.pendingSiteVisits != null) this.metrics.pendingSiteVisits--;
        },
        error: e => {
          this.assigning[visitId] = false;
          this.toast.error(e.error?.message || 'Failed to assign agent');
        }
      });
    }
    approve(id) {
      this.api.put('/admin/properties/' + id + '/approve', {}).subscribe({
        next: () => {
          this.toast.success('Property approved');
          this.pending = this.pending.filter(p => p.id !== id);
        },
        error: e => this.toast.error(e.error?.message || 'Failed')
      });
    }
    reject(id) {
      this.api.put('/admin/properties/' + id + '/reject', {}).subscribe({
        next: () => {
          this.toast.success('Property rejected');
          this.pending = this.pending.filter(p => p.id !== id);
        },
        error: e => this.toast.error(e.error?.message || 'Failed')
      });
    }
    loadCarouselSlides() {
      this.loadingCarousel = true;
      this.api.get('/admin/carousel/slides').subscribe({
        next: slides => {
          this.carouselSlides = Array.isArray(slides) ? slides : [];
          this.loadingCarousel = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.loadingCarousel = false;
          this.toast.error('Failed to load carousel slides');
          this.cdr.markForCheck();
        }
      });
    }
    carouselImageUrl(url) {
      return (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_5__.resolvePropertyImageUrl)(url, this.config.apiUrl) || url;
    }
    newCarouselPreviewUrl() {
      const raw = (this.newCarousel.imageUrl || '').trim();
      if (!raw) return '';
      return this.carouselImageUrl(raw.startsWith('http') ? raw : `https://${raw.replace(/^\/+/, '')}`);
    }
    onCarouselImageError(event) {
      const img = event.target;
      img.src = 'https://placehold.co/280x140?text=Preview+unavailable';
      img.onerror = null;
    }
    addCarouselSlide() {
      const imageUrl = (this.newCarousel.imageUrl || '').trim();
      if (!imageUrl) {
        this.toast.warning('Image URL is required');
        return;
      }
      this.savingCarousel = true;
      this.api.post('/admin/carousel/slides', {
        imageUrl,
        linkUrl: (this.newCarousel.linkUrl || '').trim() || undefined,
        altText: (this.newCarousel.altText || '').trim() || undefined,
        active: true
      }).subscribe({
        next: () => {
          this.savingCarousel = false;
          this.newCarousel = {
            imageUrl: '',
            linkUrl: '',
            altText: ''
          };
          this.toast.success('Carousel slide added');
          this.loadCarouselSlides();
        },
        error: e => {
          this.savingCarousel = false;
          this.toast.error(e.error?.message || 'Failed to add slide');
          this.cdr.markForCheck();
        }
      });
    }
    saveCarouselSlide(slide) {
      this.savingCarouselId[slide.id] = true;
      this.api.put('/admin/carousel/slides/' + slide.id, {
        imageUrl: (slide.imageUrl || '').trim(),
        linkUrl: (slide.linkUrl || '').trim() || null,
        altText: (slide.altText || '').trim() || null,
        displayOrder: slide.displayOrder,
        active: slide.active
      }).subscribe({
        next: updated => {
          this.savingCarouselId[slide.id] = false;
          Object.assign(slide, updated);
          this.toast.success('Carousel slide saved');
          this.cdr.markForCheck();
        },
        error: e => {
          this.savingCarouselId[slide.id] = false;
          this.toast.error(e.error?.message || 'Failed to save slide');
          this.loadCarouselSlides();
        }
      });
    }
    moveCarouselSlide(index, delta) {
      const targetIndex = index + delta;
      if (targetIndex < 0 || targetIndex >= this.carouselSlides.length) return;
      const slides = [...this.carouselSlides];
      [slides[index], slides[targetIndex]] = [slides[targetIndex], slides[index]];
      slides.forEach((slide, idx) => {
        slide.displayOrder = idx;
        this.reorderingCarousel[slide.id] = true;
      });
      this.carouselSlides = slides;
      this.cdr.markForCheck();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)(slides.map(slide => this.api.put('/admin/carousel/slides/' + slide.id, {
        displayOrder: slide.displayOrder
      }))).subscribe({
        next: () => {
          slides.forEach(slide => {
            this.reorderingCarousel[slide.id] = false;
          });
          this.toast.success('Slide order updated');
          this.loadCarouselSlides();
        },
        error: () => {
          slides.forEach(slide => {
            this.reorderingCarousel[slide.id] = false;
          });
          this.toast.error('Failed to reorder slides');
          this.loadCarouselSlides();
        }
      });
    }
    deleteCarouselSlide(slide) {
      if (!confirm('Delete this carousel slide?')) return;
      this.deletingCarousel[slide.id] = true;
      this.api.delete('/admin/carousel/slides/' + slide.id).subscribe({
        next: () => {
          this.deletingCarousel[slide.id] = false;
          this.toast.success('Carousel slide deleted');
          this.loadCarouselSlides();
        },
        error: e => {
          this.deletingCarousel[slide.id] = false;
          this.toast.error(e.error?.message || 'Failed to delete slide');
          this.cdr.markForCheck();
        }
      });
    }
    loadFaqs() {
      this.loadingFaqs = true;
      this.api.get('/admin/faqs').subscribe({
        next: list => {
          this.ngZone.run(() => {
            this.faqs = Array.isArray(list) ? list : [];
            this.loadingFaqs = false;
            this.cdr.detectChanges();
          });
        },
        error: () => {
          this.ngZone.run(() => {
            this.loadingFaqs = false;
            this.toast.error('Failed to load FAQs');
            this.cdr.detectChanges();
          });
        }
      });
    }
    openFaqForm(faq) {
      if (faq) {
        this.editingFaqId = faq.id;
        this.faqForm = {
          question: faq.question,
          answer: faq.answer,
          keywords: faq.keywords || '',
          active: faq.active,
          sortOrder: faq.sortOrder ?? 0
        };
      } else {
        this.editingFaqId = null;
        this.faqForm = {
          question: '',
          answer: '',
          keywords: '',
          active: true,
          sortOrder: 0
        };
      }
      this.faqFormOpen = true;
    }
    closeFaqForm() {
      this.faqFormOpen = false;
      this.editingFaqId = null;
      this.savingFaq = false;
    }
    saveFaq() {
      if (!this.faqForm.question.trim() || !this.faqForm.answer.trim()) {
        this.toast.error('Question and answer are required');
        return;
      }
      this.savingFaq = true;
      this.cdr.detectChanges();
      const body = {
        question: this.faqForm.question.trim(),
        answer: this.faqForm.answer.trim(),
        keywords: this.faqForm.keywords?.trim() || null,
        active: this.faqForm.active,
        sortOrder: this.faqForm.sortOrder ?? 0
      };
      const editingId = this.editingFaqId;
      const req$ = editingId ? this.api.put('/admin/faqs/' + editingId, body) : this.api.post('/admin/faqs', body);
      req$.subscribe({
        next: () => {
          this.ngZone.run(() => {
            this.savingFaq = false;
            this.closeFaqForm();
            this.toast.success(editingId ? 'FAQ updated' : 'FAQ created');
            this.loadFaqs();
            this.cdr.detectChanges();
          });
        },
        error: e => {
          this.ngZone.run(() => {
            this.savingFaq = false;
            this.toast.error(e.error?.message || 'Failed to save FAQ');
            this.cdr.detectChanges();
          });
        }
      });
    }
    deleteFaq(id) {
      if (!confirm('Delete this FAQ?')) return;
      this.deletingFaq[id] = true;
      this.cdr.detectChanges();
      this.api.delete('/admin/faqs/' + id).subscribe({
        next: () => {
          this.ngZone.run(() => {
            this.deletingFaq[id] = false;
            this.toast.success('FAQ deleted');
            this.loadFaqs();
            this.cdr.detectChanges();
          });
        },
        error: e => {
          this.ngZone.run(() => {
            this.deletingFaq[id] = false;
            this.toast.error(e.error?.message || 'Delete failed');
            this.cdr.detectChanges();
          });
        }
      });
    }
    loadUnmatchedFaqs() {
      this.loadingUnmatched = true;
      this.api.get('/admin/faqs/unmatched', {
        status: this.unmatchedStatusFilter
      }).subscribe({
        next: list => {
          this.ngZone.run(() => {
            this.unmatchedFaqs = Array.isArray(list) ? list : [];
            this.loadingUnmatched = false;
            this.cdr.detectChanges();
          });
        },
        error: () => {
          this.ngZone.run(() => {
            this.loadingUnmatched = false;
            this.toast.error('Failed to load out-of-scope questions');
            this.cdr.detectChanges();
          });
        }
      });
    }
    resolveUnmatched(id) {
      this.resolvingUnmatched[id] = true;
      this.cdr.detectChanges();
      this.api.put('/admin/faqs/unmatched/' + id + '/resolve', {}).subscribe({
        next: () => {
          this.ngZone.run(() => {
            this.resolvingUnmatched[id] = false;
            this.toast.success('Marked as resolved');
            this.loadUnmatchedFaqs();
            this.refreshFaqMetric();
            this.cdr.detectChanges();
          });
        },
        error: e => {
          this.ngZone.run(() => {
            this.resolvingUnmatched[id] = false;
            this.toast.error(e.error?.message || 'Failed to resolve');
            this.cdr.detectChanges();
          });
        }
      });
    }
    openPromoteModal(u) {
      this.promoteTargetId = u.id;
      this.promoteForm = {
        question: u.questionText,
        answer: '',
        keywords: ''
      };
      this.promoteModalOpen = true;
    }
    closePromoteModal() {
      this.promoteModalOpen = false;
      this.promoteTargetId = null;
      this.promoting = false;
    }
    promoteUnmatched() {
      if (!this.promoteTargetId || !this.promoteForm.answer.trim()) return;
      this.promoting = true;
      this.cdr.detectChanges();
      this.api.post('/admin/faqs/unmatched/' + this.promoteTargetId + '/promote', {
        answer: this.promoteForm.answer.trim(),
        keywords: this.promoteForm.keywords?.trim() || null,
        active: true,
        sortOrder: 0
      }).subscribe({
        next: () => {
          this.ngZone.run(() => {
            this.promoting = false;
            this.closePromoteModal();
            this.toast.success('Promoted to FAQ');
            this.loadFaqs();
            this.loadUnmatchedFaqs();
            this.refreshFaqMetric();
            this.cdr.detectChanges();
          });
        },
        error: e => {
          this.ngZone.run(() => {
            this.promoting = false;
            this.toast.error(e.error?.message || 'Failed to promote');
            this.cdr.detectChanges();
          });
        }
      });
    }
    refreshFaqMetric() {
      this.api.get('/admin/metrics').subscribe({
        next: m => {
          this.metrics = m;
          this.cdr.markForCheck();
        }
      });
    }
    static {
      this.ɵfac = function AdminComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_10__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["app-admin"]],
        decls: 134,
        vars: 48,
        consts: [[1, "admin-page"], [1, "container"], [1, "admin-header"], ["class", "metrics-grid", 4, "ngIf"], [1, "pending-section", "card", "carousel-section"], [1, "section-header"], [1, "badge", "badge-info"], [1, "carousel-hint"], [1, "carousel-add-form"], [1, "carousel-form-row"], [1, "form-group"], ["type", "text", "placeholder", "https://\u2026 or Google Drive link", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "https://\u2026", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Banner description", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "carousel-live-preview", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "carousel-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "pending-section", "card"], [1, "badge", "badge-warning"], ["class", "pending-list", 4, "ngIf"], [1, "pending-section", "card", "all-properties-section"], [1, "header-actions"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "featured"], ["value", "new"], ["routerLink", "/property/new", 1, "btn", "btn-primary"], ["class", "visits-table-wrap", 4, "ngIf"], ["class", "pagination-row", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "pending-section", "card", "user-management-section"], [1, "pending-section", "card", "site-visits-section"], [1, "pending-section", "card", "all-visits-section"], ["class", "badge badge-info", 4, "ngIf"], [1, "filters-row"], [1, "filter-group"], ["type", "datetime-local", 1, "form-input", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "pending-section", "card", "faq-section"], [1, "pending-section", "card", "unmatched-faq-section"], ["value", "PENDING"], ["value", "RESOLVED"], ["class", "badge badge-warning", 4, "ngIf"], [1, "metrics-grid"], [1, "metric-card", "card"], [1, "metric-icon"], [1, "metric-content"], [1, "metric-value"], [1, "metric-label"], [1, "carousel-live-preview"], [1, "preview-label"], ["alt", "New slide preview", 1, "carousel-preview-img", 3, "error", "src"], [1, "loading-state"], [1, "carousel-list"], ["class", "carousel-item", 4, "ngFor", "ngForOf"], [1, "carousel-item"], [1, "carousel-thumb", 3, "error", "src", "alt"], [1, "carousel-item-fields"], ["type", "text", 1, "form-input", "sm", 3, "ngModelChange", "ngModel"], [1, "active-toggle"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "carousel-item-actions"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", "btn-danger", 3, "click", "disabled"], [1, "empty-state"], [1, "empty-icon"], [1, "pending-list"], ["class", "pending-item", 4, "ngFor", "ngForOf"], [1, "pending-item"], [1, "pending-info"], [1, "pending-title"], [1, "pending-meta"], [1, "pending-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "visits-table-wrap"], [1, "visits-table"], [3, "new-row", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "routerLink"], ["class", "badge-new", 4, "ngIf"], [1, "status-badge"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], [1, "badge-new"], [1, "pagination-row"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["type", "button", 1, "modal-close", 3, "click"], [1, "modal-body"], ["class", "modal-status", 4, "ngIf"], ["class", "modal-status modal-error", 4, "ngIf"], ["class", "users-list", 4, "ngIf"], ["class", "modal-status modal-empty", 4, "ngIf"], [1, "modal-status"], [1, "modal-status", "modal-error"], [1, "users-list"], ["class", "user-row", 4, "ngFor", "ngForOf"], [1, "user-row"], [1, "user-name"], [1, "user-email"], ["class", "user-mobile", 4, "ngIf"], [1, "user-mobile"], [1, "modal-status", "modal-empty"], [4, "ngFor", "ngForOf"], [1, "role-cell"], [1, "role-actions"], [1, "form-select", "sm", 3, "ngModelChange", "ngModel", "disabled"], ["value", "USER"], ["value", "BLOG"], ["value", "ADMIN"], ["value", "AGENT"], ["class", "pending-item visit-item", 4, "ngFor", "ngForOf"], [1, "pending-item", "visit-item"], [4, "ngIf"], [1, "pending-actions", "assign-actions"], [1, "form-select", 3, "ngModelChange", "ngModel", "disabled"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [3, "due-today", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-outline btn-sm", 3, "disabled", "click", 4, "ngIf"], [1, "faq-cell"], ["class", "muted-email", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "muted-email"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "modal-content", "faq-modal", 3, "click"], ["type", "text", "name", "faqQuestion", 1, "form-input", 3, "ngModelChange", "ngModel"], ["rows", "4", "name", "faqAnswer", 1, "form-input", "faq-textarea", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "faqKeywords", "placeholder", "e.g. rent, deposit, visit", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-row"], [1, "checkbox-label"], ["type", "checkbox", "name", "faqActive", 3, "ngModelChange", "ngModel"], [1, "form-group", "sort-group"], ["type", "number", "name", "faqSortOrder", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "text", "name", "promoteQuestion", "readonly", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["rows", "4", "name", "promoteAnswer", "placeholder", "Write the answer for this FAQ", 1, "form-input", "faq-textarea", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "promoteKeywords", 1, "form-input", 3, "ngModelChange", "ngModel"]],
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Admin Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Manage properties, approvals, and site analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AdminComponent_div_8_Template, 50, 9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Homepage Carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Paste a public image URL or Google Drive image link. For Google Drive, set sharing to \"Anyone with the link\". Images load directly from the URL \u2014 no file uploads. Any image size will auto-fit the carousel.");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Image URL *");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_22_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.newCarousel.imageUrl, $event) || (ctx.newCarousel.imageUrl = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 10)(24, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Link URL (optional)");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_26_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.newCarousel.linkUrl, $event) || (ctx.newCarousel.linkUrl = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 10)(28, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Alt text");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_30_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.newCarousel.altText, $event) || (ctx.newCarousel.altText = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_31_listener() {
              return ctx.addCarouselSlide();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, AdminComponent_div_33_Template, 4, 1, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, AdminComponent_div_34_Template, 3, 0, "div", 16)(35, AdminComponent_div_35_Template, 2, 1, "div", 17)(36, AdminComponent_div_36_Template, 5, 0, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 19)(38, "div", 5)(39, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Pending Property Approvals");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, AdminComponent_div_43_Template, 2, 1, "div", 21)(44, AdminComponent_div_44_Template, 5, 0, "div", 18)(45, AdminComponent_div_45_Template, 3, 0, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 22)(47, "div", 5)(48, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "All Properties");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 23)(51, "select", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_51_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.filterAllProperties, $event) || (ctx.filterAllProperties = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_51_listener() {
              return ctx.loadAllProperties();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "option", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "All");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "option", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Featured only");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "option", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "New (last 7 days)");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "+ Add Property");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, AdminComponent_div_60_Template, 18, 2, "div", 29)(61, AdminComponent_div_61_Template, 3, 0, "div", 18)(62, AdminComponent_div_62_Template, 3, 0, "div", 16)(63, AdminComponent_div_63_Template, 7, 4, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, AdminComponent_div_64_Template, 12, 5, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 32)(66, "div", 5)(67, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "User Management");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, AdminComponent_div_71_Template, 16, 1, "div", 29)(72, AdminComponent_div_72_Template, 3, 0, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 33)(74, "div", 5)(75, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "Pending Site Visit Requests");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, AdminComponent_div_79_Template, 2, 1, "div", 21)(80, AdminComponent_div_80_Template, 5, 0, "div", 18)(81, AdminComponent_div_81_Template, 3, 0, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 34)(83, "div", 5)(84, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "Manage All Site Visits");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, AdminComponent_span_86_Template, 2, 1, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 36)(88, "div", 37)(89, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "From date");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_91_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.filterFrom, $event) || (ctx.filterFrom = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 37)(93, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94, "To date");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_95_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.filterTo, $event) || (ctx.filterTo = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 37)(97, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "Assigned to");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "select", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_99_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.filterAgentId, $event) || (ctx.filterAgentId = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, "All agents");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](102, AdminComponent_option_102_Template, 2, 3, "option", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_103_listener() {
              return ctx.loadAllVisits();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "Apply filters");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](105, AdminComponent_div_105_Template, 18, 2, "div", 29)(106, AdminComponent_div_106_Template, 3, 0, "div", 18)(107, AdminComponent_div_107_Template, 3, 0, "div", 16)(108, AdminComponent_div_108_Template, 7, 4, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 42)(110, "div", 5)(111, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112, "Manage FAQs");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_113_listener() {
              return ctx.openFaqForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "+ Add FAQ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](115, AdminComponent_div_115_Template, 18, 1, "div", 29)(116, AdminComponent_div_116_Template, 3, 0, "div", 18)(117, AdminComponent_div_117_Template, 3, 0, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "div", 43)(119, "div", 5)(120, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "Out-of-scope Questions");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "div", 23)(123, "select", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_123_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.unmatchedStatusFilter, $event) || (ctx.unmatchedStatusFilter = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_123_listener() {
              return ctx.loadUnmatchedFaqs();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "option", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "Pending");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "option", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127, "Resolved");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](128, AdminComponent_span_128_Template, 2, 1, "span", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](129, AdminComponent_div_129_Template, 16, 1, "div", 29)(130, AdminComponent_div_130_Template, 3, 1, "div", 18)(131, AdminComponent_div_131_Template, 3, 0, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](132, AdminComponent_div_132_Template, 33, 8, "div", 31)(133, AdminComponent_div_133_Template, 25, 5, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metrics);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.carouselSlides.length, " Slides");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.newCarousel.imageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.newCarousel.linkUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.newCarousel.altText);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.savingCarousel);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.savingCarousel ? "Adding\u2026" : "Add slide", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newCarouselPreviewUrl());
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingCarousel);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loadingCarousel && ctx.carouselSlides.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loadingCarousel && !ctx.carouselSlides.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.pending.length, " Pending");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.pending.length && !ctx.loadingPending);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.pending.length && !ctx.loadingPending);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingPending);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.filterAllProperties);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.allPropertiesResponse == null ? null : ctx.allPropertiesResponse.content == null ? null : ctx.allPropertiesResponse.content.length) && !ctx.loadingAllProperties);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.allPropertiesResponse && !ctx.allPropertiesResponse.content.length && !ctx.loadingAllProperties);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingAllProperties);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.allPropertiesResponse && ctx.allPropertiesResponse.totalPages > 1 && !ctx.loadingAllProperties);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.usersModalTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.allUsers.length, " Users");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.allUsers.length && !ctx.loadingUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.pendingVisits.length, " Pending");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.pendingVisits.length && !ctx.loadingVisits);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.pendingVisits.length && !ctx.loadingVisits);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingVisits);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.allVisitsResponse);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.filterFrom);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.filterTo);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.filterAgentId);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.agents);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.allVisitsResponse == null ? null : ctx.allVisitsResponse.content == null ? null : ctx.allVisitsResponse.content.length) && !ctx.loadingAllVisits);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.allVisitsResponse && !ctx.allVisitsResponse.content.length && !ctx.loadingAllVisits);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingAllVisits);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.allVisitsResponse && ctx.allVisitsResponse.totalPages > 1 && !ctx.loadingAllVisits);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.faqs.length && !ctx.loadingFaqs);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.faqs.length && !ctx.loadingFaqs);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingFaqs);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.unmatchedStatusFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.unmatchedStatusFilter === "PENDING");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.unmatchedFaqs.length && !ctx.loadingUnmatched);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.unmatchedFaqs.length && !ctx.loadingUnmatched);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingUnmatched);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.faqFormOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.promoteModalOpen);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _shared_pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_4__.IndianPricePipe],
        styles: ["@charset \"UTF-8\";\n.admin-page[_ngcontent-%COMP%] {\n  padding: 2rem 0 4rem;\n}\n\n.admin-header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  padding-bottom: 2rem;\n  border-bottom: 3px solid var(--border-light);\n  position: relative;\n}\n\n.admin-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  width: 120px;\n  height: 3px;\n  background: var(--primary-gradient);\n  border-radius: 2px;\n}\n\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin-bottom: 0.75rem;\n  letter-spacing: -0.5px;\n}\n\n.admin-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.1875rem;\n}\n\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  border: 2px solid var(--border);\n  transition: var(--transition-slow);\n  position: relative;\n  overflow: hidden;\n}\n\n.metric-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n  background: var(--primary-gradient);\n  transform: scaleY(0);\n  transition: transform 0.3s;\n}\n\n.metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-xl);\n  border-color: var(--primary-light);\n}\n\n.metric-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleY(1);\n}\n\n.metric-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  filter: drop-shadow(0 4px 8px rgba(14, 165, 233, 0.2));\n}\n\n.metric-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 800;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.1;\n}\n\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--text-muted);\n  margin-top: 0.375rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.pending-section[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  border: 2px solid var(--border);\n}\n\n.carousel-hint[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.carousel-add-form[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.carousel-form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1fr auto;\n  gap: 0.75rem;\n  align-items: end;\n}\n\n.carousel-live-preview[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.preview-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.carousel-preview-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 140px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 2px solid var(--border);\n}\n\n.carousel-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr auto;\n  gap: 1rem;\n  align-items: start;\n  padding: 1rem;\n  background: var(--bg);\n  border: 2px solid var(--border);\n  border-radius: var(--radius);\n}\n\n.carousel-thumb[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 70px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n}\n\n.carousel-item-fields[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.carousel-item-fields[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.carousel-item-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n\n.active-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\n.carousel-item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 5.5rem;\n}\n\n@media (max-width: 900px) {\n  .carousel-form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .carousel-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .carousel-thumb[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 120px;\n  }\n  .carousel-item-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 3px solid var(--border-light);\n  position: relative;\n}\n\n.section-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  width: 80px;\n  height: 3px;\n  background: var(--primary-gradient);\n  border-radius: 2px;\n}\n\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.625rem;\n  font-weight: 800;\n  color: var(--text);\n}\n\n.pending-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.pending-item[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: var(--bg);\n  border-radius: var(--radius);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  border: 2px solid var(--border);\n  transition: var(--transition);\n}\n\n.pending-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface);\n  border-color: var(--primary-light);\n  box-shadow: var(--shadow-md);\n}\n\n.pending-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.pending-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: var(--text);\n  margin-bottom: 0.5rem;\n}\n\n.pending-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  flex-wrap: wrap;\n}\n\n.pending-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.pending-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.125rem;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: var(--text-muted);\n}\n\n.site-visits-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.visit-item[_ngcontent-%COMP%]   .assign-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  min-width: 180px;\n  min-height: 2.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 2px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9375rem;\n  box-sizing: border-box;\n}\n\n.all-visits-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  margin-bottom: 1.5rem;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 2px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9375rem;\n  box-sizing: border-box;\n}\n\n.visits-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-bottom: 1rem;\n}\n\n.visits-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9375rem;\n}\n\n.visits-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .visits-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border);\n}\n\n.visits-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-muted);\n}\n\n.visits-table[_ngcontent-%COMP%]   tr.due-today[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.08);\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n\n\n.status-pendingapproval[_ngcontent-%COMP%], \n.status-pending_assignment[_ngcontent-%COMP%] {\n  background: var(--status-pending-bg);\n  color: var(--status-pending-text);\n}\n\n.status-approved[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success-text);\n}\n\n.status-assigned[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info-text);\n}\n\n.status-completed[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success-text);\n}\n\n.status-cancelled[_ngcontent-%COMP%] {\n  background: var(--status-neutral-bg);\n  color: var(--status-neutral-text);\n}\n\n.status-rejected[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger-text-strong);\n}\n\n.form-select.sm[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\n.role-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.role-actions[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  min-width: 110px;\n  min-height: 2.1rem;\n  padding: 0.25rem 0.5rem;\n}\n\n.pagination-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.badge-info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info-text);\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n\n.all-properties-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.badge-new[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success-text);\n  padding: 0.2rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  margin-left: 0.5rem;\n}\n\n.new-row[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.06);\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  color: var(--danger, #dc2626);\n  border-color: var(--danger, #dc2626);\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 3000;\n  padding: 1rem;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--radius-lg);\n  max-width: 480px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-2xl);\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--border);\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n}\n\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  overflow-y: auto;\n}\n\n.users-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.user-row[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n\n.user-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.user-mobile[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.modal-status[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem 0;\n  text-align: center;\n  color: var(--text-muted);\n}\n\n.modal-status.modal-error[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 500;\n}\n\n.modal-status.modal-empty[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n@media (max-width: 768px) {\n  .admin-page[_ngcontent-%COMP%] {\n    padding: 1rem 0 2rem;\n  }\n  .admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n    margin-bottom: 2rem;\n  }\n  .pending-section[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .pending-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .visits-table-wrap[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .visits-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .visits-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.faq-cell[_ngcontent-%COMP%] {\n  max-width: 240px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.muted-email[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-muted);\n}\n\n.faq-section[_ngcontent-%COMP%], \n.unmatched-faq-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.faq-modal.modal-content[_ngcontent-%COMP%] {\n  max-width: 560px;\n}\n\n.faq-modal[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.faq-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  font-size: 0.875rem;\n  color: var(--text);\n}\n\n.faq-modal[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--surface);\n}\n\n.faq-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 110px;\n  border-radius: var(--radius-sm);\n  font-family: inherit;\n  line-height: 1.45;\n}\n\n.faq-modal[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.sort-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  flex: 1;\n  min-width: 120px;\n}\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border-light, var(--border));\n}\n\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n\n.status-resolved[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNaO0VBQWMsb0JBQUE7QUFFbEI7O0FBREk7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUlOOztBQUZJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUFLTjs7QUFISTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBTU47O0FBSkk7RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0FBT047O0FBTEk7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFRTjs7QUFOSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFTTjs7QUFQSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUFVTjs7QUFSSTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQVdOOztBQVRJO0VBQ0Usb0JBQUE7QUFZTjs7QUFWSTtFQUNFLGVBQUE7RUFDQSxzREFBQTtBQWFOOztBQVhJO0VBQ0UsT0FBQTtBQWNOOztBQVpJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFlTjs7QUFiSTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQWdCTjs7QUFkSTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQWlCTjs7QUFmSTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBa0JOOztBQWhCSTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtBQW1CTjs7QUFqQkk7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFvQk47O0FBbEJJO0VBQ0UsZ0JBQUE7QUFxQk47O0FBbkJJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQXNCTjs7QUFwQkk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7QUF1Qk47O0FBckJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQXdCTjs7QUF0Qkk7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBeUJOOztBQXZCSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0FBMEJOOztBQXhCSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBMkJOOztBQXpCSTtFQUNFLFNBQUE7QUE0Qk47O0FBMUJJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBNkJOOztBQTNCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBOEJOOztBQTVCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQStCTjs7QUE3Qkk7RUFDRTtJQUNFLDBCQUFBO0VBZ0NOO0VBOUJJO0lBQ0UsMEJBQUE7RUFnQ047RUE5Qkk7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQWdDTjtFQTlCSTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQWdDTjtBQUNGO0FBOUJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQWdDTjs7QUE5Qkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQWlDTjs7QUEvQkk7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBa0NOOztBQWhDSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFtQ047O0FBakNJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQW9DTjs7QUFsQ0k7RUFDRSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUFxQ047O0FBbkNJO0VBQ0UsT0FBQTtBQXNDTjs7QUFwQ0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQXVDTjs7QUFyQ0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBd0NOOztBQXRDSTtFQUNFLGdCQUFBO0FBeUNOOztBQXZDSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBMENOOztBQXhDSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUEyQ047O0FBekNJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBNENOOztBQTFDSTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7QUE2Q047O0FBM0NJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUE4Q047O0FBNUNJO0VBQ0UsZ0JBQUE7QUErQ047O0FBN0NJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFnRE47O0FBOUNJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFpRE47O0FBL0NJO0VBQXNCLGdCQUFBO0FBbUQxQjs7QUFsREk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBcUROOztBQW5ESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFzRE47O0FBcERJO0VBQXNCLG1CQUFBO0VBQXFCLGdCQUFBO0FBeUQvQzs7QUF4REk7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUEyRE47O0FBekRJO0VBQXFCLGdCQUFBO0VBQWtCLG1CQUFBO0FBOEQzQzs7QUE3REk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQWdFTjs7QUE5REk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUFpRU47O0FBL0RJO0VBQW1CLGdCQUFBO0VBQWtCLHdCQUFBO0FBb0V6Qzs7QUFuRUk7RUFBNkIsb0NBQUE7QUF1RWpDOztBQXRFSTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUF5RU47O0FBdkVJLHVGQUFBO0FBQ0E7O0VBQzZCLG9DQUFBO0VBQXNDLGlDQUFBO0FBNEV2RTs7QUEzRUk7RUFBbUIsNkJBQUE7RUFBK0IsMEJBQUE7QUFnRnREOztBQS9FSTtFQUFtQiwwQkFBQTtFQUE0Qix1QkFBQTtBQW9GbkQ7O0FBbkZJO0VBQW9CLDZCQUFBO0VBQStCLDBCQUFBO0FBd0Z2RDs7QUF2Rkk7RUFBb0Isb0NBQUE7RUFBc0MsaUNBQUE7QUE0RjlEOztBQTNGSTtFQUFtQiw0QkFBQTtFQUE4QixnQ0FBQTtBQWdHckQ7O0FBL0ZJO0VBQWtCLGdCQUFBO0FBbUd0Qjs7QUFsR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXFHTjs7QUFuR0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFzR047O0FBcEdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBdUdOOztBQXJHSTtFQUFjLDBCQUFBO0VBQTRCLHVCQUFBO0VBQXlCLHdCQUFBO0VBQTBCLHFCQUFBO0VBQXVCLG1CQUFBO0VBQXFCLGdCQUFBO0FBOEc3STs7QUE3R0k7RUFBMEIsZ0JBQUE7QUFpSDlCOztBQWhISTtFQUFrQixhQUFBO0VBQWUsU0FBQTtFQUFXLG1CQUFBO0VBQXFCLGVBQUE7QUF1SHJFOztBQXRISTtFQUFhLDZCQUFBO0VBQStCLDBCQUFBO0VBQTRCLHNCQUFBO0VBQXdCLHFCQUFBO0VBQXVCLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLG1CQUFBO0FBZ0loSzs7QUEvSEk7RUFBVyxvQ0FBQTtBQW1JZjs7QUFsSUk7RUFBYyw2QkFBQTtFQUErQixvQ0FBQTtBQXVJakQ7O0FBdElJO0VBQWlCLGVBQUE7RUFBaUIsUUFBQTtFQUFVLDhCQUFBO0VBQTZCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixhQUFBO0VBQWUsYUFBQTtBQWlKeko7O0FBaEpJO0VBQWlCLDBCQUFBO0VBQTRCLCtCQUFBO0VBQWlDLGdCQUFBO0VBQWtCLFdBQUE7RUFBYSxnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsNkJBQUE7QUE0SjVMOztBQTNKSTtFQUFnQixhQUFBO0VBQWUsOEJBQUE7RUFBZ0MsbUJBQUE7RUFBcUIsb0JBQUE7RUFBc0Isc0NBQUE7QUFtSzlHOztBQWxLSTtFQUFtQixTQUFBO0VBQVcsa0JBQUE7QUF1S2xDOztBQXRLSTtFQUFlLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyxpQkFBQTtFQUFtQixlQUFBO0VBQWlCLHdCQUFBO0FBOEt2Rjs7QUE3S0k7RUFBYyxvQkFBQTtFQUFzQixnQkFBQTtBQWtMeEM7O0FBakxJO0VBQWMsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLFlBQUE7QUF1THpEOztBQXRMSTtFQUFZLGdCQUFBO0VBQWtCLHFCQUFBO0VBQXVCLCtCQUFBO0VBQWlDLCtCQUFBO0FBNkwxRjs7QUE1TEk7RUFBYSxnQkFBQTtFQUFrQixzQkFBQTtBQWlNbkM7O0FBaE1JO0VBQWMsbUJBQUE7RUFBcUIsd0JBQUE7QUFxTXZDOztBQXBNSTtFQUFlLG1CQUFBO0VBQXFCLHdCQUFBO0FBeU14Qzs7QUF4TUk7RUFBZ0IsU0FBQTtFQUFXLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0Isd0JBQUE7QUErTXBFOztBQTlNSTtFQUE0QixvQkFBQTtFQUFzQixnQkFBQTtBQW1OdEQ7O0FBbE5JO0VBQTRCLHdCQUFBO0FBc05oQzs7QUFyTkk7RUFDRTtJQUFjLG9CQUFBO0VBeU5sQjtFQXhOSTtJQUFtQixrQkFBQTtFQTJOdkI7RUExTkk7SUFBZ0IsOEJBQUE7SUFBZ0MsU0FBQTtJQUFXLG1CQUFBO0VBK04vRDtFQTlOSTtJQUFtQixnQkFBQTtFQWlPdkI7RUFoT0k7SUFBa0Isc0JBQUE7SUFBd0IsdUJBQUE7SUFBeUIsU0FBQTtFQXFPdkU7RUFwT0k7SUFBZ0Isc0JBQUE7SUFBd0IsdUJBQUE7RUF3TzVDO0VBdk9JO0lBQWtCLHNCQUFBO0lBQXdCLHVCQUFBO0VBMk85QztFQTFPSTtJQUFxQixtQkFBQTtFQTZPekI7RUE1T0k7SUFBcUMsc0JBQUE7RUErT3pDO0FBQ0Y7QUE5T0k7RUFDRTtJQUFnQiwwQkFBQTtFQWlQcEI7QUFDRjtBQWhQSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBa1BOOztBQWhQSTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7QUFtUE47O0FBalBJOztFQUVFLGdCQUFBO0FBb1BOOztBQWxQSTtFQUNFLGdCQUFBO0FBcVBOOztBQW5QSTtFQUF5QixtQkFBQTtBQXVQN0I7O0FBdFBJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBeVBOOztBQXZQSTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQTBQTjs7QUF4UEk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBMlBOOztBQXpQSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUE0UE47O0FBMVBJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTZQTjs7QUEzUEk7RUFBYyxnQkFBQTtFQUFrQixPQUFBO0VBQVMsZ0JBQUE7QUFpUTdDOztBQWhRSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0RBQUE7QUFtUU47O0FBalFJO0VBQWtCLG1CQUFBO0VBQXFCLGNBQUE7QUFzUTNDOztBQXJRSTtFQUFtQixtQkFBQTtFQUFxQixjQUFBO0FBMFE1QyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5hZG1pbi1wYWdlIHsgcGFkZGluZzogMnJlbSAwIDRyZW07IH1cbiAgICAuYWRtaW4taGVhZGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAuYWRtaW4taGVhZGVyOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTNweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JhZGllbnQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cbiAgICAuYWRtaW4taGVhZGVyIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIH1cbiAgICAuYWRtaW4taGVhZGVyIHAge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAxLjE4NzVyZW07XG4gICAgfVxuICAgIC5tZXRyaWNzLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgICAgZ2FwOiAxLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cbiAgICAubWV0cmljLWNhcmQge1xuICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxLjI1cmVtO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc2xvdyk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAubWV0cmljLWNhcmQ6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogNHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgICAubWV0cmljLWNhcmQ6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgfVxuICAgIC5tZXRyaWMtY2FyZDpob3Zlcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgIH1cbiAgICAubWV0cmljLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDRweCA4cHggcmdiYSgxNCwgMTY1LCAyMzMsIDAuMikpO1xuICAgIH1cbiAgICAubWV0cmljLWNvbnRlbnQge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gICAgLm1ldHJpYy12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgfVxuICAgIC5tZXRyaWMtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtYXJnaW4tdG9wOiAwLjM3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbiAgICAucGVuZGluZy1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDIuNXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgfVxuICAgIC5jYXJvdXNlbC1oaW50IHtcbiAgICAgIG1hcmdpbjogMCAwIDEuMjVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG4gICAgLmNhcm91c2VsLWFkZC1mb3JtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICB9XG4gICAgLmNhcm91c2VsLWZvcm0tcm93IHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxLjVmciAxZnIgYXV0bztcbiAgICAgIGdhcDogMC43NXJlbTtcbiAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgfVxuICAgIC5jYXJvdXNlbC1saXZlLXByZXZpZXcge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLnByZXZpZXctbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gICAgfVxuICAgIC5jYXJvdXNlbC1wcmV2aWV3LWltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICB9XG4gICAgLmNhcm91c2VsLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDFyZW07XG4gICAgfVxuICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0MHB4IDFmciBhdXRvO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICAgIH1cbiAgICAuY2Fyb3VzZWwtdGh1bWIge1xuICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICB9XG4gICAgLmNhcm91c2VsLWl0ZW0tZmllbGRzIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBnYXA6IDAuNXJlbTtcbiAgICB9XG4gICAgLmNhcm91c2VsLWl0ZW0tZmllbGRzIC5mb3JtLWdyb3VwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmNhcm91c2VsLWl0ZW0tZmllbGRzIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICAgIC5hY3RpdmUtdG9nZ2xlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICB9XG4gICAgLmNhcm91c2VsLWl0ZW0tYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgbWluLXdpZHRoOiA1LjVyZW07XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgLmNhcm91c2VsLWZvcm0tcm93IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICB9XG4gICAgICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgfVxuICAgICAgLmNhcm91c2VsLXRodW1iIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICB9XG4gICAgICAuY2Fyb3VzZWwtaXRlbS1hY3Rpb25zIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgfVxuICAgIH1cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnNlY3Rpb24taGVhZGVyOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTNweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuICAgIC5zZWN0aW9uLWhlYWRlciBoMiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEuNjI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICB9XG4gICAgLnBlbmRpbmctbGlzdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMXJlbTtcbiAgICB9XG4gICAgLnBlbmRpbmctaXRlbSB7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDEuNXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG4gICAgLnBlbmRpbmctaXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIH1cbiAgICAucGVuZGluZy1pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICAgIC5wZW5kaW5nLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cbiAgICAucGVuZGluZy1tZXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5wZW5kaW5nLW1ldGEgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAucGVuZGluZy1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDAuNzVyZW07XG4gICAgfVxuICAgIC5lbXB0eS1zdGF0ZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAzcmVtIDJyZW07XG4gICAgfVxuICAgIC5lbXB0eS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5lbXB0eS1zdGF0ZSBwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgfVxuICAgIC5sb2FkaW5nLXN0YXRlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICAgIC5zaXRlLXZpc2l0cy1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgIC52aXNpdC1pdGVtIC5hc3NpZ24tYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG4gICAgLmZvcm0tc2VsZWN0IHtcbiAgICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAyLjVyZW07XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICAuYWxsLXZpc2l0cy1zZWN0aW9uIHsgbWFyZ2luLXRvcDogMnJlbTsgfVxuICAgIC5maWx0ZXJzLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cbiAgICAuZmlsdGVyLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAwLjI1cmVtO1xuICAgIH1cbiAgICAuZmlsdGVyLWdyb3VwIGxhYmVsIHsgZm9udC1zaXplOiAwLjg3NXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgIC5mb3JtLWlucHV0IHtcbiAgICAgIG1pbi1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIC52aXNpdHMtdGFibGUtd3JhcCB7IG92ZXJmbG93LXg6IGF1dG87IG1hcmdpbi1ib3R0b206IDFyZW07IH1cbiAgICAudmlzaXRzLXRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgIH1cbiAgICAudmlzaXRzLXRhYmxlIHRoLCAudmlzaXRzLXRhYmxlIHRkIHtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICB9XG4gICAgLnZpc2l0cy10YWJsZSB0aCB7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuICAgIC52aXNpdHMtdGFibGUgdHIuZHVlLXRvZGF5IHsgYmFja2dyb3VuZDogcmdiYSgxNCwgMTY1LCAyMzMsIDAuMDgpOyB9XG4gICAgLnN0YXR1cy1iYWRnZSB7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gICAgLyoqIFByb3BlcnR5IHJvd3MgdXNlIC5yZXBsYWNlKCdfJywnJykgb25jZSDDosKGwpIgZS5nLiBQRU5ESU5HX0FQUFJPVkFMIMOiwobCkiBwZW5kaW5nYXBwcm92YWwgKi9cbiAgICAuc3RhdHVzLXBlbmRpbmdhcHByb3ZhbCxcbiAgICAuc3RhdHVzLXBlbmRpbmdfYXNzaWdubWVudCB7IGJhY2tncm91bmQ6IHZhcigtLXN0YXR1cy1wZW5kaW5nLWJnKTsgY29sb3I6IHZhcigtLXN0YXR1cy1wZW5kaW5nLXRleHQpOyB9XG4gICAgLnN0YXR1cy1hcHByb3ZlZCB7IGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtYmcpOyBjb2xvcjogdmFyKC0tc3VjY2Vzcy10ZXh0KTsgfVxuICAgIC5zdGF0dXMtYXNzaWduZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWJnKTsgY29sb3I6IHZhcigtLWluZm8tdGV4dCk7IH1cbiAgICAuc3RhdHVzLWNvbXBsZXRlZCB7IGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtYmcpOyBjb2xvcjogdmFyKC0tc3VjY2Vzcy10ZXh0KTsgfVxuICAgIC5zdGF0dXMtY2FuY2VsbGVkIHsgYmFja2dyb3VuZDogdmFyKC0tc3RhdHVzLW5ldXRyYWwtYmcpOyBjb2xvcjogdmFyKC0tc3RhdHVzLW5ldXRyYWwtdGV4dCk7IH1cbiAgICAuc3RhdHVzLXJlamVjdGVkIHsgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWJnKTsgY29sb3I6IHZhcigtLWRhbmdlci10ZXh0LXN0cm9uZyk7IH1cbiAgICAuZm9ybS1zZWxlY3Quc20geyBtaW4td2lkdGg6IDE0MHB4OyB9XG4gICAgLnJvbGUtY2VsbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICAucm9sZS1hY3Rpb25zIC5mb3JtLXNlbGVjdCB7XG4gICAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgICAgbWluLWhlaWdodDogMi4xcmVtO1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgfVxuICAgIC5wYWdpbmF0aW9uLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuICAgIC5iYWRnZS1pbmZvIHsgYmFja2dyb3VuZDogdmFyKC0taW5mby1iZyk7IGNvbG9yOiB2YXIoLS1pbmZvLXRleHQpOyBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07IGJvcmRlci1yYWRpdXM6IDk5OTlweDsgZm9udC1zaXplOiAwLjg3NXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgIC5hbGwtcHJvcGVydGllcy1zZWN0aW9uIHsgbWFyZ2luLXRvcDogMnJlbTsgfVxuICAgIC5oZWFkZXItYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwOyB9XG4gICAgLmJhZGdlLW5ldyB7IGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtYmcpOyBjb2xvcjogdmFyKC0tc3VjY2Vzcy10ZXh0KTsgcGFkZGluZzogMC4ycmVtIDAuNXJlbTsgYm9yZGVyLXJhZGl1czogOTk5OXB4OyBmb250LXNpemU6IDAuN3JlbTsgZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luLWxlZnQ6IDAuNXJlbTsgfVxuICAgIC5uZXctcm93IHsgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMDYpOyB9XG4gICAgLmJ0bi1kYW5nZXIgeyBjb2xvcjogdmFyKC0tZGFuZ2VyLCAjZGMyNjI2KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYW5nZXIsICNkYzI2MjYpOyB9XG4gICAgLm1vZGFsLW92ZXJsYXkgeyBwb3NpdGlvbjogZml4ZWQ7IGluc2V0OiAwOyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB6LWluZGV4OiAzMDAwOyBwYWRkaW5nOiAxcmVtOyB9XG4gICAgLm1vZGFsLWNvbnRlbnQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTsgbWF4LXdpZHRoOiA0ODBweDsgd2lkdGg6IDEwMCU7IG1heC1oZWlnaHQ6IDgwdmg7IG92ZXJmbG93OiBoaWRkZW47IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yeGwpOyB9XG4gICAgLm1vZGFsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMXJlbSAxLjVyZW07IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9XG4gICAgLm1vZGFsLWhlYWRlciBoMyB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAxLjI1cmVtOyB9XG4gICAgLm1vZGFsLWNsb3NlIHsgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lOyBmb250LXNpemU6IDEuNXJlbTsgY3Vyc29yOiBwb2ludGVyOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cbiAgICAubW9kYWwtYm9keSB7IHBhZGRpbmc6IDFyZW0gMS41cmVtOyBvdmVyZmxvdy15OiBhdXRvOyB9XG4gICAgLnVzZXJzLWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDAuNzVyZW07IH1cbiAgICAudXNlci1yb3cgeyBwYWRkaW5nOiAwLjc1cmVtOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH1cbiAgICAudXNlci1uYW1lIHsgZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTsgfVxuICAgIC51c2VyLWVtYWlsIHsgZm9udC1zaXplOiAwLjg3NXJlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICAgLnVzZXItbW9iaWxlIHsgZm9udC1zaXplOiAwLjg3NXJlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICAgLm1vZGFsLXN0YXR1cyB7IG1hcmdpbjogMDsgcGFkZGluZzogMXJlbSAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuICAgIC5tb2RhbC1zdGF0dXMubW9kYWwtZXJyb3IgeyBjb2xvcjogdmFyKC0tZGFuZ2VyKTsgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAgIC5tb2RhbC1zdGF0dXMubW9kYWwtZW1wdHkgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5hZG1pbi1wYWdlIHsgcGFkZGluZzogMXJlbSAwIDJyZW07IH1cbiAgICAgIC5hZG1pbi1oZWFkZXIgaDEgeyBmb250LXNpemU6IDEuNzVyZW07IH1cbiAgICAgIC5tZXRyaWNzLWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxuICAgICAgLnBlbmRpbmctc2VjdGlvbiB7IHBhZGRpbmc6IDEuMjVyZW07IH1cbiAgICAgIC5zZWN0aW9uLWhlYWRlciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDFyZW07IH1cbiAgICAgIC5wZW5kaW5nLWl0ZW0geyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuICAgICAgLmhlYWRlci1hY3Rpb25zIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cbiAgICAgIC52aXNpdHMtdGFibGUtd3JhcCB7IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cbiAgICAgIC52aXNpdHMtdGFibGUgdGgsIC52aXNpdHMtdGFibGUgdGQgeyBwYWRkaW5nOiAwLjVyZW0gMC41cmVtOyB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgLm1ldHJpY3MtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gICAgfVxuICAgIC5mYXEtY2VsbCB7XG4gICAgICBtYXgtd2lkdGg6IDI0MHB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG4gICAgLm11dGVkLWVtYWlsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIH1cbiAgICAuZmFxLXNlY3Rpb24sXG4gICAgLnVubWF0Y2hlZC1mYXEtc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbiAgICAuZmFxLW1vZGFsLm1vZGFsLWNvbnRlbnQge1xuICAgICAgbWF4LXdpZHRoOiA1NjBweDtcbiAgICB9XG4gICAgLmZhcS1tb2RhbCAuZm9ybS1ncm91cCB7IG1hcmdpbi1ib3R0b206IDFyZW07IH1cbiAgICAuZmFxLW1vZGFsIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMzVyZW07XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIH1cbiAgICAuZmFxLW1vZGFsIC5mb3JtLWlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gICAgfVxuICAgIC5mYXEtdGV4dGFyZWEge1xuICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gICAgfVxuICAgIC5mYXEtbW9kYWwgLmZvcm0tcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICAuY2hlY2tib3gtbGFiZWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDAuNDVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuc29ydC1ncm91cCB7IG1hcmdpbi1ib3R0b206IDA7IGZsZXg6IDE7IG1pbi13aWR0aDogMTIwcHg7IH1cbiAgICAubW9kYWwtYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMC43NXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCwgdmFyKC0tYm9yZGVyKSk7XG4gICAgfVxuICAgIC5zdGF0dXMtcGVuZGluZyB7IGJhY2tncm91bmQ6ICNmZWYzYzc7IGNvbG9yOiAjOTI0MDBlOyB9XG4gICAgLnN0YXR1cy1yZXNvbHZlZCB7IGJhY2tncm91bmQ6ICNkMWZhZTU7IGNvbG9yOiAjMDY1ZjQ2OyB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return AdminComponent;
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
//# sourceMappingURL=306.js.map