import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentsComponent } from './departments/list/departments.list.component';
import { DepartmentsDetailComponent } from './departments/detail/departments.detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { MenuComponent } from './menu/menu.component';
import { AppEffects } from './app.effects';

import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    EmployeesComponent,
    MenuComponent,
    DepartmentsDetailComponent
  ],
  imports: [
    BrowserModule,
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
