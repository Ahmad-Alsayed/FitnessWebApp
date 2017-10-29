System.register(['angular2/core', './httprequest.service'], function(exports_1, context_1) {
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
    var core_1, httprequest_service_1;
    var TableviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httprequest_service_1_1) {
                httprequest_service_1 = httprequest_service_1_1;
            }],
        execute: function() {
            TableviewComponent = (function () {
                function TableviewComponent(httpRequestService) {
                    this.httpRequestService = httpRequestService;
                }
                TableviewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.httpRequestService.getAllRuns(1).subscribe(function (response) {
                        console.log("in the table view");
                        console.log(response);
                        _this.Runs = response;
                        console.log("the runs are");
                        console.log(_this.Runs);
                    });
                };
                TableviewComponent = __decorate([
                    core_1.Component({
                        selector: 'tableview',
                        templateUrl: 'app/tableview.component.html',
                        styleUrls: ['app/tableview.component.css']
                    }), 
                    __metadata('design:paramtypes', [httprequest_service_1.HttprequestService])
                ], TableviewComponent);
                return TableviewComponent;
            }());
            exports_1("TableviewComponent", TableviewComponent);
        }
    }
});
//# sourceMappingURL=tableview.component.js.map