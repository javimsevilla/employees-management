import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCoreModule } from './core';
import { AppStoreModule } from './store';
import { AppEmployeeModule } from './employee/app-employee.module';
import { AppDepartmentModule } from './department/app-department.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppCoreModule,
    AppStoreModule,
    AppEmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
