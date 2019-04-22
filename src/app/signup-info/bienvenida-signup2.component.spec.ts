import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidaSignup2Component } from './bienvenida-signup2.component';

describe('BienvenidaSignup2Component', () => {
  let component: BienvenidaSignup2Component;
  let fixture: ComponentFixture<BienvenidaSignup2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenidaSignup2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidaSignup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
