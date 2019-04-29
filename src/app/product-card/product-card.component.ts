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

  constructor() { }

}