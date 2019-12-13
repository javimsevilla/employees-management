import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../../core/models';
import { DepartmentService } from '../../../core/services';
import { MatDialog } from '@angular/material/dialog';
import { NewDepartmentDialogComponent } from '../new-department-dialog/new-department-dialog.component';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit, OnDestroy {
  departments$: Observable<Department[]>;
  loading$: Observable<boolean>;
  subs: SubSink;

  constructor(
    private departmentService: DepartmentService,
    private dialog: MatDialog
  ) {
    this.departments$ = departmentService.entities$;
    this.loading$ = departmentService.loading$;
    this.subs = new SubSink();
  }

  ngOnInit() {
    this.departmentService.getAll();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  createDepartment() {
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
}
