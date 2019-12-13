import { EmployeeListComponent } from './employee-list/employee-list.component';
// prettier-ignore
import {
  DeleteEmployeeConfirmationDialogComponent
} from './delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';
import { EmployeeDetailDialogComponent } from './employee-detail-dialog/employee-detail-dialog.component';

export const components = [
  EmployeeListComponent,
  DeleteEmployeeConfirmationDialogComponent,
  EmployeeDetailDialogComponent
];
export const entryComponents = [
  DeleteEmployeeConfirmationDialogComponent,
  EmployeeDetailDialogComponent
];

export * from './employee-list/employee-list.component';
export * from './delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';
export * from './employee-detail-dialog/employee-detail-dialog.component';
