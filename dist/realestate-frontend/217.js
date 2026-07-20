"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[217],{

/***/ 9217
/*!****************************************************************************!*\
  !*** ./src/app/features/auth/forgot-password/forgot-password.component.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/utils/http-error-message.util */ 3947);
/* harmony import */ var _core_components_brand_logo_brand_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/components/brand-logo/brand-logo.component */ 7303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/auth.service */ 9058);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3305);












function ForgotPasswordComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.inlineError());
  }
}
function ForgotPasswordComponent_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Valid email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Conditional_11_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.sendOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 11)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](5, ForgotPasswordComponent_Conditional_11_Conditional_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.emailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](((tmp_2_0 = ctx_r0.emailForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.emailForm.get("email")) == null ? null : tmp_2_0.touched) ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.emailForm.invalid || ctx_r0.submitting());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.submitting() ? "Sending OTP\u2026" : "Send OTP", " ");
  }
}
function ForgotPasswordComponent_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("OTP sent to mobile ending in ", ctx_r0.maskedMobile());
  }
}
function ForgotPasswordComponent_Conditional_12_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Enter 6-digit OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_Conditional_12_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_Conditional_12_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Resend in ", ctx_r0.formatCountdown(ctx_r0.resendCountdown()));
  }
}
function ForgotPasswordComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Conditional_12_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.resetPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 11)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](5, ForgotPasswordComponent_Conditional_12_Conditional_5_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 11)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "OTP (6 digits)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](10, ForgotPasswordComponent_Conditional_12_Conditional_10_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 11)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "New password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 11)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Confirm new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](19, ForgotPasswordComponent_Conditional_12_Conditional_19_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 20)(21, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ForgotPasswordComponent_Conditional_12_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.resendOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Resend OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](23, ForgotPasswordComponent_Conditional_12_Conditional_23_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.resetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.emailForm.getRawValue().email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r0.maskedMobile() ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](((tmp_4_0 = ctx_r0.resetForm.get("otp")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.resetForm.get("otp")) == null ? null : tmp_4_0.touched) ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r0.resetForm.hasError("passwordMismatch") && ((tmp_5_0 = ctx_r0.resetForm.get("confirmPassword")) == null ? null : tmp_5_0.touched) ? 19 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.canResend() || ctx_r0.submitting());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!ctx_r0.canResend() && ctx_r0.resendCountdown() > 0 ? 23 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.resetForm.invalid || ctx_r0.submitting());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.submitting() ? "Resetting\u2026" : "Reset password", " ");
  }
}
let ForgotPasswordComponent = /*#__PURE__*/(() => {
  class ForgotPasswordComponent {
    constructor(fb, auth, toast, router) {
      this.fb = fb;
      this.auth = auth;
      this.toast = toast;
      this.router = router;
      this.step = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(1, ...(ngDevMode ? [{
        debugName: "step"
      }] : []));
      this.submitting = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
        debugName: "submitting"
      }] : []));
      this.inlineError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
        debugName: "inlineError"
      }] : []));
      this.maskedMobile = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
        debugName: "maskedMobile"
      }] : []));
      this.resendCountdown = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(0, ...(ngDevMode ? [{
        debugName: "resendCountdown"
      }] : []));
      this.canResend = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(true, ...(ngDevMode ? [{
        debugName: "canResend"
      }] : []));
      this.countdownTimer = null;
      this.emailForm = this.fb.nonNullable.group({
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]]
      });
      this.resetForm = this.fb.nonNullable.group({
        otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^\d{6}$/)]],
        newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
        confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
      }, {
        validators: group => {
          const p = group.get('newPassword')?.value;
          const c = group.get('confirmPassword')?.value;
          return p === c ? null : {
            passwordMismatch: true
          };
        }
      });
    }
    ngOnInit() {
      const saved = sessionStorage.getItem('forgotPasswordEmail');
      if (saved) this.emailForm.patchValue({
        email: saved
      });
    }
    ngOnDestroy() {
      this.clearCountdown();
    }
    sendOtp() {
      if (this.emailForm.invalid) return;
      this.inlineError.set(null);
      this.submitting.set(true);
      const {
        email
      } = this.emailForm.getRawValue();
      this.auth.forgotPassword(email).subscribe({
        next: res => {
          this.submitting.set(false);
          sessionStorage.setItem('forgotPasswordEmail', email);
          this.maskedMobile.set(res.maskedMobile || '');
          this.step.set(2);
          this.startResendCooldown(res.resendAvailableAt);
          this.toast.success(res.message || 'OTP sent if account exists');
        },
        error: err => {
          this.submitting.set(false);
          const msg = err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse ? (0,_core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__.extractHttpErrorMessage)(err) : 'Failed to send OTP';
          this.inlineError.set(msg);
          this.toast.error(msg);
        }
      });
    }
    resendOtp() {
      this.sendOtp();
    }
    resetPassword() {
      if (this.resetForm.invalid) return;
      this.inlineError.set(null);
      this.submitting.set(true);
      const email = this.emailForm.getRawValue().email;
      const {
        otp,
        newPassword
      } = this.resetForm.getRawValue();
      this.auth.resetPassword(email, otp, newPassword).subscribe({
        next: res => {
          this.submitting.set(false);
          sessionStorage.removeItem('forgotPasswordEmail');
          this.toast.success(res.message || 'Password reset successfully');
          this.router.navigate(['/login']);
        },
        error: err => {
          this.submitting.set(false);
          const msg = err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse ? (0,_core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__.extractHttpErrorMessage)(err) : 'Password reset failed';
          this.inlineError.set(msg);
          this.toast.error(msg);
        }
      });
    }
    formatCountdown(seconds) {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m}:${s.toString().padStart(2, '0')}`;
    }
    startResendCooldown(resendAvailableAt) {
      this.clearCountdown();
      if (!resendAvailableAt) {
        this.canResend.set(true);
        return;
      }
      const target = new Date(resendAvailableAt).getTime();
      const tick = () => {
        const remaining = Math.max(0, Math.ceil((target - Date.now()) / 1000));
        this.resendCountdown.set(remaining);
        this.canResend.set(remaining <= 0);
        if (remaining <= 0) this.clearCountdown();
      };
      tick();
      this.countdownTimer = setInterval(tick, 1000);
    }
    clearCountdown() {
      if (this.countdownTimer) {
        clearInterval(this.countdownTimer);
        this.countdownTimer = null;
      }
    }
    static {
      this.ɵfac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 17,
        vars: 3,
        consts: [[1, "auth-page"], [1, "auth-background"], [1, "auth-container"], [1, "card", "auth-card"], [1, "auth-header"], ["variant", "auth"], ["role", "alert", 1, "auth-inline-error"], [3, "formGroup"], [1, "auth-footer"], ["routerLink", "/login"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "email", "formControlName", "email", "placeholder", "Enter your account email"], [1, "error"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", 3, "disabled"], ["type", "text", "readonly", "", 1, "readonly", 3, "value"], [1, "hint"], ["type", "text", "formControlName", "otp", "maxlength", "6", "inputmode", "numeric", "placeholder", "Enter OTP from SMS"], ["type", "password", "formControlName", "newPassword", "placeholder", "At least 6 characters"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Re-enter password"], [1, "resend-row"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click", "disabled"], [1, "resend-hint"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-brand-logo", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Reset password");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](10, ForgotPasswordComponent_Conditional_10_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](11, ForgotPasswordComponent_Conditional_11_Template, 8, 4, "form", 7)(12, ForgotPasswordComponent_Conditional_12_Template, 26, 9, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 8)(14, "p")(15, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Back to Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.step() === 1 ? "Enter your email to receive an OTP on your registered mobile" : "Enter OTP and choose a new password");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.inlineError() ? 10 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.step() === 1 ? 11 : 12);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _core_components_brand_logo_brand_logo_component__WEBPACK_IMPORTED_MODULE_6__.BrandLogoComponent],
        styles: [".auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  position: relative;\n  background: var(--bg);\n}\n\n.auth-background[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--primary-gradient);\n  opacity: 0.05;\n  z-index: 0;\n}\n\n.auth-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 450px;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  padding: 3rem;\n  border: 2px solid var(--border);\n  box-shadow: var(--shadow-2xl);\n}\n\n.auth-inline-error[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius);\n  background: var(--danger-bg);\n  color: var(--danger-text-strong);\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border: 1px solid rgba(239, 68, 68, 0.35);\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  color: var(--text);\n}\n\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9375rem;\n  margin: 0;\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid var(--border-light);\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n\n.btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.readonly[_ngcontent-%COMP%] {\n  background: var(--bg);\n  color: var(--text-muted);\n}\n\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin: 0 0 1rem;\n}\n\n.resend-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.resend-hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFhLGlCQUFBO0VBQW1CLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixhQUFBO0VBQWUsa0JBQUE7RUFBb0IscUJBQUE7QUFPcEk7O0FBTkk7RUFBbUIsa0JBQUE7RUFBb0IsUUFBQTtFQUFVLG1DQUFBO0VBQXFDLGFBQUE7RUFBZSxVQUFBO0FBY3pHOztBQWJJO0VBQWtCLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxXQUFBO0VBQWEsZ0JBQUE7QUFvQm5FOztBQW5CSTtFQUFhLGFBQUE7RUFBZSwrQkFBQTtFQUFpQyw2QkFBQTtBQXlCakU7O0FBeEJJO0VBQXFCLG1CQUFBO0VBQXFCLHFCQUFBO0VBQXVCLDRCQUFBO0VBQThCLDRCQUFBO0VBQThCLGdDQUFBO0VBQWtDLG9CQUFBO0VBQXNCLGdCQUFBO0VBQWtCLHlDQUFBO0FBbUMzTTs7QUFsQ0k7RUFBZSxrQkFBQTtFQUFvQixtQkFBQTtBQXVDdkM7O0FBdENJO0VBQWtCLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLHFCQUFBO0VBQXVCLGtCQUFBO0FBNkNuRjs7QUE1Q0k7RUFBaUIsd0JBQUE7RUFBMEIsb0JBQUE7RUFBc0IsU0FBQTtBQWtEckU7O0FBakRJO0VBQWUsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIseUNBQUE7QUF3RDVFOztBQXZESTtFQUFpQixxQkFBQTtFQUF1QixnQkFBQTtBQTRENUM7O0FBM0RJO0VBQWEsV0FBQTtFQUFhLGdCQUFBO0FBZ0U5Qjs7QUEvREk7RUFBWSxxQkFBQTtFQUF1Qix3QkFBQTtBQW9FdkM7O0FBbkVJO0VBQVEsbUJBQUE7RUFBcUIsd0JBQUE7RUFBMEIsZ0JBQUE7QUF5RTNEOztBQXhFSTtFQUFjLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixZQUFBO0VBQWMscUJBQUE7RUFBdUIsZUFBQTtBQWdGM0Y7O0FBL0VJO0VBQWUsb0JBQUE7RUFBc0Isd0JBQUE7QUFvRnpDIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmF1dGgtcGFnZSB7IG1pbi1oZWlnaHQ6IDEwMHZoOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgcGFkZGluZzogMnJlbTsgcG9zaXRpb246IHJlbGF0aXZlOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IH1cbiAgICAuYXV0aC1iYWNrZ3JvdW5kIHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7IG9wYWNpdHk6IDAuMDU7IHotaW5kZXg6IDA7IH1cbiAgICAuYXV0aC1jb250YWluZXIgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDE7IHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDQ1MHB4OyB9XG4gICAgLmF1dGgtY2FyZCB7IHBhZGRpbmc6IDNyZW07IGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yeGwpOyB9XG4gICAgLmF1dGgtaW5saW5lLWVycm9yIHsgbWFyZ2luOiAwIDAgMS4yNXJlbTsgcGFkZGluZzogMC43NXJlbSAxcmVtOyBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpOyBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItYmcpOyBjb2xvcjogdmFyKC0tZGFuZ2VyLXRleHQtc3Ryb25nKTsgZm9udC1zaXplOiAwLjkzNzVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM5LCA2OCwgNjgsIDAuMzUpOyB9XG4gICAgLmF1dGgtaGVhZGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAycmVtOyB9XG4gICAgLmF1dGgtaGVhZGVyIGgxIHsgZm9udC1zaXplOiAxLjc1cmVtOyBmb250LXdlaWdodDogODAwOyBtYXJnaW4tYm90dG9tOiAwLjVyZW07IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuICAgIC5hdXRoLWhlYWRlciBwIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDAuOTM3NXJlbTsgbWFyZ2luOiAwOyB9XG4gICAgLmF1dGgtZm9vdGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAycmVtOyBwYWRkaW5nLXRvcDogMnJlbTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7IH1cbiAgICAuYXV0aC1mb290ZXIgYSB7IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgIC5idG4tYmxvY2sgeyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogMXJlbTsgfVxuICAgIC5yZWFkb25seSB7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICAgLmhpbnQgeyBmb250LXNpemU6IDAuODc1cmVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbjogMCAwIDFyZW07IH1cbiAgICAucmVzZW5kLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC43NXJlbTsgbWFyZ2luLWJvdHRvbTogMC41cmVtOyBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgICAucmVzZW5kLWhpbnQgeyBmb250LXNpemU6IDAuODEyNXJlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return ForgotPasswordComponent;
})();

/***/ }

}]);
//# sourceMappingURL=217.js.map