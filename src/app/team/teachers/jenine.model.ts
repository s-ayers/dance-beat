import { Teacher } from './teacher.model';

declare var require: any;
export class Jenine extends Teacher {
  name = 'Jenine';
  image: any = require('./jenine.jpg');
  webp: any = require('./jenine.webp');
  description = `<p>Jenine started dance at the age of 2 to help correct club foot. She developed such a love of
  the art that she stuck with it at the recreational level for 16 years. In high school, Jenine competed with the color
  guard, both in the fall season with the marching band, as well as the winter season in competitions.</p>
  <p>Jenine is a mother of three children, who also share her love of dance. She is also a massage therapist who has
  been in the field for 20 years! Jenine currently is working on getting her Bachelors degree with the hopes of holding
  a doctoral degree in Occupational therapy in the upcoming years. She hopes to bring specialized classes that tie in
  ways to help children better develop gross and fine motor skills.</p>`;
}
