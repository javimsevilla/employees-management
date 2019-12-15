import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { EmployeeService, DepartmentService } from 'src/app/core/services';
import { Employee, Department } from 'src/app/core/models';
import { Observable, combineLatest } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
// prettier-ignore
import {
  DeleteEmployeeConfirmationDialogComponent
} from '../delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';
import { SubSink } from 'subsink';
import { EmployeeDetailDialogComponent } from '../employee-detail-dialog/employee-detail-dialog.component';
import { EmployeeDetailDialogData } from '../../models';
import { map, tap, withLatestFrom, first } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees$: Observable<Employee[]>;
  departments$: Observable<Department[]>;
  subs: SubSink;

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.subs = new SubSink();
  }

  ngOnInit() {
    this.employees$ = this.getEmployees();

    this.departments$ = this.departmentService.entities$;

    this.employeeService.getAll();
    this.departmentService.getAll();
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

  editEmployee(employee: Employee) {
    this.subs.sink = this.dialog
      .open(EmployeeDetailDialogComponent, {
        data: {
          employee,
          titleLabel: 'Modificar empleado'
        } as EmployeeDetailDialogData
      })
      .afterClosed()
      .subscribe(modifiedEmployee => {
        if (modifiedEmployee) {
          this.employeeService.update(modifiedEmployee);
        }
      });
  }

  addNewEmployee() {
    this.subs.sink = this.dialog
      .open(EmployeeDetailDialogComponent, {
        data: {
          employee: null,
          titleLabel: 'Alta empleado'
        } as EmployeeDetailDialogData
      })
      .afterClosed()
      .subscribe(newEmployee => {
        if (newEmployee) {
          this.employeeService.add(newEmployee);
        }
      });
  }

  trackByEmployee(index: number, employee: Employee) {
    return employee.id;
  }

  filterEmployeesByDepartment(selectChange: MatSelectChange) {
    if (selectChange.value === -1) {
      this.router.navigate(['/employees']);
    } else {
      this.router.navigate([
        '/employees',
        { departmentId: selectChange.value }
      ]);
    }
  }

  getDepartmentNameById(departmentId: number) {
    return this.departments$.pipe(
      map(departments =>
        departments.filter(department => department.id === departmentId)
      ),
      map(departments =>
        departments && departments.length > 0 ? departments[0].name : ''
      )
    );
  }

  get selectedDepartmentId$() {
    return this.route.params.pipe(
      map(params => {
        if (params && params.departmentId) {
          return +params.departmentId;
        }
        return -1;
      })
    );
  }

  filterByStartDate(date: string) {
    if (date) {
      const selectedDateTime = new Date(date).getTime();
      this.employees$ = this.getEmployees().pipe(
        map(employees => {
          return employees.filter(
            employee =>
              employee.startDate &&
              employee.startDate.getTime() >= selectedDateTime
          );
        })
      );
    } else {
      return (this.employees$ = this.getEmployees());
    }
  }

  getEmployees() {
    return combineLatest(
      this.employeeService.entities$,
      this.route.params
    ).pipe(
      map(([employees, params]) => {
        if (params && params.departmentId) {
          return employees.filter(
            employee => employee.departmentId === +params.departmentId
          );
        } else {
          return employees;
        }
      }),
      map(employees =>
        employees.map(employee => ({
          ...employee,
          startDate: employee.startDate ? new Date(employee.startDate) : null
        }))
      )
    );
  }
}
