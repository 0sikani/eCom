import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: `product-list.html`
})
export class ProductListComponent {

  loading = true;

  products = [1,2,3,4,5,6,7,8];

  constructor() {
    // 🔥 Simulate API delay
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

}