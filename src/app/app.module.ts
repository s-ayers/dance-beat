import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./home/home.component";
import { FaqComponent } from "./faq/faq.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { TeamComponent } from "./team/team.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ContactComponent } from "./contact/contact.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { GalleryComponent } from './gallery/gallery.component';
import { EventComponent } from './event/event.component';
import { DanceClassesComponent } from './dance-classes/dance-classes.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FaqComponent,
    FooterComponent,
    AboutComponent,
    TeamComponent,
    TestimonialComponent,
    ContactComponent,
    GalleryComponent,
    EventComponent,
    DanceClassesComponent,
    RegistrationComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
