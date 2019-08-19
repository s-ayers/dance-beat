import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../teachers/teacher.model';

@Component({
  selector: 'app-team-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class TeamItemComponent implements OnInit {
  @Input() teacher: Teacher;

  constructor() {}

  ngOnInit() {}
}
