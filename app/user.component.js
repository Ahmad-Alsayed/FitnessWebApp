System.register(['angular2/core', './secret.service', './navigation.service', './login.service', './httprequest.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, secret_service_1, navigation_service_1, login_service_1, httprequest_service_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (secret_service_1_1) {
                secret_service_1 = secret_service_1_1;
            },
            function (navigation_service_1_1) {
                navigation_service_1 = navigation_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (httprequest_service_1_1) {
                httprequest_service_1 = httprequest_service_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(secretService, navigator, loginService, httpRequestService) {
                    this.secretService = secretService;
                    this.navigator = navigator;
                    this.loginService = loginService;
                    this.httpRequestService = httpRequestService;
                    this.username = sessionStorage.getItem('username');
                }
                UserComponent.prototype.ngOnInit = function () {
                    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
                    //Add 'implements OnInit' to the class.
                    console.log("in the user interface");
                    console.log(sessionStorage.getItem('token'));
                    if (sessionStorage.getItem('token') === null) {
                        this.navigator.loginScreen();
                    }
                };
                UserComponent.prototype.onLogout = function () {
                    sessionStorage.removeItem('token');
                    this.navigator.loginScreen();
                };
                UserComponent.prototype.onDisplayAllRuns = function () {
                    this.navigator.tableView();
                };
                UserComponent.prototype.onCreateNewRun = function () {
                    this.navigator.createNewRun();
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user',
                        templateUrl: 'app/user.component.html',
                        styleUrls: ['app/user.component.css']
                    }), 
                    __metadata('design:paramtypes', [secret_service_1.SecretService, navigation_service_1.NavigationService, login_service_1.LoginService, httprequest_service_1.HttprequestService])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map