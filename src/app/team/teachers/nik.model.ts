import { Teacher } from './teacher.model';

declare var require: any;
export class Nik extends Teacher {
  name: string = 'Nik LaMaack';
  image: any = require('./nik.jpg');
  description: string = `<p>Nik LaMaack currently attends Columbia College Chicago with a BFA in Dance, concentrating in Choreography. He has previously worked with Shea Coulee, Amaniyea Payne, Darrell Jones, Paige Cunningham and Emanuel Gat. He recently returned from performing in Paris, France at the Centre National de la Danse and the Maison de la Culture, where he presented his own work and performed that of others. Nik also attended the CND’s Camping intensive 2019 in Paris. 
    He is looking forward to bringing the knowledge that he was granted from across the pond into creating an environment that cultivates a strong and passionate dancer.The inclusion and diversity within dance are two things Nik is extremely driven by and is excited to share this with sprouting performers.
    </p>`;
}
