import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-guard.service';

import { PortalComponent } from './portal/portal.component';
import { PlanWorkComponent } from 'app/portal/plan-work/plan-work.component';
import { ScopeOfWorkComponent } from "app/portal/scope-of-work/scope-of-work.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { CostAffidavitComponent } from "app/portal/cost-affidavit/cost-affidavit.component";
import { StatementAndSignatureComponent } from "app/portal/statement-and-signature/statement-and-signature.component";
import { WelcomeComponent } from "app/welcome/welcome.component";

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' },
  { path: 'dashBoard', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'portal', component: PortalComponent, canActivate: [AuthGuard],
    children: [{ path: 'planWork', component: PlanWorkComponent },
    { path: 'scopeOfWork', component: ScopeOfWorkComponent },
    { path: 'costAffidavit', component: CostAffidavitComponent },
    { path: 'statementAndSignature', component: StatementAndSignatureComponent },
    { path: '', redirectTo: 'planWork', pathMatch: 'full' }]
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
