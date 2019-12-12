import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [...components]
})
export class AppSharedModule {}
