import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  template: `
    <section class="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div class="card p-8 w-full max-w-2xl mx-auto
                  bg-white dark:bg-gray-800
                  text-gray-900 dark:text-gray-100
                  rounded-xl shadow-md">

        <h1 class="text-3xl font-bold mb-10">Checkout</h1>

        <div class="grid md:grid-cols-2 gap-8">

          <!-- Shipping -->
          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm space-y-4">

            <h2 class="font-semibold text-lg">Shipping</h2>

            <input class="input w-full p-3 rounded-lg border
                          bg-white dark:bg-gray-800
                          border-gray-300 dark:border-gray-600
                          text-gray-900 dark:text-gray-100"
                   placeholder="Full Name">

            <input class="input w-full p-3 rounded-lg border
                          bg-white dark:bg-gray-800
                          border-gray-300 dark:border-gray-600
                          text-gray-900 dark:text-gray-100"
                   placeholder="Email">

            <input class="input w-full p-3 rounded-lg border
                          bg-white dark:bg-gray-800
                          border-gray-300 dark:border-gray-600
                          text-gray-900 dark:text-gray-100"
                   placeholder="Address">
          </div>

          <!-- Summary -->
          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">

            <h2 class="font-semibold text-lg mb-4">Summary</h2>

            <p class="flex justify-between mb-2">
              <span>Subtotal</span><span>$99.98</span>
            </p>

            <button class="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg
                           hover:bg-indigo-700 hover:scale-105 active:scale-95
                           transition duration-200">
              Place Order
            </button>
          </div>

        </div>

      </div>
    </section>
  `
})
export class CheckoutComponent {}