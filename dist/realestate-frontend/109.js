"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[109],{

/***/ 8109
/*!******************************************************************!*\
  !*** ./src/app/features/auth/verify-otp/verify-otp.component.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyOtpComponent: () => (/* binding */ VerifyOtpComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _core_http_context_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/http-context.tokens */ 9646);
/* harmony import */ var _core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/utils/http-error-message.util */ 3947);
/* harmony import */ var _core_components_brand_logo_brand_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/components/brand-logo/brand-logo.component */ 7303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/api.service */ 1776);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/auth.service */ 9058);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3305);














function VerifyOtpComponent_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Enter 6-digit OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function VerifyOtpComponent_Conditional_10_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Resend available in ", ctx_r1.formatCountdown(ctx_r1.resendCountdownSeconds), " ");
  }
}
function VerifyOtpComponent_Conditional_10_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Daily resend limit reached. Try again after 24 hours. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function VerifyOtpComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function VerifyOtpComponent_Conditional_10_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 11)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 11)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 11)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "OTP (6 digits)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](13, VerifyOtpComponent_Conditional_10_Conditional_13_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "We sent an OTP to your mobile via MSG91. Enter it above to verify.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 16)(17, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VerifyOtpComponent_Conditional_10_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.resendOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, VerifyOtpComponent_Conditional_10_span_19_Template, 2, 1, "span", 18)(20, VerifyOtpComponent_Conditional_10_span_20_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](((tmp_4_0 = ctx_r1.form.get("mobileOtp")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.form.get("mobileOtp")) == null ? null : tmp_4_0.touched) ? 13 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.canResend || ctx_r1.resending);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.resending ? "Resending..." : "Resend OTP", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.canResend && ctx_r1.resendCountdownSeconds > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.resendAttemptsRemaining <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Resends used today: ", ctx_r1.resendAttemptsUsed, " / ", ctx_r1.maxResendAttemptsPerDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.form.invalid || ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.submitting ? "Verifying..." : "Verify & Continue", " ");
  }
}
function VerifyOtpComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No pending verification found. Please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " first.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
const PENDING_VERIFY_KEY = 'pendingVerification';
let VerifyOtpComponent = /*#__PURE__*/(() => {
  class VerifyOtpComponent {
    constructor(fb, api, auth, toast, router) {
      this.fb = fb;
      this.api = api;
      this.auth = auth;
      this.toast = toast;
      this.router = router;
      this.email = null;
      this.mobile = null;
      this.resendAttemptsUsed = 0;
      this.resendAttemptsRemaining = 3;
      this.maxResendAttemptsPerDay = 3;
      this.resendAvailableAt = null;
      this.resendCountdownSeconds = 0;
      this.resendTimerId = null;
      this.form = this.fb.nonNullable.group({
        mobileOtp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\d+$/)]]
      });
      this.submitting = false;
      this.resending = false;
      this.skipGlobalErrorToast = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContext().set(_core_http_context_tokens__WEBPACK_IMPORTED_MODULE_4__.SKIP_GLOBAL_ERROR_TOAST, true);
    }
    ngOnInit() {
      const pending = sessionStorage.getItem(PENDING_VERIFY_KEY);
      if (pending) {
        try {
          const {
            email,
            mobile,
            resendAttemptsUsed,
            resendAttemptsRemaining,
            resendAvailableAt,
            maxResendAttemptsPerDay
          } = JSON.parse(pending);
          this.email = email ?? null;
          this.mobile = mobile ?? null;
          this.resendAttemptsUsed = Number.isFinite(resendAttemptsUsed) ? resendAttemptsUsed : 0;
          this.resendAttemptsRemaining = Number.isFinite(resendAttemptsRemaining) ? resendAttemptsRemaining : 3;
          this.maxResendAttemptsPerDay = Number.isFinite(maxResendAttemptsPerDay) ? maxResendAttemptsPerDay : 3;
          this.resendAvailableAt = resendAvailableAt ? new Date(resendAvailableAt) : null;
          this.startResendCountdown();
        } catch {
          sessionStorage.removeItem(PENDING_VERIFY_KEY);
        }
      }
    }
    ngOnDestroy() {
      this.stopResendCountdown();
    }
    onSubmit() {
      if (this.form.invalid || !this.email || !this.mobile) return;
      const {
        mobileOtp
      } = this.form.getRawValue();
      this.submitting = true;
      this.api.post('/auth/verify-signup', {
        email: this.email,
        mobile: this.mobile,
        mobileOtp
      }, this.skipGlobalErrorToast).subscribe({
        next: res => {
          sessionStorage.removeItem(PENDING_VERIFY_KEY);
          this.auth.completeSignup(res);
          setTimeout(() => {
            this.toast.success('Registration complete. You are now logged in.');
            this.router.navigate(['/dashboard']);
          }, 0);
        },
        error: err => {
          const msg = err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse ? (0,_core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__.extractHttpErrorMessage)(err) : 'Verification failed. Check OTP and try again.';
          setTimeout(() => {
            this.submitting = false;
            this.toast.error(msg);
          }, 0);
        }
      });
    }
    get canResend() {
      if (!this.email || !this.mobile) return false;
      if (this.resendAttemptsRemaining <= 0) return false;
      return this.resendCountdownSeconds <= 0;
    }
    resendOtp() {
      if (!this.email || !this.mobile || !this.canResend || this.resending) return;
      this.resending = true;
      this.auth.resendSignupOtp(this.email, this.mobile).subscribe({
        next: res => {
          this.resending = false;
          this.resendAttemptsUsed = res.resendAttemptsUsed ?? this.resendAttemptsUsed + 1;
          this.resendAttemptsRemaining = res.resendAttemptsRemaining ?? Math.max(0, this.maxResendAttemptsPerDay - this.resendAttemptsUsed);
          this.maxResendAttemptsPerDay = res.maxResendAttemptsPerDay ?? this.maxResendAttemptsPerDay;
          this.resendAvailableAt = res.resendAvailableAt ? new Date(res.resendAvailableAt) : null;
          sessionStorage.setItem(PENDING_VERIFY_KEY, JSON.stringify({
            email: this.email,
            mobile: this.mobile,
            resendAttemptsUsed: this.resendAttemptsUsed,
            resendAttemptsRemaining: this.resendAttemptsRemaining,
            resendAvailableAt: this.resendAvailableAt ? this.resendAvailableAt.toISOString() : null,
            maxResendAttemptsPerDay: this.maxResendAttemptsPerDay
          }));
          this.startResendCountdown();
          this.toast.success(res.message || 'OTP resent successfully.');
        },
        error: err => {
          this.resending = false;
          const msg = err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse ? (0,_core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__.extractHttpErrorMessage)(err) : 'Unable to resend OTP right now.';
          this.toast.error(msg);
        }
      });
    }
    formatCountdown(totalSeconds) {
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      return `${mins}:${String(secs).padStart(2, '0')}`;
    }
    startResendCountdown() {
      this.stopResendCountdown();
      const computeSeconds = () => {
        if (!this.resendAvailableAt) return 0;
        const diffMs = this.resendAvailableAt.getTime() - Date.now();
        return diffMs > 0 ? Math.ceil(diffMs / 1000) : 0;
      };
      this.resendCountdownSeconds = computeSeconds();
      this.resendTimerId = setInterval(() => {
        this.resendCountdownSeconds = computeSeconds();
        if (this.resendCountdownSeconds <= 0) {
          this.stopResendCountdown();
        }
      }, 1000);
    }
    stopResendCountdown() {
      if (this.resendTimerId) {
        clearInterval(this.resendTimerId);
        this.resendTimerId = null;
      }
    }
    static {
      this.ɵfac = function VerifyOtpComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VerifyOtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: VerifyOtpComponent,
        selectors: [["app-verify-otp"]],
        decls: 16,
        vars: 1,
        consts: [[1, "auth-page"], [1, "auth-background"], [1, "auth-container"], [1, "card", "auth-card"], [1, "auth-header"], ["variant", "auth"], [3, "formGroup"], [1, "message"], [1, "auth-footer"], ["routerLink", "/login"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "text", "readonly", "", 1, "readonly", 3, "value"], ["type", "text", "formControlName", "mobileOtp", "placeholder", "Enter OTP from SMS", "maxlength", "6", "inputmode", "numeric"], [1, "error"], [1, "hint"], [1, "resend-row"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click", "disabled"], ["class", "resend-hint", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", 3, "disabled"], [1, "resend-hint"], ["routerLink", "/signup"]],
        template: function VerifyOtpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-brand-logo", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Verify your mobile");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Enter the 6-digit OTP sent to your mobile to complete registration");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](10, VerifyOtpComponent_Conditional_10_Template, 25, 12, "form", 6)(11, VerifyOtpComponent_Conditional_11_Template, 5, 0, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8)(13, "p")(14, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Back to Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.email && ctx.mobile ? 10 : 11);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _core_components_brand_logo_brand_logo_component__WEBPACK_IMPORTED_MODULE_6__.BrandLogoComponent],
        styles: [".auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  position: relative;\n  background: var(--bg);\n}\n\n.auth-background[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--primary-gradient);\n  opacity: 0.05;\n  z-index: 0;\n}\n\n.auth-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 450px;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  padding: 3rem;\n  border: 2px solid var(--border);\n  box-shadow: var(--shadow-2xl);\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  color: var(--text);\n}\n\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9375rem;\n  margin: 0;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid var(--border);\n  border-radius: var(--radius);\n  font-size: 1rem;\n}\n\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%] {\n  background: var(--bg);\n  color: var(--text-muted);\n}\n\n.form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: var(--danger, #dc2626);\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-muted);\n  margin-bottom: 1rem;\n  background: var(--bg);\n  padding: 0.75rem;\n  border-radius: var(--radius);\n}\n\n.resend-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.75rem;\n}\n\n.resend-hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-muted);\n}\n\n.btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.5rem;\n}\n\n.message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n}\n\n.message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border-light);\n}\n\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC92ZXJpZnktb3RwL3ZlcmlmeS1vdHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQWEsaUJBQUE7RUFBbUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLGFBQUE7RUFBZSxrQkFBQTtFQUFvQixxQkFBQTtBQU9wSTs7QUFOSTtFQUFtQixrQkFBQTtFQUFvQixRQUFBO0VBQVUsbUNBQUE7RUFBcUMsYUFBQTtFQUFlLFVBQUE7QUFjekc7O0FBYkk7RUFBa0Isa0JBQUE7RUFBb0IsVUFBQTtFQUFZLFdBQUE7RUFBYSxnQkFBQTtBQW9CbkU7O0FBbkJJO0VBQWEsYUFBQTtFQUFlLCtCQUFBO0VBQWlDLDZCQUFBO0FBeUJqRTs7QUF4Qkk7RUFBZSxrQkFBQTtFQUFvQixtQkFBQTtBQTZCdkM7O0FBNUJJO0VBQWtCLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLHFCQUFBO0VBQXVCLGtCQUFBO0FBbUNuRjs7QUFsQ0k7RUFBaUIsd0JBQUE7RUFBMEIsb0JBQUE7RUFBc0IsU0FBQTtBQXdDckU7O0FBdkNJO0VBQWMsc0JBQUE7QUEyQ2xCOztBQTFDSTtFQUFvQixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLHFCQUFBO0VBQXVCLG1CQUFBO0FBaURqRjs7QUFoREk7RUFBb0IsV0FBQTtFQUFhLHFCQUFBO0VBQXVCLCtCQUFBO0VBQWlDLDRCQUFBO0VBQThCLGVBQUE7QUF3RDNIOztBQXZESTtFQUE2QixxQkFBQTtFQUF1Qix3QkFBQTtBQTREeEQ7O0FBM0RJO0VBQXFCLDZCQUFBO0VBQStCLG1CQUFBO0VBQXFCLG1CQUFBO0VBQXFCLGNBQUE7QUFrRWxHOztBQWpFSTtFQUFRLG9CQUFBO0VBQXNCLHdCQUFBO0VBQTBCLG1CQUFBO0VBQXFCLHFCQUFBO0VBQXVCLGdCQUFBO0VBQWtCLDRCQUFBO0FBMEUxSDs7QUF6RUk7RUFBYyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsWUFBQTtFQUFjLGVBQUE7RUFBaUIsc0JBQUE7QUFpRnJGOztBQWhGSTtFQUFlLG9CQUFBO0VBQXNCLHdCQUFBO0FBcUZ6Qzs7QUFwRkk7RUFBYSxXQUFBO0VBQWEsa0JBQUE7QUF5RjlCOztBQXhGSTtFQUFXLGtCQUFBO0VBQW9CLHdCQUFBO0FBNkZuQzs7QUE1Rkk7RUFBYSxxQkFBQTtFQUF1QixnQkFBQTtBQWlHeEM7O0FBaEdJO0VBQWUsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0IsbUJBQUE7RUFBcUIseUNBQUE7QUF1R2hGOztBQXRHSTtFQUFpQixTQUFBO0VBQVcsbUJBQUE7RUFBcUIsd0JBQUE7QUE0R3JEOztBQTNHSTtFQUFpQixxQkFBQTtFQUF1QixnQkFBQTtBQWdINUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuYXV0aC1wYWdlIHsgbWluLWhlaWdodDogMTAwdmg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiAycmVtOyBwb3NpdGlvbjogcmVsYXRpdmU7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgfVxuICAgIC5hdXRoLWJhY2tncm91bmQgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyYWRpZW50KTsgb3BhY2l0eTogMC4wNTsgei1pbmRleDogMDsgfVxuICAgIC5hdXRoLWNvbnRhaW5lciB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogNDUwcHg7IH1cbiAgICAuYXV0aC1jYXJkIHsgcGFkZGluZzogM3JlbTsgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTJ4bCk7IH1cbiAgICAuYXV0aC1oZWFkZXIgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDJyZW07IH1cbiAgICAuYXV0aC1oZWFkZXIgaDEgeyBmb250LXNpemU6IDEuNzVyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IG1hcmdpbi1ib3R0b206IDAuNXJlbTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG4gICAgLmF1dGgtaGVhZGVyIHAgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMC45Mzc1cmVtOyBtYXJnaW46IDA7IH1cbiAgICAuZm9ybS1ncm91cCB7IG1hcmdpbi1ib3R0b206IDEuMjVyZW07IH1cbiAgICAuZm9ybS1ncm91cCBsYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiAwLjVyZW07IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cbiAgICAuZm9ybS1ncm91cCBpbnB1dCB7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAwLjc1cmVtIDFyZW07IGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7IGZvbnQtc2l6ZTogMXJlbTsgfVxuICAgIC5mb3JtLWdyb3VwIGlucHV0LnJlYWRvbmx5IHsgYmFja2dyb3VuZDogdmFyKC0tYmcpOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cbiAgICAuZm9ybS1ncm91cCAuZXJyb3IgeyBjb2xvcjogdmFyKC0tZGFuZ2VyLCAjZGMyNjI2KTsgZm9udC1zaXplOiAwLjg3NXJlbTsgbWFyZ2luLXRvcDogMC4yNXJlbTsgZGlzcGxheTogYmxvY2s7IH1cbiAgICAuaGludCB7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDFyZW07IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgcGFkZGluZzogMC43NXJlbTsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsgfVxuICAgIC5yZXNlbmQtcm93IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjc1cmVtOyBmbGV4LXdyYXA6IHdyYXA7IG1hcmdpbi1ib3R0b206IDAuNzVyZW07IH1cbiAgICAucmVzZW5kLWhpbnQgeyBmb250LXNpemU6IDAuODEyNXJlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICAgLmJ0bi1ibG9jayB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiAwLjVyZW07IH1cbiAgICAubWVzc2FnZSB7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICAgLm1lc3NhZ2UgYSB7IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgIC5hdXRoLWZvb3RlciB7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLXRvcDogMS41cmVtOyBwYWRkaW5nLXRvcDogMS41cmVtOyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTsgfVxuICAgIC5hdXRoLWZvb3RlciBwIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDAuODc1cmVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cbiAgICAuYXV0aC1mb290ZXIgYSB7IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return VerifyOtpComponent;
})();

/***/ }

}]);
//# sourceMappingURL=109.js.map