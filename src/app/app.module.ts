import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentsComponent } from './departments/list/departments.list.component';
import { DepartmentsDetailComponent } from './departments/detail/departments.detail.component';
import { DepartmentCreateComponent } from './departments/create/department.create.component';
import { EmployeesComponent } from './employees/list/employees.list.component';
import { EmployeesDetailComponent } from './employees/detail/employees.detail.component';
import { MenuComponent } from './menu/menu.component';
import { AppEffects } from './app.effects';

import { reducers, metaReducers } from './reducers';
import { EmployeesCreateComponent } from './employees/create/employees.create.component';
import { DepartmentsUpdateComponent } from './departments/update/departments.update.component';

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
    DepartmentsUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
