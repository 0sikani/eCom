import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: `product-detail.html`
})
export class ProductDetailComponent {}