"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[622],{

/***/ 3622
/*!*******************************************************!*\
  !*** ./src/app/features/profile/profile.component.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/http-error-message.util */ 3947);
/* harmony import */ var _core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/image-url.util */ 8681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/auth.service */ 9058);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/api.service */ 1776);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/services/config.service */ 8802);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4285);













function ProfileComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 9);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r0.profileImagePreview(), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ProfileComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.initials());
  }
}
function ProfileComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileComponent_Conditional_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.removePhoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Valid email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.passwordInlineError());
  }
}
function ProfileComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Resend in ", ctx_r0.formatCountdown(ctx_r0.passwordOtpCountdown()));
  }
}
function ProfileComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Sent to mobile ending ", ctx_r0.passwordOtpMaskedMobile());
  }
}
function ProfileComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
let ProfileComponent = /*#__PURE__*/(() => {
  class ProfileComponent {
    constructor(fb, auth, api, config, toast) {
      this.fb = fb;
      this.auth = auth;
      this.api = api;
      this.config = config;
      this.toast = toast;
      this.savingProfile = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
        debugName: "savingProfile"
      }] : []));
      this.uploadingPhoto = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
        debugName: "uploadingPhoto"
      }] : []));
      this.sendingPasswordOtp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
        debugName: "sendingPasswordOtp"
      }] : []));
      this.changingPassword = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
        debugName: "changingPassword"
      }] : []));
      this.profileImagePreview = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
        debugName: "profileImagePreview"
      }] : []));
      this.passwordInlineError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
        debugName: "passwordInlineError"
      }] : []));
      this.passwordOtpMaskedMobile = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
        debugName: "passwordOtpMaskedMobile"
      }] : []));
      this.passwordOtpCountdown = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(0, ...(ngDevMode ? [{
        debugName: "passwordOtpCountdown"
      }] : []));
      this.canResendPasswordOtp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(true, ...(ngDevMode ? [{
        debugName: "canResendPasswordOtp"
      }] : []));
      this.profileImageUrl = null;
      this.countdownTimer = null;
      this.profileForm = this.fb.nonNullable.group({
        fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
        mobile: [{
          value: '',
          disabled: true
        }]
      });
      this.passwordForm = this.fb.nonNullable.group({
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
      this.auth.getProfile().subscribe({
        next: user => this.applyUser(user),
        error: () => {
          const u = this.auth.user();
          if (u) this.applyUser(u);
        }
      });
    }
    ngOnDestroy() {
      this.clearCountdown();
    }
    initials() {
      const name = this.profileForm.getRawValue().fullName || this.auth.user()?.fullName || '?';
      return name.charAt(0).toUpperCase();
    }
    applyUser(user) {
      this.profileForm.patchValue({
        fullName: user.fullName,
        email: user.email,
        mobile: user.mobile || ''
      });
      this.profileImageUrl = user.profileImageUrl || null;
      this.profileImagePreview.set(user.profileImageUrl ? (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_6__.resolvePropertyImageUrl)(user.profileImageUrl, this.config.apiUrl) : null);
      this.auth.updateLocalUser(user);
    }
    onPhotoSelected(event) {
      const input = event.target;
      const file = input.files?.[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        this.toast.error('Please choose an image file');
        return;
      }
      this.uploadingPhoto.set(true);
      this.api.uploadFile('/upload', file).subscribe({
        next: res => {
          this.uploadingPhoto.set(false);
          this.profileImageUrl = res.url;
          this.profileImagePreview.set((0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_6__.resolvePropertyImageUrl)(res.url, this.config.apiUrl));
          this.toast.success('Photo uploaded. Save profile to apply.');
          input.value = '';
        },
        error: err => {
          this.uploadingPhoto.set(false);
          const msg = err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse ? (0,_core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__.extractHttpErrorMessage)(err) : 'Upload failed';
          this.toast.error(msg);
          input.value = '';
        }
      });
    }
    removePhoto() {
      this.profileImageUrl = null;
      this.profileImagePreview.set(null);
    }
    saveProfile() {
      if (this.profileForm.invalid) return;
      this.savingProfile.set(true);
      const {
        fullName,
        email
      } = this.profileForm.getRawValue();
      this.auth.updateProfile({
        fullName,
        email,
        profileImageUrl: this.profileImageUrl
      }).subscribe({
        next: user => {
          this.savingProfile.set(false);
          this.applyUser(user);
          this.toast.success('Profile updated');
        },
        error: err => {
          this.savingProfile.set(false);
          const msg = err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse ? (0,_core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__.extractHttpErrorMessage)(err) : 'Failed to save profile';
          this.toast.error(msg);
        }
      });
    }
    sendPasswordOtp() {
      this.passwordInlineError.set(null);
      this.sendingPasswordOtp.set(true);
      this.auth.sendChangePasswordOtp().subscribe({
        next: res => {
          this.sendingPasswordOtp.set(false);
          this.passwordOtpMaskedMobile.set(res.maskedMobile || '');
          this.startResendCooldown(res.resendAvailableAt);
          this.toast.success(res.message || 'OTP sent');
        },
        error: err => {
          this.sendingPasswordOtp.set(false);
          const msg = err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse ? (0,_core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__.extractHttpErrorMessage)(err) : 'Failed to send OTP';
          this.passwordInlineError.set(msg);
          this.toast.error(msg);
        }
      });
    }
    changePassword() {
      if (this.passwordForm.invalid) return;
      this.passwordInlineError.set(null);
      this.changingPassword.set(true);
      const {
        otp,
        newPassword
      } = this.passwordForm.getRawValue();
      this.auth.changePassword(otp, newPassword).subscribe({
        next: res => {
          this.changingPassword.set(false);
          this.passwordForm.reset();
          this.toast.success(res.message || 'Password changed. Please log in again.');
          this.auth.logout();
        },
        error: err => {
          this.changingPassword.set(false);
          const msg = err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse ? (0,_core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_5__.extractHttpErrorMessage)(err) : 'Password change failed';
          this.passwordInlineError.set(msg);
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
        this.canResendPasswordOtp.set(true);
        return;
      }
      const target = new Date(resendAvailableAt).getTime();
      const tick = () => {
        const remaining = Math.max(0, Math.ceil((target - Date.now()) / 1000));
        this.passwordOtpCountdown.set(remaining);
        this.canResendPasswordOtp.set(remaining <= 0);
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
      this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_10__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 68,
        vars: 17,
        consts: [[1, "profile-page"], [1, "container"], [1, "profile-header"], ["routerLink", "/dashboard", 1, "btn", "btn-outline", "btn-sm"], [1, "profile-grid"], [1, "card", "profile-card"], [3, "ngSubmit", "formGroup"], [1, "avatar-section"], [1, "avatar-wrap"], ["alt", "Profile", 1, "avatar-img", 3, "src"], [1, "avatar-placeholder"], [1, "avatar-actions"], [1, "btn", "btn-outline", "btn-sm", "upload-btn"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change", "disabled"], ["type", "button", 1, "btn", "btn-outline", "btn-sm"], [1, "form-group"], ["type", "text", "formControlName", "fullName"], ["type", "email", "formControlName", "email"], [1, "error"], ["type", "text", "formControlName", "mobile", "readonly", "", 1, "readonly"], [1, "hint"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "section-desc"], ["role", "alert", 1, "inline-error"], [1, "otp-row"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click", "disabled"], ["type", "text", "formControlName", "otp", "maxlength", "6", "inputmode", "numeric", "placeholder", "6-digit OTP"], ["type", "password", "formControlName", "newPassword", "placeholder", "At least 6 characters"], ["type", "password", "formControlName", "confirmPassword"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "My Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Update your photo, name, and email. Mobile number cannot be changed here.");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\u2190 Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Profile details");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_14_listener() {
              return ctx.saveProfile();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 7)(16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](17, ProfileComponent_Conditional_17_Template, 1, 1, "img", 9)(18, ProfileComponent_Conditional_18_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 11)(20, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_22_listener($event) {
              return ctx.onPhotoSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](23, ProfileComponent_Conditional_23_Template, 2, 0, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 15)(25, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Full name");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 15)(29, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](32, ProfileComponent_Conditional_32_Template, 2, 0, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 15)(34, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Mobile (read-only)");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Contact support to change your mobile number.");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 5)(42, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Change password");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "p", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "We'll send an OTP to your registered mobile to confirm the change.");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](46, ProfileComponent_Conditional_46_Template, 2, 1, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 24)(48, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_48_listener() {
              return ctx.sendPasswordOtp();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](50, ProfileComponent_Conditional_50_Template, 2, 1, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](51, ProfileComponent_Conditional_51_Template, 2, 1, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_52_listener() {
              return ctx.changePassword();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 15)(54, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "OTP");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 15)(58, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "New password");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 15)(62, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Confirm new password");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](65, ProfileComponent_Conditional_65_Template, 2, 0, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            let tmp_5_0;
            let tmp_14_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.profileForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.profileImagePreview() ? 17 : 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.uploadingPhoto() ? "Uploading\u2026" : "Change photo", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.uploadingPhoto());
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.profileImagePreview() ? 23 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](((tmp_5_0 = ctx.profileForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.profileForm.get("email")) == null ? null : tmp_5_0.touched) ? 32 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.profileForm.invalid || ctx.savingProfile());
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.savingProfile() ? "Saving\u2026" : "Save profile", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.passwordInlineError() ? 46 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.sendingPasswordOtp() || !ctx.canResendPasswordOtp());
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.sendingPasswordOtp() ? "Sending\u2026" : "Send OTP", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!ctx.canResendPasswordOtp() && ctx.passwordOtpCountdown() > 0 ? 50 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.passwordOtpMaskedMobile() ? 51 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.passwordForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.passwordForm.hasError("passwordMismatch") && ((tmp_14_0 = ctx.passwordForm.get("confirmPassword")) == null ? null : tmp_14_0.touched) ? 65 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.passwordForm.invalid || ctx.changingPassword());
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.changingPassword() ? "Updating\u2026" : "Update password", " ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
        styles: [".profile-page[_ngcontent-%COMP%] {\n  padding: 2rem 0 4rem;\n  min-height: calc(100vh - 80px);\n  background: var(--bg);\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n}\n\n.profile-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 2rem;\n}\n\n.profile-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n}\n\n.profile-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.5rem;\n}\n\n@media (min-width: 900px) {\n  .profile-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1.2fr 1fr;\n  }\n}\n.profile-card[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n}\n\n.profile-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 1.25rem;\n}\n\n.section-desc[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: -0.75rem 0 1rem;\n  font-size: 0.9375rem;\n}\n\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n\n.avatar-wrap[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid var(--border);\n  background: var(--bg);\n  flex-shrink: 0;\n}\n\n.avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n  background: var(--primary-gradient);\n}\n\n.avatar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.upload-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0;\n}\n\n.readonly[_ngcontent-%COMP%] {\n  background: var(--bg);\n  color: var(--text-muted);\n}\n\n.hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8125rem;\n  color: var(--text-muted);\n  margin-top: 0.35rem;\n}\n\n.inline-error[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius);\n  background: var(--danger-bg);\n  color: var(--danger-text-strong);\n  font-size: 0.875rem;\n  border: 1px solid rgba(239, 68, 68, 0.35);\n}\n\n.otp-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFnQixvQkFBQTtFQUFzQiw4QkFBQTtFQUFnQyxxQkFBQTtBQUcxRTs7QUFGSTtFQUFrQixhQUFBO0VBQWUsOEJBQUE7RUFBZ0MsdUJBQUE7RUFBeUIsU0FBQTtFQUFXLG1CQUFBO0VBQXFCLGVBQUE7QUFXOUg7O0FBVkk7RUFBcUIsbUJBQUE7RUFBcUIsZUFBQTtBQWU5Qzs7QUFkSTtFQUFvQixTQUFBO0VBQVcsd0JBQUE7QUFtQm5DOztBQWxCSTtFQUFnQixhQUFBO0VBQWUsMEJBQUE7RUFBNEIsV0FBQTtBQXdCL0Q7O0FBdkJJO0VBQTRCO0lBQWdCLGdDQUFBO0VBNEI5QztBQUNGO0FBNUJJO0VBQWdCLGdCQUFBO0FBK0JwQjs7QUE5Qkk7RUFBbUIsbUJBQUE7RUFBcUIsa0JBQUE7QUFtQzVDOztBQWxDSTtFQUFnQix3QkFBQTtFQUEwQix1QkFBQTtFQUF5QixvQkFBQTtBQXdDdkU7O0FBdkNJO0VBQWtCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixZQUFBO0VBQWMscUJBQUE7RUFBdUIsZUFBQTtBQStDL0Y7O0FBOUNJO0VBQWUsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixnQkFBQTtFQUFrQiwrQkFBQTtFQUFpQyxxQkFBQTtFQUF1QixjQUFBO0FBd0Q1STs7QUF2REk7RUFBYyxXQUFBO0VBQWEsWUFBQTtFQUFjLGlCQUFBO0FBNkQ3Qzs7QUE1REk7RUFBc0IsV0FBQTtFQUFhLFlBQUE7RUFBYyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixZQUFBO0VBQWMsbUNBQUE7QUF3RW5LOztBQXZFSTtFQUFrQixhQUFBO0VBQWUsV0FBQTtFQUFhLGVBQUE7QUE2RWxEOztBQTVFSTtFQUFjLGVBQUE7RUFBaUIsU0FBQTtBQWlGbkM7O0FBaEZJO0VBQVkscUJBQUE7RUFBdUIsd0JBQUE7QUFxRnZDOztBQXBGSTtFQUFRLGNBQUE7RUFBZ0Isb0JBQUE7RUFBc0Isd0JBQUE7RUFBMEIsbUJBQUE7QUEyRjVFOztBQTFGSTtFQUFnQixtQkFBQTtFQUFxQixxQkFBQTtFQUF1Qiw0QkFBQTtFQUE4Qiw0QkFBQTtFQUE4QixnQ0FBQTtFQUFrQyxtQkFBQTtFQUFxQix5Q0FBQTtBQW9Hbkw7O0FBbkdJO0VBQVcsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFlBQUE7RUFBYyxlQUFBO0VBQWlCLG1CQUFBO0FBMkdsRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5wcm9maWxlLXBhZ2UgeyBwYWRkaW5nOiAycmVtIDAgNHJlbTsgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IH1cbiAgICAucHJvZmlsZS1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDFyZW07IG1hcmdpbi1ib3R0b206IDJyZW07IGZsZXgtd3JhcDogd3JhcDsgfVxuICAgIC5wcm9maWxlLWhlYWRlciBoMSB7IG1hcmdpbjogMCAwIDAuMzVyZW07IGZvbnQtc2l6ZTogMnJlbTsgfVxuICAgIC5wcm9maWxlLWhlYWRlciBwIHsgbWFyZ2luOiAwOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cbiAgICAucHJvZmlsZS1ncmlkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IGdhcDogMS41cmVtOyB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IC5wcm9maWxlLWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMmZyIDFmcjsgfSB9XG4gICAgLnByb2ZpbGUtY2FyZCB7IHBhZGRpbmc6IDEuNzVyZW07IH1cbiAgICAucHJvZmlsZS1jYXJkIGgyIHsgbWFyZ2luOiAwIDAgMS4yNXJlbTsgZm9udC1zaXplOiAxLjI1cmVtOyB9XG4gICAgLnNlY3Rpb24tZGVzYyB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luOiAtMC43NXJlbSAwIDFyZW07IGZvbnQtc2l6ZTogMC45Mzc1cmVtOyB9XG4gICAgLmF2YXRhci1zZWN0aW9uIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxLjI1cmVtOyBtYXJnaW4tYm90dG9tOiAxLjVyZW07IGZsZXgtd3JhcDogd3JhcDsgfVxuICAgIC5hdmF0YXItd3JhcCB7IHdpZHRoOiA5NnB4OyBoZWlnaHQ6IDk2cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tYmcpOyBmbGV4LXNocmluazogMDsgfVxuICAgIC5hdmF0YXItaW1nIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb2JqZWN0LWZpdDogY292ZXI7IH1cbiAgICAuYXZhdGFyLXBsYWNlaG9sZGVyIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMnJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyYWRpZW50KTsgfVxuICAgIC5hdmF0YXItYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC41cmVtOyBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgICAudXBsb2FkLWJ0biB7IGN1cnNvcjogcG9pbnRlcjsgbWFyZ2luOiAwOyB9XG4gICAgLnJlYWRvbmx5IHsgYmFja2dyb3VuZDogdmFyKC0tYmcpOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cbiAgICAuaGludCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDAuODEyNXJlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tdG9wOiAwLjM1cmVtOyB9XG4gICAgLmlubGluZS1lcnJvciB7IG1hcmdpbi1ib3R0b206IDFyZW07IHBhZGRpbmc6IDAuNzVyZW0gMXJlbTsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWJnKTsgY29sb3I6IHZhcigtLWRhbmdlci10ZXh0LXN0cm9uZyk7IGZvbnQtc2l6ZTogMC44NzVyZW07IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM5LCA2OCwgNjgsIDAuMzUpOyB9XG4gICAgLm90cC1yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuNzVyZW07IGZsZXgtd3JhcDogd3JhcDsgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return ProfileComponent;
})();

/***/ }

}]);
//# sourceMappingURL=622.js.map