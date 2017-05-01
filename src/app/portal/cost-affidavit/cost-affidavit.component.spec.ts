import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostAffidavitComponent } from './cost-affidavit.component';

describe('CostAffidavitComponent', () => {
  let component: CostAffidavitComponent;
  let fixture: ComponentFixture<CostAffidavitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostAffidavitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
