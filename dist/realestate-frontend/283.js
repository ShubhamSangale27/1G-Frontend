"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[283],{

/***/ 2283
/*!**********************************************************************!*\
  !*** ./src/app/features/auth/verify-email/verify-email.component.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyEmailComponent: () => (/* binding */ VerifyEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _core_components_brand_logo_brand_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/components/brand-logo/brand-logo.component */ 7303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/api.service */ 1776);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/auth.service */ 9058);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4285);








function VerifyEmailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Verifying your email...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function VerifyEmailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email verified successfully. Redirecting to dashboard...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function VerifyEmailComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Go to Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function VerifyEmailComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Invalid or missing verification link.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Back to Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
let VerifyEmailComponent = /*#__PURE__*/(() => {
  class VerifyEmailComponent {
    constructor(route, router, api, auth, toast) {
      this.route = route;
      this.router = router;
      this.api = api;
      this.auth = auth;
      this.toast = toast;
      this.loading = true;
      this.success = false;
      this.error = null;
    }
    ngOnInit() {
      const token = this.route.snapshot.queryParamMap.get('token');
      if (!token) {
        this.loading = false;
        this.error = null;
        return;
      }
      this.api.get('/auth/verify-email', {
        token
      }).subscribe({
        next: () => {
          this.auth.updateUserEmailVerified();
          this.loading = false;
          this.success = true;
          this.toast.success('Your email has been verified.');
          setTimeout(() => this.router.navigate(['/dashboard']), 1500);
        },
        error: err => {
          this.loading = false;
          this.error = err.error?.message || 'Link invalid or expired. Request a new verification email from your dashboard.';
        }
      });
    }
    static {
      this.ɵfac = function VerifyEmailComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: VerifyEmailComponent,
        selectors: [["app-verify-email"]],
        decls: 12,
        vars: 1,
        consts: [[1, "auth-page"], [1, "auth-background"], [1, "auth-container"], [1, "card", "auth-card"], [1, "auth-header"], ["variant", "auth"], [1, "message"], [1, "message", "success"], [1, "message", "error"], ["routerLink", "/dashboard", 1, "btn", "btn-primary"], ["routerLink", "/login", 1, "btn", "btn-outline"]],
        template: function VerifyEmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-brand-logo", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Email verification");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](8, VerifyEmailComponent_Conditional_8_Template, 2, 0, "p", 6)(9, VerifyEmailComponent_Conditional_9_Template, 2, 0, "p", 7)(10, VerifyEmailComponent_Conditional_10_Template, 4, 1)(11, VerifyEmailComponent_Conditional_11_Template, 4, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.loading ? 8 : ctx.success ? 9 : ctx.error ? 10 : 11);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _core_components_brand_logo_brand_logo_component__WEBPACK_IMPORTED_MODULE_2__.BrandLogoComponent],
        styles: [".auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  position: relative;\n  background: var(--bg);\n}\n\n.auth-background[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--primary-gradient);\n  opacity: 0.06;\n  z-index: 0;\n}\n\n.auth-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 420px;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  border: 2px solid var(--border);\n  box-shadow: var(--shadow-2xl);\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0 0 0.5rem;\n  color: var(--text);\n  font-weight: 800;\n}\n\n.message[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n  color: var(--text-secondary);\n}\n\n.message.success[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-weight: 500;\n}\n\n.message.error[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFhLGlCQUFBO0VBQW1CLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixhQUFBO0VBQWUsa0JBQUE7RUFBb0IscUJBQUE7QUFPcEk7O0FBTkk7RUFBbUIsa0JBQUE7RUFBb0IsUUFBQTtFQUFVLG1DQUFBO0VBQXFDLGFBQUE7RUFBZSxVQUFBO0FBY3pHOztBQWJJO0VBQWtCLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxXQUFBO0VBQWEsZ0JBQUE7QUFvQm5FOztBQW5CSTtFQUFhLGVBQUE7RUFBaUIsK0JBQUE7RUFBaUMsNkJBQUE7QUF5Qm5FOztBQXhCSTtFQUFlLGtCQUFBO0VBQW9CLHFCQUFBO0FBNkJ2Qzs7QUE1Qkk7RUFBa0IsaUJBQUE7RUFBbUIsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0IsZ0JBQUE7QUFtQ2pGOztBQWxDSTtFQUFXLGtCQUFBO0VBQW9CLG1CQUFBO0VBQXFCLDRCQUFBO0FBd0N4RDs7QUF2Q0k7RUFBbUIscUJBQUE7RUFBdUIsZ0JBQUE7QUE0QzlDOztBQTNDSTtFQUFpQixvQkFBQTtBQStDckI7O0FBOUNJO0VBQU8scUJBQUE7RUFBdUIsZUFBQTtBQW1EbEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuYXV0aC1wYWdlIHsgbWluLWhlaWdodDogMTAwdmg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiAycmVtOyBwb3NpdGlvbjogcmVsYXRpdmU7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgfVxuICAgIC5hdXRoLWJhY2tncm91bmQgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyYWRpZW50KTsgb3BhY2l0eTogMC4wNjsgei1pbmRleDogMDsgfVxuICAgIC5hdXRoLWNvbnRhaW5lciB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogNDIwcHg7IH1cbiAgICAuYXV0aC1jYXJkIHsgcGFkZGluZzogMi41cmVtOyBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMnhsKTsgfVxuICAgIC5hdXRoLWhlYWRlciB7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XG4gICAgLmF1dGgtaGVhZGVyIGgxIHsgZm9udC1zaXplOiAxLjVyZW07IG1hcmdpbjogMCAwIDAuNXJlbTsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXdlaWdodDogODAwOyB9XG4gICAgLm1lc3NhZ2UgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDFyZW07IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IH1cbiAgICAubWVzc2FnZS5zdWNjZXNzIHsgY29sb3I6IHZhcigtLXN1Y2Nlc3MpOyBmb250LXdlaWdodDogNTAwOyB9XG4gICAgLm1lc3NhZ2UuZXJyb3IgeyBjb2xvcjogdmFyKC0tZGFuZ2VyKTsgfVxuICAgIC5idG4geyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbjogMC4yNXJlbTsgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return VerifyEmailComponent;
})();

/***/ }

}]);
//# sourceMappingURL=283.js.map