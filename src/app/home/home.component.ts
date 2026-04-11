import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to ECom</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 class="text-xl font-semibold text-gray-700 mb-2">Featured Product 1</h2>
            <p class="text-gray-500">Short description of product 1.</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 class="text-xl font-semibold text-gray-700 mb-2">Featured Product 2</h2>
            <p class="text-gray-500">Short description of product 2.</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 class="text-xl font-semibold text-gray-700 mb-2">Featured Product 3</h2>
            <p class="text-gray-500">Short description of product 3.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class HomeComponent {}
