import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  template: `
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">

        <h1 class="text-3xl font-bold mb-10">Checkout</h1>

        <div class="grid md:grid-cols-2 gap-8">

          <div class="bg-white p-6 rounded-xl shadow-sm space-y-4">
            <h2 class="font-semibold text-lg">Shipping</h2>

            <input class="input" placeholder="Full Name">
            <input class="input" placeholder="Email">
            <input class="input" placeholder="Address">
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h2 class="font-semibold text-lg mb-4">Summary</h2>

            <p class="flex justify-between mb-2">
              <span>Subtotal</span><span>$99.98</span>
            </p>

            <button class="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg">
              Place Order
            </button>
          </div>

        </div>

      </div>
    </section>
  `
})
export class CheckoutComponent {}