import { DepartmentListComponent } from './department-list/department-list.component';
import { NewDepartmentDialogComponent } from './new-department-dialog/new-department-dialog.component';

export const components = [
  DepartmentListComponent,
  NewDepartmentDialogComponent
];
export const entryComponents = [NewDepartmentDialogComponent];

export * from './department-list/department-list.component';
export * from './new-department-dialog/new-department-dialog.component';
