import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../../core/models';
import { DepartmentService } from '../../../core/services';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  departments$: Observable<Department[]>;
  loading$: Observable<boolean>;

  constructor(private departmentService: DepartmentService) {
    this.departments$ = departmentService.entities$;
    this.loading$ = departmentService.loading$;
  }

  ngOnInit() {
    this.departmentService.getAll();
  }
}
