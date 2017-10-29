System.register(['angular2/core', 'angular2/http', './login.service', './secret.service', './navigation.service', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, login_service_1, secret_service_1, navigation_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (secret_service_1_1) {
                secret_service_1 = secret_service_1_1;
            },
            function (navigation_service_1_1) {
                navigation_service_1 = navigation_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(http, loginService, secretService, navigator) {
                    this.http = http;
                    this.loginService = loginService;
                    this.secretService = secretService;
                    this.navigator = navigator;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
                    //Add 'implements OnInit' to the class.
                    console.log("in the login screen");
                    console.log(sessionStorage.getItem('token'));
                    if (sessionStorage.getItem('token') !== null) {
                        this.navigator.homeScreen();
                    }
                };
                LoginComponent.prototype.onSubmit = function (loginInfo) {
                    var _this = this;
                    this.loginService.login(loginInfo).subscribe(function (response) {
                        _this.token = response;
                        console.log("testttt");
                        _this.secretService.saveToken(response);
                        sessionStorage.setItem('token', response);
                        sessionStorage.setItem('username', loginInfo.username);
                        sessionStorage.setItem('password', loginInfo.password);
                        _this.navigator.homeScreen();
                        console.log(_this.secretService.getToken());
                    });
                    console.log("hello");
                    //console.log("secret service");
                    //console.log(this.secretService.getToken());
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/login.component.html',
                        styleUrls: ['app/login.component.css']
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, login_service_1.LoginService, secret_service_1.SecretService, navigation_service_1.NavigationService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map