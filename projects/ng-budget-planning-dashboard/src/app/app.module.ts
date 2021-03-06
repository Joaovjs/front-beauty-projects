import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonLayout } from './layouts/common-layout/common-layout.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(pt);

@NgModule({
    declarations: [AppComponent, CommonLayout],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, SharedModule],
    providers: [{ provide: NZ_I18N, useValue: pt_BR }],
    bootstrap: [AppComponent],
})
export class AppModule {}
