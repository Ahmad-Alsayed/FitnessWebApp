System.register(['angular2/core', 'angular2/router', './user.component', './login.component', './tableview.component', './newrun.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_component_1, login_component_1, tableview_component_1, newrun_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (tableview_component_1_1) {
                tableview_component_1 = tableview_component_1_1;
            },
            function (newrun_component_1_1) {
                newrun_component_1 = newrun_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: login_component_1.LoginComponent, name: 'Login' },
                        { path: '/home', component: user_component_1.UserComponent, name: 'Home' },
                        { path: '/all', component: tableview_component_1.TableviewComponent, name: 'TableView' },
                        { path: '/new', component: newrun_component_1.NewrunComponent, name: 'NewRunningSession' }
                    ]),
                    core_1.Component({
                        selector: 'myapp',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map