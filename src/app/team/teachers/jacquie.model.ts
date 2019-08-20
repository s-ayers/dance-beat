import { Teacher } from './teacher.model';

declare var require: any;
export class Jacquie extends Teacher {
  name: string = 'Jacquie';
  image: any = require('./jacquie.jpg');
  description: string = `<p>Jacquie is a fun-loving mother of four who has been in the theater and music atmosphere for many years. She has been seen in numerous productions over the years including “Joseph and the Technicolor Dreamcoat” “Hairspray” and her personal favorite, “The Wizard of Oz.” Jacquie also taught music to pre-school and kindergarten students and has supported her daughters as a dance and theater mom for over 20 years. She has been a cantor for the choir of St. Jude in Joliet for the last 25 years.</p>
<p>Currently, Jacquie is a Financial Assessor in Patient Accounting for Northwestern Medicine as well as the founder of the online craft store Periwinkle Creations</p>`;
}
