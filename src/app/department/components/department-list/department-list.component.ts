import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../../core/models';
import { DepartmentService } from '../../../core/services';
import { MatDialog } from '@angular/material/dialog';
import { NewDepartmentDialogComponent } from '../new-department-dialog/new-department-dialog.component';
import { SubSink } from 'subsink';
// prettier-ignore
import {
  DeleteDepartmentConfirmationDialogComponent
} from '../delete-department-confirmation-dialog/delete-department-confirmation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit, OnDestroy {
  departments$: Observable<Department[]>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  subs: SubSink;

  constructor(
    private departmentService: DepartmentService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.departments$ = departmentService.entities$;
    this.loading$ = departmentService.loading$;
    this.loaded$ = departmentService.loaded$;
    this.subs = new SubSink();
  }

  ngOnInit() {
    this.departmentService.getAll();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  createNewDepartment() {
    this.subs.sink = this.dialog
      .open(NewDepartmentDialogComponent)
      .afterClosed()
      .subscribe(name => {
        if (name) {
          this.addDepartment({
            id: null,
            name
          });
        }
      });
  }

  addDepartment(department: Department) {
    this.departmentService.add(department);
  }

  deleteDepartment(department: Department) {
    this.subs.sink = this.dialog
      .open(DeleteDepartmentConfirmationDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.departmentService.delete(department);
        }
      });
  }

  trackByDepartments(index: number, department: Department): number {
    return department.id;
  }

  viewDepartmentEmployees(id: number) {
    this.router.navigate(['/employees']); // TODO
  }
}
