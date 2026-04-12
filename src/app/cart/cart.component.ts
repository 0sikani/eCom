import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-6">

        <h1 class="text-3xl font-bold mb-10">Shopping Cart</h1>

        <div class="space-y-6">

          @for (item of [1,2]; track item) {
            <div class="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm">

              <div class="flex items-center gap-4">
                <img src="https://via.placeholder.com/80"
                     class="rounded-lg w-20 h-20"/>

                <div>
                  <h3 class="font-semibold">Product Name</h3>
                  <p class="text-gray-500">$49.99</p>
                </div>
              </div>

              <button class="text-red-500 hover:text-red-700">
                Remove
              </button>

            </div>
          }

        </div>

        <div class="mt-10 flex justify-between items-center">
          <span class="text-xl font-bold">Total: $99.98</span>

          <a routerLink="/checkout"
             class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
            Checkout
          </a>
        </div>

      </div>
    </section>
  `
})
export class CartComponent {}