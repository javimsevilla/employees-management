import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDepartmentConfirmationDialogComponent } from './delete-department-confirmation-dialog.component';

describe('DeleteDepartmentConfirmationDialogComponent', () => {
  let component: DeleteDepartmentConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteDepartmentConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDepartmentConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDepartmentConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
