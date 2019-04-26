import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  private subscription: Subscription;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
    this.subscription = authService.user$.subscribe(user => {
      if (user) {
        this.userService.save(user);

        const returnUrl = localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl);
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
