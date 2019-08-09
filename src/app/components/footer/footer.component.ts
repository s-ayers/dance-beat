import { Component, OnInit } from '@angular/core';
import * as site from '../../app.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public phone: string = site.phone;
  public email: string = site.email;

  constructor() {}

  ngOnInit() {}
}
