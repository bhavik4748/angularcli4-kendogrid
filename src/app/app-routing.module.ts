import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { PlanWorkComponent } from 'app/portal/plan-work/plan-work.component';
import { ScopeOfWorkComponent } from "app/portal/scope-of-work/scope-of-work.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'dashBoard', component: DashboardComponent },
  {
    path: 'portal', component: PortalComponent,
    children: [{ path: 'planWork', component: PlanWorkComponent },
    { path: 'scopeOfWork', component: ScopeOfWorkComponent },
    { path: '', redirectTo: 'planWork', pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
