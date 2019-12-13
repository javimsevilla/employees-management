import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [...components]
})
export class AppSharedModule {}
