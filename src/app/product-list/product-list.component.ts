import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">

        <h1 class="text-3xl font-bold mb-10">All Products</h1>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          @for (item of [1,2,3,4,5,6,7,8]; track item) {
            <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group">

              <div class="overflow-hidden">
                <img src="https://via.placeholder.com/400"
                     class="w-full h-56 object-cover group-hover:scale-105 transition duration-300"/>
              </div>

              <div class="p-5">
                <h3 class="font-semibold text-gray-800 mb-1">Premium Item</h3>
                <p class="text-sm text-gray-500 mb-3">High quality product</p>

                <div class="flex justify-between items-center">
                  <span class="font-bold text-lg">$49.99</span>

                  <a [routerLink]="['/products', item]"
                     class="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    View
                  </a>
                </div>
              </div>

            </div>
          }

        </div>
      </div>
    </section>
  `
})
export class ProductListComponent {}