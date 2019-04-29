import { Order } from './../models/order';
import { AuthService } from './../auth.service';
import { OrderService } from './../order.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from 'app/shopping-cart.service';
import { ShoppingCart } from 'app/models/shopping-cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  shipping = {};

  cart: ShoppingCart;

  cartSubscription: Subscription;

  userSubscription: Subscription;

  userId: string;
  success = '';

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.userSubscription = this.authService.user$.subscribe(user => {
      this.userId = user.uid;
    })
  }

  placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);

    this.orderService.storeOrder(order);
    // this.router.navigate(['/order-success', result.key]);
    this.success = 'Successfully Added'
  }
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
