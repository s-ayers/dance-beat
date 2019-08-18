import { Component, OnInit } from '@angular/core';
import { Teacher } from './teachers/teacher.model';
import { Teachers } from './teachers';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teachers: Teacher[] = Teachers;

  constructor() {}

  ngOnInit() {
    console.log(this.teachers);
  }
}
