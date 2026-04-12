import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <img src="https://via.placeholder.com/600"
             class="rounded-2xl shadow-md"/>

        <div>
          <h1 class="text-4xl font-bold mb-4">Premium Product</h1>
          <p class="text-2xl text-indigo-600 font-semibold mb-6">$49.99</p>

          <p class="text-gray-600 mb-8">
            Beautiful high-quality product designed for modern lifestyle.
          </p>

          <div class="flex gap-4">
            <button class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
              Add to Cart
            </button>

            <a routerLink="/cart"
               class="border px-6 py-3 rounded-lg hover:bg-gray-100">
              Go to Cart
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ProductDetailComponent {}