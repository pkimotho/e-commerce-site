import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from 'app/shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser: AppUser;

  shoppingCartItemCount: number;

  cart$: Observable<ShoppingCart>;

  constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService) { }

  logout() {
    this.authService.logout();
  }
  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => {
      this.appUser = appUser;
    })
    this.cart$ = await this.shoppingCartService.getCart();

  }

}
