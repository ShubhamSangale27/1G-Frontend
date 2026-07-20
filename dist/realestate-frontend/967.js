"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[967],{

/***/ 6967
/*!*************************************************************************!*\
  !*** ./src/app/features/blog-editor/blog-editor-dashboard.component.ts ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogEditorDashboardComponent: () => (/* binding */ BlogEditorDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/api.service */ 1776);
/* harmony import */ var _core_services_blog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/blog.service */ 9244);
/* harmony import */ var _core_models_blog_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/models/blog.model */ 4256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/utils/image-url.util */ 8681);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _shared_blog_rich_text_editor_blog_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/blog-rich-text-editor/blog-rich-text-editor.component */ 7076);
/* harmony import */ var _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/skeleton-loader/skeleton-loader.component */ 4540);
/* harmony import */ var _core_http_context_tokens__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/http-context.tokens */ 9646);
/* harmony import */ var _core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/utils/http-error-message.util */ 3947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 6124);



















const _c0 = ["saveBanner"];
const _c1 = a0 => ["/blog", a0];
const _c2 = () => ({
  standalone: true
});
function BlogEditorDashboardComponent_div_12_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "View on blog \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](1, _c1, ctx_r0.lastSavedSlug));
  }
}
function BlogEditorDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 39, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, BlogEditorDashboardComponent_div_12_a_3_Template, 2, 3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("save-banner-error", ctx_r0.saveMessageError());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r0.saveMessage(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.lastSavedSlug && ctx_r0.draft.published);
  }
}
function BlogEditorDashboardComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r0.posts.length);
  }
}
function BlogEditorDashboardComponent_div_19_app_skeleton_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-skeleton-loader", 45);
  }
}
function BlogEditorDashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, BlogEditorDashboardComponent_div_19_app_skeleton_loader_1_Template, 1, 0, "app-skeleton-loader", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r0.skeletonItems)("ngForTrackBy", ctx_r0.trackByIndex);
  }
}
function BlogEditorDashboardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r0.listError);
  }
}
function BlogEditorDashboardComponent_div_21_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" \u00B7 ", p_r3.category);
  }
}
function BlogEditorDashboardComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 50)(5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, BlogEditorDashboardComponent_div_21_span_7_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 53)(11, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_div_21_Template_button_click_11_listener() {
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.editPost(p_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_div_21_Template_button_click_13_listener() {
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.togglePublish(p_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_div_21_Template_button_click_15_listener() {
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.deletePost(p_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("active", ctx_r0.editingId === p_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](p_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("published", p_r3.published);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](p_r3.published ? "Published" : "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", p_r3.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](9, 9, p_r3.updatedAt, "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](p_r3.published ? "Unpublish" : "Publish");
  }
}
function BlogEditorDashboardComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " No posts yet. Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "+ New Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, " to start writing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogEditorDashboardComponent_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "option", 57);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", c_r4);
  }
}
function BlogEditorDashboardComponent_img_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "img", 58);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", ctx_r0.coverPreviewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}
function BlogEditorDashboardComponent_div_71_app_blog_rich_text_editor_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-blog-rich-text-editor", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_div_71_app_blog_rich_text_editor_19_Template_app_blog_rich_text_editor_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](b_r7.content, $event) || (b_r7.content = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", b_r7.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](2, _c2));
  }
}
function BlogEditorDashboardComponent_div_71_div_20_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "YouTube watch/youtu.be link or Google Drive video with link sharing enabled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogEditorDashboardComponent_div_71_div_20_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "Paste a public image URL or Google Drive image link.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogEditorDashboardComponent_div_71_div_20_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "img", 75);
  }
  if (rf & 2) {
    const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", ctx_r0.blockImagePreview(b_r7.mediaUrl), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}
function BlogEditorDashboardComponent_div_71_div_20_iframe_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "iframe", 76);
  }
  if (rf & 2) {
    const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", ctx_r0.blockVideoEmbed(b_r7.mediaUrl), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeResourceUrl"]);
  }
}
function BlogEditorDashboardComponent_div_71_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 17)(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_div_71_div_20_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](b_r7.mediaUrl, $event) || (b_r7.mediaUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, BlogEditorDashboardComponent_div_71_div_20_small_2_Template, 2, 0, "small", 52)(3, BlogEditorDashboardComponent_div_71_div_20_small_3_Template, 2, 0, "small", 52)(4, BlogEditorDashboardComponent_div_71_div_20_img_4_Template, 1, 1, "img", 72)(5, BlogEditorDashboardComponent_div_71_div_20_iframe_5_Template, 1, 1, "iframe", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_div_71_div_20_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](b_r7.caption, $event) || (b_r7.caption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", b_r7.mediaUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("placeholder", b_r7.blockType === "VIDEO" ? "YouTube or Google Drive video URL" : "Google Drive or public image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", b_r7.blockType === "VIDEO");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", b_r7.blockType === "IMAGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", b_r7.blockType === "IMAGE" && ctx_r0.blockImagePreview(b_r7.mediaUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", b_r7.blockType === "VIDEO" && ctx_r0.blockVideoEmbed(b_r7.mediaUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", b_r7.caption);
  }
}
function BlogEditorDashboardComponent_div_71_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 17)(1, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_div_71_div_21_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](b_r7.content, $event) || (b_r7.content = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_div_71_div_21_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](b_r7.linkUrl, $event) || (b_r7.linkUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", b_r7.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", b_r7.linkUrl);
  }
}
function BlogEditorDashboardComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("dragstart", function BlogEditorDashboardComponent_div_71_Template_div_dragstart_0_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onDragStart(i_r6));
    })("dragover", function BlogEditorDashboardComponent_div_71_Template_div_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onDragOver($event));
    })("drop", function BlogEditorDashboardComponent_div_71_Template_div_drop_0_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onDrop(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "\u22EE\u22EE");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 61)(4, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_div_71_Template_select_ngModelChange_4_listener($event) {
      const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](b_r7.blockType, $event) || (b_r7.blockType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, "Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, "Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_div_71_Template_button_click_13_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.move(i_r6, -1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "\u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_div_71_Template_button_click_15_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.move(i_r6, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_div_71_Template_button_click_17_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.removeBlock(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, BlogEditorDashboardComponent_div_71_app_blog_rich_text_editor_19_Template, 1, 3, "app-blog-rich-text-editor", 68)(20, BlogEditorDashboardComponent_div_71_div_20_Template, 7, 7, "div", 69)(21, BlogEditorDashboardComponent_div_71_div_21_Template, 3, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r7 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("dragging", ctx_r0.dragIndex === i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", b_r7.blockType);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", i_r6 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", i_r6 === ctx_r0.draft.blocks.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", b_r7.blockType === "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", b_r7.blockType === "IMAGE" || b_r7.blockType === "VIDEO");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", b_r7.blockType === "LINK");
  }
}
let BlogEditorDashboardComponent = /*#__PURE__*/(() => {
  class BlogEditorDashboardComponent {
    constructor() {
      this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService);
      this.blog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_blog_service__WEBPACK_IMPORTED_MODULE_7__.BlogService);
      this.toast = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService);
      this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
      this.sanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer);
      this.embedCache = new Map();
      this.posts = [];
      this.editingId = null;
      this.dragIndex = null;
      this.categoryOptions = _core_models_blog_model__WEBPACK_IMPORTED_MODULE_8__.BLOG_CATEGORY_OPTIONS;
      this.draft = this.emptyDraft();
      this.lastSavedSlug = '';
      this.saving = false;
      this.listLoading = true;
      this.listError = '';
      this.saveMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('', ...(ngDevMode ? [{
        debugName: "saveMessage"
      }] : []));
      this.saveMessageError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
        debugName: "saveMessageError"
      }] : []));
      this.skeletonItems = [0, 1, 2, 3];
      this.skipToast = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpContext().set(_core_http_context_tokens__WEBPACK_IMPORTED_MODULE_15__.SKIP_GLOBAL_ERROR_TOAST, true);
      this.trackByPostId = (_, p) => p.id;
      this.trackByBlockIndex = i => i;
      this.trackByIndex = i => i;
    }
    get coverPreviewUrl() {
      const url = (this.draft.coverImageUrl || '').trim();
      if (!url || !(0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_11__.isAllowedImageUrl)(url)) return '';
      return (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_11__.resolvePropertyImageUrl)(url);
    }
    ngOnInit() {
      this.loadPosts();
    }
    loadPosts(silent = false) {
      if (!silent) {
        this.listLoading = true;
        this.listError = '';
      }
      this.blog.getEditorPosts().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: items => {
          this.posts = items;
          this.listLoading = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.listLoading = false;
          this.listError = 'Could not load your posts.';
          this.cdr.detectChanges();
        }
      });
    }
    emptyDraft() {
      return {
        title: '',
        excerpt: '',
        coverImageUrl: '',
        metaTitle: '',
        metaDescription: '',
        category: '',
        tags: '',
        published: false,
        blocks: [{
          blockType: 'TEXT',
          content: '',
          displayOrder: 0
        }]
      };
    }
    newPost() {
      this.editingId = null;
      this.lastSavedSlug = '';
      this.draft = this.emptyDraft();
      this.clearSaveMessage();
    }
    editPost(p) {
      this.editingId = p.id;
      this.lastSavedSlug = p.slug;
      this.draft = {
        title: p.title,
        excerpt: p.excerpt || '',
        coverImageUrl: p.coverImageUrl || '',
        metaTitle: p.metaTitle || '',
        metaDescription: p.metaDescription || '',
        category: p.category || '',
        tags: p.tags || '',
        published: p.published,
        blocks: (p.blocks || []).map((b, i) => ({
          ...b,
          displayOrder: i
        }))
      };
      this.clearSaveMessage();
      this.cdr.detectChanges();
    }
    blockImagePreview(url) {
      const u = (url || '').trim();
      if (!u || !(0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_11__.isAllowedImageUrl)(u)) return '';
      return (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_11__.resolvePropertyImageUrl)(u);
    }
    blockVideoEmbed(url) {
      const u = (url || '').trim();
      if (!u || !(0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_11__.isAllowedVideoUrl)(u)) return undefined;
      const embed = (0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_11__.resolveVideoEmbedUrl)(u);
      if (!embed) return undefined;
      let cached = this.embedCache.get(embed);
      if (!cached) {
        cached = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
        this.embedCache.set(embed, cached);
      }
      return cached;
    }
    addBlock(type) {
      this.draft.blocks.push({
        blockType: type,
        content: type === 'TEXT' ? '' : undefined,
        displayOrder: this.draft.blocks.length
      });
    }
    removeBlock(i) {
      this.draft.blocks.splice(i, 1);
      this.normalizeOrders();
    }
    move(i, dir) {
      const j = i + dir;
      if (j < 0 || j >= this.draft.blocks.length) return;
      [this.draft.blocks[i], this.draft.blocks[j]] = [this.draft.blocks[j], this.draft.blocks[i]];
      this.normalizeOrders();
    }
    onDragStart(index) {
      this.dragIndex = index;
    }
    onDragOver(event) {
      event.preventDefault();
    }
    onDrop(index) {
      if (this.dragIndex === null || this.dragIndex === index) return;
      const moved = this.draft.blocks.splice(this.dragIndex, 1)[0];
      this.draft.blocks.splice(index, 0, moved);
      this.dragIndex = null;
      this.normalizeOrders();
    }
    save() {
      if (this.saving) return;
      if (!this.draft.title.trim()) {
        this.showSaveMessage('Title is required.', true);
        return;
      }
      if (!this.draft.blocks.length) {
        this.showSaveMessage('Add at least one content block.', true);
        return;
      }
      for (const b of this.draft.blocks) {
        if (b.blockType === 'TEXT' && this.isHtmlBlank(b.content)) {
          this.showSaveMessage('Each text block needs content.', true);
          return;
        }
        if ((b.blockType === 'IMAGE' || b.blockType === 'VIDEO') && !b.mediaUrl?.trim()) {
          this.showSaveMessage(`${b.blockType} block needs a URL.`, true);
          return;
        }
        if (b.blockType === 'IMAGE' && !(0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_11__.isAllowedImageUrl)(b.mediaUrl ?? undefined)) {
          this.showSaveMessage('Image blocks need a Google Drive or public image URL.', true);
          return;
        }
        if (b.blockType === 'VIDEO' && !(0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_11__.isAllowedVideoUrl)(b.mediaUrl ?? undefined)) {
          this.showSaveMessage('Video blocks need a YouTube or Google Drive URL.', true);
          return;
        }
        if (b.blockType === 'LINK' && (!b.content?.trim() || !b.linkUrl?.trim())) {
          this.showSaveMessage('Link blocks need text and URL.', true);
          return;
        }
      }
      const cover = (this.draft.coverImageUrl || '').trim();
      if (cover && !(0,_core_utils_image_url_util__WEBPACK_IMPORTED_MODULE_11__.isAllowedImageUrl)(cover)) {
        this.showSaveMessage('Cover must be a Google Drive or public image URL.', true);
        return;
      }
      this.saving = true;
      this.normalizeOrders();
      const req = {
        ...this.draft,
        blocks: this.draft.blocks.map(b => ({
          ...b
        }))
      };
      const obs = this.editingId ? this.api.put(`/blogs/editor/${this.editingId}`, req, this.skipToast) : this.api.post('/blogs/editor', req, this.skipToast);
      obs.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: saved => {
          this.saving = false;
          this.editingId = saved.id;
          this.lastSavedSlug = saved.slug;
          const msg = saved.published ? 'Post saved and published! It is now visible on the blog page.' : 'Post saved as draft. Check "Publish on /blog" and save again to make it public.';
          this.showSaveMessage(msg, false);
          this.toast.success(msg, 'Blog Studio');
          this.loadPosts(true);
          this.cdr.detectChanges();
          setTimeout(() => this.saveBannerRef?.nativeElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          }), 0);
        },
        error: e => {
          this.saving = false;
          const msg = this.extractError(e);
          this.showSaveMessage(msg, true);
          this.toast.error(msg);
          this.cdr.detectChanges();
        }
      });
    }
    togglePublish(p) {
      this.api.put(`/blogs/editor/${p.id}/publish?published=${!p.published}`, {}, this.skipToast).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => {
          const msg = !p.published ? 'Post published!' : 'Post moved to draft.';
          this.toast.success(msg);
          this.showSaveMessage(msg, false);
          this.loadPosts();
        },
        error: e => this.toast.error(this.extractError(e))
      });
    }
    deletePost(p) {
      if (!confirm(`Delete "${p.title}"?`)) return;
      this.api.delete(`/blogs/editor/${p.id}`).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => {
          this.toast.success('Post deleted');
          this.loadPosts();
          if (this.editingId === p.id) this.newPost();
        },
        error: e => this.toast.error(this.extractError(e))
      });
    }
    normalizeOrders() {
      this.draft.blocks.forEach((b, i) => b.displayOrder = i);
    }
    isHtmlBlank(html) {
      if (!html) return true;
      const text = html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
      return !text;
    }
    extractError(e) {
      if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
        if (e.error?.message) return e.error.message;
        if (e.error?.errors) return Object.values(e.error.errors).join(', ');
        return (0,_core_utils_http_error_message_util__WEBPACK_IMPORTED_MODULE_16__.extractHttpErrorMessage)(e);
      }
      return 'Something went wrong.';
    }
    showSaveMessage(msg, isError) {
      this.saveMessage.set(msg);
      this.saveMessageError.set(isError);
    }
    clearSaveMessage() {
      this.saveMessage.set('');
      this.saveMessageError.set(false);
    }
    static {
      this.ɵfac = function BlogEditorDashboardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BlogEditorDashboardComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
        type: BlogEditorDashboardComponent,
        selectors: [["app-blog-editor-dashboard"]],
        viewQuery: function BlogEditorDashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.saveBannerRef = _t.first);
          }
        },
        decls: 87,
        vars: 22,
        consts: [["saveBanner", ""], [1, "studio-page"], [1, "studio-wrap"], [1, "studio-card", "studio-header"], [1, "studio-header-copy"], [1, "eyebrow"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "save-banner", "role", "status", 3, "save-banner-error", 4, "ngIf"], [1, "studio-layout"], [1, "studio-card", "studio-list"], [1, "panel-head"], ["class", "count-badge", 4, "ngIf"], ["class", "list-loading", 4, "ngIf"], ["class", "list-error", 4, "ngIf"], ["class", "post-row", 3, "active", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "list-empty", 4, "ngIf"], [1, "studio-card", "studio-editor"], [1, "studio-field"], ["placeholder", "Catchy headline\u2026", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Short summary for the blog listing\u2026", 3, "ngModelChange", "ngModel"], [1, "studio-section", "seo-section"], ["placeholder", "Browser tab / search title", "maxlength", "255", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Search engine summary", "maxlength", "500", 3, "ngModelChange", "ngModel"], [1, "studio-section", "taxonomy-section"], ["list", "blog-categories", "placeholder", "e.g. Market Updates", 3, "ngModelChange", "ngModel"], ["id", "blog-categories"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "investment, nri, tips", 3, "ngModelChange", "ngModel"], ["placeholder", "Google Drive or public image URL (https://\u2026)", 3, "ngModelChange", "ngModel"], ["class", "cover-preview", "alt", "Cover preview", 3, "src", 4, "ngIf"], [1, "blocks-title"], [1, "hint"], ["class", "studio-card content-block", "draggable", "true", 3, "dragging", "dragstart", "dragover", "drop", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "studio-inline", "block-add-row"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [1, "studio-inline", "studio-footer"], [1, "publish-check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click", "disabled"], ["role", "status", 1, "save-banner"], ["class", "view-live-link", 3, "routerLink", 4, "ngIf"], [1, "view-live-link", 3, "routerLink"], [1, "count-badge"], [1, "list-loading"], ["height", "64px", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["height", "64px"], [1, "list-error"], [1, "post-row"], [1, "post-info"], [1, "title"], [1, "meta"], [1, "status-pill"], [4, "ngIf"], [1, "post-actions"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", "btn-danger", 3, "click"], [1, "list-empty"], [3, "value"], ["alt", "Cover preview", 1, "cover-preview", 3, "src"], ["draggable", "true", 1, "studio-card", "content-block", 3, "dragstart", "dragover", "drop"], ["title", "Drag to reorder", 1, "block-handle"], [1, "studio-inline", "block-toolbar"], [3, "ngModelChange", "ngModel"], ["value", "TEXT"], ["value", "IMAGE"], ["value", "VIDEO"], ["value", "LINK"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click", "disabled"], [3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["class", "studio-field", 4, "ngIf"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "ngModelChange", "ngModel", "placeholder"], ["class", "block-preview", "alt", "Preview", 3, "src", 4, "ngIf"], ["class", "block-preview-video", "title", "Video preview", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "allowfullscreen", "", "referrerpolicy", "strict-origin-when-cross-origin", 3, "src", 4, "ngIf"], ["placeholder", "Caption (optional)", 3, "ngModelChange", "ngModel"], ["alt", "Preview", 1, "block-preview", 3, "src"], ["title", "Video preview", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "allowfullscreen", "", "referrerpolicy", "strict-origin-when-cross-origin", 1, "block-preview-video", 3, "src"], ["placeholder", "Link text", 3, "ngModelChange", "ngModel"], ["placeholder", "https://...", 3, "ngModelChange", "ngModel"]],
        template: function BlogEditorDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "header", 3)(3, "div", 4)(4, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "Content Studio");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, "Blog Studio");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, "Create, edit, and publish property insights for your audience.");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_Template_button_click_10_listener() {
              return ctx.newPost();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "+ New Post");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, BlogEditorDashboardComponent_div_12_Template, 4, 4, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 8)(14, "section", 9)(15, "div", 10)(16, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17, "Your Posts");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, BlogEditorDashboardComponent_span_18_Template, 2, 1, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, BlogEditorDashboardComponent_div_19_Template, 2, 2, "div", 12)(20, BlogEditorDashboardComponent_div_20_Template, 2, 1, "div", 13)(21, BlogEditorDashboardComponent_div_21_Template, 17, 12, "div", 14)(22, BlogEditorDashboardComponent_div_22_Template, 5, 0, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "section", 16)(24, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "div", 17)(27, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_Template_input_ngModelChange_29_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.draft.title, $event) || (ctx.draft.title = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "div", 17)(31, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](32, "Excerpt");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "textarea", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_Template_textarea_ngModelChange_33_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.draft.excerpt, $event) || (ctx.draft.excerpt = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 20)(35, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36, "SEO");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "div", 17)(38, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](39, "Meta title");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_Template_input_ngModelChange_40_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.draft.metaTitle, $event) || (ctx.draft.metaTitle = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "div", 17)(42, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](43, "Meta description");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](44, "textarea", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_Template_textarea_ngModelChange_44_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.draft.metaDescription, $event) || (ctx.draft.metaDescription = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "div", 23)(46, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](47, "Category & Tags");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "div", 17)(49, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](50, "Category");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_Template_input_ngModelChange_51_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.draft.category, $event) || (ctx.draft.category = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "datalist", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](53, BlogEditorDashboardComponent_option_53_Template, 1, 1, "option", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "div", 17)(55, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](56, "Tags");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_Template_input_ngModelChange_57_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.draft.tags, $event) || (ctx.draft.tags = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](59, "Comma-separated tags for filter chips.");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](60, "div", 17)(61, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](62, "Cover image URL");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](63, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_Template_input_ngModelChange_63_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.draft.coverImageUrl, $event) || (ctx.draft.coverImageUrl = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](64, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](65, "Google Drive file link (Anyone with the link) or any public image URL.");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](66, BlogEditorDashboardComponent_img_66_Template, 1, 1, "img", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](67, "h4", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](68, "Content Blocks ");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](69, "span", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](70, "Drag to reorder");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](71, BlogEditorDashboardComponent_div_71_Template, 22, 8, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](72, "div", 33)(73, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_Template_button_click_73_listener() {
              return ctx.addBlock("TEXT");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](74, "+ Text");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](75, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_Template_button_click_75_listener() {
              return ctx.addBlock("IMAGE");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](76, "+ Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](77, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_Template_button_click_77_listener() {
              return ctx.addBlock("VIDEO");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](78, "+ Video");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](79, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_Template_button_click_79_listener() {
              return ctx.addBlock("LINK");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](80, "+ Link");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](81, "div", 35)(82, "label", 36)(83, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function BlogEditorDashboardComponent_Template_input_ngModelChange_83_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.draft.published, $event) || (ctx.draft.published = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](84, " Publish on /blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](85, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogEditorDashboardComponent_Template_button_click_85_listener() {
              return ctx.save();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](86);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.saveMessage());
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.listLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.listLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.listLoading && ctx.listError);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.posts)("ngForTrackBy", ctx.trackByPostId);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.listLoading && !ctx.posts.length && !ctx.listError);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.editingId ? "Edit Post" : "Create Post");
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.draft.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.draft.excerpt);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.draft.metaTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.draft.metaDescription);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.draft.category);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.categoryOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.draft.tags);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.draft.coverImageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.coverPreviewUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.draft.blocks)("ngForTrackBy", ctx.trackByBlockIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.draft.published);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx.saving);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.saving ? "Saving\u2026" : ctx.editingId ? "Save changes" : "Save post", " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _shared_blog_rich_text_editor_blog_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_13__.BlogRichTextEditorComponent, _shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_14__.SkeletonLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.studio-page[_ngcontent-%COMP%] {\n  padding: 1.5rem 0 3rem;\n  background: var(--bg);\n  min-height: calc(100vh - 80px);\n}\n\n.studio-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  box-sizing: border-box;\n}\n\n.studio-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n}\n\n.studio-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.75rem;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  align-items: center;\n  background: linear-gradient(135deg, #fff 0%, #f0f9ff 100%);\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--primary);\n}\n\n.studio-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  font-family: var(--font-display);\n  font-size: 1.75rem;\n}\n\n.studio-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n}\n\n.save-banner[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 0.85rem 1.25rem;\n  border-radius: var(--radius);\n  background: var(--success-bg);\n  color: var(--success-text);\n  font-weight: 600;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n\n.save-banner-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger-text-strong);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n\n.view-live-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.75rem;\n  color: inherit;\n  font-weight: 700;\n  text-decoration: underline;\n}\n\n.block-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  margin-top: 0.5rem;\n  border-radius: var(--radius);\n  border: 1px solid var(--border);\n  display: block;\n}\n\n.block-preview-video[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  aspect-ratio: 16/9;\n  margin-top: 0.5rem;\n  border: 0;\n  border-radius: var(--radius);\n  background: #0f172a;\n}\n\n.studio-layout[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);\n  align-items: start;\n}\n\n.studio-list[_ngcontent-%COMP%], .studio-editor[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.35rem;\n}\n\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.panel-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .studio-editor[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-family: var(--font-display);\n  font-size: 1.15rem;\n}\n\n.count-badge[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0.15rem 0.55rem;\n  border-radius: 999px;\n}\n\n.list-loading[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.list-error[_ngcontent-%COMP%], .list-empty[_ngcontent-%COMP%] {\n  padding: 1.5rem 1rem;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.9375rem;\n}\n\n.post-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.75rem;\n  align-items: flex-start;\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  padding: 0.85rem;\n  margin-bottom: 0.6rem;\n  transition: var(--transition);\n}\n\n.post-row[_ngcontent-%COMP%]:hover, .post-row.active[_ngcontent-%COMP%] {\n  border-color: rgba(14, 165, 233, 0.35);\n  background: rgba(14, 165, 233, 0.04);\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1.3;\n  word-break: break-word;\n}\n\n.meta[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.78rem;\n  margin-top: 0.2rem;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--warning-text);\n}\n\n.status-pill.published[_ngcontent-%COMP%] {\n  color: var(--success-text);\n}\n\n.post-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n\n.studio-field[_ngcontent-%COMP%] {\n  margin-bottom: 0.85rem;\n}\n\n.studio-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.35rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-transform: none;\n  letter-spacing: 0;\n}\n\n.studio-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n  color: var(--text-muted);\n  font-size: 0.78rem;\n}\n\n.studio-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.studio-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.studio-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.block-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2.5rem;\n  padding: 0.62rem 0.75rem;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 0.9375rem;\n  background: var(--surface);\n}\n\n.studio-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 4.5rem;\n  resize: vertical;\n}\n\n.studio-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.studio-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.studio-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.12);\n}\n\n.studio-inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n\n.studio-inline-grow[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n  min-width: 0;\n}\n\n.cover-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  aspect-ratio: 16/9;\n  object-fit: cover;\n  border-radius: var(--radius);\n  border: 1px solid var(--border);\n  margin-top: 0.5rem;\n  display: block;\n}\n\n.studio-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px dashed var(--border-light);\n}\n\n.studio-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .blocks-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  font-weight: 700;\n}\n\n.content-block[_ngcontent-%COMP%] {\n  padding: 0.85rem 0.85rem 0.85rem 2rem;\n  margin-bottom: 0.65rem;\n  position: relative;\n  cursor: grab;\n}\n\n.content-block.dragging[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  box-shadow: var(--shadow-lg);\n}\n\n.block-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.5rem;\n  top: 0.75rem;\n  color: var(--text-muted);\n  font-weight: 700;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.block-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 110px;\n  flex: 0 0 auto;\n}\n\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--text-muted);\n  text-transform: none;\n  letter-spacing: 0;\n}\n\n.block-add-row[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n\n.studio-footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border-light);\n}\n\n.publish-check[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  align-items: center;\n  margin-right: auto;\n  font-size: 0.9375rem;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n  border-color: #dc2626;\n}\n\n@media (max-width: 1080px) {\n  .studio-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .studio-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .post-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .post-actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy1lZGl0b3IvYmxvZy1lZGl0b3ItZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFRLGNBQUE7QUFDWjs7QUFBSTtFQUFlLHNCQUFBO0VBQXdCLHFCQUFBO0VBQXVCLDhCQUFBO0FBTWxFOztBQUxJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFRTjs7QUFOSTtFQUNFLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBU047O0FBUEk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMERBQUE7QUFVTjs7QUFSSTtFQUFXLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLHlCQUFBO0VBQTJCLHNCQUFBO0VBQXdCLHFCQUFBO0FBZ0J4Rzs7QUFmSTtFQUFvQixpQkFBQTtFQUFtQixnQ0FBQTtFQUFrQyxrQkFBQTtBQXFCN0U7O0FBcEJJO0VBQW1CLFNBQUE7RUFBVyx3QkFBQTtBQXlCbEM7O0FBeEJJO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUEyQk47O0FBekJJO0VBQ0UsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0FBNEJOOztBQTFCSTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQTZCTjs7QUEzQkk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBOEJOOztBQTVCSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQStCTjs7QUE3Qkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBEQUFBO0VBQ0Esa0JBQUE7QUFnQ047O0FBOUJJO0VBQStCLHdCQUFBO0FBa0NuQzs7QUFqQ0k7RUFBYyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsV0FBQTtFQUFhLG1CQUFBO0FBd0NuRTs7QUF2Q0k7RUFBc0MsZ0JBQUE7RUFBa0IsZ0NBQUE7RUFBa0Msa0JBQUE7QUE2QzlGOztBQTVDSTtFQUNFLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBK0NOOztBQTdDSTtFQUFnQixhQUFBO0VBQWUsV0FBQTtBQWtEbkM7O0FBakRJO0VBQTJCLG9CQUFBO0VBQXNCLGtCQUFBO0VBQW9CLHdCQUFBO0VBQTBCLG9CQUFBO0FBd0RuRzs7QUF2REk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBMEROOztBQXhESTtFQUFvQyxzQ0FBQTtFQUFxQyxvQ0FBQTtBQTZEN0U7O0FBNURJO0VBQVMsZ0JBQUE7RUFBa0Isb0JBQUE7RUFBc0IsZ0JBQUE7RUFBa0Isc0JBQUE7QUFtRXZFOztBQWxFSTtFQUFRLHdCQUFBO0VBQTBCLGtCQUFBO0VBQW9CLGtCQUFBO0FBd0UxRDs7QUF2RUk7RUFBZSxnQkFBQTtFQUFrQiwwQkFBQTtBQTRFckM7O0FBM0VJO0VBQXlCLDBCQUFBO0FBK0U3Qjs7QUE5RUk7RUFBZ0IsYUFBQTtFQUFlLFlBQUE7RUFBYyxlQUFBO0VBQWlCLHlCQUFBO0VBQTJCLGNBQUE7QUFzRjdGOztBQXJGSTtFQUFnQixzQkFBQTtBQXlGcEI7O0FBeEZJO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUEyRk47O0FBekZJO0VBQXNCLGNBQUE7RUFBZ0IsbUJBQUE7RUFBcUIsd0JBQUE7RUFBMEIsa0JBQUE7QUFnR3pGOztBQS9GSTs7OztFQUlFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBa0dOOztBQWhHSTtFQUF5QixrQkFBQTtFQUFvQixnQkFBQTtBQXFHakQ7O0FBcEdJOzs7RUFHRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtBQXVHTjs7QUFyR0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBd0dOOztBQXRHSTtFQUFzQixlQUFBO0VBQWlCLFlBQUE7QUEyRzNDOztBQTFHSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBNkdOOztBQTNHSTtFQUFrQixzQkFBQTtFQUF3QixvQkFBQTtFQUFzQiw2Q0FBQTtBQWlIcEU7O0FBaEhJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBbUhOOztBQWpISTtFQUNFLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFvSE47O0FBbEhJO0VBQTBCLGFBQUE7RUFBZSw0QkFBQTtBQXVIN0M7O0FBdEhJO0VBQWdCLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxZQUFBO0VBQWMsd0JBQUE7RUFBMEIsZ0JBQUE7RUFBa0IseUJBQUE7VUFBQSxpQkFBQTtBQStIaEg7O0FBOUhJO0VBQXdCLFdBQUE7RUFBYSxnQkFBQTtFQUFrQixjQUFBO0FBb0kzRDs7QUFuSUk7RUFBUSxrQkFBQTtFQUFvQixnQkFBQTtFQUFrQix3QkFBQTtFQUEwQixvQkFBQTtFQUFzQixpQkFBQTtBQTJJbEc7O0FBMUlJO0VBQWlCLG1CQUFBO0FBOElyQjs7QUE3SUk7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQWdKTjs7QUE5SUk7RUFBaUIsYUFBQTtFQUFlLFdBQUE7RUFBYSxtQkFBQTtFQUFxQixrQkFBQTtFQUFvQixvQkFBQTtBQXNKMUY7O0FBckpJO0VBQWMsY0FBQTtFQUFnQixxQkFBQTtBQTBKbEM7O0FBekpJO0VBQTZCO0lBQWlCLDBCQUFBO0VBOEpoRDtBQUNGO0FBOUpJO0VBQ0U7SUFBaUIsc0JBQUE7SUFBd0Isb0JBQUE7RUFrSzdDO0VBaktJO0lBQVksc0JBQUE7RUFvS2hCO0VBbktJO0lBQWdCLDJCQUFBO0VBc0twQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5zdHVkaW8tcGFnZSB7IHBhZGRpbmc6IDEuNXJlbSAwIDNyZW07IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpOyB9XG4gICAgLnN0dWRpby13cmFwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gICAgLnN0dWRpby1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgIH1cbiAgICAuc3R1ZGlvLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMS43NXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmYgMCUsICNmMGY5ZmYgMTAwJSk7XG4gICAgfVxuICAgIC5leWVicm93IHsgZm9udC1zaXplOiAwLjcycmVtOyBmb250LXdlaWdodDogNzAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wOGVtOyBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cbiAgICAuc3R1ZGlvLWhlYWRlciBoMSB7IG1hcmdpbjogMC4yNXJlbSAwOyBmb250LWZhbWlseTogdmFyKC0tZm9udC1kaXNwbGF5KTsgZm9udC1zaXplOiAxLjc1cmVtOyB9XG4gICAgLnN0dWRpby1oZWFkZXIgcCB7IG1hcmdpbjogMDsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICAgLnNhdmUtYmFubmVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBwYWRkaW5nOiAwLjg1cmVtIDEuMjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy10ZXh0KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcbiAgICB9XG4gICAgLnNhdmUtYmFubmVyLWVycm9yIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyLXRleHQtc3Ryb25nKTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgMC4zKTtcbiAgICB9XG4gICAgLnZpZXctbGl2ZS1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICAgIC5ibG9jay1wcmV2aWV3IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5ibG9jay1wcmV2aWV3LXZpZGVvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gICAgICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xuICAgIH1cbiAgICAuc3R1ZGlvLWxheW91dCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ2FwOiAxLjI1cmVtO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjgwcHgsIDM0MHB4KSBtaW5tYXgoMCwgMWZyKTtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICB9XG4gICAgLnN0dWRpby1saXN0LCAuc3R1ZGlvLWVkaXRvciB7IHBhZGRpbmc6IDEuMjVyZW0gMS4zNXJlbTsgfVxuICAgIC5wYW5lbC1oZWFkIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjVyZW07IG1hcmdpbi1ib3R0b206IDFyZW07IH1cbiAgICAucGFuZWwtaGVhZCBoMywgLnN0dWRpby1lZGl0b3IgPiBoMyB7IG1hcmdpbjogMCAwIDFyZW07IGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWRpc3BsYXkpOyBmb250LXNpemU6IDEuMTVyZW07IH1cbiAgICAuY291bnQtYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiAwLjE1cmVtIDAuNTVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICB9XG4gICAgLmxpc3QtbG9hZGluZyB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMC41cmVtOyB9XG4gICAgLmxpc3QtZXJyb3IsIC5saXN0LWVtcHR5IHsgcGFkZGluZzogMS41cmVtIDFyZW07IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDAuOTM3NXJlbTsgfVxuICAgIC5wb3N0LXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgICAgIHBhZGRpbmc6IDAuODVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG4gICAgLnBvc3Qtcm93OmhvdmVyLCAucG9zdC1yb3cuYWN0aXZlIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LDE2NSwyMzMsMC4zNSk7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjA0KTsgfVxuICAgIC50aXRsZSB7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMC45Mzc1cmVtOyBsaW5lLWhlaWdodDogMS4zOyB3b3JkLWJyZWFrOiBicmVhay13b3JkOyB9XG4gICAgLm1ldGEgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMC43OHJlbTsgbWFyZ2luLXRvcDogMC4ycmVtOyB9XG4gICAgLnN0YXR1cy1waWxsIHsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLXdhcm5pbmctdGV4dCk7IH1cbiAgICAuc3RhdHVzLXBpbGwucHVibGlzaGVkIHsgY29sb3I6IHZhcigtLXN1Y2Nlc3MtdGV4dCk7IH1cbiAgICAucG9zdC1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjM1cmVtOyBmbGV4LXdyYXA6IHdyYXA7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IGZsZXgtc2hyaW5rOiAwOyB9XG4gICAgLnN0dWRpby1maWVsZCB7IG1hcmdpbi1ib3R0b206IDAuODVyZW07IH1cbiAgICAuc3R1ZGlvLWZpZWxkIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4zNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG4gICAgLnN0dWRpby1maWVsZCBzbWFsbCB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiAwLjI1cmVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMC43OHJlbTsgfVxuICAgIC5zdHVkaW8tZmllbGQgaW5wdXQsXG4gICAgLnN0dWRpby1maWVsZCB0ZXh0YXJlYSxcbiAgICAuc3R1ZGlvLWZpZWxkIHNlbGVjdCxcbiAgICAuYmxvY2stdG9vbGJhciBzZWxlY3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiAyLjVyZW07XG4gICAgICBwYWRkaW5nOiAwLjYycmVtIDAuNzVyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gICAgfVxuICAgIC5zdHVkaW8tZmllbGQgdGV4dGFyZWEgeyBtaW4taGVpZ2h0OiA0LjVyZW07IHJlc2l6ZTogdmVydGljYWw7IH1cbiAgICAuc3R1ZGlvLWZpZWxkIGlucHV0OmZvY3VzLFxuICAgIC5zdHVkaW8tZmllbGQgdGV4dGFyZWE6Zm9jdXMsXG4gICAgLnN0dWRpby1maWVsZCBzZWxlY3Q6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNCwxNjUsMjMzLDAuMTIpO1xuICAgIH1cbiAgICAuc3R1ZGlvLWlubGluZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICB9XG4gICAgLnN0dWRpby1pbmxpbmUtZ3JvdyB7IGZsZXg6IDEgMSAyMjBweDsgbWluLXdpZHRoOiAwOyB9XG4gICAgLmNvdmVyLXByZXZpZXcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgICAgYXNwZWN0LXJhdGlvOiAxNi85O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc3R1ZGlvLXNlY3Rpb24geyBtYXJnaW4tYm90dG9tOiAxLjI1cmVtOyBwYWRkaW5nLWJvdHRvbTogMXJlbTsgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1ib3JkZXItbGlnaHQpOyB9XG4gICAgLnN0dWRpby1zZWN0aW9uIGg0LCAuYmxvY2tzLXRpdGxlIHtcbiAgICAgIG1hcmdpbjogMCAwIDAuNzVyZW07XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gICAgLmNvbnRlbnQtYmxvY2sge1xuICAgICAgcGFkZGluZzogMC44NXJlbSAwLjg1cmVtIDAuODVyZW0gMnJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNjVyZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjdXJzb3I6IGdyYWI7XG4gICAgfVxuICAgIC5jb250ZW50LWJsb2NrLmRyYWdnaW5nIHsgb3BhY2l0eTogMC41NTsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTsgfVxuICAgIC5ibG9jay1oYW5kbGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAuNXJlbTsgdG9wOiAwLjc1cmVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtd2VpZ2h0OiA3MDA7IHVzZXItc2VsZWN0OiBub25lOyB9XG4gICAgLmJsb2NrLXRvb2xiYXIgc2VsZWN0IHsgd2lkdGg6IGF1dG87IG1pbi13aWR0aDogMTEwcHg7IGZsZXg6IDAgMCBhdXRvOyB9XG4gICAgLmhpbnQgeyBmb250LXNpemU6IDAuNzVyZW07IGZvbnQtd2VpZ2h0OiA1MDA7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgdGV4dC10cmFuc2Zvcm06IG5vbmU7IGxldHRlci1zcGFjaW5nOiAwOyB9XG4gICAgLmJsb2NrLWFkZC1yb3cgeyBtYXJnaW4tdG9wOiAwLjI1cmVtOyB9XG4gICAgLnN0dWRpby1mb290ZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgIH1cbiAgICAucHVibGlzaC1jaGVjayB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC40cmVtOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tcmlnaHQ6IGF1dG87IGZvbnQtc2l6ZTogMC45Mzc1cmVtOyB9XG4gICAgLmJ0bi1kYW5nZXIgeyBjb2xvcjogI2RjMjYyNjsgYm9yZGVyLWNvbG9yOiAjZGMyNjI2OyB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkgeyAuc3R1ZGlvLWxheW91dCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgIC5zdHVkaW8taGVhZGVyIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAgIC5wb3N0LXJvdyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAgIC5wb3N0LWFjdGlvbnMgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return BlogEditorDashboardComponent;
})();

/***/ },

/***/ 7076
/*!*********************************************************************************!*\
  !*** ./src/app/shared/blog-rich-text-editor/blog-rich-text-editor.component.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogRichTextEditorComponent: () => (/* binding */ BlogRichTextEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);




const _c0 = ["editor"];
let BlogRichTextEditorComponent = /*#__PURE__*/(() => {
  class BlogRichTextEditorComponent {
    constructor() {
      this.onChange = () => {};
      this.onTouched = () => {};
      this.pendingValue = '';
    }
    writeValue(value) {
      this.pendingValue = value || '';
      if (this.editorRef?.nativeElement) {
        this.editorRef.nativeElement.innerHTML = this.pendingValue;
      }
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    ngAfterViewInit() {
      if (this.editorRef?.nativeElement) {
        this.editorRef.nativeElement.innerHTML = this.pendingValue;
      }
    }
    preventBlur(event) {
      event.preventDefault();
    }
    exec(command) {
      this.editorRef.nativeElement.focus();
      document.execCommand(command, false);
      this.syncValue();
    }
    heading(tag) {
      this.editorRef.nativeElement.focus();
      document.execCommand('formatBlock', false, tag);
      this.syncValue();
    }
    onInput() {
      this.syncValue();
    }
    onBlur() {
      this.onTouched();
      this.syncValue();
    }
    syncValue() {
      const html = this.editorRef?.nativeElement?.innerHTML ?? '';
      this.onChange(html);
    }
    static {
      this.ɵfac = function BlogRichTextEditorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BlogRichTextEditorComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: BlogRichTextEditorComponent,
        selectors: [["app-blog-rich-text-editor"]],
        viewQuery: function BlogRichTextEditorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editorRef = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => BlogRichTextEditorComponent),
          multi: true
        }])],
        decls: 18,
        vars: 0,
        consts: [["editor", ""], [1, "rte"], [1, "rte-toolbar"], ["type", "button", "title", "Bold", 1, "rte-btn", 3, "mousedown", "click"], ["type", "button", "title", "Italic", 1, "rte-btn", 3, "mousedown", "click"], ["type", "button", "title", "Heading 2", 1, "rte-btn", 3, "mousedown", "click"], ["type", "button", "title", "Heading 3", 1, "rte-btn", 3, "mousedown", "click"], ["type", "button", "title", "Paragraph", 1, "rte-btn", 3, "mousedown", "click"], ["type", "button", "title", "Bullet list", 1, "rte-btn", 3, "mousedown", "click"], ["contenteditable", "true", "data-placeholder", "Write formatted text...", 1, "rte-editor", 3, "input", "blur"]],
        template: function BlogRichTextEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 1)(1, "div", 2)(2, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("mousedown", function BlogRichTextEditorComponent_Template_button_mousedown_2_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.preventBlur($event));
            })("click", function BlogRichTextEditorComponent_Template_button_click_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.exec("bold"));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](3, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "B");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](5, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("mousedown", function BlogRichTextEditorComponent_Template_button_mousedown_5_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.preventBlur($event));
            })("click", function BlogRichTextEditorComponent_Template_button_click_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.exec("italic"));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](6, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "I");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("mousedown", function BlogRichTextEditorComponent_Template_button_mousedown_8_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.preventBlur($event));
            })("click", function BlogRichTextEditorComponent_Template_button_click_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.heading("h2"));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "H2");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](10, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("mousedown", function BlogRichTextEditorComponent_Template_button_mousedown_10_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.preventBlur($event));
            })("click", function BlogRichTextEditorComponent_Template_button_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.heading("h3"));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "H3");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](12, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("mousedown", function BlogRichTextEditorComponent_Template_button_mousedown_12_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.preventBlur($event));
            })("click", function BlogRichTextEditorComponent_Template_button_click_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.heading("p"));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "P");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](14, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("mousedown", function BlogRichTextEditorComponent_Template_button_mousedown_14_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.preventBlur($event));
            })("click", function BlogRichTextEditorComponent_Template_button_click_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.exec("insertUnorderedList"));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u2022 List");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](16, "div", 9, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("input", function BlogRichTextEditorComponent_Template_div_input_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInput());
            })("blur", function BlogRichTextEditorComponent_Template_div_blur_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onBlur());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()();
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.rte[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background: var(--surface);\n  width: 100%;\n}\n\n.rte-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  padding: 0.45rem;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg);\n}\n\n.rte-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  background: var(--surface);\n  border-radius: var(--radius-sm);\n  padding: 0.25rem 0.55rem;\n  cursor: pointer;\n  font-size: 0.82rem;\n  min-width: 2rem;\n}\n\n.rte-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n\n.rte-editor[_ngcontent-%COMP%] {\n  min-height: 120px;\n  padding: 0.75rem;\n  line-height: 1.65;\n  outline: none;\n  font-size: 0.98rem;\n  color: var(--text-secondary);\n}\n\n.rte-editor[_ngcontent-%COMP%]:empty:before {\n  content: attr(data-placeholder);\n  color: var(--text-muted);\n}\n\n.rte-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  margin: 0.5rem 0;\n  font-weight: 700;\n}\n\n.rte-editor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.12rem;\n  margin: 0.45rem 0;\n  font-weight: 700;\n}\n\n.rte-editor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.35rem 0;\n}\n\n.rte-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.35rem 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Jsb2ctcmljaC10ZXh0LWVkaXRvci9ibG9nLXJpY2gtdGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQVEsY0FBQTtFQUFnQixXQUFBO0FBRTVCOztBQURJO0VBQU8sK0JBQUE7RUFBaUMsK0JBQUE7RUFBaUMsZ0JBQUE7RUFBa0IsMEJBQUE7RUFBNEIsV0FBQTtBQVMzSDs7QUFSSTtFQUFlLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFlBQUE7RUFBYyxnQkFBQTtFQUFrQiw0Q0FBQTtFQUE4QyxxQkFBQTtBQWlCakk7O0FBaEJJO0VBQ0UsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBbUJOOztBQWpCSTtFQUFpQiw0QkFBQTtFQUE4QixxQkFBQTtBQXNCbkQ7O0FBckJJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUF3Qk47O0FBdEJJO0VBQ0UsK0JBQUE7RUFDQSx3QkFBQTtBQXlCTjs7QUF2Qkk7RUFBaUIsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsZ0JBQUE7QUE2QjNEOztBQTVCSTtFQUFpQixrQkFBQTtFQUFvQixpQkFBQTtFQUFtQixnQkFBQTtBQWtDNUQ7O0FBakNJO0VBQWdCLGlCQUFBO0FBcUNwQjs7QUFwQ0k7RUFBaUIsZ0NBQUE7QUF3Q3JCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IH1cbiAgICAucnRlIHsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTsgb3ZlcmZsb3c6IGhpZGRlbjsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IHdpZHRoOiAxMDAlOyB9XG4gICAgLnJ0ZS10b29sYmFyIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDAuMzVyZW07IHBhZGRpbmc6IDAuNDVyZW07IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IH1cbiAgICAucnRlLWJ0biB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjU1cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgICAgbWluLXdpZHRoOiAycmVtO1xuICAgIH1cbiAgICAucnRlLWJ0bjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxuICAgIC5ydGUtZWRpdG9yIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY1O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMC45OHJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuICAgIC5ydGUtZWRpdG9yOmVtcHR5OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIH1cbiAgICAucnRlLWVkaXRvciBoMiB7IGZvbnQtc2l6ZTogMS4zNXJlbTsgbWFyZ2luOiAwLjVyZW0gMDsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuICAgIC5ydGUtZWRpdG9yIGgzIHsgZm9udC1zaXplOiAxLjEycmVtOyBtYXJnaW46IDAuNDVyZW0gMDsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuICAgIC5ydGUtZWRpdG9yIHAgeyBtYXJnaW46IDAuMzVyZW0gMDsgfVxuICAgIC5ydGUtZWRpdG9yIHVsIHsgbWFyZ2luOiAwLjM1cmVtIDAgMC4zNXJlbSAxLjJyZW07IH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return BlogRichTextEditorComponent;
})();

/***/ }

}]);
//# sourceMappingURL=967.js.map