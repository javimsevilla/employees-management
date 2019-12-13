import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDepartmentDialogComponent } from './new-department-dialog.component';

describe('NewDepartmentDialogComponent', () => {
  let component: NewDepartmentDialogComponent;
  let fixture: ComponentFixture<NewDepartmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDepartmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDepartmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
