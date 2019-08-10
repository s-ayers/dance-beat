import { Component, OnInit } from '@angular/core';
import * as site from '../app.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public features: any = site.features;
  constructor() {}

  ngOnInit() {}
}
