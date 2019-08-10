import { Component, OnInit } from '@angular/core';
import * as site from '../app.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string = site.title.toUpperCase();
  constructor() {}

  ngOnInit() {}
}
