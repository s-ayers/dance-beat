import { Component, OnInit } from '@angular/core';
import * as site from '../../app.json';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public phone: string = site.phone;

  constructor() {}

  ngOnInit() {}
}
