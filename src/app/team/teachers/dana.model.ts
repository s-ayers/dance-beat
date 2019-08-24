import { Teacher } from './teacher.model';

declare var require: any;
export class Dana extends Teacher {
  name = 'Dana';
  image: any = require('./dana.jpg');
  webp: any = require('./dana.webp');
  description = `<p>Dana danced from the age of 3 through college. Dance and education have always been a special part
    of her heart. Dana attended Northern Illinois University to obtain a degree in Special Education and a minor in
    Dance Education. She has additional education in Behavioral Analysis and Autism. Combining her passion to help
    students with disabilities have as many opportunities as possible and her love for dance has always been something
    she's dreamed about. Dana is so thankful for the opportunity to do so!</p>`;
}
