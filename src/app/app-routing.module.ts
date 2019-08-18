import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventComponent } from './event/event.component';
import { RegistrationComponent } from './registration/registration.component';
import { DanceClassesComponent } from './dance-classes/dance-classes.component';
import * as site from './app.json';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },

  // {
  //   path: 'dance-classes',
  //   component: DanceClassesComponent
  // },

  {
    path: 'contact',
    component: ContactComponent
  },

  // {
  //   path: 'gallery',
  //   component: GalleryComponent
  // },
  // {
  //   path: 'faq',
  //   component: FaqComponent
  // },

  {
    path: 'team',
    component: TeamComponent
  },
  // {
  //   path: 'testimonial',
  //   component: TestimonialComponent
  // },

  // {
  //   path: 'registration',
  //   component: RegistrationComponent
  // },

  // {
  //   path: 'event',
  //   component: EventComponent
  // },

  {
    path: '*',
    component: HomeComponent
  }
];

// if (site.features.faq) {
//   routes.push({
//     path: 'faq',
//     component: FaqComponent
//   });
// }

// if (site.features.team) {
//   routes.push({
//     path: 'team',
//     component: TeamComponent
//   });
// }

// if (site.features.testimonial) {
//   routes.push({
//     path: 'testimonial',
//     component: TestimonialComponent
//   });
// }

// if (site.features.registration) {
//   routes.push({
//     path: 'registration',
//     component: RegistrationComponent
//   });
// }

// if (site.features.events) {
//   routes.push({
//     path: 'event',
//     component: EventComponent
//   });
// }

// if (site.features.gallery) {
//   routes.push({
//     path: 'gallery',
//     component: GalleryComponent
//   });
// }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
