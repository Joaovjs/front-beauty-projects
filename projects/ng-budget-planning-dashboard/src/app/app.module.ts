import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    bootstrap: [AppComponent],
})
export class AppModule {}
