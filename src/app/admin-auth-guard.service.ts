import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.authService.appUser$
      .map(appUser => appUser.isAdmin);
  }

}
