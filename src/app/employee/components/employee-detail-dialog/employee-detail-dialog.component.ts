import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDetailDialogData } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-employee-detail-dialog',
  templateUrl: './employee-detail-dialog.component.html',
  styleUrls: ['./employee-detail-dialog.component.scss']
})
export class EmployeeDetailDialogComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EmployeeDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeDetailDialogData,
    @Inject(LOCALE_ID) private locale: string,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const employee = {
      name: this.data.employee ? this.data.employee.name || '' : '',
      lastName: this.data.employee ? this.data.employee.lastName || '' : '',
      age: this.data.employee ? this.data.employee.age || '' : '',
      startDate: this.data.employee
        ? this.formatDate(this.data.employee.startDate) || ''
        : ''
    };

    this.employeeForm = this.fb.group({
      name: [employee.name, Validators.required],
      lastName: [employee.lastName, Validators.required],
      age: [
        employee.age,
        [Validators.required, Validators.min(16), Validators.max(70)]
      ],
      startDate: [employee.startDate, Validators.required]
    });
  }

  closeDialog() {
    if (this.employeeForm.valid) {
      this.dialogRef.close({
        ...this.data.employee,
        ...this.employeeForm.value
      });
    }
  }

  isFormDisabled() {
    return this.employeeForm.invalid || this.employeeForm.pristine;
  }

  private formatDate(date: Date): string {
    return date ? formatDate(date, 'yyyy-MM-dd', this.locale) : null;
  }
}
