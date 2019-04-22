import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  let component: NotificationsService;
  let fixture: ComponentFixture<NotificationsService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
