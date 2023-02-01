import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './components/root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from "../core/core.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { MetaReducer, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../../../../Ibermatica.Formacion.Angular13/src/environments/environment";
import { storeFreeze } from "ngrx-store-freeze";
import { EffectsModule } from '@ngrx/effects';
import { RootModuleInitializer } from "./root.initializer";
import { AppSettingsService } from "../shared/services/app-settings.service";
import { APP_CONFIG } from "../shared/tokens/tokens";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze]: [];

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Ngrx App DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    CoreModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: RootModuleInitializer.initializeSettings,
      deps: [AppSettingsService, APP_CONFIG],
      multi: true
    }
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
