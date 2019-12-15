import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../shared';
import { components, entryComponents } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AppSharedModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [...components],
  entryComponents: [...entryComponents]
})
export class AppEmployeeModule {}
