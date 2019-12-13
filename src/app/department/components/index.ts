import { DepartmentListComponent } from './department-list/department-list.component';
import { NewDepartmentDialogComponent } from './new-department-dialog/new-department-dialog.component';
// prettier-ignore
import {
  DeleteDepartmentConfirmationDialogComponent
} from './delete-department-confirmation-dialog/delete-department-confirmation-dialog.component';

export const components = [
  DepartmentListComponent,
  NewDepartmentDialogComponent,
  DeleteDepartmentConfirmationDialogComponent
];
export const entryComponents = [
  NewDepartmentDialogComponent,
  DeleteDepartmentConfirmationDialogComponent
];

export * from './department-list/department-list.component';
export * from './new-department-dialog/new-department-dialog.component';
export * from './delete-department-confirmation-dialog/delete-department-confirmation-dialog.component';
