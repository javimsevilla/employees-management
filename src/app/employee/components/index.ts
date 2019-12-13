import { EmployeeListComponent } from './employee-list/employee-list.component';
// prettier-ignore
import {
  DeleteEmployeeConfirmationDialogComponent
} from './delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';

export const components = [
  EmployeeListComponent,
  DeleteEmployeeConfirmationDialogComponent
];
export const entryComponents = [DeleteEmployeeConfirmationDialogComponent];

export * from './employee-list/employee-list.component';
export * from './delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';
