import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'pages/home'},
  {path: '**', pathMatch: 'full', redirectTo: 'pages/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
