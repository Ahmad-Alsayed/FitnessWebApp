System.register(['angular2/core', './httprequest.service', './navigation.service'], function(exports_1, context_1) {
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
    var core_1, httprequest_service_1, navigation_service_1;
    var NewrunComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httprequest_service_1_1) {
                httprequest_service_1 = httprequest_service_1_1;
            },
            function (navigation_service_1_1) {
                navigation_service_1 = navigation_service_1_1;
            }],
        execute: function() {
            NewrunComponent = (function () {
                function NewrunComponent(httpRequestService, navigator) {
                    this.httpRequestService = httpRequestService;
                    this.navigator = navigator;
                }
                NewrunComponent.prototype.ngOnInit = function () {
                };
                NewrunComponent.prototype.onSubmit = function (runModel) {
                    var _this = this;
                    console.log(runModel.distance);
                    console.log(runModel.duration);
                    console.log(runModel.date);
                    runModel.user_id = 1;
                    this.httpRequestService.createNewRun(runModel).subscribe(function (response) {
                        _this.navigator.tableView();
                    });
                };
                NewrunComponent = __decorate([
                    core_1.Component({
                        selector: 'app-newrun',
                        templateUrl: 'app/newrun.component.html',
                        styleUrls: ['app/newrun.component.css']
                    }), 
                    __metadata('design:paramtypes', [httprequest_service_1.HttprequestService, navigation_service_1.NavigationService])
                ], NewrunComponent);
                return NewrunComponent;
            }());
            exports_1("NewrunComponent", NewrunComponent);
        }
    }
});
//# sourceMappingURL=newrun.component.js.map