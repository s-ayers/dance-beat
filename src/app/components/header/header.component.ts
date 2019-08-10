import { Component, OnInit } from '@angular/core';
import * as site from '../../app.json';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public phone: string = site.phone;
  public facebook: string = site['social media'].facebook;
  public features: any = site.features;

  constructor() {}

  ngOnInit() {}
}
