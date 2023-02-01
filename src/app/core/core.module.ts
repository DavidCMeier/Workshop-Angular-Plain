import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromStore from './store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShellComponent } from './containers/shell/shell.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./interceptors/auth-interceptor.service";
import { SharedModule } from "../shared/shared.module";
import { StoreRouterConnectingModule } from "@ngrx/router-store";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShellComponent
  ],
  imports: [
    StoreModule.forFeature('core', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
    StoreRouterConnectingModule.forRoot(),
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class CoreModule { }
