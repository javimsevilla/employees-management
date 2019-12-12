import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { containers } from './containers';

@NgModule({
  declarations: [...containers],
  imports: [CommonModule],
  exports: [...containers]
})
export class AppEmployeeModule {}
