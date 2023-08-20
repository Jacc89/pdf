import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Compartidos/login/login.component';
import { PdfComponent } from './Compartidos/pdf/pdf.component';
import { HeaderComponent } from './Compartidos/header/header.component';
import { FooterComponent } from './Compartidos/footer/footer.component';
import { DasboardComponent } from './Compartidos/dasboard/dasboard.component';
import { NavbarComponent } from './Compartidos/navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PdfComponent,
    HeaderComponent,
    FooterComponent,
    DasboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
