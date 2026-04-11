import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Your Cart</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg shadow-md p-4 flex items-center">
            <img src="https://via.placeholder.com/100" alt="Item" class="w-20 h-20 object-cover rounded mr-4">
            <div class="flex-1">
              <h3 class="text-lg font-medium text-gray-700">Product Name</h3>
              <p class="text-gray-500">$19.99</p>
            </div>
            <button class="text-red-600 hover:text-red-800">Remove</button>
          </div>
          <div class="bg-white rounded-lg shadow-md p-4 flex items-center">
            <img src="https://via.placeholder.com/100" alt="Item" class="w-20 h-20 object-cover rounded mr-4">
            <div class="flex-1">
              <h3 class="text-lg font-medium text-gray-700">Product Name</h3>
              <p class="text-gray-500">$29.99</p>
            </div>
            <button class="text-red-600 hover:text-red-800">Remove</button>
          </div>
        </div>
        <div class="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div class="text-lg font-semibold text-gray-800">Total: $49.98</div>
          <button class="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-700 transition mt-4 md:mt-0">Proceed to Checkout</button>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class CartComponent {}
