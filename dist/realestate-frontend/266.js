"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[266],{

/***/ 4266
/*!***************************************************!*\
  !*** ./src/app/features/agent/agent.component.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentComponent: () => (/* binding */ AgentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/skeleton-loader/skeleton-loader.component */ 4540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/auth.service */ 9058);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/api.service */ 1776);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4285);










const _c0 = a0 => ["/agent/visit", a0];
const _c1 = () => [1, 2, 3, 4];
function AgentComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Due today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.dueTodayCount);
  }
}
function AgentComponent_div_33_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AgentComponent_div_33_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AgentComponent_div_33_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Customer: ", v_r2.userName);
  }
}
function AgentComponent_div_33_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AgentComponent_div_33_div_1_div_13_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const v_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.otpByVisit[v_r2.id], $event) || (ctx_r0.otpByVisit[v_r2.id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AgentComponent_div_33_div_1_div_13_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const v_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.completeVisit(v_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const v_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.otpByVisit[v_r2.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.completingId === v_r2.id || !(ctx_r0.otpByVisit[v_r2.id] == null ? null : ctx_r0.otpByVisit[v_r2.id].trim()));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.completingId === v_r2.id ? "Completing\u2026" : "Complete", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, v_r2.id));
  }
}
function AgentComponent_div_33_div_1_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "View details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, v_r2.id));
  }
}
function AgentComponent_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 21)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AgentComponent_div_33_div_1_span_10_Template, 2, 0, "span", 23)(11, AgentComponent_div_33_div_1_span_11_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AgentComponent_div_33_div_1_div_12_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AgentComponent_div_33_div_1_div_13_Template, 7, 6, "div", 26)(14, AgentComponent_div_33_div_1_a_14_Template, 2, 3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("due-today", ctx_r0.isDueToday(v_r2.scheduledAt) && v_r2.status === "ASSIGNED")("completed", v_r2.status === "COMPLETED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](v_r2.propertyTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\uD83D\uDCC5 ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 16, v_r2.scheduledAt, "EEE, MMM d \u00B7 h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("status-assigned", v_r2.status === "ASSIGNED")("status-completed", v_r2.status === "COMPLETED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](v_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isDueToday(v_r2.scheduledAt) && v_r2.status === "ASSIGNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isUpcoming(v_r2.scheduledAt) && v_r2.status === "ASSIGNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", v_r2.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", v_r2.status === "ASSIGNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", v_r2.status === "COMPLETED");
  }
}
function AgentComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AgentComponent_div_33_div_1_Template, 15, 19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.filteredVisits);
  }
}
function AgentComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.filter === "completed" ? "No completed visits yet." : "No site visits assigned to you yet.");
  }
}
function AgentComponent_div_35_app_skeleton_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-skeleton-loader", 40);
  }
}
function AgentComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AgentComponent_div_35_app_skeleton_loader_1_Template, 1, 0, "app-skeleton-loader", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c1));
  }
}
function AgentComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AgentComponent_div_36_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AgentComponent_div_36_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.page === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Page ", ctx_r0.page + 1, " of ", ctx_r0.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.page >= ctx_r0.totalPages - 1);
  }
}
let AgentComponent = /*#__PURE__*/(() => {
  class AgentComponent {
    constructor(auth, api, cdr, ngZone, toast) {
      this.auth = auth;
      this.api = api;
      this.cdr = cdr;
      this.ngZone = ngZone;
      this.toast = toast;
      this.visits = [];
      this.loading = true;
      this.page = 0;
      this.size = 20;
      this.totalPages = 0;
      this.totalElements = 0;
      this.dueTodayCount = 0;
      this.filter = 'active';
      this.otpByVisit = {};
      this.completingId = null;
    }
    ngOnInit() {
      this.load();
    }
    get filteredVisits() {
      if (this.filter === 'active') return this.visits.filter(v => v.status === 'ASSIGNED');
      if (this.filter === 'completed') return this.visits.filter(v => v.status === 'COMPLETED');
      return this.visits;
    }
    get activeCount() {
      return this.visits.filter(v => v.status === 'ASSIGNED').length;
    }
    get completedCount() {
      return this.visits.filter(v => v.status === 'COMPLETED').length;
    }
    setFilter(f) {
      this.filter = f;
    }
    load() {
      this.loading = true;
      this.api.get('/agent/sitevisits', {
        page: this.page,
        size: this.size
      }).subscribe({
        next: res => {
          this.ngZone.run(() => {
            this.visits = res?.content ?? [];
            this.totalElements = res?.totalElements ?? 0;
            this.totalPages = res?.totalPages ?? 0;
            this.dueTodayCount = res?.dueTodayCount ?? 0;
            this.loading = false;
            this.cdr.detectChanges();
          });
        },
        error: () => {
          this.ngZone.run(() => {
            this.loading = false;
            this.cdr.detectChanges();
          });
        }
      });
    }
    completeVisit(v) {
      const otp = this.otpByVisit[v.id]?.trim();
      if (!otp) return;
      this.completingId = v.id;
      this.api.post(`/agent/sitevisits/${v.id}/complete?otp=${encodeURIComponent(otp)}`, {}).subscribe({
        next: () => {
          this.ngZone.run(() => {
            this.toast.success('Visit marked complete!');
            v.status = 'COMPLETED';
            delete this.otpByVisit[v.id];
            this.completingId = null;
            this.cdr.detectChanges();
          });
        },
        error: err => {
          this.ngZone.run(() => {
            this.toast.error(err.error?.message || 'Invalid OTP or visit cannot be completed');
            this.completingId = null;
            this.cdr.detectChanges();
          });
        }
      });
    }
    isDueToday(scheduledAt) {
      if (!scheduledAt) return false;
      const d = new Date(scheduledAt);
      const today = new Date();
      return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();
    }
    isUpcoming(scheduledAt) {
      return new Date(scheduledAt).getTime() > Date.now();
    }
    prevPage() {
      if (this.page > 0) {
        this.page--;
        this.load();
      }
    }
    nextPage() {
      if (this.page < this.totalPages - 1) {
        this.page++;
        this.load();
      }
    }
    static {
      this.ɵfac = function AgentComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AgentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: AgentComponent,
        selectors: [["app-agent"]],
        decls: 37,
        vars: 13,
        consts: [[1, "agent-page"], [1, "container"], [1, "agent-header"], [1, "eyebrow"], [1, "stats-row"], [1, "stat-card", "card"], ["class", "stat-card card highlight", 4, "ngIf"], [1, "visits-section", "card"], [1, "section-header"], [1, "tabs"], ["type", "button", 1, "tab", 3, "click"], ["class", "visits-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "pagination-row", 4, "ngIf"], [1, "stat-card", "card", "highlight"], [1, "visits-list"], ["class", "visit-item", 3, "due-today", "completed", 4, "ngFor", "ngForOf"], [1, "visit-item"], [1, "visit-info"], [1, "visit-property"], [1, "visit-meta"], [1, "visit-status"], ["class", "due-badge", 4, "ngIf"], ["class", "upcoming-badge", 4, "ngIf"], ["class", "visit-user", 4, "ngIf"], ["class", "visit-actions", 4, "ngIf"], ["class", "btn btn-outline btn-sm", 3, "routerLink", 4, "ngIf"], [1, "due-badge"], [1, "upcoming-badge"], [1, "visit-user"], [1, "visit-actions"], [1, "inline-otp"], ["type", "text", "placeholder", "OTP from customer", "maxlength", "6", "inputmode", "numeric", 1, "otp-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], [1, "empty-state"], [1, "empty-icon"], [1, "loading-state"], ["height", "88px", "style", "margin-bottom: 0.75rem;", 4, "ngFor", "ngForOf"], ["height", "88px", 2, "margin-bottom", "0.75rem"], [1, "pagination-row"], [1, "btn", "btn-outline", "btn-sm", 3, "click", "disabled"], [1, "page-info"]],
        template: function AgentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Field Operations");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "My Site Visits");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Upcoming visits first. The customer will tell you their OTP in person \u2014 enter it here to complete.");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Active visits");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, AgentComponent_div_16_Template, 5, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Completed");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 7)(23, "div", 8)(24, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Assigned Visits");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 9)(27, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AgentComponent_Template_button_click_27_listener() {
              return ctx.setFilter("all");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "All");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AgentComponent_Template_button_click_29_listener() {
              return ctx.setFilter("active");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Active");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AgentComponent_Template_button_click_31_listener() {
              return ctx.setFilter("completed");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Completed");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, AgentComponent_div_33_Template, 2, 1, "div", 11)(34, AgentComponent_div_34_Template, 5, 1, "div", 12)(35, AgentComponent_div_35_Template, 2, 2, "div", 13)(36, AgentComponent_div_36_Template, 7, 4, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.activeCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dueTodayCount > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.completedCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.filter === "all");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.filter === "active");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.filter === "completed");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.filteredVisits.length && !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.filteredVisits.length && !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totalPages > 1 && !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_3__.SkeletonLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
        styles: [".agent-page[_ngcontent-%COMP%] {\n  padding: 2rem 0 4rem;\n  background: var(--bg);\n  min-height: calc(100vh - 80px);\n}\n\n.agent-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--primary);\n}\n\n.agent-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 800;\n  margin: 0.35rem 0 0.5rem;\n}\n\n.agent-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0;\n}\n\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  text-align: center;\n  border: 1px solid var(--border);\n}\n\n.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: var(--text);\n}\n\n.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.stat-card.highlight[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  border-color: rgba(14, 165, 233, 0.3);\n}\n\n.visits-section[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  border: 1px solid var(--border);\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  background: var(--bg);\n  padding: 0.25rem;\n  border-radius: var(--radius);\n  border: 1px solid var(--border);\n}\n\n.tab[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 0.45rem 0.85rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--primary);\n  box-shadow: var(--shadow-sm);\n}\n\n.visits-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n\n.visit-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  transition: var(--transition);\n}\n\n.visit-item[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n\n.visit-item.due-today[_ngcontent-%COMP%] {\n  border-color: rgba(14, 165, 233, 0.35);\n  background: linear-gradient(135deg, rgba(14, 165, 233, 0.06), #fff);\n}\n\n.visit-item.completed[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n\n.visit-property[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  margin-bottom: 0.35rem;\n}\n\n.visit-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n  flex-wrap: wrap;\n  font-size: 0.84rem;\n  color: var(--text-muted);\n  align-items: center;\n}\n\n.visit-status[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.55rem;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.status-assigned[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info-text);\n}\n\n.status-completed[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success-text);\n}\n\n.due-badge[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning-text);\n  padding: 0.15rem 0.45rem;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n\n.upcoming-badge[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: var(--success-text);\n  padding: 0.15rem 0.45rem;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n\n.visit-user[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--text-secondary);\n  margin-top: 0.25rem;\n}\n\n.visit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.5rem;\n}\n\n.inline-otp[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.otp-input[_ngcontent-%COMP%] {\n  width: 110px;\n  padding: 0.5rem 0.65rem;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 1rem;\n  letter-spacing: 0.1em;\n  text-align: center;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.5rem;\n  color: var(--text-muted);\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.pagination-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border);\n}\n\n.page-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWdlbnQvYWdlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQWMsb0JBQUE7RUFBc0IscUJBQUE7RUFBdUIsOEJBQUE7QUFHL0Q7O0FBRkk7RUFBZ0Isc0JBQUE7QUFNcEI7O0FBTEk7RUFBVyxrQkFBQTtFQUFvQixnQkFBQTtFQUFrQix5QkFBQTtFQUEyQixzQkFBQTtFQUF3QixxQkFBQTtBQWF4Rzs7QUFaSTtFQUFtQixnQ0FBQTtFQUFrQyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLHdCQUFBO0FBbUI1Rjs7QUFsQkk7RUFBa0Isd0JBQUE7RUFBMEIsU0FBQTtBQXVCaEQ7O0FBdEJJO0VBQWEsYUFBQTtFQUFlLDJEQUFBO0VBQTZELFNBQUE7RUFBVyxxQkFBQTtBQTZCeEc7O0FBNUJJO0VBQWEsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsK0JBQUE7QUFrQ3ZEOztBQWpDSTtFQUFvQixjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGtCQUFBO0FBd0M5RTs7QUF2Q0k7RUFBa0IsaUJBQUE7RUFBbUIsd0JBQUE7RUFBMEIseUJBQUE7RUFBMkIsc0JBQUE7QUE4QzlGOztBQTdDSTtFQUF1QiwwQkFBQTtFQUE0QixxQ0FBQTtBQWtEdkQ7O0FBakRJO0VBQWtCLGdCQUFBO0VBQWtCLCtCQUFBO0FBc0R4Qzs7QUFyREk7RUFBa0IsYUFBQTtFQUFlLDhCQUFBO0VBQWdDLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsU0FBQTtFQUFXLHFCQUFBO0VBQXVCLG9CQUFBO0VBQXNCLDRDQUFBO0FBZ0VuSzs7QUEvREk7RUFBcUIsU0FBQTtFQUFXLGtCQUFBO0VBQW9CLGdCQUFBO0FBcUV4RDs7QUFwRUk7RUFBUSxhQUFBO0VBQWUsWUFBQTtFQUFjLHFCQUFBO0VBQXVCLGdCQUFBO0VBQWtCLDRCQUFBO0VBQThCLCtCQUFBO0FBNkVoSDs7QUE1RUk7RUFBTyxZQUFBO0VBQWMsdUJBQUE7RUFBeUIsd0JBQUE7RUFBMEIsK0JBQUE7RUFBaUMsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQix3QkFBQTtBQXVGcks7O0FBdEZJO0VBQWMsMEJBQUE7RUFBNEIscUJBQUE7RUFBdUIsNEJBQUE7QUE0RnJFOztBQTNGSTtFQUFlLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixZQUFBO0FBaUcxRDs7QUFoR0k7RUFDRSxhQUFBO0VBQWUsOEJBQUE7RUFBZ0MsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixTQUFBO0VBQ3JGLGdCQUFBO0VBQWtCLDBCQUFBO0VBQTRCLCtCQUFBO0VBQzlDLCtCQUFBO0VBQWlDLDZCQUFBO0FBMEd2Qzs7QUF4R0k7RUFBb0IsNEJBQUE7QUE0R3hCOztBQTNHSTtFQUF3QixzQ0FBQTtFQUFxQyxtRUFBQTtBQWdIakU7O0FBL0dJO0VBQXdCLGFBQUE7QUFtSDVCOztBQWxISTtFQUFrQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLHNCQUFBO0FBd0h6RDs7QUF2SEk7RUFBYyxhQUFBO0VBQWUsWUFBQTtFQUFjLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0Isd0JBQUE7RUFBMEIsbUJBQUE7QUFnSTlHOztBQS9ISTtFQUFnQix3QkFBQTtFQUEwQixvQkFBQTtFQUFzQixpQkFBQTtFQUFtQixnQkFBQTtFQUFrQix5QkFBQTtBQXVJekc7O0FBdElJO0VBQW1CLDBCQUFBO0VBQTRCLHVCQUFBO0FBMkluRDs7QUExSUk7RUFBb0IsNkJBQUE7RUFBK0IsMEJBQUE7QUErSXZEOztBQTlJSTtFQUFhLDZCQUFBO0VBQStCLDBCQUFBO0VBQTRCLHdCQUFBO0VBQTBCLG9CQUFBO0VBQXNCLGlCQUFBO0VBQW1CLGdCQUFBO0FBdUovSTs7QUF0Skk7RUFBa0Isb0NBQUE7RUFBbUMsMEJBQUE7RUFBNEIsd0JBQUE7RUFBMEIsb0JBQUE7RUFBc0IsaUJBQUE7RUFBbUIsZ0JBQUE7QUErSnhKOztBQTlKSTtFQUFjLGtCQUFBO0VBQW9CLDRCQUFBO0VBQThCLG1CQUFBO0FBb0twRTs7QUFuS0k7RUFBaUIsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLHFCQUFBO0VBQXVCLFdBQUE7QUEwS25GOztBQXpLSTtFQUFjLGFBQUE7RUFBZSxXQUFBO0VBQWEsbUJBQUE7RUFBcUIsZUFBQTtBQWdMbkU7O0FBL0tJO0VBQWEsWUFBQTtFQUFjLHVCQUFBO0VBQXlCLCtCQUFBO0VBQWlDLCtCQUFBO0VBQWlDLGVBQUE7RUFBaUIscUJBQUE7RUFBdUIsa0JBQUE7QUF5TGxLOztBQXhMSTtFQUFlLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsd0JBQUE7QUE4THhEOztBQTdMSTtFQUFjLGlCQUFBO0VBQW1CLHFCQUFBO0FBa01yQzs7QUFqTUk7RUFBaUIsaUJBQUE7QUFxTXJCOztBQXBNSTtFQUFrQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUFXLGtCQUFBO0VBQW9CLGlCQUFBO0VBQW1CLG1DQUFBO0FBNk01Rzs7QUE1TUk7RUFBYSxtQkFBQTtFQUFxQix3QkFBQTtBQWlOdEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuYWdlbnQtcGFnZSB7IHBhZGRpbmc6IDJyZW0gMCA0cmVtOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTsgfVxuICAgIC5hZ2VudC1oZWFkZXIgeyBtYXJnaW4tYm90dG9tOiAxLjc1cmVtOyB9XG4gICAgLmV5ZWJyb3cgeyBmb250LXNpemU6IDAuNzJyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjA4ZW07IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxuICAgIC5hZ2VudC1oZWFkZXIgaDEgeyBmb250LWZhbWlseTogdmFyKC0tZm9udC1kaXNwbGF5KTsgZm9udC1zaXplOiAycmVtOyBmb250LXdlaWdodDogODAwOyBtYXJnaW46IDAuMzVyZW0gMCAwLjVyZW07IH1cbiAgICAuYWdlbnQtaGVhZGVyIHAgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbjogMDsgfVxuICAgIC5zdGF0cy1yb3cgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE0MHB4LCAxZnIpKTsgZ2FwOiAxcmVtOyBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cbiAgICAuc3RhdC1jYXJkIHsgcGFkZGluZzogMS4yNXJlbTsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9XG4gICAgLnN0YXQtY2FyZCBzdHJvbmcgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxLjc1cmVtOyBmb250LXdlaWdodDogODAwOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbiAgICAuc3RhdC1jYXJkIHNwYW4geyBmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wNGVtOyB9XG4gICAgLnN0YXQtY2FyZC5oaWdobGlnaHQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWJnKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LDE2NSwyMzMsMC4zKTsgfVxuICAgIC52aXNpdHMtc2VjdGlvbiB7IHBhZGRpbmc6IDEuNzVyZW07IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH1cbiAgICAuc2VjdGlvbi1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiAxcmVtOyBtYXJnaW4tYm90dG9tOiAxLjVyZW07IHBhZGRpbmctYm90dG9tOiAxcmVtOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTsgfVxuICAgIC5zZWN0aW9uLWhlYWRlciBoMiB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAxLjI1cmVtOyBmb250LXdlaWdodDogNzAwOyB9XG4gICAgLnRhYnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuMzVyZW07IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgcGFkZGluZzogMC4yNXJlbTsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfVxuICAgIC50YWIgeyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBwYWRkaW5nOiAwLjQ1cmVtIDAuODVyZW07IGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7IGZvbnQtc2l6ZTogMC44NzVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICAgLnRhYi5hY3RpdmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLXByaW1hcnkpOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pOyB9XG4gICAgLnZpc2l0cy1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAwLjg1cmVtOyB9XG4gICAgLnZpc2l0LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDEuMjVyZW07IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuICAgIC52aXNpdC1pdGVtOmhvdmVyIHsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTsgfVxuICAgIC52aXNpdC1pdGVtLmR1ZS10b2RheSB7IGJvcmRlci1jb2xvcjogcmdiYSgxNCwxNjUsMjMzLDAuMzUpOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE0LDE2NSwyMzMsMC4wNiksICNmZmYpOyB9XG4gICAgLnZpc2l0LWl0ZW0uY29tcGxldGVkIHsgb3BhY2l0eTogMC44NTsgfVxuICAgIC52aXNpdC1wcm9wZXJ0eSB7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMXJlbTsgbWFyZ2luLWJvdHRvbTogMC4zNXJlbTsgfVxuICAgIC52aXNpdC1tZXRhIHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjY1cmVtOyBmbGV4LXdyYXA6IHdyYXA7IGZvbnQtc2l6ZTogMC44NHJlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLnZpc2l0LXN0YXR1cyB7IHBhZGRpbmc6IDAuMTVyZW0gMC41NXJlbTsgYm9yZGVyLXJhZGl1czogOTk5cHg7IGZvbnQtc2l6ZTogMC43cmVtOyBmb250LXdlaWdodDogNzAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgLnN0YXR1cy1hc3NpZ25lZCB7IGJhY2tncm91bmQ6IHZhcigtLWluZm8tYmcpOyBjb2xvcjogdmFyKC0taW5mby10ZXh0KTsgfVxuICAgIC5zdGF0dXMtY29tcGxldGVkIHsgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1iZyk7IGNvbG9yOiB2YXIoLS1zdWNjZXNzLXRleHQpOyB9XG4gICAgLmR1ZS1iYWRnZSB7IGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctYmcpOyBjb2xvcjogdmFyKC0td2FybmluZy10ZXh0KTsgcGFkZGluZzogMC4xNXJlbSAwLjQ1cmVtOyBib3JkZXItcmFkaXVzOiA5OTlweDsgZm9udC1zaXplOiAwLjdyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IH1cbiAgICAudXBjb21pbmctYmFkZ2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xMik7IGNvbG9yOiB2YXIoLS1zdWNjZXNzLXRleHQpOyBwYWRkaW5nOiAwLjE1cmVtIDAuNDVyZW07IGJvcmRlci1yYWRpdXM6IDk5OXB4OyBmb250LXNpemU6IDAuN3JlbTsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuICAgIC52aXNpdC11c2VyIHsgZm9udC1zaXplOiAwLjg0cmVtOyBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBtYXJnaW4tdG9wOiAwLjI1cmVtOyB9XG4gICAgLnZpc2l0LWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1lbmQ7IGdhcDogMC41cmVtOyB9XG4gICAgLmlubGluZS1vdHAgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwOyB9XG4gICAgLm90cC1pbnB1dCB7IHdpZHRoOiAxMTBweDsgcGFkZGluZzogMC41cmVtIDAuNjVyZW07IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7IGZvbnQtc2l6ZTogMXJlbTsgbGV0dGVyLXNwYWNpbmc6IDAuMWVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAuZW1wdHktc3RhdGUgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDIuNXJlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICAgLmVtcHR5LWljb24geyBmb250LXNpemU6IDIuNXJlbTsgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XG4gICAgLmxvYWRpbmctc3RhdGUgeyBwYWRkaW5nOiAwLjVyZW0gMDsgfVxuICAgIC5wYWdpbmF0aW9uLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMXJlbTsgbWFyZ2luLXRvcDogMS41cmVtOyBwYWRkaW5nLXRvcDogMXJlbTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH1cbiAgICAucGFnZS1pbmZvIHsgZm9udC1zaXplOiAwLjg3NXJlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return AgentComponent;
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

/***/ }

}]);
//# sourceMappingURL=266.js.map