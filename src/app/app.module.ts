import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import { GiftComponent } from './gift/gift.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactComponent,
    GiftComponent,
    FooterComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
