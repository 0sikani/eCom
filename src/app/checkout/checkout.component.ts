import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  template: `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-12">Checkout</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Shipping Information</h3>
            <form class="space-y-4">
              <input type="text" placeholder="Full Name" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <input type="email" placeholder="Email" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <input type="text" placeholder="Address" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <input type="text" placeholder="City" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <input type="text" placeholder="Postal Code" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </form>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Payment Method</h3>
            <div class="space-y-4">
              <label class="flex items-center">
                <input type="radio" name="payment" class="mr-3">
                <span>Credit Card</span>
              </label>
              <label class="flex items-center">
                <input type="radio" name="payment" class="mr-3">
                <span>PayPal</span>
              </label>
              <label class="flex items-center">
                <input type="radio" name="payment" class="mr-3">
                <span>Bank Transfer</span>
              </label>
            </div>
            <button class="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition w-full">Place Order</button>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class CheckoutComponent {}
