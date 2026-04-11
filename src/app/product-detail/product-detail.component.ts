import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template: `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="lg:w-1/2">
            <img src="https://via.placeholder.com/600x600" alt="Product Image" class="w-full rounded-xl shadow-lg">
          </div>
          <div class="lg:w-1/2">
            <h2 class="text-4xl font-extrabold text-gray-900 mb-4">Product Title</h2>
            <p class="text-2xl text-indigo-600 mb-6">$19.99</p>
            <p class="text-gray-700 mb-8">Detailed description of the product goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button class="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-700 transition">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class ProductDetailComponent {}
