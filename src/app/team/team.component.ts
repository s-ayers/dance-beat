import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from './teachers/teacher.model';
import { Teachers } from './teachers/index';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() teachers: Teacher[] = Teachers;

  constructor() {}

  ngOnInit() {}
}
