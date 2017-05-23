import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { TabsModule } from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ng- bootstrap
import { AlertModule } from 'ngx-bootstrap';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { PortalComponent } from './portal/portal.component';
import { PlanWorkComponent } from './portal/plan-work/plan-work.component';
import { ScopeOfWorkComponent } from './portal/scope-of-work/scope-of-work.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppStatusComponent } from './portal/app-status/app-status.component';
import { CostAffidavitComponent } from './portal/cost-affidavit/cost-affidavit.component';
import { StatementAndSignatureComponent } from './portal/statement-and-signature/statement-and-signature.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    PlanWorkComponent,
    ScopeOfWorkComponent,
    DashboardComponent,
    AppStatusComponent,
    CostAffidavitComponent,
    StatementAndSignatureComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
