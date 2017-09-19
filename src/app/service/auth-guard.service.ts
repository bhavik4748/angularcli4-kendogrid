import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) {
        console.log('auth guard constructor call');
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //  return this.checkLoggedIn();
        console.log('i am checking to see if you are logged in');
        return this.checkLoggedIn();;
    }

    checkLoggedIn(): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        };
        this.router.navigate(['/login']);

        return false;

    }
}