"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[210],{

/***/ 210
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/skeleton-loader/skeleton-loader.component */ 4540);
/* harmony import */ var _core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/image-url.util */ 8681);
/* harmony import */ var _shared_pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/indian-price.pipe */ 5551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/auth.service */ 9058);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/services/api.service */ 1776);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/services/config.service */ 8802);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 436);














const _c0 = () => [1, 2, 3];
const _c1 = a0 => ["/property", a0, "edit"];
const _c2 = () => [1, 2];
function DashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u2709\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 34)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Verify your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardComponent_Conditional_12_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.sendEmailVerificationLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("We'll send a verification link to ", (tmp_1_0 = ctx_r1.auth.user()) == null ? null : tmp_1_0.email, ". Click the link to verify.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.sendingEmailVerification);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.sendingEmailVerification ? "Sending..." : "Send verification link", " ");
  }
}
function DashboardComponent_div_60_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 45)(1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function DashboardComponent_div_60_div_1_div_10_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.rescheduleDateTime, $event) || (ctx_r1.rescheduleDateTime = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardComponent_div_60_div_1_div_10_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const v_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.submitReschedule(v_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Reschedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardComponent_div_60_div_1_div_10_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.cancelReschedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rescheduleDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.rescheduling);
  }
}
function DashboardComponent_div_60_div_1_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardComponent_div_60_div_1_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const v_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.openReschedule(v_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Reschedule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 41)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, DashboardComponent_div_60_div_1_div_10_Template, 6, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, DashboardComponent_div_60_div_1_button_11_Template, 2, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](v_r4.propertyTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\uD83D\uDCC5 ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 11, v_r4.scheduledAt, "MMM d, y h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("status-pending", v_r4.status === "PENDING_ASSIGNMENT")("status-assigned", v_r4.status === "ASSIGNED")("status-completed", v_r4.status === "COMPLETED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", v_r4.status.replace("_", " "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (v_r4.status === "PENDING_ASSIGNMENT" || v_r4.status === "ASSIGNED") && ctx_r1.rescheduleVisitId === v_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (v_r4.status === "PENDING_ASSIGNMENT" || v_r4.status === "ASSIGNED") && ctx_r1.rescheduleVisitId !== v_r4.id);
  }
}
function DashboardComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DashboardComponent_div_60_div_1_Template, 12, 14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.visits);
  }
}
function DashboardComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\uD83D\uDCC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "No site visits scheduled yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Browse Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_62_app_skeleton_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-skeleton-loader", 53);
  }
}
function DashboardComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DashboardComponent_div_62_app_skeleton_loader_1_Template, 1, 0, "app-skeleton-loader", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}
function DashboardComponent_div_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 58)(3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 60)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "indianPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.resolveImageUrl(ctx_r1.firstImageUrl(p_r6)) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 12, p_r6.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("status-approved", p_r6.status === "APPROVED")("status-pending", p_r6.status === "PENDING_APPROVAL")("status-rejected", p_r6.status === "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (p_r6.status == null ? null : p_r6.status.replace("_", " ")) ?? "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c1, p_r6.id));
  }
}
function DashboardComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DashboardComponent_div_69_div_1_Template, 13, 16, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.recentProperties);
  }
}
function DashboardComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\uD83C\uDFE0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "You haven't listed any properties yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "List Your First Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_71_app_skeleton_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-skeleton-loader", 65);
  }
}
function DashboardComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DashboardComponent_div_71_app_skeleton_loader_1_Template, 1, 0, "app-skeleton-loader", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c2));
  }
}
function DashboardComponent_span_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.unreadAlerts);
  }
}
function DashboardComponent_div_101_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69)(1, "div", 70)(2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("unread", !a_r7.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](a_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](a_r7.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 5, a_r7.createdAt, "short"));
  }
}
function DashboardComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DashboardComponent_div_101_div_1_Template, 9, 8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.alerts.slice(0, 5));
  }
}
function DashboardComponent_p_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    constructor(auth, api, config, toast, cdr, title, meta) {
      this.auth = auth;
      this.api = api;
      this.config = config;
      this.toast = toast;
      this.cdr = cdr;
      this.title = title;
      this.meta = meta;
      this.visits = [];
      this.loadingVisits = true;
      this.recentProperties = [];
      this.loadingProperties = true;
      this.myPropertiesCount = 0;
      this.totalViews = 0;
      this.unreadAlerts = 0;
      this.alerts = [];
      this.rescheduleVisitId = null;
      this.rescheduleDateTime = '';
      this.rescheduling = false;
      this.sendingEmailVerification = false;
    }
    resolveImageUrl(url) {
      if (!url) return 'https://placehold.co/100';
      return (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_4__.resolvePropertyImageUrl)(url, this.config.apiUrl);
    }
    firstImageUrl(p) {
      const media = p.images || [];
      const image = media.find(m => !m.mediaType || m.mediaType === 'IMAGE');
      return image?.imageUrl;
    }
    ngOnInit() {
      this.title.setTitle('Dashboard | 1Guntha');
      this.meta.updateTag({
        name: 'description',
        content: 'Your 1Guntha dashboard — site visits, listings, and notifications.'
      });
      this.meta.updateTag({
        name: 'keywords',
        content: '1Guntha, real estate, dashboard, property listings, India'
      });
      this.loadVisits();
      this.loadRecentProperties();
      this.loadStats();
      this.loadAlerts();
    }
    loadVisits() {
      this.api.get('/sitevisits/my', {
        page: 0,
        size: 5
      }).subscribe({
        next: res => {
          this.visits = res.content || [];
          this.loadingVisits = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.loadingVisits = false;
          this.cdr.markForCheck();
        }
      });
    }
    loadRecentProperties() {
      this.api.get('/properties/my', {
        page: 0,
        size: 5
      }).subscribe({
        next: res => {
          this.recentProperties = res.content || [];
          this.myPropertiesCount = res.totalElements;
          this.loadingProperties = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.loadingProperties = false;
          this.cdr.markForCheck();
        }
      });
    }
    loadStats() {
      // Calculate total views from properties
      this.api.get('/properties/my', {
        page: 0,
        size: 100
      }).subscribe({
        next: res => {
          this.totalViews = res.content.reduce((sum, p) => sum + (p.viewCount || 0), 0);
        }
      });
    }
    loadAlerts() {
      this.api.get('/alerts', {
        page: 0,
        size: 10
      }).subscribe({
        next: res => {
          this.alerts = res.content || [];
          this.unreadAlerts = this.alerts.filter(a => !a.read).length;
        }
      });
    }
    openReschedule(v) {
      this.rescheduleVisitId = v.id;
      const d = new Date(v.scheduledAt);
      const pad = n => n.toString().padStart(2, '0');
      this.rescheduleDateTime = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }
    cancelReschedule() {
      this.rescheduleVisitId = null;
      this.rescheduleDateTime = '';
    }
    sendEmailVerificationLink() {
      this.sendingEmailVerification = true;
      this.auth.sendEmailVerification().subscribe({
        next: () => {
          this.toast.success('Verification link sent to your email. Check your inbox.');
          this.sendingEmailVerification = false;
          this.cdr.markForCheck();
        },
        error: err => {
          this.toast.error(err.error?.message || 'Failed to send verification email');
          this.sendingEmailVerification = false;
          this.cdr.markForCheck();
        }
      });
    }
    submitReschedule(visitId) {
      if (!this.rescheduleDateTime) return;
      this.rescheduling = true;
      const scheduledAt = new Date(this.rescheduleDateTime).toISOString();
      this.api.put(`/sitevisits/${visitId}/reschedule`, {
        scheduledAt
      }).subscribe({
        next: () => {
          this.toast.success('Visit rescheduled. OTP remains the same.');
          this.cancelReschedule();
          this.loadVisits();
          this.rescheduling = false;
        },
        error: err => {
          this.toast.error(err.error?.message || 'Failed to reschedule');
          this.rescheduling = false;
        }
      });
    }
    static {
      this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_11__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Meta));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 103,
        vars: 15,
        consts: [[1, "dashboard-page"], [1, "container"], [1, "dashboard-header"], ["routerLink", "/property/new", 1, "btn", "btn-primary"], [1, "card", "email-verify-banner"], [1, "stats-grid"], [1, "stat-card", "card"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], ["routerLink", "/my-properties", 1, "stat-link"], ["routerLink", "/dashboard", 1, "stat-link"], [1, "dashboard-content"], [1, "main-section"], [1, "card"], [1, "section-header"], ["routerLink", "/search", 1, "btn", "btn-outline", "btn-sm"], ["class", "visits-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["routerLink", "/my-properties", 1, "btn", "btn-outline", "btn-sm"], ["class", "properties-list", 4, "ngIf"], [1, "sidebar"], [1, "quick-actions"], ["routerLink", "/property/new", 1, "action-item"], [1, "action-icon"], ["routerLink", "/search", 1, "action-item"], ["routerLink", "/my-properties", 1, "action-item"], ["routerLink", "/dashboard", 1, "action-item"], ["class", "badge", 4, "ngIf"], ["class", "notifications-list", 4, "ngIf"], ["class", "empty-text", 4, "ngIf"], [1, "email-verify-icon"], [1, "email-verify-text"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "visits-list"], ["class", "visit-item", 4, "ngFor", "ngForOf"], [1, "visit-item"], [1, "visit-info"], [1, "visit-property"], [1, "visit-meta"], [1, "visit-status"], ["class", "reschedule-row", 4, "ngIf"], ["type", "button", "class", "btn btn-outline btn-sm", 3, "click", 4, "ngIf"], [1, "reschedule-row"], ["type", "datetime-local", 1, "form-input", "reschedule-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "empty-state"], [1, "empty-icon"], ["routerLink", "/search", 1, "btn", "btn-primary", "btn-sm"], [1, "loading-state"], ["height", "60px", "style", "margin-bottom: 0.5rem;", 4, "ngFor", "ngForOf"], ["height", "60px", 2, "margin-bottom", "0.5rem"], [1, "properties-list"], ["class", "property-item", 4, "ngFor", "ngForOf"], [1, "property-item"], [1, "property-thumb"], [1, "property-info"], [1, "property-title"], [1, "property-meta"], [1, "property-status"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], ["routerLink", "/property/new", 1, "btn", "btn-primary", "btn-sm"], ["height", "80px", "style", "margin-bottom: 0.5rem;", 4, "ngFor", "ngForOf"], ["height", "80px", 2, "margin-bottom", "0.5rem"], [1, "badge"], [1, "notifications-list"], ["class", "notification-item", 3, "unread", 4, "ngFor", "ngForOf"], [1, "notification-item"], [1, "notification-content"], [1, "notification-title"], [1, "notification-message"], [1, "notification-time"], [1, "empty-text"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Here's what's happening with your properties");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 3)(9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "+");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " List New Property ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](12, DashboardComponent_Conditional_12_Template, 10, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 5)(14, "div", 6)(15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "\uD83C\uDFE0");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 8)(18, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "My Properties");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 6)(25, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "\uD83D\uDCC5");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 8)(28, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Site Visits");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 6)(35, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "\uD83D\uDC41\uFE0F");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 8)(38, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Total Views");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 6)(43, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "\uD83D\uDD14");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 8)(46, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "New Notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "View \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 13)(53, "div", 14)(54, "section", 15)(55, "div", 16)(56, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Recent Site Visits");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Book New Visit");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, DashboardComponent_div_60_Template, 2, 1, "div", 18)(61, DashboardComponent_div_61_Template, 7, 0, "div", 19)(62, DashboardComponent_div_62_Template, 2, 2, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "section", 15)(64, "div", 16)(65, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "My Recent Properties");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "View All");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, DashboardComponent_div_69_Template, 2, 1, "div", 22)(70, DashboardComponent_div_70_Template, 7, 0, "div", 19)(71, DashboardComponent_div_71_Template, 2, 2, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "aside", 23)(73, "div", 15)(74, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "Quick Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 24)(77, "a", 25)(78, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "\u2795");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "List New Property");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "a", 27)(83, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "\uD83D\uDD0D");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "Search Properties");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "a", 28)(88, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "\uD83D\uDCCB");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "My Properties");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "a", 29)(93, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94, "\uD83D\uDD14");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, "Notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](97, DashboardComponent_span_97_Template, 2, 1, "span", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 15)(99, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, "Notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](101, DashboardComponent_div_101_Template, 2, 1, "div", 31)(102, DashboardComponent_p_102_Template, 2, 0, "p", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Welcome back, ", (tmp_0_0 = ctx.auth.user()) == null ? null : tmp_0_0.fullName, "! \uD83D\uDC4B");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.auth.user() && !((tmp_1_0 = ctx.auth.user()) == null ? null : tmp_1_0.emailVerified) ? 12 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.myPropertiesCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.visits.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.totalViews);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.unreadAlerts);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.visits.length && !ctx.loadingVisits);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.visits.length && !ctx.loadingVisits);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingVisits);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.recentProperties.length && !ctx.loadingProperties);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.recentProperties.length && !ctx.loadingProperties);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingProperties);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.unreadAlerts > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.alerts.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.alerts.length);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_3__.SkeletonLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _shared_pipes_indian_price_pipe__WEBPACK_IMPORTED_MODULE_5__.IndianPricePipe],
        styles: [".dashboard-page[_ngcontent-%COMP%] {\n  padding: 2rem 0 4rem;\n}\n\n.email-verify-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  margin-bottom: 2rem;\n  border: 2px solid var(--warning);\n  background: rgba(245, 158, 11, 0.08);\n  border-radius: var(--radius);\n}\n\n.email-verify-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.email-verify-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.email-verify-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n}\n\n.email-verify-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  color: var(--text-muted);\n}\n\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n  padding-bottom: 2rem;\n  border-bottom: 3px solid var(--border-light);\n  position: relative;\n}\n\n.dashboard-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  width: 120px;\n  height: 3px;\n  background: var(--primary-gradient);\n  border-radius: 2px;\n}\n\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n\n.dashboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.1875rem;\n  font-weight: 400;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  position: relative;\n  transition: var(--transition-slow);\n  border: 2px solid var(--border);\n  overflow: hidden;\n}\n\n.stat-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n  background: var(--primary-gradient);\n  transform: scaleY(0);\n  transition: transform 0.3s;\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-xl);\n  border-color: var(--primary-light);\n}\n\n.stat-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleY(1);\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  filter: drop-shadow(0 4px 8px rgba(14, 165, 233, 0.2));\n}\n\n.stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.1;\n  letter-spacing: -1px;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--text-muted);\n  margin-top: 0.375rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.stat-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.dashboard-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 2rem;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 3px solid var(--border-light);\n  position: relative;\n}\n\n.section-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  width: 80px;\n  height: 3px;\n  background: var(--primary-gradient);\n  border-radius: 2px;\n}\n\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.375rem;\n  font-weight: 800;\n  color: var(--text);\n}\n\n.visits-list[_ngcontent-%COMP%], .properties-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.visit-item[_ngcontent-%COMP%], .property-item[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background: var(--bg);\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid var(--border);\n  transition: var(--transition);\n}\n\n.visit-item[_ngcontent-%COMP%]:hover, .property-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface);\n  border-color: var(--primary-light);\n  box-shadow: var(--shadow-md);\n}\n\n.reschedule-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.reschedule-input[_ngcontent-%COMP%], .form-input[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 2px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9375rem;\n  box-sizing: border-box;\n}\n\n.visit-property[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 0.25rem;\n}\n\n.visit-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.visit-status[_ngcontent-%COMP%], .property-status[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.status-pending[_ngcontent-%COMP%] {\n  background: var(--status-pending-bg);\n  color: var(--status-pending-text);\n}\n\n.status-assigned[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info-text);\n}\n\n.status-completed[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success-text);\n}\n\n.status-approved[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: var(--success);\n}\n\n.status-rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--danger);\n}\n\n.property-thumb[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: var(--radius-sm);\n  background-size: cover;\n  background-position: center;\n  flex-shrink: 0;\n}\n\n.property-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.property-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 0.25rem;\n}\n\n.property-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.action-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  color: var(--text);\n  transition: var(--transition);\n  position: relative;\n}\n\n.action-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg);\n}\n\n.action-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n.notifications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.notification-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  border-left: 3px solid transparent;\n}\n\n.notification-item.unread[_ngcontent-%COMP%] {\n  border-left-color: var(--primary);\n  background: rgba(14, 165, 233, 0.06);\n}\n\n.notification-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n\n.notification-message[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 0.25rem;\n}\n\n.notification-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-light);\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 0.5rem;\n}\n\n.empty-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 1rem;\n}\n\n@media (max-width: 1024px) {\n  .dashboard-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-page[_ngcontent-%COMP%] {\n    padding: 1rem 0 2rem;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    margin-bottom: 2rem;\n    padding-bottom: 1.5rem;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .visit-item[_ngcontent-%COMP%], .property-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .property-thumb[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 160px;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBa0Isb0JBQUE7QUFDdEI7O0FBQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQUdOOztBQURJO0VBQXFCLGVBQUE7QUFLekI7O0FBSkk7RUFBcUIsT0FBQTtBQVF6Qjs7QUFQSTtFQUE0QixjQUFBO0VBQWdCLHNCQUFBO0FBWWhEOztBQVhJO0VBQXVCLFNBQUE7RUFBVyxvQkFBQTtFQUFzQix3QkFBQTtBQWlCNUQ7O0FBaEJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBbUJOOztBQWpCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBb0JOOztBQWxCSTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBcUJOOztBQW5CSTtFQUNFLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQXNCTjs7QUFwQkk7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUF1Qk47O0FBckJJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQXdCTjs7QUF0Qkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBeUJOOztBQXZCSTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQTBCTjs7QUF4Qkk7RUFDRSxvQkFBQTtBQTJCTjs7QUF6Qkk7RUFDRSxlQUFBO0VBQ0Esc0RBQUE7QUE0Qk47O0FBMUJJO0VBQ0UsT0FBQTtBQTZCTjs7QUEzQkk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBOEJOOztBQTVCSTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQStCTjs7QUE3Qkk7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWdDTjs7QUE5Qkk7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FBaUNOOztBQS9CSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUFrQ047O0FBaENJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUFtQ047O0FBakNJO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW9DTjs7QUFsQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBcUNOOztBQW5DSTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0FBc0NOOztBQXBDSTtFQUNFLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQXVDTjs7QUFyQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBd0NOOztBQXRDSTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQXlDTjs7QUF2Q0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUEwQ047O0FBeENJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBMkNOOztBQXpDSTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUE0Q047O0FBMUNJO0VBQWtCLG9DQUFBO0VBQXNDLGlDQUFBO0FBK0M1RDs7QUE5Q0k7RUFBbUIsMEJBQUE7RUFBNEIsdUJBQUE7QUFtRG5EOztBQWxESTtFQUFvQiw2QkFBQTtFQUErQiwwQkFBQTtBQXVEdkQ7O0FBdERJO0VBQW1CLG1DQUFBO0VBQXFDLHFCQUFBO0FBMkQ1RDs7QUExREk7RUFBbUIsa0NBQUE7RUFBb0Msb0JBQUE7QUErRDNEOztBQTlESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQWlFTjs7QUEvREk7RUFDRSxPQUFBO0FBa0VOOztBQWhFSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQW1FTjs7QUFqRUk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFvRU47O0FBbEVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQXFFTjs7QUFuRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBc0VOOztBQXBFSTtFQUNFLHFCQUFBO0FBdUVOOztBQXJFSTtFQUNFLGtCQUFBO0FBd0VOOztBQXRFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUF5RU47O0FBdkVJO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7QUEwRU47O0FBeEVJO0VBQ0UsaUNBQUE7RUFDQSxvQ0FBQTtBQTJFTjs7QUF6RUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUE0RU47O0FBMUVJO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBNkVOOztBQTNFSTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7QUE4RU47O0FBNUVJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBK0VOOztBQTdFSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQWdGTjs7QUE5RUk7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQWlGTjs7QUEvRUk7RUFDRTtJQUNFLDBCQUFBO0VBa0ZOO0FBQ0Y7QUFoRkk7RUFDRTtJQUFrQixvQkFBQTtFQW1GdEI7RUFsRkk7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtFQW9GTjtFQWxGSTtJQUF1QixrQkFBQTtFQXFGM0I7RUFwRkk7SUFBc0IsZUFBQTtFQXVGMUI7RUF0Rkk7SUFBYyw4QkFBQTtJQUFnQyxTQUFBO0lBQVcscUJBQUE7RUEyRjdEO0VBMUZJO0lBQWEsZ0JBQUE7RUE2RmpCO0VBNUZJO0lBQWMsa0JBQUE7RUErRmxCO0VBOUZJO0lBQThCLHNCQUFBO0lBQXdCLHVCQUFBO0VBa0cxRDtFQWpHSTtJQUFrQixXQUFBO0lBQWEsYUFBQTtFQXFHbkM7QUFDRjtBQXBHSTtFQUNFO0lBQWMsMEJBQUE7RUF1R2xCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuZGFzaGJvYXJkLXBhZ2UgeyBwYWRkaW5nOiAycmVtIDAgNHJlbTsgfVxuICAgIC5lbWFpbC12ZXJpZnktYmFubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13YXJuaW5nKTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjA4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gICAgfVxuICAgIC5lbWFpbC12ZXJpZnktaWNvbiB7IGZvbnQtc2l6ZTogMnJlbTsgfVxuICAgIC5lbWFpbC12ZXJpZnktdGV4dCB7IGZsZXg6IDE7IH1cbiAgICAuZW1haWwtdmVyaWZ5LXRleHQgc3Ryb25nIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDAuMjVyZW07IH1cbiAgICAuZW1haWwtdmVyaWZ5LXRleHQgcCB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAwLjkzNzVyZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuICAgIC5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogMS41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5kYXNoYm9hcmQtaGVhZGVyOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTNweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JhZGllbnQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cbiAgICAuZGFzaGJvYXJkLWhlYWRlciBoMSB7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICB9XG4gICAgLmRhc2hib2FyZC1oZWFkZXIgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXNpemU6IDEuMTg3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5zdGF0cy1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMS41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG4gICAgLnN0YXQtY2FyZCB7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEuMjVyZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNsb3cpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5zdGF0LWNhcmQ6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogNHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgICAuc3RhdC1jYXJkOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIH1cbiAgICAuc3RhdC1jYXJkOmhvdmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgfVxuICAgIC5zdGF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDRweCA4cHggcmdiYSgxNCwgMTY1LCAyMzMsIDAuMikpO1xuICAgIH1cbiAgICAuc3RhdC1jb250ZW50IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JhZGllbnQpO1xuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgfVxuICAgIC5zdGF0LWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luLXRvcDogMC4zNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG4gICAgLnN0YXQtbGluayB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmRhc2hib2FyZC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNTBweDtcbiAgICAgIGdhcDogMnJlbTtcbiAgICB9XG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnNlY3Rpb24taGVhZGVyOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTNweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuICAgIC5zZWN0aW9uLWhlYWRlciBoMiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICB9XG4gICAgLnZpc2l0cy1saXN0LCAucHJvcGVydGllcy1saXN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgIH1cbiAgICAudmlzaXQtaXRlbSwgLnByb3BlcnR5LWl0ZW0ge1xuICAgICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG4gICAgLnZpc2l0LWl0ZW06aG92ZXIsIC5wcm9wZXJ0eS1pdGVtOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuICAgIC5yZXNjaGVkdWxlLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC43NXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5yZXNjaGVkdWxlLWlucHV0LCAuZm9ybS1pbnB1dCB7XG4gICAgICBtaW4taGVpZ2h0OiAyLjVyZW07XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICAudmlzaXQtcHJvcGVydHkge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgfVxuICAgIC52aXNpdC1tZXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDFyZW07XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIH1cbiAgICAudmlzaXQtc3RhdHVzLCAucHJvcGVydHktc3RhdHVzIHtcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gICAgLnN0YXR1cy1wZW5kaW5nIHsgYmFja2dyb3VuZDogdmFyKC0tc3RhdHVzLXBlbmRpbmctYmcpOyBjb2xvcjogdmFyKC0tc3RhdHVzLXBlbmRpbmctdGV4dCk7IH1cbiAgICAuc3RhdHVzLWFzc2lnbmVkIHsgYmFja2dyb3VuZDogdmFyKC0taW5mby1iZyk7IGNvbG9yOiB2YXIoLS1pbmZvLXRleHQpOyB9XG4gICAgLnN0YXR1cy1jb21wbGV0ZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWJnKTsgY29sb3I6IHZhcigtLXN1Y2Nlc3MtdGV4dCk7IH1cbiAgICAuc3RhdHVzLWFwcHJvdmVkIHsgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMSk7IGNvbG9yOiB2YXIoLS1zdWNjZXNzKTsgfVxuICAgIC5zdGF0dXMtcmVqZWN0ZWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpOyBjb2xvcjogdmFyKC0tZGFuZ2VyKTsgfVxuICAgIC5wcm9wZXJ0eS10aHVtYiB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgfVxuICAgIC5wcm9wZXJ0eS1pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICAgIC5wcm9wZXJ0eS10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICB9XG4gICAgLnByb3BlcnR5LW1ldGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICAgIC5xdWljay1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuICAgIC5hY3Rpb24taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC43NXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5hY3Rpb24taXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gICAgfVxuICAgIC5hY3Rpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuICAgIC5ub3RpZmljYXRpb25zLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDAuNzVyZW07XG4gICAgfVxuICAgIC5ub3RpZmljYXRpb24taXRlbSB7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5ub3RpZmljYXRpb24taXRlbS51bnJlYWQge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxNCwgMTY1LCAyMzMsIDAuMDYpO1xuICAgIH1cbiAgICAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICB9XG4gICAgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgfVxuICAgIC5ub3RpZmljYXRpb24tdGltZSB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgfVxuICAgIC5lbXB0eS1zdGF0ZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgIH1cbiAgICAuZW1wdHktaWNvbiB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuICAgIC5lbXB0eS10ZXh0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIC5kYXNoYm9hcmQtY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5kYXNoYm9hcmQtcGFnZSB7IHBhZGRpbmc6IDFyZW0gMCAycmVtOyB9XG4gICAgICAuZGFzaGJvYXJkLWhlYWRlciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgICAgfVxuICAgICAgLmRhc2hib2FyZC1oZWFkZXIgaDEgeyBmb250LXNpemU6IDEuNzVyZW07IH1cbiAgICAgIC5kYXNoYm9hcmQtaGVhZGVyIHAgeyBmb250LXNpemU6IDFyZW07IH1cbiAgICAgIC5zdGF0cy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBnYXA6IDFyZW07IG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxuICAgICAgLnN0YXQtY2FyZCB7IHBhZGRpbmc6IDEuMjVyZW07IH1cbiAgICAgIC5zdGF0LXZhbHVlIHsgZm9udC1zaXplOiAxLjc1cmVtOyB9XG4gICAgICAudmlzaXQtaXRlbSwgLnByb3BlcnR5LWl0ZW0geyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuICAgICAgLnByb3BlcnR5LXRodW1iIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTYwcHg7IH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAuc3RhdHMtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return DashboardComponent;
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
//# sourceMappingURL=210.js.map