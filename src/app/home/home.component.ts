import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-5xl font-extrabold text-center text-gray-900 mb-12">Welcome to ECom</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 class="text-2xl font-semibold text-gray-800 mb-3">Featured Product 1</h2>
            <p class="text-gray-600">Short description of product 1.</p>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 class="text-2xl font-semibold text-gray-800 mb-3">Featured Product 2</h2>
            <p class="text-gray-600">Short description of product 2.</p>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 class="text-2xl font-semibold text-gray-800 mb-3">Featured Product 3</h2>
            <p class="text-gray-600">Short description of product 3.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class HomeComponent {}
