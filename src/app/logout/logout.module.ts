import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './logout.component';
import { AuthenticationService } from 'app/service/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    LogoutRoutingModule
  ],
  declarations: [LogoutComponent]
})
export class LogoutModule { }
