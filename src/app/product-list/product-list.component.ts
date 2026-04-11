import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-12">Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let i of [1,2,3,4,5,6,7,8]" class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Product {{i}}" class="w-full h-56 object-cover">
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-800 mb-2">Product {{i}}</h3>
              <p class="text-base text-gray-600 mb-4">$19.99</p>
              <button class="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">View</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class ProductListComponent {}
