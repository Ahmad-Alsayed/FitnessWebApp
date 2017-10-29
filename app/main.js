System.register(['angular2/platform/browser', './app.component', 'angular2/http', 'angular2/router', './login.service', './secret.service', './navigation.service', './httprequest.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, http_1, router_1, login_service_1, secret_service_1, navigation_service_1, httprequest_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (httprequest_service_1_1) {
                httprequest_service_1 = httprequest_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, login_service_1.LoginService, secret_service_1.SecretService, navigation_service_1.NavigationService, httprequest_service_1.HttprequestService]);
        }
    }
});
//# sourceMappingURL=main.js.map