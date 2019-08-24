import { Teacher } from './teacher.model';

declare var require: any;
export class Tammy extends Teacher {
  name = 'Tammy';
  image: any = require('./tammy.jpg');
  webp: any = require('./tammy.webp');
  description = `<p>Tammy began dancing at the age of 2. She went on to compete in dancing with ballet, tap and
  jazz for a few years regionally and nationally. She made the varsity dance team at her high school and competed with
  then nationally as well. She won individual dance awards such as the all American dancer award each year.</p>
  <p> Tammy majored in psychology at the University of Phoenix concentrating on child psychology and developmental
  psychology.  She cannot wait to combine her knowledge of psychology and dance</p>`;
}
