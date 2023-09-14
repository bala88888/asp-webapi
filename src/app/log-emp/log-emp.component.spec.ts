import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEmpComponent } from './log-emp.component';

describe('LogEmpComponent', () => {
  let component: LogEmpComponent;
  let fixture: ComponentFixture<LogEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
