import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let i of [1,2,3,4,5,6,7,8]" class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Product {{i}}" class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-medium text-gray-700 mb-2">Product {{i}}</h3>
              <p class="text-gray-500 mb-4">$19.99</p>
              <button class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">View</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class ProductListComponent {}
