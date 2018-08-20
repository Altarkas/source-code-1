import { Component } from '@angular/core';
import { Product } from './Models/Product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCat = '';
  cartList: Product [];
  title = 'StoreApp';
  ProductList: Product [] = [
    new Product ('Iphone 7', 'Phone', 4000, ''),
    new Product ('Casper', 'Computer', 9000, ''),
    new Product ('Samsung', 'Phone', 3000, ''),
    new Product ('Nokia', 'Phone', 2000, ''),
    new Product ('Lg', 'TV', 7000, ''),
  ];
CategoryList: string[] = ['Phone', 'Computer', 'TV'];

selectedCategory(categoryName) {
this.selectedCat = categoryName;
console.log(this.selectedCat);
}
addCart(product: Product) {
  console.log(product);
}
  }

