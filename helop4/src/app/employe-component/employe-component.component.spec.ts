import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeComponentComponent } from './employe-component.component';

describe('EmployeComponentComponent', () => {
  let component: EmployeComponentComponent;
  let fixture: ComponentFixture<EmployeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
