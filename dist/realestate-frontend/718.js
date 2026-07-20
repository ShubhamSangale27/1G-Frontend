"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[718],{

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

/***/ },

/***/ 8718
/*!***********************************************************************!*\
  !*** ./src/app/features/property-detail/property-detail.component.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyDetailComponent: () => (/* binding */ PropertyDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/skeleton-loader/skeleton-loader.component */ 4540);
/* harmony import */ var _shared_property_map_property_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/property-map/property-map.component */ 7134);
/* harmony import */ var _shared_pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/indian-price.pipe */ 5551);
/* harmony import */ var _core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/utils/image-url.util */ 8681);
/* harmony import */ var _core_utils_property_gallery_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/property-gallery.util */ 9422);
/* harmony import */ var _core_http_context_tokens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/http-context.tokens */ 9646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/services/api.service */ 1776);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/services/config.service */ 8802);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/services/auth.service */ 9058);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 436);




















function PropertyDetailComponent_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\u2B50 Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PropertyDetailComponent_div_1_ng_container_33_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_ng_container_33_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.bookVisit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " \uD83D\uDCC5 Book Site Visit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PropertyDetailComponent_div_1_ng_container_33_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62)(1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Your visit OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "strong", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Keep this private. Share it with the agent only in person when the visit is finished.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_ng_container_33_div_2_div_6_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.resendVisitOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.visitOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.resendingOtp);
  }
}
function PropertyDetailComponent_div_1_ng_container_33_div_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Waiting for admin to assign an agent. You'll receive an OTP via SMS when assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PropertyDetailComponent_div_1_ng_container_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 57)(1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, PropertyDetailComponent_div_1_ng_container_33_div_2_div_6_Template, 9, 2, "div", 60)(7, PropertyDetailComponent_div_1_ng_container_33_div_2_p_7_Template, 2, 0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_ng_container_33_div_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.openReschedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "\uD83D\uDCC5 Reschedule visit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("assigned", ctx_r1.myVisitForProperty.status === "ASSIGNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.visitStatusLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 6, ctx_r1.myVisitForProperty.scheduledAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.myVisitForProperty.status === "ASSIGNED" && ctx_r1.visitOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.myVisitForProperty.status === "PENDING_ASSIGNMENT");
  }
}
function PropertyDetailComponent_div_1_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PropertyDetailComponent_div_1_ng_container_33_button_1_Template, 2, 0, "button", 54)(2, PropertyDetailComponent_div_1_ng_container_33_div_2_Template, 10, 9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.myVisitForProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.myVisitForProperty);
  }
}
function PropertyDetailComponent_div_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleWatchlist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.inWatchlist ? "\u2764\uFE0F Liked" : "\uD83E\uDD0D Like", " ");
  }
}
function PropertyDetailComponent_div_1_a_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Login to Book Visit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PropertyDetailComponent_div_1_ng_container_37_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_ng_container_37_div_1_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const slide_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.openZoom(ctx_r1.imageFullUrl(slide_r7.sourceUrl)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r1.imageFullUrl(slide_r7.sourceUrl), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("alt", ctx_r1.property.title);
  }
}
function PropertyDetailComponent_div_1_ng_container_37_div_1_iframe_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "iframe", 80);
  }
  if (rf & 2) {
    const slide_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", slide_r7.safeEmbedUrl, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeResourceUrl"]);
  }
}
function PropertyDetailComponent_div_1_ng_container_37_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_ng_container_37_div_1_button_6_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      ctx_r1.prevGallery();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\u2039");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PropertyDetailComponent_div_1_ng_container_37_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_ng_container_37_div_1_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      ctx_r1.nextGallery();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PropertyDetailComponent_div_1_ng_container_37_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", ctx_r1.galleryIndex + 1, " / ", ctx_r1.gallerySlides.length, " ");
  }
}
function PropertyDetailComponent_div_1_ng_container_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 71)(1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "\u2714 Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](3, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, PropertyDetailComponent_div_1_ng_container_37_div_1_img_4_Template, 1, 2, "img", 74)(5, PropertyDetailComponent_div_1_ng_container_37_div_1_iframe_5_Template, 1, 1, "iframe", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, PropertyDetailComponent_div_1_ng_container_37_div_1_button_6_Template, 2, 0, "button", 76)(7, PropertyDetailComponent_div_1_ng_container_37_div_1_button_7_Template, 2, 0, "button", 77)(8, PropertyDetailComponent_div_1_ng_container_37_div_1_div_8_Template, 2, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r7 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitch", slide_r7.kind);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "video-embed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.gallerySlides.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.gallerySlides.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.gallerySlides.length > 1);
  }
}
function PropertyDetailComponent_div_1_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PropertyDetailComponent_div_1_ng_container_37_div_1_Template, 9, 6, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.currentSlide);
  }
}
function PropertyDetailComponent_div_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 84)(1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "\u2714 Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r1.heroPlaceholderUrl, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("alt", ctx_r1.property.title);
  }
}
function PropertyDetailComponent_div_1_div_39_button_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\u25B6");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PropertyDetailComponent_div_1_div_39_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_div_39_button_1_Template_button_click_0_listener($event) {
      const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      ctx_r1.galleryIndex = i_r11;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    })("dblclick", function PropertyDetailComponent_div_1_div_39_button_1_Template_button_dblclick_0_listener() {
      const slide_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](slide_r12.kind === "photo" && ctx_r1.openZoom(ctx_r1.imageFullUrl(slide_r12.sourceUrl)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, PropertyDetailComponent_div_1_div_39_button_1_span_2_Template, 2, 0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r12 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r1.galleryIndex === i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", slide_r12.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", slide_r12.kind !== "photo");
  }
}
function PropertyDetailComponent_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PropertyDetailComponent_div_1_div_39_button_1_Template, 3, 4, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.gallerySlides);
  }
}
function PropertyDetailComponent_div_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_div_40_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeZoom());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_div_40_Template_img_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_div_40_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeZoom());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r1.zoomUrl, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}
function PropertyDetailComponent_div_1_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "\uD83D\uDECF\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div")(4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Bedrooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r1.property.bedrooms, " BHK");
  }
}
function PropertyDetailComponent_div_1_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "\uD83D\uDEBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div")(4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Bathrooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.bathrooms);
  }
}
function PropertyDetailComponent_div_1_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "\uD83D\uDCD0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div")(4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r1.property.areaSqft, " sq.ft");
  }
}
function PropertyDetailComponent_div_1_section_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 95)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.description);
  }
}
function PropertyDetailComponent_div_1_section_59_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const amenity_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u2713 ", amenity_r14);
  }
}
function PropertyDetailComponent_div_1_section_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 96)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Amenities");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, PropertyDetailComponent_div_1_section_59_span_4_Template, 2, 1, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.amenitiesList);
  }
}
function PropertyDetailComponent_div_1_p_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Locality:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.property.locality);
  }
}
function PropertyDetailComponent_div_1_p_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "State:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.property.state);
  }
}
function PropertyDetailComponent_div_1_p_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Pincode:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.property.pincode);
  }
}
function PropertyDetailComponent_div_1_section_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 100)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Property Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 101)(4, "div", 102)(5, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "\uD83D\uDC41\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div")(8, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Views");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 102)(13, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "\uD83D\uDCDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div")(16, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Clicks");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 102)(21, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "\uD83D\uDCC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div")(24, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Site Visits");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.viewCount || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.clickCount || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.visitCount || 0);
  }
}
function PropertyDetailComponent_div_1_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 106)(1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div")(4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Property Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.ownerName.charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.ownerName);
  }
}
function PropertyDetailComponent_div_1_ng_container_82_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_ng_container_82_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.bookVisit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " \uD83D\uDCC5 Book Site Visit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PropertyDetailComponent_div_1_ng_container_82_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62)(1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Visit OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "strong", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_ng_container_82_div_2_div_6_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.resendVisitOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.visitOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.resendingOtp);
  }
}
function PropertyDetailComponent_div_1_ng_container_82_div_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Agent assignment pending \u2014 OTP will be sent via SMS.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PropertyDetailComponent_div_1_ng_container_82_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 113)(1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, PropertyDetailComponent_div_1_ng_container_82_div_2_div_6_Template, 7, 2, "div", 60)(7, PropertyDetailComponent_div_1_ng_container_82_div_2_p_7_Template, 2, 0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_div_1_ng_container_82_div_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.openReschedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "\uD83D\uDCC5 Reschedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("assigned", ctx_r1.myVisitForProperty.status === "ASSIGNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.visitStatusLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 6, ctx_r1.myVisitForProperty.scheduledAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.myVisitForProperty.status === "ASSIGNED" && ctx_r1.visitOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.myVisitForProperty.status === "PENDING_ASSIGNMENT");
  }
}
function PropertyDetailComponent_div_1_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PropertyDetailComponent_div_1_ng_container_82_button_1_Template, 2, 0, "button", 110)(2, PropertyDetailComponent_div_1_ng_container_82_div_2_Template, 10, 9, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.myVisitForProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.myVisitForProperty);
  }
}
function PropertyDetailComponent_div_1_a_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Login to Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PropertyDetailComponent_div_1_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49)(1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Listed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 1, ctx_r1.property.createdAt, "MMM d, y"));
  }
}
function PropertyDetailComponent_div_1_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49)(1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Premium Until");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 1, ctx_r1.property.premiumExpiresAt, "MMM d, y"));
  }
}
function PropertyDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 11)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "\uD83D\uDCCD");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 12)(20, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, PropertyDetailComponent_div_1_span_24_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 16)(26, "div", 17)(27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](29, "indianPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, PropertyDetailComponent_div_1_ng_container_33_Template, 3, 2, "ng-container", 21)(34, PropertyDetailComponent_div_1_button_34_Template, 2, 1, "button", 22)(35, PropertyDetailComponent_div_1_a_35_Template, 2, 0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, PropertyDetailComponent_div_1_ng_container_37_Template, 2, 1, "ng-container", 21)(38, PropertyDetailComponent_div_1_div_38_Template, 4, 2, "div", 25)(39, PropertyDetailComponent_div_1_div_39_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, PropertyDetailComponent_div_1_div_40_Template, 4, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 28)(42, "div", 29)(43, "section", 30)(44, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "Property Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](47, PropertyDetailComponent_div_1_div_47_Template, 8, 1, "div", 32)(48, PropertyDetailComponent_div_1_div_48_Template, 8, 1, "div", 32)(49, PropertyDetailComponent_div_1_div_49_Template, 8, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 33)(51, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "\uD83C\uDFE0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div")(54, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](58, PropertyDetailComponent_div_1_section_58_Template, 5, 1, "section", 37)(59, PropertyDetailComponent_div_1_section_59_Template, 5, 1, "section", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "section", 39)(61, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](63, "app-property-map", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "div", 41)(65, "p")(66, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](69, PropertyDetailComponent_div_1_p_69_Template, 4, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "p")(71, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](74, PropertyDetailComponent_div_1_p_74_Template, 4, 1, "p", 21)(75, PropertyDetailComponent_div_1_p_75_Template, 4, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](76, PropertyDetailComponent_div_1_section_76_Template, 28, 3, "section", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "aside", 43)(78, "div", 44)(79, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](80, "Contact Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](81, PropertyDetailComponent_div_1_div_81_Template, 8, 2, "div", 45)(82, PropertyDetailComponent_div_1_ng_container_82_Template, 3, 2, "ng-container", 21)(83, PropertyDetailComponent_div_1_a_83_Template, 2, 0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "div", 47)(85, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, "Quick Facts");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "div", 48)(88, "div", 49)(89, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](90, "Property ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](91, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](93, PropertyDetailComponent_div_1_div_93_Template, 6, 4, "div", 52)(94, PropertyDetailComponent_div_1_div_94_Template, 6, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"](" ", ctx_r1.property.address, ", ", ctx_r1.property.city, "", ctx_r1.property.state ? ", " + ctx_r1.property.state : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.listingType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.propertyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.isPremium);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](29, 37, ctx_r1.property.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.listingType === "RENT" ? "per month" : "total price");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.hasActiveSession());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.auth.user());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.hasActiveSession());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.gallerySlides.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.gallerySlides.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.gallerySlides.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.zoomOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.bedrooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.bathrooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.areaSqft);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.property.propertyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.amenities);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("latitude", ctx_r1.property.latitude ?? null)("longitude", ctx_r1.property.longitude ?? null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.property.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.locality);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.property.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.pincode);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.viewCount !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.hasActiveSession());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.hasActiveSession());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("#", ctx_r1.property.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.property.isPremium && ctx_r1.property.premiumExpiresAt);
  }
}
function PropertyDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 5)(1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-skeleton-loader", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 119)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "app-skeleton-loader", 120)(6, "app-skeleton-loader", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "app-skeleton-loader", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function PropertyDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 5)(1, "div", 123)(2, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\uD83C\uDFE0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Browse Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.loadError ? "Unable to load property" : "Property Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.loadError || "The property you're looking for doesn't exist or has been removed.");
  }
}
function PropertyDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 3)(1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_Conditional_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeBookVisitDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_Conditional_4_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 128)(4, "h3", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Book Site Visit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_Conditional_4_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeBookVisitDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "form", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function PropertyDetailComponent_Conditional_4_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.submitVisit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 132)(10, "div", 133)(11, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function PropertyDetailComponent_Conditional_4_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.visitDateOnly, $event) || (ctx_r1.visitDateOnly = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 136)(15, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function PropertyDetailComponent_Conditional_4_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.visitTimeOnly, $event) || (ctx_r1.visitTimeOnly = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 139)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Additional Notes (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "textarea", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function PropertyDetailComponent_Conditional_4_Template_textarea_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.visitNotes, $event) || (ctx_r1.visitNotes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 141)(23, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_Conditional_4_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeBookVisitDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "Submit Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.visitDateOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.visitTimeOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.visitNotes);
  }
}
function PropertyDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 3)(1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_Conditional_5_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeRescheduleVisitDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_Conditional_5_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 128)(4, "h3", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Reschedule Site Visit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_Conditional_5_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeRescheduleVisitDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "form", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function PropertyDetailComponent_Conditional_5_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.submitReschedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 132)(10, "div", 133)(11, "label", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function PropertyDetailComponent_Conditional_5_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.rescheduleDateOnly, $event) || (ctx_r1.rescheduleDateOnly = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 136)(15, "label", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function PropertyDetailComponent_Conditional_5_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.rescheduleTimeOnly, $event) || (ctx_r1.rescheduleTimeOnly = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 141)(19, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PropertyDetailComponent_Conditional_5_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeRescheduleVisitDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rescheduleDateOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rescheduleTimeOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.rescheduling);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.rescheduling ? "Updating..." : "Reschedule Visit");
  }
}
let PropertyDetailComponent = /*#__PURE__*/(() => {
  class PropertyDetailComponent {
    constructor(route, api, config, auth, toast, cdr, ngZone, router, sanitizer) {
      this.route = route;
      this.api = api;
      this.config = config;
      this.auth = auth;
      this.toast = toast;
      this.cdr = cdr;
      this.ngZone = ngZone;
      this.router = router;
      this.sanitizer = sanitizer;
      this.property = null;
      this.loading = true;
      this.loadError = '';
      this.gallerySlides = [];
      this.galleryIndex = 0;
      this.inWatchlist = false;
      /** Avoid global error toast when optional "my visit" is absent (404 legacy) or 204. */
      this.silentOptionalVisitCtx = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpContext().set(_core_http_context_tokens__WEBPACK_IMPORTED_MODULE_10__.SILENT_NOT_FOUND, true);
      this.bookVisitOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
        debugName: "bookVisitOpen"
      }] : []));
      this.visitDateOnly = '';
      this.visitTimeOnly = '';
      this.visitNotes = '';
      this.myVisitForProperty = null;
      this.visitOtp = '';
      this.resendingOtp = false;
      this.rescheduleVisitOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
        debugName: "rescheduleVisitOpen"
      }] : []));
      this.rescheduleDateOnly = '';
      this.rescheduleTimeOnly = '';
      this.rescheduling = false;
      this.zoomOpen = false;
      this.zoomUrl = '';
      this.heroPlaceholderUrl = 'https://placehold.co/1200x675?text=Property';
    }
    onEscape() {
      if (this.bookVisitOpen()) {
        this.bookVisitOpen.set(false);
        return;
      }
      if (this.rescheduleVisitOpen()) {
        this.rescheduleVisitOpen.set(false);
        return;
      }
      this.zoomOpen = false;
    }
    closeBookVisitDialog() {
      this.bookVisitOpen.set(false);
    }
    closeRescheduleVisitDialog() {
      this.rescheduleVisitOpen.set(false);
    }
    imageFullUrl(url) {
      return (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_8__.resolvePropertyImageUrl)(url);
    }
    openZoom(url) {
      if (!url) return;
      this.zoomUrl = url;
      this.zoomOpen = true;
    }
    closeZoom() {
      this.zoomOpen = false;
    }
    hasActiveSession() {
      return !!this.auth.user() && !!this.auth.getToken();
    }
    get currentSlide() {
      if (!this.gallerySlides.length) return null;
      const i = Math.min(Math.max(0, this.galleryIndex), this.gallerySlides.length - 1);
      return this.gallerySlides[i];
    }
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (!id || id === 'new') {
        this.loading = false;
        this.loadError = 'Invalid property URL. Use a valid property link from search or home.';
        return;
      }
      this.loadError = '';
      this.api.get('/properties/' + id, {
        includeAnalytics: true
      }).subscribe({
        next: res => {
          this.ngZone.run(() => {
            const raw = res && res.data != null ? res.data : res;
            const p = raw && typeof raw === 'object' && (raw.id != null || raw.title != null) ? raw : null;
            this.property = p;
            this.loading = false;
            this.loadError = this.property ? '' : 'Invalid response from server.';
            this.rebuildGallery();
            if (this.hasActiveSession() && this.property) {
              this.api.get('/properties/' + id + '/watchlist').subscribe({
                next: r => {
                  this.inWatchlist = r.inWatchlist;
                  this.cdr.detectChanges();
                },
                error: () => {}
              });
              this.loadMyVisitForProperty();
            }
            this.cdr.detectChanges();
          });
        },
        error: err => {
          this.ngZone.run(() => {
            this.loading = false;
            this.loadError = err.status === 401 ? 'Please log in again to view this property.' : err.error?.message || 'Failed to load property.';
            this.cdr.detectChanges();
          });
        }
      });
    }
    /** Load current user's active site visit for this property so we show Reschedule instead of Book when one exists. */
    loadMyVisitForProperty() {
      if (!this.property?.id || !this.hasActiveSession()) return;
      this.api.get('/sitevisits/my/for-property/' + this.property.id, undefined, this.silentOptionalVisitCtx).subscribe({
        next: v => {
          this.myVisitForProperty = v ?? null;
          if (v?.status === 'ASSIGNED') this.loadVisitOtp(v.id);else this.visitOtp = '';
          this.cdr.detectChanges();
        },
        error: () => {
          this.myVisitForProperty = null;
          this.cdr.detectChanges();
        }
      });
    }
    rebuildGallery() {
      this.gallerySlides = (0,_core_utils_property_gallery_util__WEBPACK_IMPORTED_MODULE_9__.buildGallerySlides)(this.property?.images).map(slide => this.toRenderableSlide(slide));
      this.galleryIndex = 0;
    }
    toRenderableSlide(slide) {
      const thumbUrl = slide.kind === 'photo' ? this.imageFullUrl(slide.sourceUrl) : (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_8__.resolveVideoCardPosterUrl)(slide.sourceUrl) || 'https://placehold.co/200x200/0f172a/94a3b8?text=%E2%96%B6';
      return {
        ...slide,
        thumbUrl,
        safeEmbedUrl: slide.kind === 'video-embed' && slide.embedPlayUrl ? this.sanitizer.bypassSecurityTrustResourceUrl(slide.embedPlayUrl) : undefined
      };
    }
    prevGallery() {
      if (this.gallerySlides.length < 2) return;
      this.galleryIndex = (this.galleryIndex - 1 + this.gallerySlides.length) % this.gallerySlides.length;
    }
    nextGallery() {
      if (this.gallerySlides.length < 2) return;
      this.galleryIndex = (this.galleryIndex + 1) % this.gallerySlides.length;
    }
    pad2(n) {
      return String(n).padStart(2, '0');
    }
    defaultDateTimeParts(d = new Date()) {
      return {
        ymd: `${d.getFullYear()}-${this.pad2(d.getMonth() + 1)}-${this.pad2(d.getDate())}`,
        hm: `${this.pad2(d.getHours())}:${this.pad2(d.getMinutes())}`
      };
    }
    combineLocalDateTimeToIso(dateOnly, timeOnly) {
      const d = (dateOnly || '').trim();
      const t = (timeOnly || '').trim();
      if (!d || !t) return null;
      const [y, mo, day] = d.split('-').map(x => parseInt(x, 10));
      const timeParts = t.split(':');
      const h = parseInt(timeParts[0] || '0', 10);
      const mi = parseInt(timeParts[1] || '0', 10);
      if (!y || !mo || !day || Number.isNaN(h) || Number.isNaN(mi)) return null;
      const dt = new Date(y, mo - 1, day, h, mi, 0, 0);
      if (Number.isNaN(dt.getTime())) return null;
      return dt.toISOString();
    }
    get amenitiesList() {
      if (!this.property?.amenities) return [];
      return this.property.amenities.split(',').map(a => a.trim()).filter(a => a);
    }
    bookVisit() {
      if (!this.hasActiveSession()) {
        this.toast.info('Please login again to book a visit.');
        return;
      }
      if (this.myVisitForProperty) {
        this.toast.info('You already have a site visit for this property. Use Reschedule to change the date.');
        return;
      }
      const {
        ymd,
        hm
      } = this.defaultDateTimeParts();
      this.visitDateOnly = ymd;
      this.visitTimeOnly = hm;
      this.ngZone.run(() => {
        this.bookVisitOpen.set(true);
        this.cdr.detectChanges();
      });
    }
    submitVisit() {
      if (!this.property) return;
      if (this.myVisitForProperty) {
        this.toast.info('You already have an active site visit request for this property.');
        this.bookVisitOpen.set(false);
        return;
      }
      const scheduledAt = this.combineLocalDateTimeToIso(this.visitDateOnly, this.visitTimeOnly);
      if (!scheduledAt) {
        this.toast.warning('Please choose a valid date and time.');
        return;
      }
      this.api.post('/sitevisits', {
        propertyId: this.property.id,
        scheduledAt,
        userNotes: this.visitNotes
      }).subscribe({
        next: v => {
          this.toast.success('Visit requested! An admin will assign an agent — you will get an OTP via SMS when assigned.');
          this.bookVisitOpen.set(false);
          this.visitDateOnly = '';
          this.visitTimeOnly = '';
          this.visitNotes = '';
          this.myVisitForProperty = v;
        },
        error: e => {
          if (e?.status === 401) {
            this.toast.info('Session expired. Please login again.');
            this.router.navigate(['/login']);
            return;
          }
          this.toast.error(e.error?.message || 'Failed to book visit');
        }
      });
    }
    openReschedule() {
      if (!this.myVisitForProperty) return;
      const {
        ymd,
        hm
      } = this.defaultDateTimeParts(new Date(this.myVisitForProperty.scheduledAt));
      this.rescheduleDateOnly = ymd;
      this.rescheduleTimeOnly = hm;
      this.ngZone.run(() => {
        this.rescheduleVisitOpen.set(true);
        this.cdr.detectChanges();
      });
    }
    submitReschedule() {
      if (!this.myVisitForProperty) return;
      const scheduledAt = this.combineLocalDateTimeToIso(this.rescheduleDateOnly, this.rescheduleTimeOnly);
      if (!scheduledAt) {
        this.toast.warning('Please choose a valid date and time.');
        return;
      }
      this.rescheduling = true;
      this.api.put(`/sitevisits/${this.myVisitForProperty.id}/reschedule`, {
        scheduledAt
      }).subscribe({
        next: v => {
          this.myVisitForProperty = v;
          this.rescheduleVisitOpen.set(false);
          this.rescheduleDateOnly = '';
          this.rescheduleTimeOnly = '';
          this.rescheduling = false;
          this.toast.success('Visit rescheduled successfully.');
        },
        error: e => {
          this.rescheduling = false;
          if (e?.status === 401) {
            this.toast.info('Session expired. Please login again.');
            this.router.navigate(['/login']);
            return;
          }
          this.toast.error(e.error?.message || 'Failed to reschedule');
        }
      });
    }
    toggleWatchlist() {
      if (!this.property || !this.hasActiveSession()) return;
      if (this.inWatchlist) {
        this.api.delete('/properties/' + this.property.id + '/watchlist').subscribe({
          next: () => {
            this.inWatchlist = false;
            this.toast.success('Removed from likes');
          }
        });
      } else {
        this.api.post('/properties/' + this.property.id + '/watchlist', {}).subscribe({
          next: () => {
            this.inWatchlist = true;
            this.toast.success('Added to likes');
          }
        });
      }
    }
    visitStatusLabel() {
      if (!this.myVisitForProperty) return '';
      return this.myVisitForProperty.status === 'ASSIGNED' ? 'Agent assigned' : 'Pending assignment';
    }
    loadVisitOtp(visitId) {
      this.api.get(`/sitevisits/${visitId}/otp`).subscribe({
        next: res => {
          this.visitOtp = res.otp;
          this.cdr.detectChanges();
        },
        error: () => {
          this.visitOtp = '';
        }
      });
    }
    resendVisitOtp() {
      if (!this.myVisitForProperty) return;
      this.resendingOtp = true;
      this.api.post(`/sitevisits/${this.myVisitForProperty.id}/resend-otp`, {}).subscribe({
        next: res => {
          this.visitOtp = res.otp;
          this.resendingOtp = false;
          this.toast.success(res.message || 'OTP resent to your mobile');
          this.cdr.detectChanges();
        },
        error: e => {
          this.resendingOtp = false;
          this.toast.error(e.error?.message || 'Failed to resend OTP');
        }
      });
    }
    static {
      this.ɵfac = function PropertyDetailComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PropertyDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_15__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.DomSanitizer));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: PropertyDetailComponent,
        selectors: [["app-property-detail"]],
        hostBindings: function PropertyDetailComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.escape", function PropertyDetailComponent_keydown_escape_HostBindingHandler() {
              return ctx.onEscape();
            }, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveDocument"]);
          }
        },
        decls: 6,
        vars: 5,
        consts: [[1, "property-detail-wrapper"], ["class", "property-detail-page", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["role", "presentation", 1, "pv-dialog-root"], [1, "property-detail-page"], [1, "container"], [1, "breadcrumb"], ["routerLink", "/"], ["routerLink", "/search"], [1, "property-header"], [1, "header-left"], [1, "property-location"], [1, "property-badges"], [1, "badge", "badge-listing"], [1, "badge", "badge-type"], ["class", "badge badge-premium", 4, "ngIf"], [1, "header-right"], [1, "price-section"], [1, "price"], [1, "price-label"], [1, "action-buttons"], [4, "ngIf"], ["class", "btn btn-outline", 3, "click", 4, "ngIf"], ["routerLink", "/login", "class", "btn btn-primary btn-lg", 4, "ngIf"], [1, "gallery-section"], ["class", "main-image main-image-empty", 4, "ngIf"], ["class", "thumbnail-grid", 4, "ngIf"], ["class", "zoom-overlay", 3, "click", 4, "ngIf"], [1, "property-content"], [1, "main-content"], [1, "info-section", "card"], [1, "details-grid"], ["class", "detail-item", 4, "ngIf"], [1, "detail-item"], [1, "detail-icon"], [1, "detail-label"], [1, "detail-value"], ["class", "description-section card", 4, "ngIf"], ["class", "amenities-section card", 4, "ngIf"], [1, "location-section", "card"], ["mode", "view", 3, "latitude", "longitude"], [1, "location-details"], ["class", "analytics-section card", 4, "ngIf"], [1, "sidebar"], [1, "contact-card", "card"], ["class", "owner-info", 4, "ngIf"], ["routerLink", "/login", "class", "btn btn-primary btn-block", 4, "ngIf"], [1, "quick-info", "card"], [1, "quick-facts"], [1, "fact-item"], [1, "fact-label"], [1, "fact-value"], ["class", "fact-item", 4, "ngIf"], [1, "badge", "badge-premium"], ["class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], ["class", "existing-visit-actions", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "existing-visit-actions"], [1, "visit-status-badge"], [1, "visit-scheduled"], ["class", "visit-otp-box", 4, "ngIf"], ["class", "visit-pending-msg", 4, "ngIf"], [1, "visit-otp-box"], [1, "otp-label"], [1, "otp-code"], [1, "otp-hint"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click", "disabled"], [1, "visit-pending-msg"], [1, "btn", "btn-outline", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-primary", "btn-lg"], ["class", "main-image", 4, "ngIf"], [1, "main-image"], [1, "verified-badge"], [3, "ngSwitch"], ["class", "hero-photo hero-media zoomable", 3, "src", "alt", "click", 4, "ngSwitchCase"], ["class", "hero-embed hero-media", "title", "Property video", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "allowfullscreen", "", "referrerpolicy", "strict-origin-when-cross-origin", "loading", "lazy", 3, "src", 4, "ngSwitchCase"], ["type", "button", "class", "gallery-nav prev", 3, "click", 4, "ngIf"], ["type", "button", "class", "gallery-nav next", 3, "click", 4, "ngIf"], ["class", "image-counter", 4, "ngIf"], [1, "hero-photo", "hero-media", "zoomable", 3, "click", "src", "alt"], ["title", "Property video", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "allowfullscreen", "", "referrerpolicy", "strict-origin-when-cross-origin", "loading", "lazy", 1, "hero-embed", "hero-media", 3, "src"], ["type", "button", 1, "gallery-nav", "prev", 3, "click"], ["type", "button", 1, "gallery-nav", "next", 3, "click"], [1, "image-counter"], [1, "main-image", "main-image-empty"], [1, "hero-photo", "hero-media", 3, "src", "alt"], [1, "thumbnail-grid"], ["type", "button", 3, "active", "click", "dblclick", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click", "dblclick"], ["alt", "", "loading", "lazy", 3, "src"], ["class", "thumb-video-icon", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "thumb-video-icon"], [1, "zoom-overlay", 3, "click"], ["alt", "Zoom", 1, "zoom-image", 3, "click", "src"], ["type", "button", 1, "zoom-close", 3, "click"], [1, "description-section", "card"], [1, "amenities-section", "card"], [1, "amenities-list"], ["class", "amenity-item", 4, "ngFor", "ngForOf"], [1, "amenity-item"], [1, "analytics-section", "card"], [1, "analytics-grid"], [1, "analytics-item"], [1, "analytics-icon"], [1, "analytics-value"], [1, "analytics-label"], [1, "owner-info"], [1, "owner-avatar"], [1, "owner-name"], [1, "owner-role"], ["class", "btn btn-primary btn-block", 3, "click", 4, "ngIf"], ["class", "existing-visit-sidebar", 4, "ngIf"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "existing-visit-sidebar"], [1, "visit-scheduled-text"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", "btn-block", 3, "click", "disabled"], ["routerLink", "/login", 1, "btn", "btn-primary", "btn-block"], [1, "loading-skeleton"], ["height", "400px", 2, "margin-bottom", "2rem"], [2, "display", "grid", "grid-template-columns", "2fr 1fr", "gap", "2rem"], ["height", "200px", 2, "margin-bottom", "1rem"], ["height", "200px"], ["height", "300px"], [1, "not-found"], [1, "not-found-icon"], ["routerLink", "/search", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "pv-dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "pv-book-title", 1, "pv-dialog-panel", 3, "click"], [1, "pv-dialog-header"], ["id", "pv-book-title"], ["type", "button", "aria-label", "Close", 1, "pv-dialog-close", 3, "click"], [1, "pv-dialog-body", "pv-dialog-form", 3, "ngSubmit"], [1, "form-group", "pv-datetime-block"], [1, "pv-date-field"], ["for", "pv-visit-date"], ["id", "pv-visit-date", "type", "date", "name", "visitDateOnly", "required", "", 3, "ngModelChange", "ngModel"], [1, "pv-time-field"], ["for", "pv-visit-time"], ["id", "pv-visit-time", "type", "time", "name", "visitTimeOnly", "step", "300", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["name", "visitNotes", "rows", "4", "placeholder", "Any special requirements or questions...", 3, "ngModelChange", "ngModel"], [1, "pv-dialog-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "pv-reschedule-title", 1, "pv-dialog-panel", 3, "click"], ["id", "pv-reschedule-title"], ["for", "pv-reschedule-date"], ["id", "pv-reschedule-date", "type", "date", "name", "rescheduleDateOnly", "required", "", 3, "ngModelChange", "ngModel"], ["for", "pv-reschedule-time"], ["id", "pv-reschedule-time", "type", "time", "name", "rescheduleTimeOnly", "step", "300", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
        template: function PropertyDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PropertyDetailComponent_div_1_Template, 95, 39, "div", 1)(2, PropertyDetailComponent_div_2_Template, 8, 0, "div", 2)(3, PropertyDetailComponent_div_3_Template, 10, 2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](4, PropertyDetailComponent_Conditional_4_Template, 27, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](5, PropertyDetailComponent_Conditional_5_Template, 23, 4, "div", 3);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.property && !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.property && !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx.bookVisitOpen() ? 4 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx.rescheduleVisitOpen() ? 5 : -1);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_5__.SkeletonLoaderComponent, _shared_property_map_property_map_component__WEBPACK_IMPORTED_MODULE_6__.PropertyMapComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _shared_pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_7__.IndianPricePipe],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 60vh;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.property-detail-wrapper[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  width: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n  box-sizing: border-box;\n}\n\n.property-detail-page[_ngcontent-%COMP%] {\n  padding: 2rem 0 4rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.property-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 2px solid var(--border-light);\n}\n\n.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.75rem;\n  color: var(--text);\n}\n\n.property-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-muted);\n  margin-bottom: 1rem;\n  font-size: 1rem;\n}\n\n.property-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.price-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%);\n  border-radius: var(--radius-lg);\n  border: 2px solid rgba(14, 165, 233, 0.1);\n}\n\n.price[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.1;\n  letter-spacing: -1px;\n}\n\n.price-label[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--text-muted);\n  margin-top: 0.5rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-width: 200px;\n  align-items: stretch;\n}\n\n.gallery-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.main-image[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 16/10;\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  margin-bottom: 1.25rem;\n  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);\n  box-shadow: var(--shadow-xl);\n  border: 2px solid var(--border-light);\n}\n\n.main-image[_ngcontent-%COMP%]   .hero-media[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.main-image[_ngcontent-%COMP%]   .hero-photo[_ngcontent-%COMP%], \n.main-image[_ngcontent-%COMP%]   .hero-embed[_ngcontent-%COMP%], \n.main-image[_ngcontent-%COMP%]   .hero-video[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n\n.main-image[_ngcontent-%COMP%]   .hero-embed[_ngcontent-%COMP%], \n.main-image[_ngcontent-%COMP%]   .hero-video[_ngcontent-%COMP%] {\n  object-fit: contain;\n  background: #0f172a;\n}\n\n.main-image[_ngcontent-%COMP%]   .hero-photo[_ngcontent-%COMP%] {\n  transition: transform 0.4s;\n}\n\n.main-image[_ngcontent-%COMP%]:hover   .hero-photo[_ngcontent-%COMP%] {\n  transform: scale(1.02);\n}\n\n.gallery-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: var(--transition);\n  z-index: 5;\n}\n\n.gallery-nav[_ngcontent-%COMP%]:hover {\n  background: white;\n  box-shadow: var(--shadow-lg);\n}\n\n.gallery-nav.prev[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n\n.gallery-nav.next[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n\n.image-counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.875rem;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  z-index: 5;\n}\n\n.verified-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  z-index: 6;\n  background: var(--verified-gradient);\n  color: #fff;\n  padding: 0.35rem 0.7rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.thumbnail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 0.75rem;\n}\n\n.thumbnail-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  border: 3px solid transparent;\n  border-radius: var(--radius-sm);\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n  transition: var(--transition);\n  opacity: 0.7;\n  background: var(--bg-secondary);\n}\n\n.thumbnail-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.thumb-video-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  color: #fff;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.75);\n  pointer-events: none;\n  background: rgba(15, 23, 42, 0.35);\n}\n\n.thumbnail-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.thumbnail-grid[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-color: var(--primary);\n  transform: scale(1.05);\n}\n\n.property-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 2rem;\n  min-width: 0;\n}\n\n.property-content[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%], \n.property-content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.info-section[_ngcontent-%COMP%], .description-section[_ngcontent-%COMP%], .amenities-section[_ngcontent-%COMP%], .location-section[_ngcontent-%COMP%], .analytics-section[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  margin-bottom: 2rem;\n  border: 1px solid var(--border);\n}\n\n.info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .description-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .amenities-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .location-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .analytics-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.625rem;\n  margin-bottom: 2rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 3px solid var(--border-light);\n  font-weight: 800;\n  color: var(--text);\n  position: relative;\n}\n\n.info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after, .description-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after, .amenities-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after, .location-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after, .analytics-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  width: 60px;\n  height: 3px;\n  background: var(--primary-gradient);\n  border-radius: 2px;\n}\n\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--bg);\n  border-radius: var(--radius);\n}\n\n.detail-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin-bottom: 0.25rem;\n}\n\n.detail-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text);\n}\n\n.amenities-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n\n.amenity-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n\n.map-container[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  border-radius: var(--radius);\n  background: var(--bg-secondary);\n}\n\n.location-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  color: var(--text-secondary);\n}\n\n.analytics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n\n.analytics-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem;\n  background: var(--bg);\n  border-radius: var(--radius);\n}\n\n.analytics-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n.analytics-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 0.25rem;\n}\n\n.analytics-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 100px;\n  height: fit-content;\n}\n\n.contact-card[_ngcontent-%COMP%], .quick-info[_ngcontent-%COMP%] {\n  padding: 2rem;\n  margin-bottom: 1.5rem;\n  border: 2px solid var(--border);\n}\n\n.contact-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .quick-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  font-size: 1.375rem;\n  font-weight: 700;\n  color: var(--text);\n  padding-bottom: 1rem;\n  border-bottom: 2px solid var(--border-light);\n}\n\n.owner-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.owner-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n\n.owner-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text);\n}\n\n.owner-role[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.quick-facts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.fact-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.fact-label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n\n.fact-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text);\n}\n\n\n\n.pv-dialog-root[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 600000;\n  pointer-events: none;\n}\n\n.pv-dialog-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  pointer-events: auto;\n}\n\n.pv-dialog-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: min(96vw, 640px);\n  max-height: min(92vh, 860px);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  background: var(--surface);\n  color: var(--text);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-2xl);\n  border: 1px solid var(--border);\n  z-index: 1;\n}\n\n.pv-dialog-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.pv-dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text);\n}\n\n.pv-dialog-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius-sm);\n  line-height: 1;\n}\n\n.pv-dialog-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg);\n  color: var(--text);\n}\n\n.pv-dialog-body[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.75rem;\n}\n\n.pv-dialog-body.pv-dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding-bottom: 2rem;\n}\n\n.pv-datetime-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem 1.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.pv-date-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.pv-time-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.35rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n\n.pv-date-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.pv-time-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 2.75rem;\n  padding: 0.5rem 0.65rem;\n  font-size: 1rem;\n}\n\n@media (max-width: 520px) {\n  .pv-datetime-block[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pv-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 1.25rem;\n  flex-shrink: 0;\n  border-top: 1px solid var(--border-light);\n  background: var(--surface);\n}\n\n.loading-skeleton[_ngcontent-%COMP%], .not-found[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  text-align: center;\n}\n\n.not-found-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n\n@media (max-width: 1024px) {\n  .property-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .property-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n@media (max-width: 768px) {\n  .property-header[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .property-detail-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n.zoomable[_ngcontent-%COMP%] {\n  cursor: zoom-in;\n}\n\n.zoom-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n}\n\n.zoom-image[_ngcontent-%COMP%] {\n  max-width: 95vw;\n  max-height: 95vh;\n  object-fit: contain;\n  cursor: default;\n}\n\n.existing-visit-actions[_ngcontent-%COMP%], .existing-visit-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.visit-status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 0.2rem 0.55rem;\n  border-radius: 999px;\n  background: var(--status-pending-bg);\n  color: var(--status-pending-text);\n  width: fit-content;\n}\n\n.visit-status-badge.assigned[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success-text);\n}\n\n.visit-otp-box[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background: var(--info-bg);\n  border: 1px solid rgba(14, 165, 233, 0.25);\n  border-radius: var(--radius);\n}\n\n.otp-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 0.25rem;\n}\n\n.otp-code[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  letter-spacing: 0.2em;\n  font-family: monospace;\n  color: var(--primary-dark);\n  margin-bottom: 0.35rem;\n}\n\n.otp-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  margin-bottom: 0.5rem;\n}\n\n.visit-pending-msg[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n\n.visit-scheduled[_ngcontent-%COMP%], .visit-scheduled-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n\n.zoom-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 48px;\n  height: 48px;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 2rem;\n  line-height: 1;\n  border-radius: 50%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvcGVydHktZGV0YWlsL3Byb3BlcnR5LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBUSxjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLFdBQUE7RUFBYSxzQkFBQTtBQUkzRDs7QUFISTtFQUEyQixnQkFBQTtFQUFrQixXQUFBO0VBQWEsZUFBQTtFQUFpQixrQkFBQTtFQUFvQixzQkFBQTtBQVduRzs7QUFWSTtFQUF3QixvQkFBQTtFQUFzQixXQUFBO0VBQWEsc0JBQUE7QUFnQi9EOztBQWZJO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBa0JOOztBQWhCSTtFQUFnQixxQkFBQTtBQW9CcEI7O0FBbkJJO0VBQW1CLHdCQUFBO0FBdUJ2Qjs7QUF0Qkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7QUF5Qk47O0FBdkJJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUEwQk47O0FBeEJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBMkJOOztBQXpCSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQTRCTjs7QUExQkk7RUFDRSxpQkFBQTtBQTZCTjs7QUEzQkk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4RkFBQTtFQUNBLCtCQUFBO0VBQ0EseUNBQUE7QUE4Qk47O0FBNUJJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQStCTjs7QUE3Qkk7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFnQ047O0FBOUJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFpQ047O0FBL0JJO0VBQ0UsbUJBQUE7QUFrQ047O0FBaENJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9GQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtBQW1DTjs7QUFqQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBb0NOOztBQWxDSTs7O0VBR0Usa0JBQUE7RUFDQSxRQUFBO0FBcUNOOztBQW5DSTs7RUFFRSxtQkFBQTtFQUNBLG1CQUFBO0FBc0NOOztBQXBDSTtFQUNFLDBCQUFBO0FBdUNOOztBQXJDSTtFQUNFLHNCQUFBO0FBd0NOOztBQXRDSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBeUNOOztBQXZDSTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7QUEwQ047O0FBeENJO0VBQW9CLFVBQUE7QUE0Q3hCOztBQTNDSTtFQUFvQixXQUFBO0FBK0N4Qjs7QUE5Q0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFVBQUE7QUFpRE47O0FBL0NJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBa0ROOztBQWhESTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFlBQUE7QUFtRE47O0FBakRJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQW9ETjs7QUFsREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXFETjs7QUFuREk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQXNETjs7QUFwREk7O0VBRUUsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUF1RE47O0FBckRJO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUF3RE47O0FBdERJOztFQUVFLFlBQUE7QUF5RE47O0FBdkRJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUEwRE47O0FBeERJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEyRE47O0FBekRJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUE0RE47O0FBMURJO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsV0FBQTtBQTZETjs7QUEzREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUE4RE47O0FBNURJO0VBQ0UsZUFBQTtBQStETjs7QUE3REk7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFnRU47O0FBOURJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQWlFTjs7QUEvREk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFrRU47O0FBaEVJO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQW1FTjs7QUFqRUk7RUFDRSxxQkFBQTtBQW9FTjs7QUFsRUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUFxRU47O0FBbkVJO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtBQXNFTjs7QUFwRUk7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FBdUVOOztBQXJFSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUF3RU47O0FBdEVJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBeUVOOztBQXZFSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBMEVOOztBQXhFSTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUEyRU47O0FBekVJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUE0RU47O0FBMUVJO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUE2RU47O0FBM0VJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0FBOEVOOztBQTVFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7QUErRU47O0FBN0VJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWdGTjs7QUE5RUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBaUZOOztBQS9FSTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUFrRk47O0FBaEZJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQW1GTjs7QUFqRkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FBb0ZOOztBQWxGSTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7QUFxRk47O0FBbkZJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQXNGTjs7QUFwRkksa0dBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBdUZOOztBQXJGSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUF3Rk47O0FBdEZJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtBQXlGTjs7QUF2Rkk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0FBMEZOOztBQXhGSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUEyRk47O0FBekZJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQTRGTjs7QUExRkk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBNkZOOztBQTNGSTtFQUNFLHVCQUFBO0FBOEZOOztBQTVGSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQStGTjs7QUE3Rkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBZ0dOOztBQTlGSTs7RUFFRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFpR047O0FBL0ZJOztFQUVFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBa0dOOztBQWhHSTtFQUNFO0lBQ0UsMEJBQUE7RUFtR047QUFDRjtBQWpHSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsMEJBQUE7QUFtR047O0FBakdJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBb0dOOztBQWxHSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQXFHTjs7QUFuR0k7RUFDRTtJQUNFLDBCQUFBO0VBc0dOO0VBcEdJO0lBQ0UsZ0JBQUE7RUFzR047RUFwR0k7SUFDRSxzQkFBQTtFQXNHTjtFQXBHSTtJQUNFLGdCQUFBO0VBc0dOO0VBcEdJO0lBQ0UsbUJBQUE7RUFzR047QUFDRjtBQXBHSTtFQUNFO0lBQW1CLFNBQUE7RUF1R3ZCO0VBdEdJO0lBQW1DLGtCQUFBO0lBQW9CLG1CQUFBO0VBMEczRDtBQUNGO0FBekdJO0VBQ0UsZUFBQTtBQTJHTjs7QUF6R0k7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUE0R047O0FBMUdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBNkdOOztBQTNHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUE4R047O0FBNUdJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUErR047O0FBN0dJO0VBQStCLDZCQUFBO0VBQStCLDBCQUFBO0FBa0hsRTs7QUFqSEk7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMENBQUE7RUFDQSw0QkFBQTtBQW9ITjs7QUFsSEk7RUFBYSxjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLHdCQUFBO0VBQTBCLHNCQUFBO0FBeUgvRTs7QUF4SEk7RUFBWSxjQUFBO0VBQWdCLGlCQUFBO0VBQW1CLHFCQUFBO0VBQXVCLHNCQUFBO0VBQXdCLDBCQUFBO0VBQTRCLHNCQUFBO0FBaUk5SDs7QUFoSUk7RUFBWSxjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLHdCQUFBO0VBQTBCLHFCQUFBO0FBdUk5RTs7QUF0SUk7RUFBcUIsa0JBQUE7RUFBb0Isd0JBQUE7RUFBMEIsU0FBQTtBQTRJdkU7O0FBM0lJO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBQThJTjs7QUE1SUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUErSU4iLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyBtaW4taGVpZ2h0OiA2MHZoOyB3aWR0aDogMTAwJTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5wcm9wZXJ0eS1kZXRhaWwtd3JhcHBlciB7IG1pbi1oZWlnaHQ6IDYwdmg7IHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDEwMCU7IG92ZXJmbG93LXg6IGhpZGRlbjsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5wcm9wZXJ0eS1kZXRhaWwtcGFnZSB7IHBhZGRpbmc6IDJyZW0gMCA0cmVtOyB3aWR0aDogMTAwJTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5icmVhZGNydW1iIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgfVxuICAgIC5icmVhZGNydW1iIGEgeyBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cbiAgICAuYnJlYWRjcnVtYiBzcGFuIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICAgLnByb3BlcnR5LWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBnYXA6IDJyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICB9XG4gICAgLmhlYWRlci1sZWZ0IGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgfVxuICAgIC5wcm9wZXJ0eS1sb2NhdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLnByb3BlcnR5LWJhZGdlcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5oZWFkZXItcmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5wcmljZS1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE0LCAxNjUsIDIzMywgMC4wNSkgMCUsIHJnYmEoMiwgMTMyLCAxOTksIDAuMDUpIDEwMCUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTQsIDE2NSwgMjMzLCAwLjEpO1xuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICB9XG4gICAgLnByaWNlLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgfVxuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMC43NXJlbTtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB9XG4gICAgLmdhbGxlcnktc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cbiAgICAubWFpbi1pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBhc3BlY3QtcmF0aW86IDE2LzEwO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYmctc2Vjb25kYXJ5KSAwJSwgdmFyKC0tYmctdGVydGlhcnkpIDEwMCUpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gICAgfVxuICAgIC5tYWluLWltYWdlIC5oZXJvLW1lZGlhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5tYWluLWltYWdlIC5oZXJvLXBob3RvLFxuICAgIC5tYWluLWltYWdlIC5oZXJvLWVtYmVkLFxuICAgIC5tYWluLWltYWdlIC5oZXJvLXZpZGVvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiAwO1xuICAgIH1cbiAgICAubWFpbi1pbWFnZSAuaGVyby1lbWJlZCxcbiAgICAubWFpbi1pbWFnZSAuaGVyby12aWRlbyB7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgICB9XG4gICAgLm1haW4taW1hZ2UgLmhlcm8tcGhvdG8ge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XG4gICAgfVxuICAgIC5tYWluLWltYWdlOmhvdmVyIC5oZXJvLXBob3RvIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgfVxuICAgIC5nYWxsZXJ5LW5hdiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICB6LWluZGV4OiA1O1xuICAgIH1cbiAgICAuZ2FsbGVyeS1uYXY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICAgIH1cbiAgICAuZ2FsbGVyeS1uYXYucHJldiB7IGxlZnQ6IDFyZW07IH1cbiAgICAuZ2FsbGVyeS1uYXYubmV4dCB7IHJpZ2h0OiAxcmVtOyB9XG4gICAgLmltYWdlLWNvdW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxcmVtO1xuICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICB6LWluZGV4OiA1O1xuICAgIH1cbiAgICAudmVyaWZpZWQtYmFkZ2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxcmVtO1xuICAgICAgbGVmdDogMXJlbTtcbiAgICAgIHotaW5kZXg6IDY7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXJpZmllZC1ncmFkaWVudCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDAuMzVyZW0gMC43cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICAudGh1bWJuYWlsLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMC43NXJlbTtcbiAgICB9XG4gICAgLnRodW1ibmFpbC1ncmlkIGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgICB9XG4gICAgLnRodW1ibmFpbC1ncmlkIGJ1dHRvbiBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAudGh1bWItdmlkZW8taWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBpbnNldDogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjM1KTtcbiAgICB9XG4gICAgLnRodW1ibmFpbC1ncmlkIGJ1dHRvbjpob3ZlcixcbiAgICAudGh1bWJuYWlsLWdyaWQgYnV0dG9uLmFjdGl2ZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuICAgIC5wcm9wZXJ0eS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MDBweDtcbiAgICAgIGdhcDogMnJlbTtcbiAgICAgIG1pbi13aWR0aDogMDtcbiAgICB9XG4gICAgLnByb3BlcnR5LWNvbnRlbnQgLm1haW4tY29udGVudCxcbiAgICAucHJvcGVydHktY29udGVudCAuc2lkZWJhciB7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgfVxuICAgIC5pbmZvLXNlY3Rpb24sIC5kZXNjcmlwdGlvbi1zZWN0aW9uLCAuYW1lbml0aWVzLXNlY3Rpb24sIC5sb2NhdGlvbi1zZWN0aW9uLCAuYW5hbHl0aWNzLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogMi41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgfVxuICAgIC5pbmZvLXNlY3Rpb24gaDIsIC5kZXNjcmlwdGlvbi1zZWN0aW9uIGgyLCAuYW1lbml0aWVzLXNlY3Rpb24gaDIsIC5sb2NhdGlvbi1zZWN0aW9uIGgyLCAuYW5hbHl0aWNzLXNlY3Rpb24gaDIge1xuICAgICAgZm9udC1zaXplOiAxLjYyNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmluZm8tc2VjdGlvbiBoMjo6YWZ0ZXIsIC5kZXNjcmlwdGlvbi1zZWN0aW9uIGgyOjphZnRlciwgLmFtZW5pdGllcy1zZWN0aW9uIGgyOjphZnRlciwgLmxvY2F0aW9uLXNlY3Rpb24gaDI6OmFmdGVyLCAuYW5hbHl0aWNzLXNlY3Rpb24gaDI6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtM3B4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyYWRpZW50KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gICAgLmRldGFpbHMtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgICBnYXA6IDEuNXJlbTtcbiAgICB9XG4gICAgLmRldGFpbC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gICAgfVxuICAgIC5kZXRhaWwtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC5kZXRhaWwtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgfVxuICAgIC5kZXRhaWwtdmFsdWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICB9XG4gICAgLmFtZW5pdGllcy1saXN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDAuNzVyZW07XG4gICAgfVxuICAgIC5hbWVuaXR5LWl0ZW0ge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuICAgIC5tYXAtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG4gICAgLm1hcCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgICB9XG4gICAgLmxvY2F0aW9uLWRldGFpbHMgcCB7XG4gICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG4gICAgLmFuYWx5dGljcy1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgZ2FwOiAxLjVyZW07XG4gICAgfVxuICAgIC5hbmFseXRpY3MtaXRlbSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICAgIH1cbiAgICAuYW5hbHl0aWNzLWljb24ge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cbiAgICAuYW5hbHl0aWNzLXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIH1cbiAgICAuYW5hbHl0aWNzLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICAgIC5zaWRlYmFyIHtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB9XG4gICAgLmNvbnRhY3QtY2FyZCwgLnF1aWNrLWluZm8ge1xuICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgfVxuICAgIC5jb250YWN0LWNhcmQgaDMsIC5xdWljay1pbmZvIGgzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICB9XG4gICAgLm93bmVyLWluZm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDFyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgIH1cbiAgICAub3duZXItYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG4gICAgLm93bmVyLW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICB9XG4gICAgLm93bmVyLXJvbGUge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICB9XG4gICAgLnF1aWNrLWZhY3RzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgIH1cbiAgICAuZmFjdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICB9XG4gICAgLmZhY3QtbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICB9XG4gICAgLmZhY3QtdmFsdWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICB9XG4gICAgLyogU2l0ZSB2aXNpdCBkaWFsb2dzOiBzZXBhcmF0ZSBiYWNrZHJvcCArIHBhbmVsIChhdm9pZHMgZ2xvYmFsIC5jYXJkIG92ZXJmbG93OmhpZGRlbiBjbGlwcGluZykuICovXG4gICAgLnB2LWRpYWxvZy1yb290IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGluc2V0OiAwO1xuICAgICAgei1pbmRleDogNjAwMDAwO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgIC5wdi1kaWFsb2ctYmFja2Ryb3Age1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNTUpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICAgIC5wdi1kaWFsb2ctcGFuZWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIHdpZHRoOiBtaW4oOTZ2dywgNjQwcHgpO1xuICAgICAgbWF4LWhlaWdodDogbWluKDkydmgsIDg2MHB4KTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTJ4bCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgLnB2LWRpYWxvZy1oZWFkZXIge1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gICAgfVxuICAgIC5wdi1kaWFsb2ctaGVhZGVyIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgfVxuICAgIC5wdi1kaWFsb2ctY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG4gICAgLnB2LWRpYWxvZy1jbG9zZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgfVxuICAgIC5wdi1kaWFsb2ctYm9keSB7XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMS43NXJlbTtcbiAgICB9XG4gICAgLnB2LWRpYWxvZy1ib2R5LnB2LWRpYWxvZy1mb3JtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIH1cbiAgICAucHYtZGF0ZXRpbWUtYmxvY2sge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGdhcDogMXJlbSAxLjI1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICB9XG4gICAgLnB2LWRhdGUtZmllbGQgbGFiZWwsXG4gICAgLnB2LXRpbWUtZmllbGQgbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjM1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cbiAgICAucHYtZGF0ZS1maWVsZCBpbnB1dCxcbiAgICAucHYtdGltZS1maWVsZCBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBtaW4taGVpZ2h0OiAyLjc1cmVtO1xuICAgICAgcGFkZGluZzogMC41cmVtIDAuNjVyZW07XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xuICAgICAgLnB2LWRhdGV0aW1lLWJsb2NrIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICB9XG4gICAgfVxuICAgIC5wdi1kaWFsb2ctYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gICAgfVxuICAgIC5sb2FkaW5nLXNrZWxldG9uLCAubm90LWZvdW5kIHtcbiAgICAgIHBhZGRpbmc6IDRyZW0gMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLm5vdC1mb3VuZC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIC5wcm9wZXJ0eS1jb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICB9XG4gICAgICAuc2lkZWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICB9XG4gICAgICAucHJvcGVydHktaGVhZGVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXItcmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgICAgLmFjdGlvbi1idXR0b25zIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAucHJvcGVydHktaGVhZGVyIHsgZ2FwOiAxcmVtOyB9XG4gICAgICAucHJvcGVydHktZGV0YWlsLXBhZ2UgLmNvbnRhaW5lciB7IHBhZGRpbmctbGVmdDogMXJlbTsgcGFkZGluZy1yaWdodDogMXJlbTsgfVxuICAgIH1cbiAgICAuem9vbWFibGUge1xuICAgICAgY3Vyc29yOiB6b29tLWluO1xuICAgIH1cbiAgICAuem9vbS1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGluc2V0OiAwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjkpO1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHpvb20tb3V0O1xuICAgIH1cbiAgICAuem9vbS1pbWFnZSB7XG4gICAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG4gICAgLmV4aXN0aW5nLXZpc2l0LWFjdGlvbnMsIC5leGlzdGluZy12aXNpdC1zaWRlYmFyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuICAgIC52aXNpdC1zdGF0dXMtYmFkZ2Uge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICAgICAgcGFkZGluZzogMC4ycmVtIDAuNTVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN0YXR1cy1wZW5kaW5nLWJnKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1zdGF0dXMtcGVuZGluZy10ZXh0KTtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG4gICAgLnZpc2l0LXN0YXR1cy1iYWRnZS5hc3NpZ25lZCB7IGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtYmcpOyBjb2xvcjogdmFyKC0tc3VjY2Vzcy10ZXh0KTsgfVxuICAgIC52aXNpdC1vdHAtYm94IHtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tYmcpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNCwxNjUsMjMzLDAuMjUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgICB9XG4gICAgLm90cC1sYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDAuNzVyZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTsgfVxuICAgIC5vdHAtY29kZSB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDEuNXJlbTsgbGV0dGVyLXNwYWNpbmc6IDAuMmVtOyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTsgbWFyZ2luLWJvdHRvbTogMC4zNXJlbTsgfVxuICAgIC5vdHAtaGludCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDAuNzhyZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XG4gICAgLnZpc2l0LXBlbmRpbmctbXNnIHsgZm9udC1zaXplOiAwLjg1cmVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbjogMDsgfVxuICAgIC52aXNpdC1zY2hlZHVsZWQsIC52aXNpdC1zY2hlZHVsZWQtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICB9XG4gICAgLnpvb20tY2xvc2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxcmVtO1xuICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICB3aWR0aDogNDhweDtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return PropertyDetailComponent;
})();

/***/ },

/***/ 9422
/*!*****************************************************!*\
  !*** ./src/app/core/utils/property-gallery.util.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildGallerySlides: () => (/* binding */ buildGallerySlides)
/* harmony export */ });
/* harmony import */ var _image_url_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-url.util */ 8681);

/**
 * Gallery for property detail: photos + YouTube / Google Drive videos.
 * YouTube links stored as IMAGE are auto-promoted to video embeds.
 */
function buildGallerySlides(images) {
  if (!images?.length) return [];
  const sorted = [...images].sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
  const out = [];
  for (const item of sorted) {
    const url = (item.imageUrl || '').trim();
    if (!url) continue;
    const mt = item.mediaType || 'IMAGE';
    const u = (0,_image_url_util__WEBPACK_IMPORTED_MODULE_0__.upgradeInsecureMediaUrl)(url);
    if (mt === 'VIDEO' || (0,_image_url_util__WEBPACK_IMPORTED_MODULE_0__.extractYouTubeVideoId)(u) || (0,_image_url_util__WEBPACK_IMPORTED_MODULE_0__.getPropertyVideoPlayerKind)(url) === 'embed') {
      const embed = (0,_image_url_util__WEBPACK_IMPORTED_MODULE_0__.resolveVideoEmbedUrl)(url);
      if (embed) {
        out.push({
          kind: 'video-embed',
          sourceUrl: url,
          embedPlayUrl: embed
        });
        continue;
      }
    }
    out.push({
      kind: 'photo',
      sourceUrl: url
    });
  }
  return out;
}

/***/ }

}]);
//# sourceMappingURL=718.js.map