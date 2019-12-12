import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../shared';

import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, AppSharedModule],
  exports: [...components]
})
export class AppDepartmentModule {}
