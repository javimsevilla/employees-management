import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AppSharedModule } from '../shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { components, entryComponents } from './components';
import { AppDepartmentRoutingModule } from './app-department-routing.module';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AppDepartmentRoutingModule,
    AppSharedModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [...components],
  entryComponents: [...entryComponents]
})
export class AppDepartmentModule {}
