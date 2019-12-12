import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Employee } from '../models';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends EntityCollectionServiceBase<Employee> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Employee', serviceElementsFactory);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.getAll().pipe(
      map(employees =>
        employees.map(employee => ({
          ...employee,
          startDate: new Date(employee.startDate)
        }))
      ),
      tap(employees => this.addAllToCache(employees))
    );
  }
}
