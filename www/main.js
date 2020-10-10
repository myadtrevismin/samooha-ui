(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+ezy":
/*!**************************************************************!*\
  !*** ./src/app/_services/projects/projectservice.service.ts ***!
  \**************************************************************/
/*! exports provided: ProjectserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectserviceService", function() { return ProjectserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let ProjectserviceService = class ProjectserviceService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    // tslint:disable-next-line: typedef
    getProjects() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/projects`, {
            withCredentials: true
        });
    }
    // tslint:disable-next-line: typedef
    getProjectById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/projects/` + id, {
            withCredentials: true
        });
    }
    // tslint:disable-next-line: typedef
    saveProject(project) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/projects`, project, {
            withCredentials: true
        });
    }
    // tslint:disable-next-line: typedef
    getsubProjects(id, name) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('plotId', id);
        params = params.append('name', name);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/projects/subproject`, {
            withCredentials: true,
            params
        });
    }
    // tslint:disable-next-line: typedef
    savePlotDetails(plot) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/projects/customer/save`, plot, {
            withCredentials: true
        });
    }
};
ProjectserviceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProjectserviceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ProjectserviceService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pkuma\Documents\Personal\Trevista\Ionic\samooha-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "19NL":
/*!******************************************************!*\
  !*** ./src/app/_components/home/home.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-grid-tile:nth-of-type(1) {\n  background: #0143a3;\n  color: #ffffff;\n}\n\nmat-grid-tile:nth-of-type(2) {\n  background: #ff3f40;\n  color: #ffffff;\n}\n\nmat-grid-tile a {\n  color: #ffffff;\n}\n\n.folder {\n  align-items: center;\n  border-radius: 4px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 1.875rem;\n  height: 50px;\n  justify-content: center;\n  line-height: 48px;\n  text-align: center;\n  width: 50px;\n  background-color: #727376 !important;\n}\n\n.group {\n  align-items: center;\n  border-radius: 4px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 1.875rem;\n  height: 50px;\n  justify-content: center;\n  line-height: 48px;\n  text-align: center;\n  width: 50px;\n  background-color: #ff8b8c !important;\n}\n\n.card-text {\n  margin: 1rem 0;\n}\n\n.example-margin-1 {\n  color: #727376 !important;\n}\n\n.mat-progress-bar-background {\n  fill: #727376 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgYmFja2dyb3VuZDogIzAxNDNhMztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmM2Y0MDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZSBhe1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZm9sZGVye1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI3Mzc2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncm91cHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGI4YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmNhcmQtdGV4dHtcclxuICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luLTF7XHJcbiAgY29sb3I6ICM3MjczNzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtcclxuICBmaWxsOiAjNzI3Mzc2ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "2dux":
/*!****************************************************!*\
  !*** ./src/app/_components/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Pnet");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "19NL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var src_app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/authorize/authorization.service */ "3yzC");








let HomeComponent = class HomeComponent {
    constructor(router, authService, account) {
        this.router = router;
        this.authService = authService;
        this.account = account;
    }
    ngOnInit() {
        this.user = this.authService.userValue;
        this.account.getdashboardData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(projects => {
            this.dashboard = projects;
        })).subscribe();
    }
    // tslint:disable-next-line: typedef
    navigate(path) {
        if (path === 0) {
            this.router.navigate(['/dashboard/projects']);
        }
        else {
            this.router.navigate(['/dashboard/agents']);
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_7__["AuthorizationService"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "3InM":
/*!************************************************************************!*\
  !*** ./src/app/_components/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgotpassword_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "vhox");
/* harmony import */ var _forgotpassword_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpassword.component.scss */ "IgTN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");





let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(accountservice) {
        this.accountservice = accountservice;
    }
    ngOnInit() {
    }
    // tslint:disable-next-line: typedef
    emailSubmit() {
        this.accountservice.forgotpassword({ email: this.email }).subscribe(x => console.log(x));
    }
};
ForgotpasswordComponent.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
];
ForgotpasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgotpassword',
        template: _raw_loader_forgotpassword_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgotpassword_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotpasswordComponent);



/***/ }),

/***/ "3yzC":
/*!**************************************************************!*\
  !*** ./src/app/_services/authorize/authorization.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");







let AuthorizationService = class AuthorizationService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.user = this.userSubject.asObservable();
    }
    get userValue() {
        return this.userSubject.value;
    }
    login(email, password) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/api/accounts/authenticate`, {
            email,
            password
        }, {
            withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(user => {
            this.userSubject.next(user);
            this.startRefreshTokenTimer();
            return user;
        }));
    }
    // tslint:disable-next-line: typedef
    logout() {
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/api/accounts/revoke-token`, {}, {
            withCredentials: true
        }).subscribe();
        this.stopRefreshTokenTimer();
        localStorage.removeItem('jwt');
        localStorage.removeItem('refreshToken');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
    // tslint:disable-next-line: typedef
    refreshToken() {
        const refreshToken = localStorage.getItem('refreshToken');
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/api/accounts/refresh-token`, {}, {
            withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            this.userSubject.next(user);
            this.startRefreshTokenTimer();
            return user;
        }));
    }
    // tslint:disable-next-line: typedef
    sendOtp(phoneNumber) {
        const options = phoneNumber ?
            { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('phonenumber', phoneNumber) } : {};
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/api/Accounts/generateotp`, {
            withCredentials: true,
            params: options.params
        });
    }
    // tslint:disable-next-line: typedef
    verifyOtp(otp) {
        const options = otp ?
            { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('otp', otp) } : {};
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/api/Accounts/verifyotp/`, {
            withCredentials: true,
            params: options.params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(user => {
            this.userSubject.next(user);
            this.startRefreshTokenTimer();
            return user;
        }));
    }
    // tslint:disable-next-line: typedef
    startRefreshTokenTimer() {
        const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }
    // tslint:disable-next-line: typedef
    stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
};
AuthorizationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthorizationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthorizationService);



/***/ }),

/***/ "4fFf":
/*!********************************************************************!*\
  !*** ./src/app/_components/login-layout/login-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login-layout.component.html */ "mQ78");
/* harmony import */ var _login_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-layout.component.scss */ "hX9P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LoginLayoutComponent = class LoginLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginLayoutComponent.ctorParameters = () => [];
LoginLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-layout',
        template: _raw_loader_login_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginLayoutComponent);



/***/ }),

/***/ "4jBC":
/*!*******************************************************************!*\
  !*** ./src/app/_components/agents/addagent/addagent.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddagentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddagentComponent", function() { return AddagentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addagent_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addagent.component.html */ "9f54");
/* harmony import */ var _addagent_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addagent.component.scss */ "iE6w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_azure_blob_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-azure-blob-service */ "c/d7");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");








let AddagentComponent = class AddagentComponent {
    constructor(formBuilder, accountService, blob) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.blob = blob;
        this.profilefile = 'No File Chosen';
    }
    ngOnInit() {
        const roleType = this.role || 'Agent';
        this.agentText = roleType === 'Agent' ? 'Add Agent' : 'Add Admin';
        this.agentForm = this.formBuilder.group({
            accountCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            profileFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['']
        });
        this.randomDbGenerator();
    }
    // tslint:disable-next-line: typedef
    get f() { return this.agentForm.controls; }
    // tslint:disable-next-line: typedef
    upload(files) {
        const Config = {
            sas: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].blobkey,
            storageAccount: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].bloburl,
            containerName: 'plots'
        };
        const file = files[0];
        if (file !== null) {
            const baseUrl = this.blob.generateBlobUrl(Config, file.name);
            this.config = {
                baseUrl,
                sasToken: Config.sas,
                file,
                complete: () => {
                    this.uploadedFile = baseUrl;
                    this.profilefile = file.name;
                },
                error: (err) => {
                    console.log('Error:', err);
                },
                progress: (percent) => {
                    this.progress = percent;
                }
            };
            this.blob.upload(this.config);
        }
    }
    // tslint:disable-next-line: typedef
    submitAgent() {
        this.success = false;
        this.error = null;
        this.submitted = true;
        const passwordid = this.passwordgenerator();
        if (this.agentForm.valid) {
            const model = {
                title: 'Agent',
                acceptTerms: true,
                accountCode: this.f.accountCode.value,
                firstName: this.f.firstName.value,
                lastName: this.f.lastName.value,
                profileFile: this.uploadedFile,
                phoneNumber: this.f.phone.value,
                email: this.f.email.value,
                dateOfBirth: this.f.dateOfBirth.value,
                address: this.f.address.value,
                password: passwordid,
                confirmPassword: passwordid,
                role: this.role === undefined || this.role === null ? 2 : this.role,
            };
            this.accountService.registerAgent(model).subscribe(x => this.success = true, (error) => this.error = error);
        }
    }
    // tslint:disable-next-line: typedef
    randomCodeGenerator() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * 5));
        }
        return 'SM-A-' + result;
    }
    // tslint:disable-next-line: typedef
    passwordgenerator() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!?@#';
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * 6));
        }
        for (let i = 0; i < 2; i++) {
            result += lower.charAt(Math.floor(Math.random() * 2));
        }
        for (let i = 0; i < 2; i++) {
            result += numbers.charAt(Math.floor(Math.random() * 2));
        }
        for (let i = 0; i < 2; i++) {
            result += symbols.charAt(Math.floor(Math.random() * 2));
        }
        return result.split('').sort(() => {
            return 0.5 - Math.random();
        }).join('');
    }
    // tslint:disable-next-line: typedef
    randomDbGenerator() {
        this.accountService.getAgentcodes()
            .subscribe(x => this.agentForm.get('accountCode').setValue(x.NewAgent), (error) => this.error = error);
    }
};
AddagentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: angular_azure_blob_service__WEBPACK_IMPORTED_MODULE_5__["BlobService"] }
];
AddagentComponent.propDecorators = {
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AddagentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addagent',
        template: _raw_loader_addagent_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addagent_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddagentComponent);



/***/ }),

/***/ "5ZPe":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let AccountService = class AccountService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    // tslint:disable-next-line: typedef
    getAll() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/accounts`, {
            withCredentials: true
        });
    }
    // tslint:disable-next-line: typedef
    register(model) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/accounts/register`, model, {
            withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            this.registerSubject.next(user);
            return user;
        }));
    }
    // tslint:disable-next-line: typedef
    registerAgent(model) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/accounts/register`, model, {
            withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            return user;
        }));
    }
    // tslint:disable-next-line: typedef
    forgotpassword(model) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/accounts/forgot-password`, model, {
            withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            return user;
        }));
    }
    // tslint:disable-next-line: typedef
    resetPassword(model) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/accounts/reset-password`, model, {
            withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            return user;
        }));
    }
    // tslint:disable-next-line: typedef
    verifyEmail(token) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/accounts/verify-email`, {
            token
        }, {
            withCredentials: true
        });
    }
    // tslint:disable-next-line: typedef
    getdashboardData() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/dashboard`, {
            withCredentials: true
        });
    }
    // tslint:disable-next-line: typedef
    getAgentById(id) {
        console.log(id);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/accounts/agent/` + id, {
            withCredentials: true
        });
    }
    // tslint:disable-next-line: typedef
    getAgentcodes() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/accounts/generatecodes`, {
            withCredentials: true
        });
    }
    // tslint:disable-next-line: typedef
    deleteAgentById(id) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/accounts/agent/delete`, { id }, {
            withCredentials: true,
        });
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ "8Aj/":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/agents/profile/profile.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"p-2\">\r\n    <h2>\r\n      {{agent?.role}} Profile\r\n    </h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n      <li class=\"breadcrumb-item active\">{{agent?.role}} Profile</li>\r\n    </ol>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 p-4\">\r\n        <img class=\"img img-fluid\" [src]=\"agent?.profileFile\">\r\n      </div>\r\n      <div class=\"col-md-8 p-sm-4 container-margin\">\r\n        <div class=\"container-fluid\" *ngIf=\"agent\">\r\n          <div class=\"row m-2\">\r\n            <div class=\"col-sm-3 text-sm-right\">\r\n              Id:\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              {{agent.accountCode}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row m-2\">\r\n            <div class=\"col-sm-3 text-sm-right\">\r\n              Name:\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              {{agent.firstName}} {{agent.lastName}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row m-2\">\r\n            <div class=\"col-sm-3 text-sm-right\">\r\n              DOB:\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              {{agent.dateOfBirth | date}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row m-2\">\r\n            <div class=\"col-sm-3 text-sm-right\">\r\n              Email:\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              {{agent.email}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row m-2\">\r\n            <div class=\"col-sm-3 text-sm-right\">\r\n              Phone:\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              {{agent.phoneNumber}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row m-2\">\r\n            <div class=\"col-sm-3 text-sm-right\">\r\n              Address:\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              {{agent.address}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"mat-container mat-elevation-z8\">\r\n      <table mat-table #table [dataSource]=\"dataSource\">\r\n        <ng-container matColumnDef=\"sno\">\r\n          <th mat-header-cell *matHeaderCellDef> S.No. </th>\r\n          <td mat-cell *matCellDef=\"let i = index\">\r\n            {{this.paginator.pageIndex == 0 ? i + 1 : 1 + i + this.paginator.pageIndex * this.paginator.pageSize}}\r\n          </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"projectid\">\r\n          <th mat-header-cell *matHeaderCellDef> Project Id </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.plot.plotCode}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"logo\">\r\n          <th mat-header-cell *matHeaderCellDef> Project Logo </th>\r\n          <td mat-cell *matCellDef=\"let row\"> <img class=\"img logo img-fluid\" [src]=\"row.plot.logoPath\"></td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef> Project Name </th>\r\n          <td mat-cell *matCellDef=\"let row\">{{row.plot.plotName}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"plots\">\r\n          <th mat-header-cell *matHeaderCellDef> Plot Sold </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n    </div>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "8fuK":
/*!******************************************************************!*\
  !*** ./src/app/_components/verifyemail/verifyemail.component.ts ***!
  \******************************************************************/
/*! exports provided: VerifyemailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyemailComponent", function() { return VerifyemailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verifyemail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verifyemail.component.html */ "vx6z");
/* harmony import */ var _verifyemail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verifyemail.component.scss */ "pIWj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");







var EmailStatus;
(function (EmailStatus) {
    EmailStatus[EmailStatus["Verifying"] = 0] = "Verifying";
    EmailStatus[EmailStatus["Failed"] = 1] = "Failed";
})(EmailStatus || (EmailStatus = {}));
let VerifyemailComponent = class VerifyemailComponent {
    constructor(route, router, accountService) {
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.EmailStatus = EmailStatus;
        this.emailStatus = EmailStatus.Verifying;
    }
    ngOnInit() {
        const token = this.route.snapshot.queryParams['token'];
        this.router.navigate([], { relativeTo: this.route, replaceUrl: true });
        this.accountService.verifyEmail(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe({
            next: () => {
                this.router.navigate(['/login'], { relativeTo: this.route });
            },
            error: () => {
                this.emailStatus = EmailStatus.Failed;
            }
        });
    }
};
VerifyemailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }
];
VerifyemailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verifyemail',
        template: _raw_loader_verifyemail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verifyemail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerifyemailComponent);



/***/ }),

/***/ "9f54":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/agents/addagent/addagent.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{agentText}}</h1>\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">{{agentText}}</li>\r\n  </ol>\r\n</nav>\r\n\r\n<div class=\"container mb-2\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>{{agentText}}</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form [formGroup]=\"agentForm\" (submit)=\"submitAgent()\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"accountCode\" class=\"col-sm-2 col-form-label\">Agent ID</label>\r\n              <div class=\"col-sm-10\">\r\n                <input readonly type=\"text\" class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.accountCode.errors }\"\r\n                 formControlName=\"accountCode\" name=\"accountCode\" placeholder=\"Agent ID\">\r\n                <div *ngIf=\"submitted && f.accountCode.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.accountCode.errors.required\">Account Id is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"firstName\" class=\"col-sm-2 col-form-label\">First Name</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text\" formControlName=\"firstName\"  class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\r\n                  name=\"firstName\"  placeholder=\"First Name\">\r\n                  <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"lastName\" class=\"col-sm-2 col-form-label\">Last Name</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text\" class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" formControlName=\"lastName\" name=\"lastName\" placeholder=\"Last Name\">\r\n                  <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"profileFile\" class=\"col-sm-2 col-form-label\">Agent Profile</label>\r\n                <div class=\"col-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"custom-file\">\r\n                      <input type=\"file\" class=\"custom-file-input\" formControlName=\"profileFile\" (change)=\"upload($event.target.files)\" name=\"profileFile\">\r\n                      <label class=\"custom-file-label\" for=\"logo\">  <span class=\"spinner-border spinner-border-sm\" *ngIf=\"progress > 0 && progress < 100\" role=\"status\" aria-hidden=\"true\"></span> {{profilefile}}</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"phone\" class=\"col-sm-2 col-form-label\">Phone</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text\" class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" formControlName=\"phone\" name=\"phone\"\r\n                  placeholder=\"Phone Number\">\r\n                  <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.phone.errors.required\">Phone Number is required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"email\" class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\r\n                  formControlName=\"email\" name=\"email\" id=\"email\"\r\n                  placeholder=\"Email\">\r\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"dateOfBirth\" class=\"col-sm-2 col-form-label\">DOB</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"date\" class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.dateOfBirth .errors }\"\r\n                  formControlName=\"dateOfBirth\" name=\"dateOfBirth\" placeholder=\"mm/dd/yyyy\">\r\n                  <div *ngIf=\"submitted && f.dateOfBirth.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.dateOfBirth.errors.required\">Date Of Birth is required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"address\" class=\"col-sm-2 col-form-label\">Address</label>\r\n                <div class=\"col-sm-10\">\r\n                  <textarea  class=\"form-control\" formControlName=\"address\" name=\"address\"\r\n                  placeholder=\"Enter text here\"> </textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"d-flex text-center justify-content-center\" role=\"group\" aria-label=\"\">\r\n                <button type=\"submit\" [disabled]=\"agentForm.invalid\" class=\"btn btn-primary\">Submit</button>\r\n              </div>\r\n          </form>\r\n          <div *ngIf=\"success\" class=\"alert alert-success mt-3 mb-0\">User Added Successfully</div>\r\n          <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "AO3X":
/*!******************************************************!*\
  !*** ./src/app/_helpers/jwtintercept.interceptor.ts ***!
  \******************************************************/
/*! exports provided: JwtinterceptInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtinterceptInterceptor", function() { return JwtinterceptInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/_services/authorize/authorization.service */ "3yzC");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let JwtinterceptInterceptor = class JwtinterceptInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const user = this.authService.userValue;
        const isLoggedIn = user && user.jwtToken;
        const isApiUrl = request.url.startsWith(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${user.jwtToken}` }
            });
        }
        return next.handle(request);
    }
};
JwtinterceptInterceptor.ctorParameters = () => [
    { type: _app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"] }
];
JwtinterceptInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtinterceptInterceptor);



/***/ }),

/***/ "ASJB":
/*!************************************************************************!*\
  !*** ./src/app/_components/appnavigation/appnavigation.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  background-color: #ffffff;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.white-icon {\n  color: white;\n}\n\n.nav-active {\n  background-color: #ff3f40;\n  color: #fff;\n}\n\n.nav-inactive {\n  background-color: #fff;\n  color: #333;\n}\n\n.nav-active:hover, .nav-inactive:hover {\n  background-color: aquamarine;\n}\n\n.mat-nav-list {\n  padding: 8px;\n}\n\n.mat-nav-list a {\n  margin-bottom: 0.5rem;\n}\n\n.mat-nav-list mat-icon {\n  margin: 0 0.2rem;\n}\n\n.mat-subheader, .subheader {\n  background-color: #ffffff;\n}\n\n.mat-subheader {\n  color: #333;\n}\n\n.mat-subheader:hover {\n  background-color: #e9ecef;\n  cursor: pointer;\n  color: #333;\n}\n\n.subheader {\n  font-size: 14px;\n  padding: 0 1rem !important;\n}\n\n.subheader:hover {\n  background-color: #e9ecef;\n  cursor: pointer;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvYXBwbmF2aWdhdGlvbi9hcHBuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFIRiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FwcG5hdmlnYXRpb24vYXBwbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ud2hpdGUtaWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2LWFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZjQwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2LWluYWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjZmZmO1xyXG4gIGNvbG9yOiAjMzMzIDtcclxufVxyXG5cclxuLm5hdi1hY3RpdmU6aG92ZXIsLm5hdi1pbmFjdGl2ZTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcblxyXG4ubWF0LW5hdi1saXN0e1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgYXtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1pY29ue1xyXG4gICAgbWFyZ2luOiAwIC4ycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1zdWJoZWFkZXIsIC5zdWJoZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm1hdC1zdWJoZWFkZXJ7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC1zdWJoZWFkZXI6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zdWJoZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViaGVhZGVyOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://localhost:44385',
    bloburl: `vsadhanblob`,
    blobkey: `?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2020-12-31T02:42:58Z&st=2020-09-19T17:42:58Z&spr=https,http&sig=%2FIxBLAxsf%2BtD684LdcEqUydAQPWzu3%2FbJX%2BmOV6koYQ%3D`
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D4GT":
/*!**********************************************************!*\
  !*** ./src/app/_components/agents/agents.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.input-rounded {\n  background-color: rgba(0, 0, 0, 0.47);\n  border-color: rgba(0, 0, 0, 0.1);\n  border-radius: 50px;\n  color: #ffffff;\n  height: 40px;\n  padding: 10px 50px 10px 15px;\n}\n\n.input-rounded::placeholder {\n  color: #ffffff;\n}\n\n.input-group-text {\n  background-color: rgba(0, 0, 0, 0.47);\n  border-radius: 50px;\n  color: #ffffff;\n}\n\n.mat-header-row {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n}\n\n.breadcrumb {\n  background: transparent;\n  color: #6c757d;\n  padding: 0;\n}\n\n.breadcrumb-item > a {\n  color: #333;\n}\n\n.mat-container.mat-elevation-z8 {\n  overflow-x: auto;\n}\n\n.mat-container .mat-table.mat-table {\n  min-width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvYWdlbnRzL2FnZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FnZW50cy9hZ2VudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dC1yb3VuZGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQ3JSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogMTBweCA1MHB4IDEwcHggMTVweDtcclxufVxyXG5cclxuLmlucHV0LXJvdW5kZWQ6OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0NyUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLXJvd3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYntcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1pdGVtPmF7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5tYXQtY29udGFpbmVyLm1hdC1lbGV2YXRpb24tejgge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLm1hdC1jb250YWluZXIgLm1hdC10YWJsZS5tYXQtdGFibGUge1xyXG4gIG1pbi13aWR0aDogNDUwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "FDse":
/*!***************************************************************************!*\
  !*** ./src/app/_components/projects/projectlist/projectlist.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectlistComponent", function() { return ProjectlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projectlist_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projectlist.component.html */ "eW59");
/* harmony import */ var _projectlist_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectlist.component.scss */ "b34P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_services/authorize/authorization.service */ "3yzC");
/* harmony import */ var src_app_services_projects_projectservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_services/projects/projectservice.service */ "+ezy");
/* harmony import */ var _projectmodal_projectmodal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../projectmodal/projectmodal.component */ "TKiz");













let ProjectlistComponent = class ProjectlistComponent {
    constructor(projectservice, dialog, auth, router) {
        this.projectservice = projectservice;
        this.dialog = dialog;
        this.auth = auth;
        this.router = router;
        this.displayedColumns = ['sno', 'projectid', 'logo', 'name', 'date'];
    }
    ngOnInit() {
        console.log(this.auth.userValue);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"]();
        this.loadProjects();
    }
    // tslint:disable-next-line: typedef
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    // tslint:disable-next-line: typedef
    loadProjects() {
        this.projectservice.getProjects().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(projects => {
            this.dataSource.data = projects;
        })).subscribe(x => (console.log(this.projects$)));
    }
    // tslint:disable-next-line: typedef
    openDialog() {
        const dialogRef = this.dialog.open(_projectmodal_projectmodal_component__WEBPACK_IMPORTED_MODULE_12__["ProjectmodalComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            this.loadProjects();
        });
    }
    // tslint:disable-next-line: typedef
    click(event, row) {
        console.log(event);
        event.preventDefault();
        this.router.navigate(['/dashboard/projects', row.plotId]);
    }
    // tslint:disable-next-line: typedef
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
ProjectlistComponent.ctorParameters = () => [
    { type: src_app_services_projects_projectservice_service__WEBPACK_IMPORTED_MODULE_11__["ProjectserviceService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_10__["AuthorizationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ProjectlistComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }]
};
ProjectlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projectlist',
        template: _raw_loader_projectlist_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projectlist_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectlistComponent);



/***/ }),

/***/ "FkWV":
/*!*******************************************************************************!*\
  !*** ./src/app/_components/projects/projectmodal/projectmodal.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hidden {\n  display: none;\n}\n\n.breadcrumb {\n  background: transparent;\n  color: #6c757d;\n  padding: 0;\n}\n\n.breadcrumb-item > a {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdG1vZGFsL3Byb2plY3Rtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3Rtb2RhbC9wcm9qZWN0bW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5icmVhZGNydW1ie1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iLWl0ZW0+YXtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "Guqd":
/*!**************************************************************!*\
  !*** ./src/app/_components/loginview/loginview.component.ts ***!
  \**************************************************************/
/*! exports provided: Transaction, LoginviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginviewComponent", function() { return LoginviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loginview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loginview.component.html */ "id+P");
/* harmony import */ var _loginview_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginview.component.scss */ "itNt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/authorize/authorization.service */ "3yzC");








var Transaction;
(function (Transaction) {
    Transaction[Transaction["login"] = 0] = "login";
    Transaction[Transaction["otp"] = 1] = "otp";
    Transaction[Transaction["verify"] = 2] = "verify";
})(Transaction || (Transaction = {}));
let LoginviewComponent = class LoginviewComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.loading = false;
        this.isOtp = false;
        this.phone = '';
        this.transaction = 'login';
        this.otpcode = '';
        this.otp = {
            val1: '',
            val2: '',
            val3: '',
            val4: '',
            val5: '',
        };
        if (this.authenticationService.userValue) {
            this.router.navigate(['/dashboard']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.returnUrl = this.route.snapshot.paramMap.get('returnUrl') || '/dashboard';
    }
    // tslint:disable-next-line: typedef
    get f() { return this.loginForm.controls; }
    // tslint:disable-next-line: typedef
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.loading = true;
            this.authenticationService.login(this.f.email.value, this.f.password.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe({
                next: () => {
                    this.router.navigate([this.returnUrl]);
                },
                error: error => {
                    this.error = error;
                    this.loading = false;
                }
            });
        }
    }
    // tslint:disable-next-line: typedef
    codeEntered(event) {
        const el = event.srcElement;
        // tslint:disable-next-line: one-variable-per-declaration
        const tidx = +(el.getAttribute('tabindex')) + 1, elements = document.getElementsByTagName('input');
        for (let i = elements.length; i--;) {
            const tidx2 = elements[i].getAttribute('tabindex');
            if (Number(tidx2) === tidx) {
                elements[i].focus();
            }
        }
    }
    // tslint:disable-next-line: typedef
    phoneSubmit() {
        this.authenticationService.sendOtp(this.phone)
            .subscribe(x => {
            console.log(x);
            if (x === true) {
                this.transaction = 'verify';
            }
        }, (error) => this.phoneerror = error);
    }
    // tslint:disable-next-line: typedef
    verifyPhone() {
        this.otpcode = this.otp.val1 + this.otp.val2 + this.otp.val3 + this.otp.val4 + this.otp.val5;
        this.authenticationService.verifyOtp(this.otpcode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe({
            next: () => {
                this.router.navigate([this.returnUrl]);
            },
            error: error => {
                this.otperror = error;
                this.loading = false;
            }
        });
    }
};
LoginviewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_7__["AuthorizationService"] }
];
LoginviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loginview',
        template: _raw_loader_loginview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loginview_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginviewComponent);



/***/ }),

/***/ "HTsV":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/agents/addadmin/addadmin.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-addagent [role]=\"1\"></app-addagent>\r\n");

/***/ }),

/***/ "IaO/":
/*!*******************************************************************!*\
  !*** ./src/app/_components/agents/profile/profile.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-margin {\n  background-color: #ffffff;\n}\n\n.breadcrumb {\n  background: transparent;\n  color: #6c757d;\n  padding: 0;\n}\n\n.breadcrumb-item > a {\n  color: #333;\n}\n\n.mat-header-row {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n}\n\n.col-sm-9 {\n  color: #333333;\n}\n\n.logo {\n  width: 90px;\n}\n\n.mat-header-row {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n}\n\n.mat-container.mat-elevation-z8 {\n  overflow-x: auto;\n}\n\n.mat-container .mat-table.mat-table {\n  min-width: 450px;\n}\n\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvYWdlbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLDRDQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FnZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLW1hcmdpbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYntcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1pdGVtPmF7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLXJvd3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG59XHJcblxyXG4uY29sLXNtLTl7XHJcbiAgY29sb3I6IHJnYig1MSw1MSw1MSk7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gIHdpZHRoOiA5MHB4O1xyXG59XHJcblxyXG5cclxuLm1hdC1oZWFkZXItcm93e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbn1cclxuXHJcbi5tYXQtY29udGFpbmVyLm1hdC1lbGV2YXRpb24tejgge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLm1hdC1jb250YWluZXIgLm1hdC10YWJsZS5tYXQtdGFibGUge1xyXG4gIG1pbi13aWR0aDogNDUwcHg7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "IgTN":
/*!**************************************************************************!*\
  !*** ./src/app/_components/forgotpassword/forgotpassword.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  background-color: #ffffff;\n  border: none;\n  margin-top: 4rem;\n}\n.header-bg img {\n  height: 100px;\n}\n.card {\n  box-shadow: 0 50px 100px 0 rgba(0, 0, 0, 0.1);\n  background-color: #ffffff;\n}\n.card-body > form {\n  margin: 0 2rem;\n  background-color: #ffffff;\n}\n.nav-line:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkFIZ0I7RUFJaEIsWUFBQTtFQUNBLGdCQUFBO0FBRkY7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtBO0VBQ0UsNkNBQUE7RUFDQSx5QkFiZ0I7QUFXbEI7QUFLQTtFQUNFLGNBQUE7RUFDQSx5QkFsQmdCO0FBZ0JsQjtBQUtBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuLmhlYWRlci1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmR7XHJcbiAgYm94LXNoYWRvdzogMCA1MHB4IDEwMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHk+Zm9ybXtcclxuICBtYXJnaW46IDAgMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4ubmF2LWxpbmU6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Kb5K":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/projects/projectdialog/projectdialog.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<h1 mat-dialog-title>\r\n  {{data.plot.plotName}}\r\n</h1>\r\n<h5>Plot No: {{this.subProject.name}} - {{this.subProject.category1}} sqyards - {{this.status}} </h5>\r\n<div mat-dialog-content>\r\n  <form [formGroup]=\"subplotForm\"  (submit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <mat-label>Customer Name</mat-label>\r\n      <input class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.customerName.errors }\" matInput formControlName=\"customerName\">\r\n      <div *ngIf=\"submitted && f.customerName.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.customerName.errors.required\">Customer Name is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <mat-label>Customer Phone No:</mat-label>\r\n      <input class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" matInput formControlName=\"phone\" >\r\n      <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.phone.errors.required\">Phone Number is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <mat-label>Address</mat-label>\r\n      <input class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" matInput formControlName=\"address\">\r\n      <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.address.errors.required\">Address is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <mat-label>Price</mat-label>\r\n      <input class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.price.errors }\" matInput formControlName=\"price\">\r\n      <div *ngIf=\"submitted && f.price.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.price.errors.required\">Address is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <mat-label>Date:</mat-label>\r\n      <input class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.updateDate.errors }\" type=\"date\" matInput formControlName=\"updateDate\">\r\n      <div *ngIf=\"submitted && f.updateDate.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.updateDate.errors.required\">Date is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <mat-label>Agent</mat-label>\r\n      <select class=\"custom-select\" (change)=\"changeAgent($event)\" formControlName=\"agent\">\r\n        <option value=\"\" disabled>Select an Agent</option>\r\n        <option *ngFor=\"let agent of agents\" [ngValue]=\"agent.id\">{{agent.firstName}} {{agent.lastName}} - {{agent.accountCode}}</option>\r\n     </select>\r\n     <div *ngIf=\"submitted && f.agent.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.agent.errors.required\">Agent is required</div>\r\n    </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button class=\"ml-auto\" mat-button (click)=\"onCloseDialog()\" cdkFocusInitial>{{buttonTxt}}</button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "L6Lk":
/*!********************************************!*\
  !*** ./src/app/_helpers/appinitializer.ts ***!
  \********************************************/
/*! exports provided: appInitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitializer", function() { return appInitializer; });
// tslint:disable-next-line: typedef
function appInitializer(authenticationService) {
    return () => new Promise(resolve => {
        authenticationService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}


/***/ }),

/***/ "LqRr":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/agents/admins/admins.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-agents [role]=\"'Admin'\"></app-agents>\r\n");

/***/ }),

/***/ "Nl4l":
/*!***************************************************************!*\
  !*** ./src/app/_components/agents/admins/admins.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsComponent", function() { return AdminsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admins_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admins.component.html */ "LqRr");
/* harmony import */ var _admins_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admins.component.scss */ "pqK6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdminsComponent = class AdminsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminsComponent.ctorParameters = () => [];
AdminsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admins',
        template: _raw_loader_admins_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admins_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminsComponent);



/***/ }),

/***/ "NtSj":
/*!**********************************************************************!*\
  !*** ./src/app/_components/registerview/registerview.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3JlZ2lzdGVydmlldy9yZWdpc3RlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Pnet":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/home/home.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-2\">\r\n  <h2>\r\n   Welcome {{user.lastName}} {{user.firstName}}!\r\n  </h2>\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\"><a href=\"#\">Dashboard</a></li>\r\n    </ol>\r\n  </nav>\r\n</div>\r\n\r\n<!-- <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n  <mat-grid-tile (click)=\"navigate(0)\">\r\n    <a>\r\n      <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-building\" fill=\"currentColor\"\r\n      xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path fill-rule=\"evenodd\"\r\n        d=\"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z\" />\r\n      <path\r\n        d=\"M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z\" />\r\n    </svg>\r\n    Projects\r\n    </a>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile (click)=\"navigate(1)\">\r\n    <a >\r\n      <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-people-fill\" fill=\"currentColor\"\r\n      xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path fill-rule=\"evenodd\"\r\n        d=\"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z\" />\r\n    </svg>\r\n    Agents\r\n    </a>\r\n\r\n  </mat-grid-tile>\r\n</mat-grid-list> -->\r\n\r\n<div class=\"card-deck\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"folder\">\r\n        <mat-icon>folder_open</mat-icon>\r\n      </div>\r\n      <div class=\"card-text\">\r\n        <h3>{{dashboard?.projectCount}}</h3>\r\n      </div>\r\n      <div class=\"card-text text-muted\">\r\n        <h5>Projects</h5>\r\n      </div>\r\n      <mat-progress-bar class=\"example-margin-1\" [color]=\"'accent'\" [mode]=\"'determinate'\"\r\n        [value]=\"dashboard?.projectCount\"></mat-progress-bar>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"group\">\r\n        <mat-icon>group</mat-icon>\r\n      </div>\r\n      <div class=\"card-text\">\r\n        <h3>{{dashboard?.agentCount}}</h3>\r\n      </div>\r\n      <div class=\"card-text text-muted\">\r\n        <h5>Agents</h5>\r\n      </div>\r\n      <mat-progress-bar class=\"example-margin\" [color]=\"'primary'\" [mode]=\"'determinate'\"\r\n        [value]=\"dashboard?.agentCount\"></mat-progress-bar>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "QQdt":
/*!*********************************************************************!*\
  !*** ./src/app/_components/agents/addadmin/addadmin.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FnZW50cy9hZGRhZG1pbi9hZGRhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'samooha-app';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TKiz":
/*!*****************************************************************************!*\
  !*** ./src/app/_components/projects/projectmodal/projectmodal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProjectmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectmodalComponent", function() { return ProjectmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projectmodal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projectmodal.component.html */ "Vuun");
/* harmony import */ var _projectmodal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectmodal.component.scss */ "FkWV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/authorize/authorization.service */ "3yzC");
/* harmony import */ var angular_azure_blob_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-azure-blob-service */ "c/d7");
/* harmony import */ var src_app_services_projects_projectservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/projects/projectservice.service */ "+ezy");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");












let ProjectmodalComponent = class ProjectmodalComponent {
    constructor(formBuilder, authorizeService, projectService, sanitizer, http, blob, accountService) {
        this.formBuilder = formBuilder;
        this.authorizeService = authorizeService;
        this.projectService = projectService;
        this.sanitizer = sanitizer;
        this.http = http;
        this.blob = blob;
        this.accountService = accountService;
        this.loading = false;
        this.files = [];
        this.logofile = { filename: 'Upload Logo', filePath: '', progress: 0 };
        this.layoutfile = { filename: 'Upload Layout', filePath: '', progress: 0 };
    }
    ngOnInit() {
        this.randomDbGenerator();
        this.plotForm = this.formBuilder.group({
            plotId: [''],
            plotCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            logo: [''],
            filePath: [''],
            uploadedDate: [''],
            uploadedBy: [''],
            sections: [''],
        });
        this.authorizeService.user.subscribe(x => { this.user = x; });
    }
    // tslint:disable-next-line: typedef
    get f() { return this.plotForm.controls; }
    // tslint:disable-next-line: typedef
    plotSubmit() {
        this.submitted = true;
        if (this.plotForm.valid) {
            this.loading = true;
            const plot = {
                plotName: this.f.name.value,
                plotCode: this.f.plotCode.value,
                location: this.f.location.value,
                logoPath: this.logofile.filePath,
                filePath: this.layoutfile.filePath,
                uploadedDate: new Date(),
                uploadedBy: this.user.id,
                sections: null
            };
            this.http.get(this.layoutfile.filePath, { responseType: 'text' })
                .subscribe(logo => {
                this.svgHtml = logo;
                console.log(document.getElementById('output'));
                document.getElementById('output').innerHTML = this.svgHtml;
                const paths = document.querySelectorAll("[class*='plot']");
                const pathArray = [];
                const classList = [];
                paths.forEach(x => {
                    if (classList.indexOf(x.classList[0]) < 0) {
                        pathArray.push({ id: x.id, property: x.classList[0] });
                        classList.push(x.classList[0]);
                    }
                });
                plot.sections = [];
                pathArray.forEach(a => {
                    const splitText = a.property.split('-');
                    const section = {
                        location: a.property,
                        name: splitText[1],
                        category1: splitText[2],
                        category2: splitText[3],
                        category3: splitText[4],
                        currentStatus: 0,
                        startDate: new Date(),
                        updateDate: new Date(),
                        updatedBy: this.user.id
                    };
                    plot.sections.push(section);
                });
                this.projectService.saveProject(plot).subscribe(x => {
                    if (x > 0) {
                        this.success = true;
                        this.loading = false;
                    }
                }, (error) => { this.loading = false; this.error = error; });
            });
        }
    }
    // tslint:disable-next-line: typedef
    // onClose() {
    //   this.dialogRef.close();
    // }
    // tslint:disable-next-line: typedef
    upload(files, isLogo) {
        const Config = {
            sas: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].blobkey,
            storageAccount: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].bloburl,
            containerName: 'plots'
        };
        const file = files[0];
        if (file !== null) {
            const baseUrl = this.blob.generateBlobUrl(Config, file.name);
            this.config = {
                baseUrl,
                sasToken: Config.sas,
                file,
                complete: () => {
                    if (isLogo) {
                        this.logofile.filePath = baseUrl;
                        this.logofile.filename = file.name;
                    }
                    else {
                        this.layoutfile.filePath = baseUrl;
                        this.layoutfile.filename = file.name;
                    }
                },
                error: (err) => {
                    console.log('Error:', err);
                },
                progress: (percent) => {
                    if (isLogo) {
                        this.logofile.progress = percent;
                    }
                    else {
                        this.layoutfile.progress = percent;
                    }
                }
            };
            this.blob.upload(this.config);
        }
    }
    // tslint:disable-next-line: typedef
    randomCodeGenerator() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * 5));
        }
        return 'SM-' + result;
    }
    // tslint:disable-next-line: typedef
    randomDbGenerator() {
        this.accountService.getAgentcodes().subscribe(x => this.plotForm.get('plotCode').setValue(x.NewProject), (error) => this.error = error);
    }
};
ProjectmodalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_7__["AuthorizationService"] },
    { type: src_app_services_projects_projectservice_service__WEBPACK_IMPORTED_MODULE_9__["ProjectserviceService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: angular_azure_blob_service__WEBPACK_IMPORTED_MODULE_8__["BlobService"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_11__["AccountService"] }
];
ProjectmodalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: _raw_loader_projectmodal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projectmodal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectmodalComponent);



/***/ }),

/***/ "U1Gg":
/*!**********************************************************************!*\
  !*** ./src/app/_components/resetpassword/resetpassword.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resetpassword_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resetpassword.component.html */ "uyg+");
/* harmony import */ var _resetpassword_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetpassword.component.scss */ "YVy2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");







let ResetpasswordComponent = class ResetpasswordComponent {
    constructor(formBuilder, router, accountService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.accountService = accountService;
        this.submitted = false;
    }
    ngOnInit() {
        const token = this.router.snapshot.queryParams.token;
        console.log(token);
        this.resetpasswordForm = this.formBuilder.group({
            token: [token, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    // tslint:disable-next-line: typedef
    get f() { return this.resetpasswordForm.controls; }
    // tslint:disable-next-line: typedef
    passwordSubmit() {
        this.submitted = true;
        if (this.resetpasswordForm.valid) {
            this.accountService.resetPassword(this.resetpasswordForm.value)
                .subscribe(x => this.message = x, (error) => this.error = error);
        }
    }
};
ResetpasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }
];
ResetpasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resetpassword',
        template: _raw_loader_resetpassword_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resetpassword_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetpasswordComponent);



/***/ }),

/***/ "V86b":
/*!*******************************************************!*\
  !*** ./src/app/_components/registerview/MustMatch.ts ***!
  \*******************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// tslint:disable-next-line: typedef
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "Vuun":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/projects/projectmodal/projectmodal.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Add Projects</h1>\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Add Projects</li>\r\n  </ol>\r\n</nav>\r\n\r\n<div class=\"container mb-2\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>Add Projects</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form [formGroup]=\"plotForm\" (submit)=\"plotSubmit()\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"plotCode\" class=\"col-sm-2 col-form-label\">Project ID</label>\r\n              <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"plotCode\" name=\"plotCode\" id=\"plotCode\" placeholder=\"Project ID\">\r\n              </div>\r\n            </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"location\" class=\"col-sm-2 col-form-label\">Name</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" id=\"name\" placeholder=\"Name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"location\" class=\"col-sm-2 col-form-label\">Location</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"location\" name=\"location\" id=\"location\"\r\n                  placeholder=\"Location\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"logo\" class=\"col-sm-2 col-form-label\">Upload Logo</label>\r\n                <div class=\"col-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"custom-file\">\r\n                      <input type=\"file\" class=\"custom-file-input\" formControlName=\"logo\" (change)=\"upload($event.target.files, true)\" id=\"logo\" name=\"logo\">\r\n                      <label class=\"custom-file-label\" for=\"logo\">  <span class=\"spinner-border spinner-border-sm\" *ngIf=\"logofile.progress > 0 && logofile.progress < 100\" role=\"status\" aria-hidden=\"true\"></span> {{logofile.filename}}</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"uploadedDate\" class=\"col-sm-2 col-form-label\">Date</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"date\" class=\"form-control\" formControlName=\"uploadedDate\" name=\"uploadedDate\" id=\"uploadedDate\" placeholder=\"Date\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"plotFile\" class=\"col-sm-2 col-form-label\">Upload Layout</label>\r\n                <div class=\"col-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"custom-file\">\r\n                      <input type=\"file\" class=\"custom-file-input\" formControlName=\"filePath\" (change)=\"upload($event.target.files, false)\" id=\"filePath\" name=\"filePath\">\r\n                      <label class=\"custom-file-label\" for=\"filePath\">\r\n                        <span class=\"spinner-border spinner-border-sm\" *ngIf=\"layoutfile.progress > 0 && layoutfile.progress < 100\" role=\"status\" aria-hidden=\"true\"></span>{{layoutfile.filename}}</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex text-center justify-content-center\" role=\"group\" aria-label=\"\">\r\n                <button type=\"submit\" [disabled]=\"plotForm.invalid || submitted\" class=\"btn btn-primary\">\r\n                  <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                Submit\r\n                </button>\r\n              </div>\r\n          <div *ngIf=\"success\" class=\"alert alert-success mt-3 mb-0\">Project Added Successfully</div>\r\n          <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n          </form>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"output\" class=\"hidden\">\r\n</div>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "YVy2":
/*!************************************************************************!*\
  !*** ./src/app/_components/resetpassword/resetpassword.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _components_loginview_loginview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/loginview/loginview.component */ "Guqd");
/* harmony import */ var _components_registerview_registerview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/registerview/registerview.component */ "Zmdz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/home/home.component */ "2dux");
/* harmony import */ var _components_appnavigation_appnavigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/appnavigation/appnavigation.component */ "kD10");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var src_app_helpers_appinitializer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/_helpers/appinitializer */ "L6Lk");
/* harmony import */ var _services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_services/authorize/authorization.service */ "3yzC");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "nSnL");
/* harmony import */ var _helpers_jwtintercept_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_helpers/jwtintercept.interceptor */ "AO3X");
/* harmony import */ var _components_projects_projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_components/projects/projectlist/projectlist.component */ "FDse");
/* harmony import */ var _components_projects_projectdetail_projectdetail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_components/projects/projectdetail/projectdetail.component */ "hJ/Q");
/* harmony import */ var _components_verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_components/verifyemail/verifyemail.component */ "8fuK");
/* harmony import */ var _components_projects_projectmodal_projectmodal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_components/projects/projectmodal/projectmodal.component */ "TKiz");
/* harmony import */ var angular_azure_blob_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-azure-blob-service */ "c/d7");
/* harmony import */ var _components_agents_agents_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_components/agents/agents.component */ "xEYl");
/* harmony import */ var _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_components/login-layout/login-layout.component */ "4fFf");
/* harmony import */ var _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_components/main-layout/main-layout.component */ "jB2I");
/* harmony import */ var _components_projects_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_components/projects/projectdialog/projectdialog.component */ "ukqO");
/* harmony import */ var _components_agents_addagent_addagent_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_components/agents/addagent/addagent.component */ "4jBC");
/* harmony import */ var _components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_components/forgotpassword/forgotpassword.component */ "3InM");
/* harmony import */ var _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_components/resetpassword/resetpassword.component */ "U1Gg");
/* harmony import */ var _components_agents_profile_profile_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_components/agents/profile/profile.component */ "gI1N");
/* harmony import */ var _components_agents_addadmin_addadmin_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_components/agents/addadmin/addadmin.component */ "maQP");
/* harmony import */ var _components_agents_admins_admins_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_components/agents/admins/admins.component */ "Nl4l");







































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_loginview_loginview_component__WEBPACK_IMPORTED_MODULE_7__["LoginviewComponent"],
            _components_registerview_registerview_component__WEBPACK_IMPORTED_MODULE_8__["RegisterviewComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _components_appnavigation_appnavigation_component__WEBPACK_IMPORTED_MODULE_13__["AppnavigationComponent"],
            _components_projects_projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_24__["ProjectlistComponent"],
            _components_projects_projectdetail_projectdetail_component__WEBPACK_IMPORTED_MODULE_25__["ProjectdetailComponent"],
            _components_verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_26__["VerifyemailComponent"],
            _components_projects_projectmodal_projectmodal_component__WEBPACK_IMPORTED_MODULE_27__["ProjectmodalComponent"],
            _components_agents_agents_component__WEBPACK_IMPORTED_MODULE_29__["AgentsComponent"],
            _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_30__["LoginLayoutComponent"],
            _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_31__["MainLayoutComponent"],
            _components_projects_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_32__["ProjectdialogComponent"],
            _components_agents_addagent_addagent_component__WEBPACK_IMPORTED_MODULE_33__["AddagentComponent"],
            _components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_34__["ForgotpasswordComponent"],
            _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_35__["ResetpasswordComponent"],
            _components_agents_profile_profile_component__WEBPACK_IMPORTED_MODULE_36__["ProfileComponent"],
            _components_agents_addadmin_addadmin_component__WEBPACK_IMPORTED_MODULE_37__["AddadminComponent"],
            _components_agents_admins_admins_component__WEBPACK_IMPORTED_MODULE_38__["AdminsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            angular_azure_blob_service__WEBPACK_IMPORTED_MODULE_28__["BlobModule"].forRoot()
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: src_app_helpers_appinitializer__WEBPACK_IMPORTED_MODULE_20__["appInitializer"], multi: true, deps: [_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_21__["AuthorizationService"]] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helpers_jwtintercept_interceptor__WEBPACK_IMPORTED_MODULE_23__["JwtinterceptInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_22__["ErrorInterceptor"], multi: true },
        ],
        entryComponents: [_components_projects_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_32__["ProjectdialogComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "Zmdz":
/*!********************************************************************!*\
  !*** ./src/app/_components/registerview/registerview.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterviewComponent", function() { return RegisterviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registerview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registerview.component.html */ "wVTW");
/* harmony import */ var _registerview_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerview.component.scss */ "NtSj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _MustMatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MustMatch */ "V86b");









let RegisterviewComponent = class RegisterviewComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.loading = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]
        }, {
            validator: Object(_MustMatch__WEBPACK_IMPORTED_MODULE_8__["MustMatch"])('password', 'confirmPassword')
        });
    }
    // tslint:disable-next-line: typedef
    get f() { return this.registerForm.controls; }
    // tslint:disable-next-line: typedef
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe({
            next: () => {
                this.router.navigate(['../login'], { relativeTo: this.route });
            },
            error: error => {
                this.loading = false;
            }
        });
    }
};
RegisterviewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }
];
RegisterviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registerview',
        template: _raw_loader_registerview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registerview_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterviewComponent);



/***/ }),

/***/ "b34P":
/*!*****************************************************************************!*\
  !*** ./src/app/_components/projects/projectlist/projectlist.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.logo {\n  width: 90px;\n}\n\n.input-rounded {\n  background-color: rgba(0, 0, 0, 0.47);\n  border-color: rgba(0, 0, 0, 0.1);\n  border-radius: 50px;\n  color: #ffffff;\n  height: 40px;\n  padding: 10px 50px 10px 15px;\n}\n\n.input-rounded::placeholder {\n  color: #ffffff;\n}\n\n.input-group-text {\n  background-color: rgba(0, 0, 0, 0.47);\n  border-radius: 50px;\n  color: #ffffff;\n}\n\n.breadcrumb {\n  background: transparent;\n  color: #6c757d;\n  padding: 0;\n}\n\n.breadcrumb-item > a {\n  color: #333;\n}\n\n.mat-header-row {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n}\n\n.mat-container.mat-elevation-z8 {\n  overflow-x: auto;\n}\n\n.mat-container .mat-table.mat-table {\n  min-width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdGxpc3QvcHJvamVjdGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSw0Q0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0bGlzdC9wcm9qZWN0bGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1yb3VuZGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQ3JSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogMTBweCA1MHB4IDEwcHggMTVweDtcclxufVxyXG5cclxuLmlucHV0LXJvdW5kZWQ6OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0NyUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5icmVhZGNydW1ie1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iLWl0ZW0+YXtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuXHJcbi5tYXQtaGVhZGVyLXJvd3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG59XHJcblxyXG4ubWF0LWNvbnRhaW5lci5tYXQtZWxldmF0aW9uLXo4IHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5tYXQtY29udGFpbmVyIC5tYXQtdGFibGUubWF0LXRhYmxlIHtcclxuICBtaW4td2lkdGg6IDQ1MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "cKsP":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/agents/agents.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container m-2\">\r\n  <div class=\"p-2\">\r\n    <h2>\r\n      {{agentText}}\r\n    </h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n      <li class=\"breadcrumb-item active\">{{agentText}}</li>\r\n    </ol>\r\n  </div>\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"input-group mb-2\">\r\n            <input class=\"form-control input-rounded\" (keyup)=\"applyFilter($event)\" placeholder=\"Search\" #input>\r\n            <div class=\"input-group-append\">\r\n              <div class=\"input-group-text\">\r\n                <mat-icon>search</mat-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"mat-container mat-elevation-z8\">\r\n        <table mat-table #table [dataSource]=\"dataSource\" matSort>\r\n          <ng-container matColumnDef=\"sno\" sticky>\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> S.No. </th>\r\n            <td mat-cell *matCellDef=\"let i = index\">\r\n            {{this.paginator.pageIndex == 0 ? i + 1 : 1 + i + this.paginator.pageIndex * this.paginator.pageSize}}\r\n          </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"agentId\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Agent Id </th>\r\n            <td mat-cell *matCellDef=\"let row\"><a href (click)=\"click($event,row)\">{{row.accountCode}}</a>  </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Agent Name </th>\r\n            <td mat-cell *matCellDef=\"let row\"><a href (click)=\"click($event,row)\">{{row.firstName}}\r\n                {{row.lastName}}</a> </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"email\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"phone\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.phoneNumber}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"star\"  stickyEnd>\r\n            <th mat-header-cell *matHeaderCellDef></th>\r\n            <td mat-cell *matCellDef=\"let row\">\r\n              <mat-icon [hidden]=\"loginuser === 'Agent'\" color=\"primary\" (click)=\"clickDelete($event,row)\">delete_forever</mat-icon>\r\n            </td>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n      </div>\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n      <div *ngIf=\"deleteMessage\" class=\"alert alert-success mt-3 mb-0\">{{deleteMessage}}</div>\r\n      <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "cRtC":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/projects/projectdetail/projectdetail.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <img class=\"img img-fluid\" [src]=\"project?.filePath\"> -->\r\n<div class=\"m-2\">\r\n  <div class=\"p-2\">\r\n    <ul class=\"list-inline\">\r\n      <li class=\"list-inline-item\"><div class=\"d-flex\"><div class=\"status-0\"></div> <span>Total Plots: {{plotsCount?.total}}</span></div>\r\n      </li>\r\n      <li class=\"list-inline-item\"><div class=\"d-flex\"><div class=\"status-1\"></div> <span>Open: {{plotsCount?.open}}</span> </div>\r\n      </li>\r\n      <li class=\"list-inline-item\"><div class=\"d-flex\"><div class=\"status-2\"></div> <span>Sold: {{plotsCount?.sold}}</span> </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div id=\"container-img\">\r\n\r\n  </div>\r\n  <div *ngIf=\"uploadSuccess\" class=\"alert alert-success mt-3 mb-0\">Customer Details Updated Succesfully</div>\r\n  <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n</div>\r\n<div class=\"spinner\">\r\n  <mat-spinner *ngIf=\"showProgress\"></mat-spinner>\r\n</div>\r\n");

/***/ }),

/***/ "e4vx":
/*!*********************************************************************************!*\
  !*** ./src/app/_components/projects/projectdetail/projectdetail.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  top: 50%;\n  left: 50%;\n  margin-left: -50px;\n  margin-top: -50px;\n  background-size: 100%;\n}\n\n.svg-full {\n  width: 100% !important;\n  height: auto !important;\n  margin: auto;\n}\n\n#container-img {\n  display: flex;\n  margin: 1rem;\n  height: 100%;\n  border: 2px #ff8b8c solid;\n  cursor: zoom-in;\n}\n\n.w-grp {\n  max-width: 100px;\n}\n\n.status-0 {\n  width: 25px;\n  height: 25px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-color: #fffac7, #ff8b8c;\n  margin: 0 0.5rem;\n}\n\n.status-0 span {\n  color: #333;\n  font-weight: 600;\n}\n\n.status-1 {\n  width: 25px;\n  height: 25px;\n  background-color: #fffac7;\n  margin: 0 0.5rem;\n}\n\n.status-1 span {\n  color: #333;\n  font-weight: 600;\n}\n\n.status-2 {\n  width: 25px;\n  height: 25px;\n  background-color: #ff8b8c;\n  margin: 0 0.5rem;\n}\n\n.status-2 span {\n  color: #333;\n  font-weight: 600;\n}\n\n@media (max-width: 640px) {\n  .status-1, .status-1, .status-2 {\n    margin: 0;\n  }\n\n  #container-img {\n    margin: 0;\n  }\n}\n\n.sold {\n  background-color: #ff8b8c;\n  fill: #ff8b8c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdGRldGFpbC9wcm9qZWN0ZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUlBO0VBQ0U7SUFDRSxTQUFBO0VBREY7O0VBSUE7SUFDRSxTQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdGRldGFpbC9wcm9qZWN0ZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuXHJcbi5zdmctZnVsbCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNjb250YWluZXItaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAycHggI2ZmOGI4YyBzb2xpZDtcclxuICBjdXJzb3I6IHpvb20taW47XHJcbn1cclxuXHJcbi53LWdycCB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnN0YXR1cy0we1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWM3LCNmZjhiOGM7XHJcbiAgbWFyZ2luOjAgMC41cmVtO1xyXG4gIHNwYW57XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzLTEge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWM3O1xyXG4gIG1hcmdpbjowIDAuNXJlbTtcclxuICBzcGFue1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXR1cy0yIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGI4YztcclxuICBtYXJnaW46MCAwLjVyZW07XHJcbiAgc3BhbntcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbiRicmVha3BvaW50LXRhYmxldDogNjQwcHg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC10YWJsZXQpIHtcclxuICAuc3RhdHVzLTEsIC5zdGF0dXMtMSwgLnN0YXR1cy0ye1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhaW5lci1pbWd7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc29sZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjhjO1xyXG4gIGZpbGw6ICNmZjhiOGM7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "eW59":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/projects/projectlist/projectlist.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-2\">\r\n      <mat-card-title>Projects</mat-card-title>\r\n      <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n        <li class=\"breadcrumb-item active\">Projects</li>\r\n      </ol>\r\n</div>\r\n\r\n<div class=\"container m-2\">\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <!-- <button color=\"primary\" mat-raised-button class=\"mb-2\" (click)=\"openDialog()\">Add Project</button>\r\n      <mat-divider></mat-divider> -->\r\n      <!-- <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\" *ngFor=\"let project of projects$\">\r\n            <div class=\"card mb-3\" style=\"max-width: 540px;\">\r\n              <div class=\"row no-gutters\">\r\n                <div class=\"col-md-4\">\r\n                  <img [src]=\"project.logoPath\" width=\"100%\" height=\"150\">\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{project.plotName}}</h5>\r\n                    <p class=\"card-text\">{{project.location}}</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"input-group mb-2\">\r\n            <input class=\"form-control input-rounded\" (keyup)=\"applyFilter($event)\" placeholder=\"Search\" #input>\r\n            <div class=\"input-group-append\">\r\n              <div class=\"input-group-text\">\r\n                <mat-icon>search</mat-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"mat-container mat-elevation-z8\">\r\n        <table mat-table #table [dataSource]=\"dataSource\">\r\n          <ng-container matColumnDef=\"sno\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> S.No. </th>\r\n            <td mat-cell *matCellDef=\"let i = index\">\r\n            {{this.paginator.pageIndex == 0 ? i + 1 : 1 + i + this.paginator.pageIndex * this.paginator.pageSize}}\r\n            </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"projectid\">\r\n            <th mat-header-cell *matHeaderCellDef> Project Id </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.plotCode}} </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"logo\">\r\n            <th mat-header-cell *matHeaderCellDef> Logo </th>\r\n            <td mat-cell *matCellDef=\"let row\"> <img href (click)=\"click($event,row)\" class=\"img logo img-fluid\" [src]=\"row.logoPath\"></td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n            <td mat-cell *matCellDef=\"let row\"><a href (click)=\"click($event,row)\">{{row.plotName}} </a>  </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.uploadedDate | date: 'dd-MM-yyyy'}} </td>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n      </div>\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "gI1N":
/*!*****************************************************************!*\
  !*** ./src/app/_components/agents/profile/profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "8Aj/");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.scss */ "IaO/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");









let ProfileComponent = class ProfileComponent {
    constructor(route, accountService) {
        this.route = route;
        this.accountService = accountService;
        this.displayedColumns = ['sno', 'projectid', 'logo', 'name', 'plots'];
    }
    ngOnInit() {
        this.profileId = this.route.snapshot.paramMap.get('id');
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
        this.loadAgentById();
    }
    // tslint:disable-next-line: typedef
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    // tslint:disable-next-line: typedef
    loadAgentById() {
        this.accountService.getAgentById(this.profileId)
            .subscribe(x => {
            this.agent = x;
            if (x.subProjects !== null) {
                const projects = [];
                x.subProjects.forEach(element => {
                    projects.push(element);
                });
                this.dataSource.data = projects;
                console.log(projects);
            }
        }, (error) => this.error = error);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] }
];
ProfileComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }]
};
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



/***/ }),

/***/ "hJ/Q":
/*!*******************************************************************************!*\
  !*** ./src/app/_components/projects/projectdetail/projectdetail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdetailComponent", function() { return ProjectdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projectdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projectdetail.component.html */ "cRtC");
/* harmony import */ var _projectdetail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectdetail.component.scss */ "e4vx");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_projects_projectservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/projects/projectservice.service */ "+ezy");
/* harmony import */ var _projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../projectdialog/projectdialog.component */ "ukqO");











let ProjectdetailComponent = class ProjectdetailComponent {
    constructor(route, projects, sanitizer, http, dialog) {
        this.route = route;
        this.projects = projects;
        this.sanitizer = sanitizer;
        this.http = http;
        this.dialog = dialog;
        this.showProgress = true;
    }
    ngOnInit() {
        this.loadProject();
    }
    // tslint:disable-next-line: typedef
    loadProject() {
        const projectId = this.route.snapshot.paramMap.get('id');
        this.projects.getProjectById(projectId)
            .subscribe(x => {
            this.project = x;
            this.plotsCount = x.plotsCount;
            this.loadfile();
            this.showProgress = false;
        });
    }
    // tslint:disable-next-line: typedef
    ngAfterViewInit() {
    }
    // tslint:disable-next-line: typedef
    zoomed(transform) {
        const g = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('g');
        g.attr('transform', transform);
    }
    // tslint:disable-next-line: typedef
    // tslint:disable-next-line: typedef
    loadfile() {
        this.http.get(this.project.filePath, {
            responseType: 'text'
        })
            .subscribe(logo => {
            this.svgHtml = logo;
            document.getElementById('container-img').innerHTML = this.svgHtml;
            const svg = document.getElementById('container-img').querySelector('svg');
            const svgdoc = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('svg').attr('width', '100%')
                .attr('height', '100%')
                .call(d3__WEBPACK_IMPORTED_MODULE_3__["zoom"]()
                .on('zoom', ({ transform }) => this.zoomed(transform)));
            //console.log(svgdoc);
            svg.classList.add('w-100', 'h-auto');
            const paths = document.querySelectorAll('[class*=\'plot\']');
            const pathArray = [];
            paths.forEach(x => {
                const plotsection = this.project.sections.filter(a => a.name === x.classList[0].split('-')[1]);
                if ((plotsection === null || plotsection === void 0 ? void 0 : plotsection.length) > 0) {
                    const colrelement = document.getElementById(plotsection[0].location);
                    if (colrelement !== null && plotsection[0].currentStatus === 2) {
                        colrelement.style.fill = '#f8c6c8';
                    }
                }
                x.addEventListener('click', (event) => {
                    this.clickedOnPlot(event, x);
                    x.setAttribute('title', x.id);
                });
                pathArray.push({
                    id: x.id,
                    status: x.classList[0]
                });
            });
        });
    }
    // tslint:disable-next-line: typedef
    clickedOnPlot(evt, x) {
        const dialogRef = this.dialog.open(_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_10__["ProjectdialogComponent"], {
            width: '80%',
            data: { path: x, plot: this.project, evt }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== null && result !== undefined) {
                this.showProgress = true;
                this.projects.savePlotDetails(result)
                    .subscribe(y => {
                    if (y > 0) {
                        this.uploadSuccess = true;
                        this.loadProject();
                        this.showProgress = false;
                    }
                }, (error) => { this.showProgress = false; this.error = error; });
            }
        });
    }
};
ProjectdetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: src_app_services_projects_projectservice_service__WEBPACK_IMPORTED_MODULE_9__["ProjectserviceService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
ProjectdetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-projectdetail',
        template: _raw_loader_projectdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projectdetail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectdetailComponent);



/***/ }),

/***/ "hX9P":
/*!**********************************************************************!*\
  !*** ./src/app/_components/login-layout/login-layout.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2xvZ2luLWxheW91dC9sb2dpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");














let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"]
        ],
        exports: [
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "iE6w":
/*!*********************************************************************!*\
  !*** ./src/app/_components/agents/addagent/addagent.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FnZW50cy9hZGRhZ2VudC9hZGRhZ2VudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "id+P":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/loginview/loginview.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-4 offset-md-4 mt-5\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header text-center header-bg\" [ngClass]=\"{'mt-5': transaction === 'otp' }\">\r\n      <img class=\"img img-fluid mt-2\" src=\"assets/samooha-logo.png\" alt=\"Samooha\">\r\n      <div [ngSwitch]=\"isOtp\">\r\n        <div *ngSwitchCase=\"true\">\r\n          <h3>Login With OTP</h3>\r\n        </div>\r\n        <div *ngSwitchCase=\"false\">\r\n          <h3>Login</h3>\r\n          <h5>Access to our dashboard</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div [ngSwitch]=\"transaction\">\r\n        <div *ngSwitchCase=\"'login'\">\r\n          <form [formGroup]=\"loginForm\" (submit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" class=\"form-control is-valid\" formControlName=\"email\" name=\"email\" id=\"email\"\r\n                  aria-describedby=\"emailHelpId\" placeholder=\"Email\"\r\n                 class=\"form-control is-valid\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.email.errors.required\">Email Id is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control is-valid\" formControlName=\"password\" name=\"password\"\r\n                  id=\"password\" placeholder=\"Password\">\r\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex justify-content-between\">\r\n              <button [disabled]=\"loading\" class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">\r\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                Login\r\n              </button>\r\n              <!-- <button [disabled]=\"loading\" [routerLink]=\"['/register']\" class=\"btn btn-danger\">\r\n              Register\r\n            </button> -->\r\n            </div>\r\n            <div class=\"text-muted d-flex text-center flex-column m-2\">\r\n              <a class=\"nav-line\" (click)=\"transaction = 'otp'\">Login With OTP</a>\r\n              <a class=\"nav-line\" [routerLink]=\"['/forgotpassword']\">Forgot Password</a>\r\n            </div>\r\n            <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n          </form>\r\n        </div>\r\n        <div *ngSwitchCase=\"'otp'\">\r\n          <form (submit)=\"phoneSubmit()\">\r\n            <div class=\"form-group\">\r\n              <input type=\"tel\" class=\"form-control is-valid\" required [(ngModel)]=\"phone\" name=\"phonenum\" id=\"phone\"\r\n                aria-describedby=\"emailHelpId\" placeholder=\"Phone Number\" #phonenum=\"ngModel\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && phonenum.invalid }\">\r\n              <div *ngIf=\"submitted && phonenum.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"phonenum.errors.required\">Phone Number is Required</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center m-2\">\r\n              <button [disabled]=\"phonenum.invalid\" type=\"submit\" color=\"primary\" mat-raised-button>Next</button>\r\n            </div>\r\n            <!-- <div class=\"text-muted text-center mt-2 mb-2\">\r\n              <span>Remember your password? <a class=\"nav-line\" (click)=\"isOtp = false\">Login</a> </span>\r\n            </div> -->\r\n          </form>\r\n        </div>\r\n        <div *ngSwitchCase=\"'verify'\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              Please enter your passcode:\r\n            </div>\r\n            <div class=\"card-body otp-input\">\r\n              <input type=\"text\" required (keyup)=\"codeEntered($event)\" maxlength=\"1\" [(ngModel)]=\"otp.val1\" tabindex=\"10\" id=\"val1\" #val1=\"ngModel\">\r\n              <input type=\"text\" required (keyup)=\"codeEntered($event)\" maxlength=\"1\" [(ngModel)]=\"otp.val2\" tabindex=\"11\" id=\"val2\" #val2=\"ngModel\">\r\n              <input type=\"text\" required (keyup)=\"codeEntered($event)\" maxlength=\"1\" [(ngModel)]=\"otp.val3\" tabindex=\"12\" id=\"val3\" #val3=\"ngModel\">\r\n              <input type=\"text\" required (keyup)=\"codeEntered($event)\" maxlength=\"1\" [(ngModel)]=\"otp.val4\" tabindex=\"13\" id=\"val4\" #val4=\"ngModel\">\r\n              <input type=\"text\" required (keyup)=\"codeEntered($event)\" maxlength=\"1\" [(ngModel)]=\"otp.val5\" tabindex=\"14\" id=\"val5\" #val5=\"ngModel\">\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center m-2\">\r\n            <button [disabled]=\"val1.invalid || val2.invalid || val3.invalid || val4.invalid || val5.invalid\" (click)=\"verifyPhone()\" color=\"primary\" mat-raised-button>Verify</button>\r\n          </div>\r\n          <div *ngIf=\"otperror\" class=\"alert alert-danger mt-3 mb-0\">{{otperror}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "itNt":
/*!****************************************************************!*\
  !*** ./src/app/_components/loginview/loginview.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  background-color: #ffffff;\n  border: none;\n}\n.header-bg img {\n  height: 100px;\n}\n.card {\n  box-shadow: 0 50px 100px 0 rgba(0, 0, 0, 0.1);\n  background-color: #ffffff;\n}\n.card-body form {\n  margin: 0 2rem;\n}\n.nav-line:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.otp-input {\n  text-align: center;\n  display: flex;\n  justify-content: space-between;\n}\n.otp-input input {\n  max-width: 30px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvbG9naW52aWV3L2xvZ2ludmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHlCQUhnQjtFQUloQixZQUFBO0FBRkY7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtBO0VBQ0UsNkNBQUE7RUFDQSx5QkFaZ0I7QUFVbEI7QUFLQTtFQUNFLGNBQUE7QUFGRjtBQUtBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FBRkY7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBSEY7QUFJRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvbG9naW52aWV3L2xvZ2ludmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuLmhlYWRlci1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgNTBweCAxMDBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IGZvcm17XHJcbiAgbWFyZ2luOiAwIDJyZW07XHJcbn1cclxuXHJcbi5uYXYtbGluZTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4ub3RwLWlucHV0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBpbnB1dHtcclxuICAgIG1heC13aWR0aDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "jB2I":
/*!******************************************************************!*\
  !*** ./src/app/_components/main-layout/main-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main-layout.component.html */ "vmfN");
/* harmony import */ var _main_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-layout.component.scss */ "oFF0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MainLayoutComponent = class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainLayoutComponent.ctorParameters = () => [];
MainLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main-layout',
        template: _raw_loader_main_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MainLayoutComponent);



/***/ }),

/***/ "jPUd":
/*!*********************************************************************************!*\
  !*** ./src/app/_components/projects/projectdialog/projectdialog.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RkaWFsb2cvcHJvamVjdGRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "kD10":
/*!**********************************************************************!*\
  !*** ./src/app/_components/appnavigation/appnavigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppnavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppnavigationComponent", function() { return AppnavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_appnavigation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./appnavigation.component.html */ "qkOj");
/* harmony import */ var _appnavigation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appnavigation.component.scss */ "ASJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/authorize/authorization.service */ "3yzC");







let AppnavigationComponent = class AppnavigationComponent {
    constructor(breakpointObserver, authService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.projects = [
            { id: 0, name: 'Add Projects', active: true, icon: 'description',
                path: '/dashboard/projects/create', hidden: false },
            { id: 1, name: 'View Projects', active: false, icon: 'person_add', path: '/dashboard/projects', hidden: false },
        ];
        this.agents = [
            { id: 0, name: 'Add Agents', active: true, icon: 'description', path: '/dashboard/agents/create', hidden: false },
            { id: 1, name: 'View Agents', active: false, icon: 'person_add', path: '/dashboard/agents', hidden: false },
        ];
        this.admins = [
            { id: 0, name: 'Add Admin', active: false, icon: 'person_add', path: '/dashboard/admins/create', hidden: false },
            { id: 1, name: 'View Admins', active: false, icon: 'description', path: '/dashboard/admins', hidden: false }
        ];
        this.projectcollapsed = false;
        this.agentcollapsed = false;
        this.admincollapsed = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
    }
    ngOnInit() {
        this.user = this.authService.userValue;
        if (this.user.role === 'Agent') {
            this.projects[0].hidden = true;
            this.agents[0].hidden = true;
        }
    }
    // tslint:disable-next-line: typedef
    setActive(nav) {
        //this.navs.forEach(x => x.active = false);
        nav.active = true;
    }
    // tslint:disable-next-line: typedef
    logout() {
        this.authService.logout();
    }
    // tslint:disable-next-line: typedef
    clickSubheader(type) {
        if (type === 'agent') {
            this.agentcollapsed = !this.agentcollapsed;
            if (this.agentcollapsed === true) {
                this.projectcollapsed = false;
                this.admincollapsed = false;
            }
        }
        else if (type === 'admin') {
            this.admincollapsed = !this.admincollapsed;
            if (this.admincollapsed === true) {
                this.agentcollapsed = false;
                this.projectcollapsed = false;
            }
        }
        else {
            this.projectcollapsed = !this.projectcollapsed;
            if (this.projectcollapsed === true) {
                this.agentcollapsed = false;
                this.admincollapsed = false;
            }
        }
    }
};
AppnavigationComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] },
    { type: src_app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizationService"] }
];
AppnavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-appnavigation',
        template: _raw_loader_appnavigation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_appnavigation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppnavigationComponent);



/***/ }),

/***/ "mQ78":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/login-layout/login-layout.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "maQP":
/*!*******************************************************************!*\
  !*** ./src/app/_components/agents/addadmin/addadmin.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddadminComponent", function() { return AddadminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addadmin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addadmin.component.html */ "HTsV");
/* harmony import */ var _addadmin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addadmin.component.scss */ "QQdt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddadminComponent = class AddadminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddadminComponent.ctorParameters = () => [];
AddadminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addadmin',
        template: _raw_loader_addadmin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addadmin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddadminComponent);



/***/ }),

/***/ "nSnL":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/_services/authorize/authorization.service */ "3yzC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authorization) {
        this.authorization = authorization;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            if ([401, 403].includes(err.status) && this.authorization.userValue) {
                this.authorization.logout();
            }
            const error = (err && err.error && err.error.message) || err.statusText;
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "oFF0":
/*!********************************************************************!*\
  !*** ./src/app/_components/main-layout/main-layout.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "p3Fh":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/_services/authorize/authorization.service */ "3yzC");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    // tslint:disable-next-line: typedef
    canActivate(next, state) {
        const user = this.authenticationService.userValue;
        console.log(user);
        if (user) {
            return true;
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "pIWj":
/*!********************************************************************!*\
  !*** ./src/app/_components/verifyemail/verifyemail.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3ZlcmlmeWVtYWlsL3ZlcmlmeWVtYWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "pqK6":
/*!*****************************************************************!*\
  !*** ./src/app/_components/agents/admins/admins.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FnZW50cy9hZG1pbnMvYWRtaW5zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "qkOj":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/appnavigation/appnavigation.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\" *ngIf=\"user\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\">\r\n    <mat-toolbar class=\"bg-white\">\r\n      <img class=\"img img-fluid\" src=\"assets/samooha-logo.png\">\r\n    </mat-toolbar>\r\n    <!-- <mat-nav-list>\r\n      <a mat-list-item href=\"#\" [ngClass]=\"nav.active ? 'nav-active': 'nav-inactive'\" (click)=\"setActive(nav)\" *ngFor=\"let nav of navs\">\r\n        <mat-icon>{{nav.icon}}</mat-icon> {{nav.name}}\r\n      </a>\r\n    </mat-nav-list> -->\r\n    <mat-list>\r\n      <mat-list-item class=\"nav-active\" [routerLink]=\"['/dashboard']\">\r\n        <mat-icon>home</mat-icon> <span class=\"p-2\">Dashboard</span>\r\n      </mat-list-item>\r\n      <div mat-subheader (click)=\"clickSubheader('project')\">\r\n          <mat-icon>description</mat-icon><span class=\"p-2\">Projects</span>\r\n          <span [ngSwitch]=\"projectcollapsed\" class=\"ml-auto\">\r\n            <span  *ngSwitchCase=\"true\">\r\n              <mat-icon>expand_more</mat-icon>\r\n            </span>\r\n            <span *ngSwitchCase=\"false\">\r\n              <mat-icon>chevron_right</mat-icon>\r\n            </span>\r\n          </span>\r\n      </div>\r\n      <div *ngIf=\"projectcollapsed\">\r\n        <mat-list-item class=\"subheader\" [routerLink]=\"nav.path\" [hidden]=\"nav.hidden\"  *ngFor=\"let nav of projects\">\r\n          <div mat-line>{{nav.name}}</div>\r\n        </mat-list-item>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n      <div mat-subheader (click)=\"clickSubheader('agent')\">\r\n          <mat-icon>person_add</mat-icon> <span class=\"p-2\">Agents</span>\r\n          <span [ngSwitch]=\"agentcollapsed\" class=\"ml-auto\">\r\n            <span  *ngSwitchCase=\"true\">\r\n              <mat-icon>expand_more</mat-icon>\r\n            </span>\r\n            <span *ngSwitchCase=\"false\">\r\n              <mat-icon>chevron_right</mat-icon>\r\n            </span>\r\n          </span>\r\n      </div>\r\n      <div *ngIf=\"agentcollapsed\">\r\n        <mat-list-item class=\"subheader\" [routerLink]=\"nav.path\" [hidden]=\"nav.hidden\" *ngFor=\"let nav of agents\">\r\n          <div mat-line>{{nav.name}}</div>\r\n        </mat-list-item>\r\n      </div>\r\n      <div *ngIf=\"this.user.role === 'SuperAdmin'\">\r\n        <mat-divider></mat-divider>\r\n        <div mat-subheader (click)=\"clickSubheader('admin')\">\r\n          <mat-icon>person_add</mat-icon> <span class=\"p-2\">Admins</span>\r\n          <span [ngSwitch]=\"admincollapsed\" class=\"ml-auto\">\r\n            <span  *ngSwitchCase=\"true\">\r\n              <mat-icon>expand_more</mat-icon>\r\n            </span>\r\n            <span *ngSwitchCase=\"false\">\r\n              <mat-icon>chevron_right</mat-icon>\r\n            </span>\r\n          </span>\r\n      </div>\r\n      <div *ngIf=\"admincollapsed\">\r\n        <mat-list-item class=\"subheader\" [routerLink]=\"admin.path\" *ngFor=\"let admin of admins\">\r\n          <div mat-line>{{admin.name}}</div>\r\n        </mat-list-item>\r\n      </div>\r\n      </div>\r\n\r\n    </mat-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span><a mat-icon-button *ngIf=\"!isHandset$ | async\" (click)=\"drawer.toggle()\">\r\n          <mat-icon class=\"white-icon\">format_align_left</mat-icon>\r\n        </a></span>\r\n\r\n      <a class=\"ml-auto\" mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n        <mat-icon>account_circle</mat-icon>\r\n      </a>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <a mat-menu-item>\r\n          <mat-icon>account_circle</mat-icon>\r\n          <span>{{user.firstName}} {{user.lastName}}</span>\r\n        </a>\r\n        <a mat-menu-item (click)=\"logout()\">\r\n          <mat-icon>power_settings_new</mat-icon>\r\n          <span>Log Out</span>\r\n        </a>\r\n      </mat-menu>\r\n    </mat-toolbar>\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "ukqO":
/*!*******************************************************************************!*\
  !*** ./src/app/_components/projects/projectdialog/projectdialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdialogComponent", function() { return ProjectdialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projectdialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projectdialog.component.html */ "Kb5K");
/* harmony import */ var _projectdialog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectdialog.component.scss */ "jPUd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var src_app_services_projects_projectservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/projects/projectservice.service */ "+ezy");








let ProjectdialogComponent = class ProjectdialogComponent {
    constructor(dialogRef, data, projectservice, formBuilder, accountService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.projectservice = projectservice;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.submitted = false;
    }
    ngOnInit() {
        const nameclass = this.data.evt.target.classList[0].split('-')[1];
        this.subProject = this.data.plot.sections.filter(x => x.name === nameclass)[0];
        this.buttonTxt = this.subProject.agentId === null ? 'Save' : 'Update';
        this.status = this.subProject.currentStatus === 2 ? 'Sold' : this.subProject.currentStatus === 1 ? 'On Hold' : 'Open';
        this.accountService.getAll().subscribe(x => this.agents = x.filter(a => a.role === 'Agent'));
        this.subplotForm = this.formBuilder.group({
            customerName: [this.subProject.customerName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: [this.subProject.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]],
            address: [this.subProject.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            price: [this.subProject.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(9)]],
            updateDate: [this.subProject.purchaseDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            agent: [this.subProject.agentId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            plotSectionId: [this.subProject.plotSectionId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            currentStatus: [this.subProject.currentStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // tslint:disable-next-line: typedef
    onNoClick() {
        this.dialogRef.close();
    }
    // tslint:disable-next-line: typedef
    onCloseDialog() {
        this.onSubmit();
    }
    // tslint:disable-next-line: typedef
    get f() { return this.subplotForm.controls; }
    // tslint:disable-next-line: typedef
    onSubmit() {
        this.submitted = true;
        if (this.subplotForm.valid) {
            const plot = {
                address: this.f.address.value,
                agent: this.f.agent.value.split(':')[1].trim(),
                currentStatus: 2,
                customerName: this.f.customerName.value,
                phone: this.f.phone.value,
                plotSectionId: this.f.plotSectionId.value,
                price: this.f.price.value,
                updateDate: this.f.updateDate.value
            };
            this.dialogRef.close(plot);
        }
    }
    // tslint:disable-next-line: typedef
    changeAgent(event) {
        this.subplotForm.get('agent').setValue(event.target.value, {
            onlySelf: true
        });
    }
};
ProjectdialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_projects_projectservice_service__WEBPACK_IMPORTED_MODULE_7__["ProjectserviceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }
];
ProjectdialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_projectdialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projectdialog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectdialogComponent);



/***/ }),

/***/ "uyg+":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/resetpassword/resetpassword.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-4 offset-md-4 mt-5\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header text-center header-bg\">\r\n      <img class=\"img img-fluid mt-2\" src=\"assets/samooha-logo.png\" alt=\"Samooha\">\r\n      <h3>Reset Password</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"resetpasswordForm\" (submit)=\"passwordSubmit()\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control is-valid\" name=\"password\" formControlName=\"password\"\r\n            aria-describedby=\"emailHelpId\" placeholder=\"Password\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.password.invalid }\">\r\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Email Id is Required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" class=\"form-control is-valid\" name=\"confirmPassword\" formControlName=\"confirmPassword\"\r\n            aria-describedby=\"emailHelpId\" placeholder=\"Confirm Password\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.password.invalid }\">\r\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Email Id is Required</div>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Reset Password</button>\r\n      </form>\r\n      <div class=\"text-muted text-center mt-2 mb-2\">\r\n        <span>Remember your password? <a class=\"nav-line\" [routerLink]=\"['/login']\">Login</a> </span>\r\n      </div>\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <strong>primary</strong>\r\n      </div>\r\n      <div *ngIf=\"message\" class=\"alert alert-success mt-3 mb-0\">{{message}}</div>\r\n      <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/auth.guard */ "p3Fh");
/* harmony import */ var _components_agents_addadmin_addadmin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/agents/addadmin/addadmin.component */ "maQP");
/* harmony import */ var _components_agents_addagent_addagent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/agents/addagent/addagent.component */ "4jBC");
/* harmony import */ var _components_agents_admins_admins_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/agents/admins/admins.component */ "Nl4l");
/* harmony import */ var _components_agents_agents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/agents/agents.component */ "xEYl");
/* harmony import */ var _components_agents_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/agents/profile/profile.component */ "gI1N");
/* harmony import */ var _components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/forgotpassword/forgotpassword.component */ "3InM");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/home/home.component */ "2dux");
/* harmony import */ var _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/login-layout/login-layout.component */ "4fFf");
/* harmony import */ var _components_loginview_loginview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/loginview/loginview.component */ "Guqd");
/* harmony import */ var _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/main-layout/main-layout.component */ "jB2I");
/* harmony import */ var _components_projects_projectdetail_projectdetail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/projects/projectdetail/projectdetail.component */ "hJ/Q");
/* harmony import */ var _components_projects_projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_components/projects/projectlist/projectlist.component */ "FDse");
/* harmony import */ var _components_projects_projectmodal_projectmodal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_components/projects/projectmodal/projectmodal.component */ "TKiz");
/* harmony import */ var _components_registerview_registerview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_components/registerview/registerview.component */ "Zmdz");
/* harmony import */ var _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_components/resetpassword/resetpassword.component */ "U1Gg");
/* harmony import */ var _components_verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_components/verifyemail/verifyemail.component */ "8fuK");




















const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login', component: _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_11__["LoginLayoutComponent"],
        children: [
            { path: '', component: _components_loginview_loginview_component__WEBPACK_IMPORTED_MODULE_12__["LoginviewComponent"] }
        ]
    },
    { path: 'dashboard', component: _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_13__["MainLayoutComponent"],
        children: [
            { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], pathMatch: 'full' },
            { path: 'projects', component: _components_projects_projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_15__["ProjectlistComponent"], canActivate: [src_app_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'projects/create', component: _components_projects_projectmodal_projectmodal_component__WEBPACK_IMPORTED_MODULE_16__["ProjectmodalComponent"], canActivate: [src_app_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'agents', component: _components_agents_agents_component__WEBPACK_IMPORTED_MODULE_7__["AgentsComponent"], canActivate: [src_app_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'agents/create', component: _components_agents_addagent_addagent_component__WEBPACK_IMPORTED_MODULE_5__["AddagentComponent"], canActivate: [src_app_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'agents/profile/:id', component: _components_agents_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [src_app_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'projects/:id', component: _components_projects_projectdetail_projectdetail_component__WEBPACK_IMPORTED_MODULE_14__["ProjectdetailComponent"] },
            { path: 'admins', component: _components_agents_admins_admins_component__WEBPACK_IMPORTED_MODULE_6__["AdminsComponent"], canActivate: [src_app_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'admins/create', component: _components_agents_addadmin_addadmin_component__WEBPACK_IMPORTED_MODULE_4__["AddadminComponent"], canActivate: [src_app_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
        ]
    },
    { path: 'register', component: _components_registerview_registerview_component__WEBPACK_IMPORTED_MODULE_17__["RegisterviewComponent"] },
    { path: 'accounts/verify-email', component: _components_verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_19__["VerifyemailComponent"] },
    { path: 'forgotpassword', component: _components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_9__["ForgotpasswordComponent"] },
    { path: 'account/reset-password', component: _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_18__["ResetpasswordComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vhox":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/forgotpassword/forgotpassword.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-4 offset-md-4 mt-5\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header text-center header-bg\">\r\n      <img class=\"img img-fluid mt-2\" src=\"assets/samooha-logo.png\" alt=\"Samooha\">\r\n      <h3>Forgot Password?</h3>\r\n      <h5 class=\"text-muted\">Enter your email to get a password reset link</h5>\r\n    </div>\r\n  <div class=\"card-body\">\r\n    <form (submit)=\"emailSubmit()\">\r\n      <div class=\"form-group\">\r\n        <input type=\"tel\" class=\"form-control is-valid\" [(ngModel)]=\"email\" name=\"emailid\"\r\n          aria-describedby=\"emailHelpId\" placeholder=\"Email\" #emailid=\"ngModel\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && emailid.invalid }\">\r\n        <div *ngIf=\"submitted && emailid.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"emailid.errors.required\">Email Id is Required</div>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Reset Password</button>\r\n    </form>\r\n    <div class=\"text-muted text-center mt-2 mb-2\">\r\n      <span>Remember your password? <a class=\"nav-line\" [routerLink]=\"['/login']\">Login</a>  </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "vmfN":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/main-layout/main-layout.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-appnavigation></app-appnavigation>\r\n");

/***/ }),

/***/ "vx6z":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/verifyemail/verifyemail.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"card-header\">Verify Email</h3>\r\n<div class=\"card-body\">\r\n    <div *ngIf=\"emailStatus == EmailStatus.Verifying\">\r\n        Verifying...\r\n    </div>\r\n    <div *ngIf=\"emailStatus == EmailStatus.Failed\">\r\n        Verification failed, you can also verify your account using the <a routerLink=\"forgot-password\">forgot password</a> page.\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "wVTW":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/registerview/registerview.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 offset-md-3 mt-5\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header text-center header-bg\">\r\n      <img class=\"img img-thumbnail mt-4\" src=\"assets/samooha-logo.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n                <label>Title</label>\r\n                <select formControlName=\"title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\r\n                    <option value=\"\"></option>\r\n                    <option value=\"Mr\">Mr</option>\r\n                    <option value=\"Mrs\">Mrs</option>\r\n                    <option value=\"Miss\">Miss</option>\r\n                    <option value=\"Ms\">Ms</option>\r\n                </select>\r\n                <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.title.errors.required\">Title is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-5\">\r\n                <label>First Name</label>\r\n                <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n                <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-5\">\r\n                <label>Last Name</label>\r\n                <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n                <label>Password</label>\r\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n                <label>Confirm Password</label>\r\n                <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n                    <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group form-check\">\r\n            <input type=\"checkbox\" formControlName=\"acceptTerms\" id=\"acceptTerms\" class=\"form-check-input\" [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\" />\r\n            <label for=\"acceptTerms\" class=\"form-check-label\">Accept Terms & Conditions</label>\r\n            <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"invalid-feedback\">Accept Ts & Cs is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                Register\r\n            </button>\r\n            <a [routerLink]=\"['/login']\" href=\"\" class=\"btn btn-link\">Cancel</a>\r\n        </div>\r\n    </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "xEYl":
/*!********************************************************!*\
  !*** ./src/app/_components/agents/agents.component.ts ***!
  \********************************************************/
/*! exports provided: AgentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsComponent", function() { return AgentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agents_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agents.component.html */ "cKsP");
/* harmony import */ var _agents_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agents.component.scss */ "D4GT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var src_app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/authorize/authorization.service */ "3yzC");










let AgentsComponent = class AgentsComponent {
    constructor(accountService, auth, router) {
        this.accountService = accountService;
        this.auth = auth;
        this.router = router;
        this.displayedColumns = ['sno', 'agentId', 'name', 'email', 'phone', 'star'];
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
        this.loadAgents();
    }
    // tslint:disable-next-line: typedef
    loadAgents() {
        this.loginuser = this.auth.userValue.role;
        console.log(this.loginuser);
        this.roleType = this.role || 'Agent';
        this.agentText = this.roleType === 'Agent' ? 'Agents' : 'Admins';
        this.accountService.getAll().subscribe(x => {
            this.dataSource.data = x.filter(a => a.role === this.roleType);
            this.deleteMessage = null;
            this.error = null;
        });
    }
    // tslint:disable-next-line: typedef
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    // tslint:disable-next-line: typedef
    click(eve, row) {
        eve.preventDefault();
        this.router.navigate(['/dashboard/agents/profile', row.id]);
    }
    // tslint:disable-next-line: typedef
    clickDelete($event, row) {
        $event.preventDefault();
        this.accountService.deleteAgentById(row.id)
            .subscribe(x => { this.deleteMessage = x.message; this.loadAgents(); }, (error) => this.error = error);
    }
    // tslint:disable-next-line: typedef
    applyFilter(eve) {
        const filterValue = eve.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
AgentsComponent.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] },
    { type: src_app_services_authorize_authorization_service__WEBPACK_IMPORTED_MODULE_9__["AuthorizationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AgentsComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AgentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agents',
        template: _raw_loader_agents_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agents_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgentsComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map