import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AppSharedModule } from '../shared';

import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, AppSharedModule, MatIconModule],
  exports: [...components]
})
export class AppDepartmentModule {}
