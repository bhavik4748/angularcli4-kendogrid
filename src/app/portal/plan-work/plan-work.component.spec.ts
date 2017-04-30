import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanWorkComponent } from './plan-work.component';

describe('PlanWorkComponent', () => {
  let component: PlanWorkComponent;
  let fixture: ComponentFixture<PlanWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
