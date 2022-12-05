import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './Mycomponents/button/button.component';
import { NavbarComponent } from './Mycomponents/navbar/navbar.component';
import { CarouselComponent } from './Mycomponents/carousel/carousel.component';
import { CardsComponent } from './Mycomponents/cards/cards.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { IframeComponent } from './Mycomponents/iframe/iframe.component';
import { PaginationComponent } from './Mycomponents/pagination/pagination.component';
import { FormComponent } from './Mycomponents/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent,
    HomeComponent,
    AboutComponent,
    IframeComponent,
    PaginationComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
