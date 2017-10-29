import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LoginService} from './login.service';
import {SecretService} from './secret.service';
import {NavigationService} from './navigation.service';
import {HttprequestService} from './httprequest.service';
bootstrap(AppComponent,[HTTP_PROVIDERS,ROUTER_PROVIDERS,LoginService,SecretService,NavigationService,HttprequestService]);


