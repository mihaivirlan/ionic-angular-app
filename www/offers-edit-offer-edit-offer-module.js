(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-edit-offer-edit-offer-module"],{

/***/ "./src/app/places/offers/edit-offer/edit-offer.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.module.ts ***!
  \***************************************************************/
/*! exports provided: EditOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOfferPageModule", function() { return EditOfferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-offer.page */ "./src/app/places/offers/edit-offer/edit-offer.page.ts");







const routes = [
    {
        path: '',
        component: _edit_offer_page__WEBPACK_IMPORTED_MODULE_6__["EditOfferPage"]
    }
];
let EditOfferPageModule = class EditOfferPageModule {
};
EditOfferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_offer_page__WEBPACK_IMPORTED_MODULE_6__["EditOfferPage"]]
    })
], EditOfferPageModule);



/***/ }),

/***/ "./src/app/places/offers/edit-offer/edit-offer.page.html":
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        [defaultHref]=\"'/places/tabs/offers/' + placeId\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onUpdateOffer()\" [disabled]=\"!form?.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"isLoading\" text-center>\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <form [formGroup]=\"form\" *ngIf=\"!isLoading\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Short Description</ion-label>\n            <ion-textarea rows=\"3\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngIf=\"\n          !form.get('description').valid && form.get('description').touched\n        \"\n      >\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <p>Description must be between 1 and 180 characters.</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/offers/edit-offer/edit-offer.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvZWRpdC1vZmZlci9lZGl0LW9mZmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/places/offers/edit-offer/edit-offer.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.page.ts ***!
  \*************************************************************/
/*! exports provided: EditOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOfferPage", function() { return EditOfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");






let EditOfferPage = class EditOfferPage {
    constructor(route, placesService, navCtrl, router, loadingCtrl, alertCtrl) {
        this.route = route;
        this.placesService = placesService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navCtrl.navigateBack('/places/tabs/offers');
                return;
            }
            this.placeId = paramMap.get('placeId');
            this.isLoading = true;
            this.placeSub = this.placesService
                .getPlace(paramMap.get('placeId'))
                .subscribe(place => {
                this.place = place;
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.place.title, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                    }),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.place.description, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(180)]
                    })
                });
                this.isLoading = false;
            }, error => {
                this.alertCtrl.create({
                    header: 'An error occured!',
                    message: 'Place could not be fetched. Please try again later.',
                    buttons: [{ text: 'Okay', handler: () => {
                                this.router.navigate(['/places/tabs/offers']);
                            } }]
                }).then(alertEl => {
                    alertEl.present();
                });
            });
        });
    }
    onUpdateOffer() {
        if (!this.form.valid) {
            return;
        }
        this.loadingCtrl
            .create({
            message: 'Updating place...'
        })
            .then(loadingEl => {
            loadingEl.present();
            this.placesService
                .updatePlace(this.place.id, this.form.value.title, this.form.value.description)
                .subscribe(() => {
                loadingEl.dismiss();
                this.form.reset();
                this.router.navigate(['/places/tabs/offers']);
            });
        });
    }
    ngOnDestroy() {
        if (this.placeSub) {
            this.placeSub.unsubscribe();
        }
    }
};
EditOfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-offer',
        template: __webpack_require__(/*! ./edit-offer.page.html */ "./src/app/places/offers/edit-offer/edit-offer.page.html"),
        styles: [__webpack_require__(/*! ./edit-offer.page.scss */ "./src/app/places/offers/edit-offer/edit-offer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _places_service__WEBPACK_IMPORTED_MODULE_5__["PlacesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], EditOfferPage);



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
//# sourceMappingURL=offers-edit-offer-edit-offer-module.js.map