import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <section class="py-12">
      <div class="container mx-auto px-4 max-w-md">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6 text-center">Login</h2>
        <form class="space-y-4">
          <input type="email" placeholder="Email" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <input type="password" placeholder="Password" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <button class="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition">Login</button>
        </form>
        <p class="mt-4 text-center text-gray-600">
          Don't have an account? <a routerLink="/register" class="text-indigo-600 hover:underline">Register</a>
        </p>
      </div>
    </section>
  `,
  standalone: true
})
export class LoginComponent {}
