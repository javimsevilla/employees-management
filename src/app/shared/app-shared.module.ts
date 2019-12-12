import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatCardModule],
  exports: [...components]
})
export class AppSharedModule {}
