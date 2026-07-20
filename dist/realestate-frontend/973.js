"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[973],{

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

/***/ 6354
/*!****************************************************************!*\
  !*** ./src/app/features/agent/agent-visit-detail.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentVisitDetailComponent: () => (/* binding */ AgentVisitDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/image-url.util */ 8681);
/* harmony import */ var _shared_pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/indian-price.pipe */ 5551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/api.service */ 1776);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/services/config.service */ 8802);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4285);












function AgentVisitDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Loading visit details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AgentVisitDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function AgentVisitDetailComponent_div_6_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-image", "url(" + ctx_r0.imageUrl(ctx_r0.detail.property.firstImageUrl) + ")");
  }
}
function AgentVisitDetailComponent_div_6_dt_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Amenities");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AgentVisitDetailComponent_div_6_dd_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.detail.property.amenities);
  }
}
function AgentVisitDetailComponent_div_6_dt_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Notes from customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AgentVisitDetailComponent_div_6_dd_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "dd", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.detail.userNotes);
  }
}
function AgentVisitDetailComponent_div_6_section_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 29)(1, "div", 30)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div")(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Complete this visit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "The customer received an OTP on their mobile. They must share it with you in person \u2014 you cannot look it up.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 33)(10, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AgentVisitDetailComponent_div_6_section_55_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.otp, $event) || (ctx_r0.otp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AgentVisitDetailComponent_div_6_section_55_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.completeVisit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.completing || !ctx_r0.otp.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.completing ? "Completing\u2026" : "Mark visit complete", " ");
  }
}
function AgentVisitDetailComponent_div_6_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", c_r4.userName, " \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 3, c_r4.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r4.commentText);
  }
}
function AgentVisitDetailComponent_div_6_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AgentVisitDetailComponent_div_6_div_59_div_1_Template, 6, 6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.detail.comments);
  }
}
function AgentVisitDetailComponent_div_6_p_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No comments yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AgentVisitDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 12)(11, "section", 13)(12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Property Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AgentVisitDetailComponent_div_6_div_14_Template, 1, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "dl", 15)(16, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "indianPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Beds / Baths / Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, AgentVisitDetailComponent_div_6_dt_33_Template, 2, 0, "dt", 16)(34, AgentVisitDetailComponent_div_6_dd_34_Template, 2, 1, "dd", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "section", 13)(36, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Requesting Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "dl", 17)(39, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "dd")(46, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "dd")(51, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, AgentVisitDetailComponent_div_6_dt_53_Template, 2, 0, "dt", 16)(54, AgentVisitDetailComponent_div_6_dd_54_Template, 2, 1, "dd", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, AgentVisitDetailComponent_div_6_section_55_Template, 13, 3, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "section", 21)(57, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Comments (visible to admin)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, AgentVisitDetailComponent_div_6_div_59_Template, 2, 1, "div", 22)(60, AgentVisitDetailComponent_div_6_p_60_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 24)(62, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AgentVisitDetailComponent_div_6_Template_textarea_ngModelChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.newComment, $event) || (ctx_r0.newComment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AgentVisitDetailComponent_div_6_Template_button_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.addComment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.detail.property.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("\uD83D\uDCC5 ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 34, ctx_r0.detail.scheduledAt, "fullDate"), " at ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 37, ctx_r0.detail.scheduledAt, "shortTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("status-assigned", ctx_r0.detail.status === "ASSIGNED")("status-completed", ctx_r0.detail.status === "COMPLETED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.detail.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.detail.property.firstImageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate4"]("", ctx_r0.detail.property.address, ", ", ctx_r0.detail.property.city, " ", ctx_r0.detail.property.state, " ", ctx_r0.detail.property.pincode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r0.detail.property.propertyType, " \u00B7 ", ctx_r0.detail.property.listingType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 40, ctx_r0.detail.property.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", ctx_r0.detail.property.bedrooms, " / ", ctx_r0.detail.property.bathrooms, " / ", ctx_r0.detail.property.areaSqft, " sq ft");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.detail.property.amenities);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.detail.property.amenities);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.detail.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "mailto:" + ctx_r0.detail.userEmail, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.detail.userEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "tel:" + ctx_r0.detail.userMobile, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.detail.userMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.detail.userNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.detail.userNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.detail.status === "ASSIGNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.detail.comments.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.detail.comments.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.savingComment || !ctx_r0.newComment.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.savingComment ? "Saving..." : "Add comment", " ");
  }
}
let AgentVisitDetailComponent = /*#__PURE__*/(() => {
  class AgentVisitDetailComponent {
    constructor(route, api, config, toast, cdr, ngZone) {
      this.route = route;
      this.api = api;
      this.config = config;
      this.toast = toast;
      this.cdr = cdr;
      this.ngZone = ngZone;
      this.detail = null;
      this.loading = true;
      this.error = '';
      this.otp = '';
      this.completing = false;
      this.newComment = '';
      this.savingComment = false;
    }
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) this.loadDetail(+id);else {
        this.loading = false;
        this.error = 'Invalid visit id';
      }
    }
    imageUrl(url) {
      return (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_3__.resolvePropertyImageUrl)(url, this.config.apiUrl);
    }
    loadDetail(id) {
      this.loading = true;
      this.error = '';
      this.api.get(`/agent/sitevisits/${id}`).subscribe({
        next: d => {
          this.ngZone.run(() => {
            this.detail = d;
            this.loading = false;
            this.cdr.detectChanges();
          });
        },
        error: err => {
          this.ngZone.run(() => {
            this.error = err.error?.message || 'Failed to load visit';
            this.loading = false;
            this.cdr.detectChanges();
          });
        }
      });
    }
    completeVisit() {
      if (!this.detail || !this.otp?.trim()) return;
      this.completing = true;
      this.cdr.detectChanges();
      this.api.post(`/agent/sitevisits/${this.detail.id}/complete?otp=${encodeURIComponent(this.otp.trim())}`, {}).subscribe({
        next: () => {
          this.ngZone.run(() => {
            this.toast.success('Visit marked as done.');
            this.detail.status = 'COMPLETED';
            this.otp = '';
            this.completing = false;
            this.cdr.detectChanges();
          });
        },
        error: err => {
          this.ngZone.run(() => {
            this.toast.error(err.error?.message || 'Failed to complete visit');
            this.completing = false;
            this.cdr.detectChanges();
          });
        }
      });
    }
    addComment() {
      if (!this.detail || !this.newComment?.trim()) return;
      this.savingComment = true;
      this.cdr.detectChanges();
      this.api.post(`/agent/sitevisits/${this.detail.id}/comments`, {
        commentText: this.newComment.trim()
      }).subscribe({
        next: c => {
          this.ngZone.run(() => {
            if (!this.detail.comments) this.detail.comments = [];
            this.detail.comments.push(c);
            this.newComment = '';
            this.toast.success('Comment added.');
            this.savingComment = false;
            this.cdr.detectChanges();
          });
        },
        error: err => {
          this.ngZone.run(() => {
            this.toast.error(err.error?.message || 'Failed to add comment');
            this.savingComment = false;
            this.cdr.detectChanges();
          });
        }
      });
    }
    static {
      this.ɵfac = function AgentVisitDetailComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AgentVisitDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_10__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: AgentVisitDetailComponent,
        selectors: [["app-agent-visit-detail"]],
        decls: 7,
        vars: 3,
        consts: [[1, "visit-detail-page"], [1, "container"], ["routerLink", "/agent", 1, "back-link"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "detail-content", 4, "ngIf"], [1, "loading-state"], [1, "error-state"], [1, "detail-content"], [1, "detail-header", "card"], [1, "scheduled"], [1, "status-badge"], [1, "grid-two"], [1, "card"], ["class", "prop-image", 3, "backgroundImage", 4, "ngIf"], [1, "prop-dl"], [4, "ngIf"], [1, "user-dl"], [3, "href"], ["class", "user-notes", 4, "ngIf"], ["class", "card complete-section highlight-card", 4, "ngIf"], [1, "card", "comments-section"], ["class", "comments-list", 4, "ngIf"], ["class", "empty-comments", 4, "ngIf"], [1, "add-comment"], ["placeholder", "Add a comment...", "rows", "3", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "prop-image"], [1, "user-notes"], [1, "card", "complete-section", "highlight-card"], [1, "complete-header"], [1, "complete-icon"], [1, "help-text"], [1, "otp-row"], ["type", "text", "placeholder", "6-digit OTP", "maxlength", "6", "pattern", "[0-9]*", "inputmode", "numeric", 1, "form-input", "otp-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click", "disabled"], [1, "comments-list"], ["class", "comment-item", 4, "ngFor", "ngForOf"], [1, "comment-item"], [1, "comment-meta"], [1, "comment-text"], [1, "empty-comments"]],
        template: function AgentVisitDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u2190 Back to My Visits");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AgentVisitDetailComponent_div_4_Template, 2, 0, "div", 3)(5, AgentVisitDetailComponent_div_5_Template, 2, 1, "div", 4)(6, AgentVisitDetailComponent_div_6_Template, 65, 42, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.detail && !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe, _shared_pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_4__.IndianPricePipe],
        styles: [".visit-detail-page[_ngcontent-%COMP%] {\n  padding: 2rem 0 4rem;\n}\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 1.5rem;\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n\n.error-state[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n\n.detail-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1rem;\n}\n\n.detail-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  flex: 1;\n}\n\n.scheduled[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.9375rem;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n\n.status-assigned[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info-text);\n}\n\n.status-completed[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success-text);\n}\n\n.grid-two[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border: 2px solid var(--border);\n  border-radius: var(--radius);\n}\n\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n\n.prop-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n  border-radius: var(--radius-sm);\n  margin-bottom: 1rem;\n}\n\n.prop-dl[_ngcontent-%COMP%], .user-dl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 0.5rem 1.5rem;\n  font-size: 0.9375rem;\n}\n\n.prop-dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .user-dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-weight: 600;\n}\n\n.prop-dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .user-dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.user-dl[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.user-notes[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--text-muted);\n}\n\n.complete-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.highlight-card[_ngcontent-%COMP%] {\n  border: 2px solid rgba(14, 165, 233, 0.35);\n  background: linear-gradient(135deg, rgba(14, 165, 233, 0.06), #fff);\n}\n\n.complete-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n\n.complete-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.complete-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n}\n\n.help-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin-bottom: 1rem;\n}\n\n.otp-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.otp-input[_ngcontent-%COMP%] {\n  width: 160px;\n  font-size: 1.25rem;\n  letter-spacing: 0.25em;\n  text-align: center;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 2px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9375rem;\n}\n\n.comments-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.comments-list[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.comment-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  margin-bottom: 0.5rem;\n  border: 1px solid var(--border);\n}\n\n.comment-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 0.25rem;\n}\n\n.comment-text[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n}\n\n.empty-comments[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n\n.add-comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0.75rem;\n  resize: vertical;\n}\n\n@media (max-width: 768px) {\n  .grid-two[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWdlbnQvYWdlbnQtdmlzaXQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFxQixvQkFBQTtBQUN6Qjs7QUFBSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFHTjs7QUFESTtFQUFtQiwwQkFBQTtBQUt2Qjs7QUFKSTtFQUErQixhQUFBO0VBQWUsa0JBQUE7QUFTbEQ7O0FBUkk7RUFBZSxvQkFBQTtBQVluQjs7QUFYSTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWNOOztBQVpJO0VBQW9CLFNBQUE7RUFBVyxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixPQUFBO0FBbUJ4RTs7QUFsQkk7RUFBYSxTQUFBO0VBQVcsd0JBQUE7RUFBMEIsb0JBQUE7QUF3QnREOztBQXZCSTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBMEJOOztBQXhCSTtFQUFtQiwwQkFBQTtFQUE0Qix1QkFBQTtBQTZCbkQ7O0FBNUJJO0VBQW9CLDZCQUFBO0VBQStCLDBCQUFBO0FBaUN2RDs7QUFoQ0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFtQ047O0FBakNJO0VBQ0Usb0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBb0NOOztBQWxDSTtFQUFXLGtCQUFBO0VBQW9CLG1CQUFBO0VBQXFCLGdCQUFBO0FBd0N4RDs7QUF2Q0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBMENOOztBQXhDSTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUEyQ047O0FBekNJO0VBQTJCLHdCQUFBO0VBQTBCLGdCQUFBO0FBOEN6RDs7QUE3Q0k7RUFBMkIsU0FBQTtBQWlEL0I7O0FBaERJO0VBQWEscUJBQUE7QUFvRGpCOztBQW5ESTtFQUFjLGtCQUFBO0VBQW9CLHdCQUFBO0FBd0R0Qzs7QUF2REk7RUFBb0IscUJBQUE7QUEyRHhCOztBQTFESTtFQUFrQiwwQ0FBQTtFQUF5QyxtRUFBQTtBQStEL0Q7O0FBOURJO0VBQW1CLGFBQUE7RUFBZSxTQUFBO0VBQVcsdUJBQUE7RUFBeUIsbUJBQUE7QUFxRTFFOztBQXBFSTtFQUFpQixlQUFBO0FBd0VyQjs7QUF2RUk7RUFBc0IsbUJBQUE7QUEyRTFCOztBQTFFSTtFQUFhLG1CQUFBO0VBQXFCLHdCQUFBO0VBQTBCLG1CQUFBO0FBZ0ZoRTs7QUEvRUk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWtGTjs7QUFoRkk7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0Isc0JBQUE7RUFBd0Isa0JBQUE7QUF1RjNFOztBQXRGSTtFQUNFLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0FBeUZOOztBQXZGSTtFQUF1QixtQkFBQTtBQTJGM0I7O0FBMUZJO0VBQWlCLG1CQUFBO0FBOEZyQjs7QUE3Rkk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBZ0dOOztBQTlGSTtFQUFnQixrQkFBQTtFQUFvQix3QkFBQTtFQUEwQixzQkFBQTtBQW9HbEU7O0FBbkdJO0VBQWdCLG9CQUFBO0FBdUdwQjs7QUF0R0k7RUFBa0Isd0JBQUE7RUFBMEIsbUJBQUE7RUFBcUIsbUJBQUE7QUE0R3JFOztBQTNHSTtFQUF3QixXQUFBO0VBQWEsc0JBQUE7RUFBd0IsZ0JBQUE7QUFpSGpFOztBQWhISTtFQUNFO0lBQVksMEJBQUE7RUFvSGhCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudmlzaXQtZGV0YWlsLXBhZ2UgeyBwYWRkaW5nOiAycmVtIDAgNHJlbTsgfVxuICAgIC5iYWNrLWxpbmsge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmJhY2stbGluazpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4gICAgLmxvYWRpbmctc3RhdGUsIC5lcnJvci1zdGF0ZSB7IHBhZGRpbmc6IDJyZW07IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5lcnJvci1zdGF0ZSB7IGNvbG9yOiB2YXIoLS1kYW5nZXIpOyB9XG4gICAgLmRldGFpbC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMXJlbTtcbiAgICB9XG4gICAgLmRldGFpbC1oZWFkZXIgaDEgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMS41cmVtOyBmb250LXdlaWdodDogNzAwOyBmbGV4OiAxOyB9XG4gICAgLnNjaGVkdWxlZCB7IG1hcmdpbjogMDsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDAuOTM3NXJlbTsgfVxuICAgIC5zdGF0dXMtYmFkZ2Uge1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLnN0YXR1cy1hc3NpZ25lZCB7IGJhY2tncm91bmQ6IHZhcigtLWluZm8tYmcpOyBjb2xvcjogdmFyKC0taW5mby10ZXh0KTsgfVxuICAgIC5zdGF0dXMtY29tcGxldGVkIHsgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1iZyk7IGNvbG9yOiB2YXIoLS1zdWNjZXNzLXRleHQpOyB9XG4gICAgLmdyaWQtdHdvIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBnYXA6IDEuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG4gICAgLmNhcmQge1xuICAgICAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgICB9XG4gICAgLmNhcmQgaDIgeyBtYXJnaW46IDAgMCAxcmVtIDA7IGZvbnQtc2l6ZTogMS4xMjVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IH1cbiAgICAucHJvcC1pbWFnZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5wcm9wLWRsLCAudXNlci1kbCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICAgIGdhcDogMC41cmVtIDEuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgIH1cbiAgICAucHJvcC1kbCBkdCwgLnVzZXItZGwgZHQgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICAucHJvcC1kbCBkZCwgLnVzZXItZGwgZGQgeyBtYXJnaW46IDA7IH1cbiAgICAudXNlci1kbCBhIHsgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XG4gICAgLnVzZXItbm90ZXMgeyBmb250LXN0eWxlOiBpdGFsaWM7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuICAgIC5jb21wbGV0ZS1zZWN0aW9uIHsgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XG4gICAgLmhpZ2hsaWdodC1jYXJkIHsgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNCwxNjUsMjMzLDAuMzUpOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE0LDE2NSwyMzMsMC4wNiksICNmZmYpOyB9XG4gICAgLmNvbXBsZXRlLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMXJlbTsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IG1hcmdpbi1ib3R0b206IDFyZW07IH1cbiAgICAuY29tcGxldGUtaWNvbiB7IGZvbnQtc2l6ZTogMnJlbTsgfVxuICAgIC5jb21wbGV0ZS1oZWFkZXIgaDIgeyBtYXJnaW46IDAgMCAwLjI1cmVtOyB9XG4gICAgLmhlbHAtdGV4dCB7IGZvbnQtc2l6ZTogMC44NzVyZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxuICAgIC5vdHAtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDFyZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICAub3RwLWlucHV0IHsgd2lkdGg6IDE2MHB4OyBmb250LXNpemU6IDEuMjVyZW07IGxldHRlci1zcGFjaW5nOiAwLjI1ZW07IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5mb3JtLWlucHV0IHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICB9XG4gICAgLmNvbW1lbnRzLXNlY3Rpb24gaDIgeyBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG4gICAgLmNvbW1lbnRzLWxpc3QgeyBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG4gICAgLmNvbW1lbnQtaXRlbSB7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgfVxuICAgIC5jb21tZW50LW1ldGEgeyBmb250LXNpemU6IDAuNzVyZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTsgfVxuICAgIC5jb21tZW50LXRleHQgeyBmb250LXNpemU6IDAuOTM3NXJlbTsgfVxuICAgIC5lbXB0eS1jb21tZW50cyB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC1zaXplOiAwLjg3NXJlbTsgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxuICAgIC5hZGQtY29tbWVudCB0ZXh0YXJlYSB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tYm90dG9tOiAwLjc1cmVtOyByZXNpemU6IHZlcnRpY2FsOyB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuZ3JpZC10d28geyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return AgentVisitDetailComponent;
})();

/***/ }

}]);
//# sourceMappingURL=973.js.map