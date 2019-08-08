import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FaqComponent } from "./faq/faq.component";
import { AboutComponent } from "./about/about.component";
import { TeamComponent } from "./team/team.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { EventComponent } from "./event/event.component";
import { RegistrationComponent } from "./registration/registration.component";
import { DanceClassesComponent } from "./dance-classes/dance-classes.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "team",
    component: TeamComponent
  },
  {
    path: "event",
    component: EventComponent
  },
  {
    path: "dance-classes",
    component: DanceClassesComponent
  },
  {
    path: "testimonial",
    component: TestimonialComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "*",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
