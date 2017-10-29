System.register(['angular2/core', 'angular2/http', './navigation.service', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, navigation_service_1;
    var HttprequestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (navigation_service_1_1) {
                navigation_service_1 = navigation_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            HttprequestService = (function () {
                function HttprequestService(http, navigator) {
                    this.http = http;
                    this.navigator = navigator;
                }
                HttprequestService.prototype.getAllRuns = function (userid) {
                    var username = sessionStorage.getItem('username');
                    var password = sessionStorage.getItem('password');
                    var headers = new http_1.Headers();
                    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
                    //headers.append("Access-Control-Allow-Origin","*");
                    headers.append("Content-Type", "plain/text");
                    //application/x-www-form-urlencoded
                    var url = "http://127.0.0.1:8080/api/test/FindAllRuns/" + userid;
                    return this.http.get(url, { headers: headers }).map(function (response) {
                        console.log(response.json());
                        return response.json();
                    });
                };
                HttprequestService.prototype.createNewRun = function (runModel) {
                    var url = "http://127.0.0.1:8080/api/test/CreateRun";
                    var username = sessionStorage.getItem('username');
                    var password = sessionStorage.getItem('password');
                    var headers = new http_1.Headers();
                    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
                    headers.append("Content-Type", "application/json");
                    return this.http.post(url, JSON.stringify(runModel), { headers: headers })
                        .map(function (response) { });
                };
                HttprequestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, navigation_service_1.NavigationService])
                ], HttprequestService);
                return HttprequestService;
            }());
            exports_1("HttprequestService", HttprequestService);
        }
    }
});
//# sourceMappingURL=httprequest.service.js.map