(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./src/app/places/discover/discover.module.ts":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");







const routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]
    }
];
let DiscoverPageModule = class DiscoverPageModule {
};
DiscoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]]
    })
], DiscoverPageModule);



/***/ }),

/***/ "./src/app/places/discover/discover.page.html":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-button (click)=\"onOpenMenu()\">\n        Open\n      </ion-button> -->\n    </ion-buttons>\n    <ion-title>Discover Places</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment (ionChange)=\"onFilterUpdate($event)\">\n    <ion-segment-button value=\"all\" checked>All Places</ion-segment-button>\n    <ion-segment-button value=\"bookable\">Bookable Places</ion-segment-button>\n  </ion-segment>\n  <ion-grid *ngIf=\"isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid\n    *ngIf=\"!isLoading && (!relevantPlaces || relevantPlaces.length <= 0)\"\n  >\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <p>There are no bookable places right now, please come back later!</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isLoading && relevantPlaces.length > 0\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{ relevantPlaces[0].title }}</ion-card-title>\n            <ion-card-subtitle\n              >{{ relevantPlaces[0].price | currency }} /\n              Night</ion-card-subtitle\n            >\n          </ion-card-header>\n          <ion-img [src]=\"relevantPlaces[0].imageUrl\"></ion-img>\n          <ion-card-content>\n            <p>{{ relevantPlaces[0].description }}</p>\n          </ion-card-content>\n          <div>\n            <ion-button\n              fill=\"clear\"\n              color=\"primary\"\n              [routerLink]=\"[\n                '/',\n                'places',\n                'tabs',\n                'discover',\n                relevantPlaces[0].id\n              ]\"\n            >\n              More\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-virtual-scroll\n          [items]=\"listedLoadedPlaces\"\n          approxItemHeight=\"70px\"\n        >\n          <ion-item\n            [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\"\n            detail\n            *virtualItem=\"let place\"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"place.imageUrl\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{ place.title }}</h2>\n              <p>{{ place.description }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-virtual-scroll>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/places/discover/discover.page.scss":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kaXNjb3Zlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/places/discover/discover.page.ts":
/*!**************************************************!*\
  !*** ./src/app/places/discover/discover.page.ts ***!
  \**************************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");





let DiscoverPage = class DiscoverPage {
    constructor(placesService, menuCtrl, authService) {
        this.placesService = placesService;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.placesSub = this.placesService.places.subscribe(places => {
            this.loadedPlaces = places;
            this.relevantPlaces = this.loadedPlaces;
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        });
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.placesService.fetchPlaces().subscribe(() => {
            this.isLoading = false;
        });
    }
    onOpenMenu() {
        this.menuCtrl.toggle();
    }
    onFilterUpdate(event) {
        if (event.detail.value === 'all') {
            this.relevantPlaces = this.loadedPlaces;
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }
        else {
            this.relevantPlaces = this.loadedPlaces.filter(place => place.userId !== this.authService.userId);
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }
    }
    ngOnDestroy() {
        if (this.placesSub) {
            this.placesSub.unsubscribe();
        }
    }
};
DiscoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discover',
        template: __webpack_require__(/*! ./discover.page.html */ "./src/app/places/discover/discover.page.html"),
        styles: [__webpack_require__(/*! ./discover.page.scss */ "./src/app/places/discover/discover.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], DiscoverPage);



/***/ }),

/***/ "./src/app/places/place.model.ts":
/*!***************************************!*\
  !*** ./src/app/places/place.model.ts ***!
  \***************************************/
/*! exports provided: Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
class Place {
    constructor(id, title, description, imageUrl, price, availableFrom, availableTo, userId, location) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.availableFrom = availableFrom;
        this.availableTo = availableTo;
        this.userId = userId;
        this.location = location;
    }
}


/***/ }),

/***/ "./src/app/places/places.service.ts":
/*!******************************************!*\
  !*** ./src/app/places/places.service.ts ***!
  \******************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place.model */ "./src/app/places/place.model.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");







let PlacesService = class PlacesService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this._places = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    get places() {
        return this._places.asObservable();
    }
    fetchPlaces() {
        return this.http
            .get('https://ionic-angular-app-ab6e9.firebaseio.com/offered-places.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resData => {
            const places = [];
            for (const key in resData) {
                if (resData.hasOwnProperty(key)) {
                    places.push(new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](key, resData[key].title, resData[key].description, resData[key].imageUrl, resData[key].price, new Date(resData[key].availableFrom), new Date(resData[key].availableTo), resData[key].userId, resData[key].location));
                }
            }
            return places;
            // return [];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(places => {
            this._places.next(places);
        }));
    }
    getPlace(id) {
        return this.http
            .get(`https://ionic-angular-app-ab6e9.firebaseio.com/offered-places/${id}.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(placeData => {
            return new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](id, placeData.title, placeData.description, placeData.imageUrl, placeData.price, new Date(placeData.availableFrom), new Date(placeData.availableTo), placeData.userId, placeData.location);
        }));
    }
    addPlace(title, description, price, dateFrom, dateTo, location) {
        let generatedId;
        const newPlace = new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](Math.random().toString(), title, description, 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200', price, dateFrom, dateTo, this.authService.userId, location);
        return this.http
            .post('https://ionic-angular-app-ab6e9.firebaseio.com/offered-places.json', Object.assign({}, newPlace, { id: null }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(resData => {
            generatedId = resData.name;
            return this.places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(places => {
            newPlace.id = generatedId;
            this._places.next(places.concat(newPlace));
        }));
    }
    updatePlace(placeId, title, description) {
        let updatedPlaces;
        return this.places.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(places => {
            if (!places || places.length <= 0) {
                return this.fetchPlaces();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(places);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(places => {
            const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
            updatedPlaces = [...places];
            const oldPlace = updatedPlaces[updatedPlaceIndex];
            updatedPlaces[updatedPlaceIndex] = new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](oldPlace.id, title, description, oldPlace.imageUrl, oldPlace.price, oldPlace.availableFrom, oldPlace.availableTo, oldPlace.userId, oldPlace.location);
            return this.http.put(`https://ionic-angular-app-ab6e9.firebaseio.com/offered-places/${placeId}.json`, Object.assign({}, updatedPlaces[updatedPlaceIndex], { id: null }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this._places.next(updatedPlaces);
        }));
    }
};
PlacesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PlacesService);



/***/ })

}]);
//# sourceMappingURL=discover-discover-module.js.map