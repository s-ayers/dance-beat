import { Teacher } from './teacher.model';

declare var require: any;
export class Ashley extends Teacher {
  name: string = 'Ashley';
  image: any = require('./ashley.jpg');
  description: string = `<p>
    Ashley has been dancing since the age of 2 training in ballet, jazz, lyrical, modern, tap, musical theatre, and hip
    hop.
    She has competed and performed throughout the Chicagoland area. She studied at a local studio in Bolingbrook, IL as
    well
    as trained with the Joel Hall Dance Center.
</p>
<p>

    As a competitor, she has won several awards and was chosen for many
    scholarships at various conventions. Throughout high school, Ashley was apart of the Varsity Pom Squad later
    becoming
    captain of the squad her senior year. After high school Ashley went on to Chamberlain College of Nursing and earned
    her
    Bachelor’s of Science in Nursing. Throughout, she continued her love for dance by teaching various classes as well
    choreographing for competitive companies throughout Chicago.</p>
<p>
    As a choreographer her awards just keep coming with
    Outstanding Choreography, Amazing Story Telling, Musicality Awards, and First Place overalls. With over 10 years of
    teaching and choreography under her belt Ashley drives to push and inspire each of her students not only through
    dance
    but life as well.</p>`;
}
