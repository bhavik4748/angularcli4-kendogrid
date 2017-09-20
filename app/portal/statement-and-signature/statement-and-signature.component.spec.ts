import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementAndSignatureComponent } from './statement-and-signature.component';

describe('StatementAndSignatureComponent', () => {
  let component: StatementAndSignatureComponent;
  let fixture: ComponentFixture<StatementAndSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementAndSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementAndSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
