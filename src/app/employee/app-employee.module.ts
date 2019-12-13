import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../shared';
import { components, entryComponents } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AppSharedModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [...components],
  entryComponents: [...entryComponents]
})
export class AppEmployeeModule {}
