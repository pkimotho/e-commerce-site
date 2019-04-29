import { ShoppingCartService } from 'app/shopping-cart.service';
import { Product } from 'app/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input() shoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }
  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
  }


}
