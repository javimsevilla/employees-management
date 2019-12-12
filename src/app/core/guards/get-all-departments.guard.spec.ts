import { TestBed, async, inject } from '@angular/core/testing';

import { GetAllDepartmentsGuard } from './get-all-departments.guard';

describe('GetAllDepartmentsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllDepartmentsGuard]
    });
  });

  it('should ...', inject([GetAllDepartmentsGuard], (guard: GetAllDepartmentsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
