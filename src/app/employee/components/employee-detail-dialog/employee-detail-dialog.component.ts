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
export class EmployeeDetailDialogComponent {
  employeeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EmployeeDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeDetailDialogData,
    @Inject(LOCALE_ID) private locale: string,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      name: [data.employee.name || '', Validators.required],
      lastName: [data.employee.lastName || '', Validators.required],
      age: [
        data.employee.age || '',
        [Validators.required, Validators.min(16), Validators.max(70)]
      ],
      startDate: [
        this.formatDate(data.employee.startDate) || '',
        Validators.required
      ]
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

  private formatDate(date: Date): string {
    return date ? formatDate(date, 'yyyy-MM-dd', this.locale) : null;
  }
}
