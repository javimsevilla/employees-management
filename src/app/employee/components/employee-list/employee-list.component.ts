import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from 'src/app/core/services';
import { Employee } from 'src/app/core/models';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
// prettier-ignore
import {
  DeleteEmployeeConfirmationDialogComponent
} from '../delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees$: Observable<Employee[]>;
  subs: SubSink;

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) {
    this.employees$ = employeeService.entities$;
    this.subs = new SubSink();
  }

  ngOnInit() {
    this.employeeService.getAllEmployees();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  deleteEmployee(employee: Employee) {
    this.subs.sink = this.dialog
      .open(DeleteEmployeeConfirmationDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.employeeService.delete(employee);
        }
      });
  }

  editEmployee(employee: Employee) {}

  addNewEmployee() {}

  trackByEmployee(index: number, employee: Employee) {
    return employee.id;
  }
}
