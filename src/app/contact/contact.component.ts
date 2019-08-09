import { Component, OnInit } from '@angular/core';
import * as site from '../app.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public phone: string = site.phone;
  public email: string = site.email;

  constructor() {}

  ngOnInit() {}
}
