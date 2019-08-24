import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamItemComponent } from './item.component';
import { EscapeHtmlPipe } from '../../pipes/keep-html.pipe';
import { Tammy } from '../teachers/tammy.model';

describe('TeamItemComponent', () => {
  let component: TeamItemComponent;
  let fixture: ComponentFixture<TeamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamItemComponent, EscapeHtmlPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamItemComponent);
    component = fixture.componentInstance;
    component.teacher = new Tammy();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
