import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeConfirmationDialogComponent } from './delete-employee-confirmation-dialog.component';

describe('DeleteEmployeeConfirmationDialogComponent', () => {
  let component: DeleteEmployeeConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteEmployeeConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
