import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { DepartmentsComponent } from './departments/list/departments.list.component';
import { DepartmentsDetailComponent } from './departments/detail/departments.detail.component';
import { DepartmentCreateComponent } from './departments/create/department.create.component';
import { DepartmentsUpdateComponent } from './departments/update/departments.update.component';
import { EmployeesComponent } from './employees/list/employees.list.component';
import { EmployeesCreateComponent } from './employees/create/employees.create.component';
import { EmployeesDetailComponent } from './employees/detail/employees.detail.component';
import { EmployeesUpdateComponent } from './employees/update/employees.update.component';
import { MenuComponent } from './menu/menu.component';

import { reducers, metaReducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { AppEffects } from './app.effects';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    EmployeesComponent,
    MenuComponent,
    DepartmentsDetailComponent,
    EmployeesDetailComponent,
    DepartmentCreateComponent,
    EmployeesCreateComponent,
    DepartmentsUpdateComponent,
    EmployeesUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
