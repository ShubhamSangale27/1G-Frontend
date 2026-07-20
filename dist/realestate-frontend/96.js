"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[96],{

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

/***/ 5152
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};

/***/ },

/***/ 6042
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/ReplaySubject.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaySubject: () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 819);
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 5152);


class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_bufferSize = Infinity, _windowTime = Infinity, _timestampProvider = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.dateTimestampProvider) {
    super();
    this._bufferSize = _bufferSize;
    this._windowTime = _windowTime;
    this._timestampProvider = _timestampProvider;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = _windowTime === Infinity;
    this._bufferSize = Math.max(1, _bufferSize);
    this._windowTime = Math.max(1, _windowTime);
  }
  next(value) {
    const {
      isStopped,
      _buffer,
      _infiniteTimeWindow,
      _timestampProvider,
      _windowTime
    } = this;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    super.next(value);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    const subscription = this._innerSubscribe(subscriber);
    const {
      _infiniteTimeWindow,
      _buffer
    } = this;
    const copy = _buffer.slice();
    for (let i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  }
  _trimBuffer() {
    const {
      _bufferSize,
      _timestampProvider,
      _buffer,
      _infiniteTimeWindow
    } = this;
    const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      const now = _timestampProvider.now();
      let last = 0;
      for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }
      last && _buffer.splice(0, last + 1);
    }
  }
}

/***/ },

/***/ 9074
/*!**************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/rxjs-interop.mjs ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outputFromObservable: () => (/* binding */ outputFromObservable),
/* harmony export */   outputToObservable: () => (/* binding */ outputToObservable),
/* harmony export */   pendingUntilEvent: () => (/* binding */ pendingUntilEvent),
/* harmony export */   rxResource: () => (/* binding */ rxResource),
/* harmony export */   takeUntilDestroyed: () => (/* binding */ takeUntilDestroyed),
/* harmony export */   toObservable: () => (/* binding */ toObservable),
/* harmony export */   toSignal: () => (/* binding */ toSignal)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6042);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_untracked-chunk.mjs */ 1817);
/* harmony import */ var _resource_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_resource-chunk.mjs */ 2260);
/**
 * @license Angular v21.1.3
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */










function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.assertInInjectionContext)(takeUntilDestroyed);
    destroyRef = (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.inject)(_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.DestroyRef);
  }
  const destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return source => {
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroyed$));
  };
}
class OutputFromObservableRef {
  source;
  destroyed = false;
  destroyRef = /*#__PURE__*/(0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.inject)(_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.DestroyRef);
  constructor(source) {
    this.source = source;
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  subscribe(callbackFn) {
    if (this.destroyed) {
      throw new _untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.RuntimeError(953, ngDevMode && 'Unexpected subscription to destroyed `OutputRef`. ' + 'The owning directive/component is destroyed.');
    }
    const subscription = this.source.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: value => callbackFn(value)
    });
    return {
      unsubscribe: () => subscription.unsubscribe()
    };
  }
}
function outputFromObservable(observable, opts) {
  ngDevMode && (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.assertInInjectionContext)(outputFromObservable);
  return new OutputFromObservableRef(observable);
}
function outputToObservable(ref) {
  const destroyRef = (0,_resource_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.getOutputDestroyRef)(ref);
  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
    const unregisterOnDestroy = destroyRef?.onDestroy(() => observer.complete());
    const subscription = ref.subscribe(v => observer.next(v));
    return () => {
      subscription.unsubscribe();
      unregisterOnDestroy?.();
    };
  });
}
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.assertInInjectionContext)(toObservable);
  }
  const injector = options?.injector ?? (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.inject)(_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.Injector);
  const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  const watcher = (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.effect)(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.untracked)(() => subject.error(err));
      return;
    }
    (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.untracked)(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  typeof ngDevMode !== 'undefined' && ngDevMode && (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.assertNotInReactiveContext)(toSignal, 'Invoking `toSignal` causes new subscriptions every time. ' + 'Consider moving `toSignal` outside of the reactive context and read the signal value where needed.');
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.assertInInjectionContext)(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.DestroyRef) ?? (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.inject)(_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.signal)({
      kind: 0
    }, {
      equal,
      ...(ngDevMode ? createDebugNameObject(options?.debugName, 'state') : undefined)
    });
  } else {
    state = (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.signal)({
      kind: 1,
      value: options?.initialValue
    }, {
      equal,
      ...(ngDevMode ? createDebugNameObject(options?.debugName, 'state') : undefined)
    });
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: value => state.set({
      kind: 1,
      value
    }),
    error: error => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new _untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.RuntimeError(601, (typeof ngDevMode === 'undefined' || ngDevMode) && '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return (0,_resource_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.computed)(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new _untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.RuntimeError(601, (typeof ngDevMode === 'undefined' || ngDevMode) && '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
    }
  }, {
    equal: options?.equal,
    ...(ngDevMode ? createDebugNameObject(options?.debugName, 'source') : undefined)
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? '#' + toSignalDebugName : ''}.${internalSignalDebugName}`
  };
}
function pendingUntilEvent(injector) {
  if (injector === undefined) {
    ngDevMode && (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.assertInInjectionContext)(pendingUntilEvent);
    injector = (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.inject)(_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.Injector);
  }
  const taskService = injector.get(_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.PendingTasks);
  return sourceObservable => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(originalSubscriber => {
      const removeTask = taskService.add();
      let cleanedUp = false;
      function cleanupTask() {
        if (cleanedUp) {
          return;
        }
        removeTask();
        cleanedUp = true;
      }
      const innerSubscription = sourceObservable.subscribe({
        next: v => {
          originalSubscriber.next(v);
          cleanupTask();
        },
        complete: () => {
          originalSubscriber.complete();
          cleanupTask();
        },
        error: e => {
          originalSubscriber.error(e);
          cleanupTask();
        }
      });
      innerSubscription.add(() => {
        originalSubscriber.unsubscribe();
        cleanupTask();
      });
      return innerSubscription;
    });
  };
}
function rxResource(opts) {
  if (ngDevMode && !opts?.injector) {
    (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.assertInInjectionContext)(rxResource);
  }
  return (0,_resource_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.resource)({
    ...opts,
    loader: undefined,
    stream: params => {
      let sub;
      const onAbort = () => sub?.unsubscribe();
      params.abortSignal.addEventListener('abort', onAbort);
      const stream = (0,_untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.signal)({
        value: undefined
      });
      let resolve;
      const promise = new Promise(r => resolve = r);
      function send(value) {
        stream.set(value);
        resolve?.(stream);
        resolve = undefined;
      }
      const streamFn = opts.stream ?? opts.loader;
      if (streamFn === undefined) {
        throw new _untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.RuntimeError(990, ngDevMode && `Must provide \`stream\` option.`);
      }
      sub = streamFn(params).subscribe({
        next: value => send({
          value
        }),
        error: error => {
          send({
            error: (0,_resource_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.encapsulateResourceError)(error)
          });
          params.abortSignal.removeEventListener('abort', onAbort);
        },
        complete: () => {
          if (resolve) {
            send({
              error: new _untracked_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.RuntimeError(991, ngDevMode && 'Resource completed before producing a value')
            });
          }
          params.abortSignal.removeEventListener('abort', onAbort);
        }
      });
      return promise;
    }
  });
}


/***/ },

/***/ 9244
/*!***********************************************!*\
  !*** ./src/app/core/services/blog.service.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogService: () => (/* binding */ BlogService),
/* harmony export */   normalizeBlogPage: () => (/* binding */ normalizeBlogPage)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 1776);



/** Normalise list API body whether or not it is wrapped in PageResponse. */
function normalizeBlogPage(res) {
  if (!res) return [];
  if (Array.isArray(res)) return res;
  return res.content ?? [];
}
let BlogService = /*#__PURE__*/(() => {
  class BlogService {
    constructor(api) {
      this.api = api;
    }
    getPublished(page = 0, size = 24, category, tag) {
      const params = {
        page,
        size
      };
      if (category) params['category'] = category;
      if (tag) params['tag'] = tag;
      return this.api.get('/blogs/published', params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(normalizeBlogPage));
    }
    getPublishedBySlug(slug) {
      return this.api.get(`/blogs/published/${encodeURIComponent(slug)}`);
    }
    getFilters() {
      return this.api.get('/blogs/published/filters');
    }
    getEditorPosts(page = 0, size = 100) {
      return this.api.get('/blogs/editor/mine', {
        page,
        size
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(normalizeBlogPage));
    }
    static {
      this.ɵfac = function BlogService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BlogService,
        factory: BlogService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return BlogService;
})();

/***/ }

}]);
//# sourceMappingURL=96.js.map