import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public days: string[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];
  public today: string;
  constructor() {
    this.today = this.dayOfWeek();
  }

  ngOnInit() {}
  dayOfWeek() {
    // return 'monday';

    const intDay = new Date().getDay();
    let day = 'invalid-day';
    switch (intDay) {
      case 0:
      case 1:
        day = 'monday';
        break;
      case 2:
        day = 'tueday';
        break;
      case 3:
        day = 'wednesday';
        break;
      case 4:
        day = 'thursday';
        break;
      case 5:
        day = 'friday';
        break;
      case 6:
        day = 'saturday';
        break;
      default:
        day = 'Invalid day of week';
        break;
    }

    return day;
  }
  setDay(day: string) {
    this.today = day;
  }
}
