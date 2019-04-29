import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from 'app/shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product: Product;
  @Input() showActions = true;
  @Input() shoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }

}
