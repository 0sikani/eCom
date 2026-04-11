import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-10">Your Cart</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 flex items-center">
            <img src="https://via.placeholder.com/100" alt="Item" class="w-24 h-24 object-cover rounded mr-6">
            <div class="flex-1">
              <h3 class="text-lg font-medium text-gray-800">Product Name</h3>
              <p class="text-base text-gray-600">$19.99</p>
            </div>
            <button class="text-red-600 hover:text-red-800">Remove</button>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 flex items-center">
            <img src="https://via.placeholder.com/100" alt="Item" class="w-24 h-24 object-cover rounded mr-6">
            <div class="flex-1">
              <h3 class="text-lg font-medium text-gray-800">Product Name</h3>
              <p class="text-base text-gray-600">$29.99</p>
            </div>
            <button class="text-red-600 hover:text-red-800">Remove</button>
          </div>
        </div>
        <div class="mt-12 flex flex-col md:flex-row justify-between items-center">
          <div class="text-2xl font-semibold text-gray-900">Total: $49.98</div>
          <button class="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition mt-4 md:mt-0">Proceed to Checkout</button>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class CartComponent {}
