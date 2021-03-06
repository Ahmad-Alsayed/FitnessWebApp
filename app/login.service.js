System.register(['angular2/core', 'angular2/http', './secret.service'], function(exports_1, context_1) {
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
    var core_1, http_1, secret_service_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (secret_service_1_1) {
                secret_service_1 = secret_service_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(http, secretService) {
                    this.http = http;
                    this.secretService = secretService;
                }
                LoginService.prototype.login = function (loginInfo) {
                    console.log(loginInfo);
                    var username = loginInfo.username;
                    var password = loginInfo.password;
                    var headers = new http_1.Headers();
                    var url = 'http://127.0.0.1:8080/api/test/GetAuthorizationToken';
                    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
                    //headers.append("Access-Control-Allow-Origin","*");
                    headers.append("Content-Type", "plain/text");
                    //application/x-www-form-urlencoded
                    //return this.http.post(url, data, {headers: headers})
                    return this.http.get(url, { headers: headers }).map(function (response) {
                        console.log("get method");
                        return response.json();
                    });
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, secret_service_1.SecretService])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map