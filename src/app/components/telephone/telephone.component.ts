import { Component, OnInit, Input } from '@angular/core';
import * as person from '../../app.json';

@Component({
  selector: 'app-telephone',
  template: '<a href="tel:1{{telephone}}">{{formatted()}}</a>',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent {
  public telephone: string = person.phone;
  constructor() {}

  formatted() {
    return (
      '(' +
      this.telephone.slice(0, 3) +
      ') ' +
      this.telephone.slice(3, 6) +
      '-' +
      this.telephone.slice(6)
    );
  }
}
