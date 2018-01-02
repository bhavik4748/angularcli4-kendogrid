import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate, OnInit {

    constructor(private router: Router, private authService: AuthenticationService) {
        console.log('auth guard constructor call');
    }

    ngOnInit() {
        this.authService.isUserLoggedIn();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //  return this.checkLoggedIn();
        console.log('i am checking to see if you are logged in');
        return this.checkLoggedIn();;
    }

    checkLoggedIn(): boolean {
        console.log('checkLogged In function');
        if (this.authService.isUserLoggedIn()) {
            return true;
        };
        this.router.navigate(['/login']);

        return false;

    }
}