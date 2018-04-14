import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {environment} from '../environments/environment';
import {routes} from './app-routing';
import {AppComponent} from './app.component';
import {IndexComponent} from './index.component';
import {EmptyComponent} from './layout/empty.component';
import {RouterOutletComponent} from './layout/router-outlet.component';
import {LoginModule} from './login';
import {AlertModule, GlobalErrorModule, I18nModule} from './shared';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    // lib
    TranslateModule.forRoot({
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient]
      }
    }),
    FlexLayoutModule,
    MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule,
    // app
    RouterModule.forRoot(routes),
    AlertModule,
    GlobalErrorModule,
    LoginModule,
    I18nModule,
  ],
  declarations: [
    EmptyComponent, RouterOutletComponent,
    AppComponent, IndexComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
