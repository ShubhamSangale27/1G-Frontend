"use strict";
(self["webpackChunkrealestate_frontend"] = self["webpackChunkrealestate_frontend"] || []).push([[76],{

/***/ 4256
/*!*******************************************!*\
  !*** ./src/app/core/models/blog.model.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOG_CATEGORY_OPTIONS: () => (/* binding */ BLOG_CATEGORY_OPTIONS)
/* harmony export */ });
const BLOG_CATEGORY_OPTIONS = ['Market Updates', 'Buying Guide', 'Selling Tips', 'Investment', 'Legal & RERA', 'Home Decor'];

/***/ },

/***/ 7134
/*!***************************************************************!*\
  !*** ./src/app/shared/property-map/property-map.component.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyMapComponent: () => (/* binding */ PropertyMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_services_google_maps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/google-maps.service */ 7149);





function PropertyMapComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Set ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "googleMapsApiKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " in environment to show the map.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function PropertyMapComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.loadError);
  }
}
function PropertyMapComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 6);
  }
}
let PropertyMapComponent = /*#__PURE__*/(() => {
  class PropertyMapComponent {
    constructor(maps, cdr) {
      this.maps = maps;
      this.cdr = cdr;
      this.latitude = null;
      this.longitude = null;
      this.mode = 'view';
      this.locationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.loadError = '';
      this.map = null;
      this.marker = null;
      this.clickListener = null;
    }
    get apiKey() {
      return this.maps.apiKey;
    }
    ngAfterViewInit() {
      if (!this.apiKey) {
        this.cdr.detectChanges();
        return;
      }
      this.maps.load().then(() => this.initMap()).catch(err => {
        this.loadError = err?.message || 'Failed to load map';
        this.cdr.detectChanges();
      });
    }
    initMap() {
      const center = this.latitude != null && this.longitude != null ? {
        lat: this.latitude,
        lng: this.longitude
      } : {
        lat: 20.5937,
        lng: 78.9629
      };
      const mapEl = document.querySelector('.map-container');
      if (!mapEl) return;
      this.map = new google.maps.Map(mapEl, {
        center,
        zoom: this.latitude != null && this.longitude != null ? 15 : 5,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true
      });
      if (this.latitude != null && this.longitude != null) {
        this.placeMarker(this.latitude, this.longitude);
      }
      if (this.mode === 'pick') {
        this.clickListener = this.map.addListener('click', e => {
          if (!e.latLng) return;
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();
          this.placeMarker(lat, lng);
          this.locationChange.emit({
            lat,
            lng
          });
        });
      }
      this.cdr.detectChanges();
    }
    placeMarker(lat, lng) {
      if (!this.map) return;
      if (this.marker) this.marker.setMap(null);
      this.marker = new google.maps.Marker({
        position: {
          lat,
          lng
        },
        map: this.map,
        title: 'Property location'
      });
      this.map.panTo({
        lat,
        lng
      });
      if (this.map.getZoom() < 14) this.map.setZoom(15);
    }
    ngOnDestroy() {
      if (this.clickListener) this.clickListener.remove();
      this.marker = null;
      this.map = null;
    }
    static {
      this.ɵfac = function PropertyMapComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PropertyMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_google_maps_service__WEBPACK_IMPORTED_MODULE_4__.GoogleMapsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: PropertyMapComponent,
        selectors: [["app-property-map"]],
        inputs: {
          latitude: "latitude",
          longitude: "longitude",
          mode: "mode"
        },
        outputs: {
          locationChange: "locationChange"
        },
        decls: 4,
        vars: 3,
        consts: [[1, "map-wrapper"], ["class", "map-placeholder", 4, "ngIf"], ["class", "map-placeholder map-error", 4, "ngIf"], ["class", "map-container", 4, "ngIf"], [1, "map-placeholder"], [1, "map-placeholder", "map-error"], [1, "map-container"]],
        template: function PropertyMapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PropertyMapComponent_div_1_Template, 6, 0, "div", 1)(2, PropertyMapComponent_div_2_Template, 3, 1, "div", 2)(3, PropertyMapComponent_div_3_Template, 1, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.apiKey);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.apiKey && ctx.loadError);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.apiKey && !ctx.loadError);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".map-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 300px;\n}\n\n.map-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\n.map-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg);\n  border: 2px dashed var(--border);\n  border-radius: var(--radius);\n  color: var(--text-muted);\n  font-size: 0.9375rem;\n}\n\n.map-placeholder[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: var(--surface);\n  padding: 0.2rem 0.4rem;\n  border-radius: 4px;\n}\n\n.map-error[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  color: var(--danger);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Byb3BlcnR5LW1hcC9wcm9wZXJ0eS1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQWUsa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGlCQUFBO0FBR3BEOztBQUZJO0VBQWlCLFdBQUE7RUFBYSxhQUFBO0FBT2xDOztBQU5JO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUFTTjs7QUFQSTtFQUF3QiwwQkFBQTtFQUE0QixzQkFBQTtFQUF3QixrQkFBQTtBQWFoRjs7QUFaSTtFQUFhLDJCQUFBO0VBQTZCLG9CQUFBO0FBaUI5QyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5tYXAtd3JhcHBlciB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDMwMHB4OyB9XG4gICAgLm1hcC1jb250YWluZXIgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAzMDBweDsgfVxuICAgIC5tYXAtcGxhY2Vob2xkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbiAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgIH1cbiAgICAubWFwLXBsYWNlaG9sZGVyIGNvZGUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgcGFkZGluZzogMC4ycmVtIDAuNHJlbTsgYm9yZGVyLXJhZGl1czogNHB4OyB9XG4gICAgLm1hcC1lcnJvciB7IGJvcmRlci1jb2xvcjogdmFyKC0tZGFuZ2VyKTsgY29sb3I6IHZhcigtLWRhbmdlcik7IH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return PropertyMapComponent;
})();

/***/ },

/***/ 7149
/*!******************************************************!*\
  !*** ./src/app/core/services/google-maps.service.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleMapsService: () => (/* binding */ GoogleMapsService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 7144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);


let GoogleMapsService = /*#__PURE__*/(() => {
  class GoogleMapsService {
    constructor() {
      this.loadPromise = null;
    }
    get apiKey() {
      return _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.googleMapsApiKey || '';
    }
    get isAvailable() {
      return !!this.apiKey && !!window.google?.maps;
    }
    load() {
      if (window.google?.maps) return Promise.resolve();
      if (this.loadPromise) return this.loadPromise;
      const key = this.apiKey;
      if (!key) {
        this.loadPromise = Promise.reject(new Error('Google Maps API key not set'));
        return this.loadPromise;
      }
      this.loadPromise = new Promise((resolve, reject) => {
        const cbName = '__ngGoogleMapsInit_' + Date.now();
        window[cbName] = () => {
          delete window[cbName];
          if (window.google?.maps) resolve();else reject(new Error('Google Maps failed to load'));
        };
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&callback=${cbName}`;
        script.async = true;
        script.defer = true;
        script.onerror = () => {
          delete window[cbName];
          reject(new Error('Google Maps script failed to load'));
        };
        document.head.appendChild(script);
      });
      return this.loadPromise;
    }
    static {
      this.ɵfac = function GoogleMapsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoogleMapsService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GoogleMapsService,
        factory: GoogleMapsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GoogleMapsService;
})();

/***/ },

/***/ 8991
/*!***********************************************!*\
  !*** ./src/app/core/data/indian-locations.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INDIAN_STATES_AND_CITIES: () => (/* binding */ INDIAN_STATES_AND_CITIES),
/* harmony export */   getCitiesForState: () => (/* binding */ getCitiesForState),
/* harmony export */   getStateNames: () => (/* binding */ getStateNames)
/* harmony export */ });
/** Indian states, union territories, and their major cities for dropdowns */
const INDIAN_STATES_AND_CITIES = [{
  state: 'Andhra Pradesh',
  cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Kakinada', 'Rajahmundry', 'Tirupati', 'Kadapa', 'Anantapur', 'Chittoor', 'Eluru', 'Ongole', 'Nandyal', 'Machilipatnam']
}, {
  state: 'Arunachal Pradesh',
  cities: ['Itanagar', 'Naharlagun', 'Pasighat', 'Namsai', 'Changlang', 'Tezu', 'Ziro', 'Bomdila', 'Tawang', 'Seppa']
}, {
  state: 'Assam',
  cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon', 'Dhubri', 'Diphu', 'North Lakhimpur', 'Karimganj', 'Goalpara', 'Sivasagar', 'Golaghat']
}, {
  state: 'Bihar',
  cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia', 'Arrah', 'Begusarai', 'Katihar', 'Munger', 'Chhapra', 'Saharsa', 'Sasaram', 'Hajipur', 'Dehri']
}, {
  state: 'Chhattisgarh',
  cities: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh', 'Ambikapur', 'Mahasamund', 'Dhamtari', 'Chirmiri', 'Bhatapara', 'Dalli-Rajhara', 'Naila Janjgir']
}, {
  state: 'Goa',
  cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Sanquelim', 'Quepem', 'Cuncolim', 'Canacona', 'Pernem']
}, {
  state: 'Gujarat',
  cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Anand', 'Nadiad', 'Morbi', 'Mehsana', 'Bhuj', 'Porbandar', 'Godhra', 'Palanpur', 'Valsad', 'Vapi', 'Gondal', 'Veraval']
}, {
  state: 'Haryana',
  cities: ['Faridabad', 'Gurgaon', 'Hisar', 'Rohtak', 'Panipat', 'Karnal', 'Sonipat', 'Yamunanagar', 'Panchkula', 'Bhiwani', 'Bahadurgarh', 'Jind', 'Sirsa', 'Thanesar', 'Kaithal', 'Palwal', 'Rewari', 'Hansi', 'Narnaul', 'Fatehabad']
}, {
  state: 'Himachal Pradesh',
  cities: ['Shimla', 'Dharamshala', 'Solan', 'Mandi', 'Palampur', 'Baddi', 'Nahan', 'Kullu', 'Chamba', 'Una', 'Hamirpur', 'Bilaspur', 'Kangra', 'Dalhousie', 'Manali']
}, {
  state: 'Jharkhand',
  cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Phusro', 'Medininagar', 'Chirkunda', 'Chaibasa', 'Gumia', 'Dumka', 'Saunda']
}, {
  state: 'Karnataka',
  cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davanagere', 'Bellary', 'Bijapur', 'Shimoga', 'Tumkur', 'Raichur', 'Bidar', 'Hospet', 'Gadag', 'Hassan', 'Gangavati', 'Robertsonpet', 'Bhadravati', 'Chitradurga']
}, {
  state: 'Kerala',
  cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Alappuzha', 'Palakkad', 'Malappuram', 'Kannur', 'Kasaragod', 'Kottayam', 'Pathanamthitta', 'Idukki', 'Ernakulam', 'Wayanad']
}, {
  state: 'Madhya Pradesh',
  cities: ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa', 'Murwara', 'Singrauli', 'Burhanpur', 'Khandwa', 'Bharuch', 'Morena', 'Bhind', 'Chhindwara', 'Guna', 'Shivpuri']
}, {
  state: 'Maharashtra',
  cities: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Navi Mumbai', 'Sangli', 'Malegaon', 'Jalgaon', 'Akola', 'Latur', 'Ahmednagar', 'Dhule', 'Ichalkaranji', 'Chandrapur', 'Parbhani', 'Jalna', 'Bhusawal', 'Panvel', 'Ulhasnagar', 'Nanded', 'Beed']
}, {
  state: 'Manipur',
  cities: ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Kakching', 'Ukhrul', 'Senapati', 'Tamenglong', 'Jiribam', 'Moreh']
}, {
  state: 'Meghalaya',
  cities: ['Shillong', 'Tura', 'Nongstoin', 'Jowai', 'Nongpoh', 'Williamnagar', 'Resubelpara', 'Mawkyrwat', 'Ampati']
}, {
  state: 'Mizoram',
  cities: ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib', 'Serchhip', 'Mamit', 'Khawzawl', 'Saitual']
}, {
  state: 'Nagaland',
  cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Phek', 'Mon', 'Kiphire', 'Longleng']
}, {
  state: 'Odisha',
  cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak', 'Baripada', 'Jharsuguda', 'Bargarh', 'Jeypore', 'Bhawanipatna', 'Dhenkanal', 'Barbil']
}, {
  state: 'Punjab',
  cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Pathankot', 'Hoshiarpur', 'Batala', 'Moga', 'Malerkotla', 'Khanna', 'Phagwara', 'Muktsar', 'Barnala', 'Rajpura', 'Firozpur', 'Faridkot', 'Sangrur', 'Fazilka']
}, {
  state: 'Rajasthan',
  cities: ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sikar', 'Pali', 'Sri Ganganagar', 'Tonk', 'Kishangarh', 'Beawar', 'Hanumangarh', 'Churu', 'Jhunjhunu', 'Baran', 'Chittorgarh', 'Sawai Madhopur', 'Nagaur', 'Dholpur', 'Pratapgarh', 'Jaisalmer']
}, {
  state: 'Sikkim',
  cities: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Ravangla', 'Rangpo', 'Jorethang', 'Pelling']
}, {
  state: 'Tamil Nadu',
  cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur', 'Ranipet', 'Sivakasi', 'Karur', 'Udhagamandalam', 'Hosur', 'Nagercoil', 'Kanchipuram', 'Kumarapalayam', 'Karaikkudi', 'Neyveli', 'Cuddalore', 'Kumbakonam', 'Tiruvannamalai', 'Pollachi', 'Rajapalayam', 'Gudiyatham', 'Pudukkottai', 'Viluppuram']
}, {
  state: 'Telangana',
  cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Ramagundam', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Suryapet', 'Siddipet', 'Mancherial', 'Nirmal', 'Kothagudem', 'Sangareddy', 'Miryalaguda', 'Jagtial', 'Bodhan', 'Sircilla', 'Kamareddy', 'Koratla', 'Karimnagar', 'Bellampalli']
}, {
  state: 'Tripura',
  cities: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailasahar', 'Ambassa', 'Belonia', 'Khowai', 'Sabroom', 'Bishalgarh']
}, {
  state: 'Uttar Pradesh',
  cities: ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi', 'Meerut', 'Allahabad', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur', 'Gorakhpur', 'Noida', 'Firozabad', 'Jhansi', 'Muzaffarnagar', 'Mathura', 'Rampur', 'Shahjahanpur', 'Farrukhabad', 'Mau', 'Hapur', 'Etawah', 'Mirzapur', 'Bulandshahr', 'Sambhal', 'Amroha', 'Hardoi', 'Fatehpur', 'Raebareli', 'Orai', 'Sitapur', 'Bahraich', 'Modinagar', 'Unnao', 'Jaunpur', 'Lakhimpur', 'Hathras', 'Budaun', 'Sultanpur', 'Bijnor', 'Basti', 'Chandausi', 'Akbarpur', 'Ballia', 'Tanda', 'Greater Noida', 'Azamgarh', 'Banda', 'Bijnor', 'Budaun', 'Deoria', 'Ghazipur', 'Gonda', 'Loni', 'Mainpuri', 'Saharanpur']
}, {
  state: 'Uttarakhand',
  cities: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Pithoragarh', 'Ramnagar', 'Manglaur', 'Mussoorie', 'Tehri', 'Pauri', 'Nainital', 'Almora', 'Champawat', 'Bageshwar', 'Uttarkashi', 'Vikasnagar', 'Kichha']
}, {
  state: 'West Bengal',
  cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Malda', 'Baharampur', 'Habra', 'Kharagpur', 'Shantipur', 'Dankuni', 'Dhulian', 'Ranaghat', 'Haldia', 'Raiganj', 'Krishnanagar', 'Nabadwip', 'Medinipur', 'Jalpaiguri', 'Balurghat', 'Basirhat', 'Bankura', 'Chakdaha', 'Darjeeling', 'Alipurduar', 'Purulia', 'Jangipur', 'Bangaon', 'Cooch Behar', 'Kalyani', 'Tamluk']
}, {
  state: 'Andaman and Nicobar Islands',
  cities: ['Port Blair', 'Diglipur', 'Rangat', 'Mayabunder', 'Car Nicobar', 'Nancowry', 'Little Andaman']
}, {
  state: 'Chandigarh',
  cities: ['Chandigarh', 'Manimajra', 'Sector 17', 'Sector 22', 'Sector 34', 'Panchkula', 'Mohali']
}, {
  state: 'Dadra and Nagar Haveli and Daman and Diu',
  cities: ['Silvassa', 'Daman', 'Diu', 'Naroli', 'Rakholi', 'Amli', 'Khanvel']
}, {
  state: 'Delhi',
  cities: ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi', 'Dwarka', 'Rohini', 'Saket', 'Karol Bagh', 'Lajpat Nagar', 'Connaught Place', 'Noida', 'Ghaziabad', 'Gurgaon']
}, {
  state: 'Jammu and Kashmir',
  cities: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Sopore', 'Kathua', 'Udhampur', 'Kupwara', 'Budgam', 'Bandipore', 'Ganderbal', 'Pulwama', 'Shopian', 'Kulgam', 'Rajouri', 'Poonch', 'Doda', 'Ramban', 'Kishtwar', 'Samba']
}, {
  state: 'Ladakh',
  cities: ['Leh', 'Kargil', 'Nubra', 'Zanskar', 'Drass', 'Diskit', 'Padum', 'Panamik']
}, {
  state: 'Lakshadweep',
  cities: ['Kavaratti', 'Agatti', 'Minicoy', 'Andrott', 'Kadmat', 'Kiltan', 'Chetlat', 'Bitra', 'Amini', 'Bangaram']
}, {
  state: 'Puducherry',
  cities: ['Puducherry', 'Karaikal', 'Yanam', 'Mahe', 'Ozhukarai', 'Villianur', 'Bahour']
}];
/** All state names in order (for dropdown) */
function getStateNames() {
  return INDIAN_STATES_AND_CITIES.map(s => s.state);
}
/** Cities for a given state */
function getCitiesForState(stateName) {
  const found = INDIAN_STATES_AND_CITIES.find(s => s.state === stateName);
  return found ? found.cities : [];
}

/***/ }

}]);
//# sourceMappingURL=common.js.map