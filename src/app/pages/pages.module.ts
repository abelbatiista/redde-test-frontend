// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing Module
import { PagesRoutingModule } from './pages-routing.module';

// User Modules
import { SharedModule } from '../shared/shared.module';

// User Components
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    EnterprisesComponent,
    EnterpriseComponent,
    EnterpriseDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
