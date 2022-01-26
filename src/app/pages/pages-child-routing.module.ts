// Angular Modules
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

// User Components
import { EnterprisesComponent } from "./enterprises/enterprises.component";
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'enterprises', component: EnterprisesComponent},
    {path: 'enterprise/:id', component: EnterpriseComponent},
    {path: 'enterprise/detail/:id', component: EnterpriseDetailComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesChildRoutingModule { }