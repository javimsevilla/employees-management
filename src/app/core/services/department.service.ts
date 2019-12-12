import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Department } from '../models';

@Injectable({ providedIn: 'root' })
export class DepartmentService extends EntityCollectionServiceBase<Department> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Department', serviceElementsFactory);
  }
}
