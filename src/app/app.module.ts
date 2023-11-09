import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import { GiftComponent } from './gift/gift.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PricesComponent } from './prices/prices.component';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import { ModalComponent } from './modal/modal.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactComponent,
    GiftComponent,
    FooterComponent,
    ReviewsComponent,
    SlideshowComponent,
    PricesComponent,
    ModalComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
