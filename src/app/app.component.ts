import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'jackets & Vests'],
        238.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log(`Product clicked: ${product}`);
    
  }
}
