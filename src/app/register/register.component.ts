import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-4">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-6 text-center">Register</h2>
        <form class="space-y-4">
          <input type="text" placeholder="Full Name" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <input type="email" placeholder="Email" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <input type="password" placeholder="Password" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <input type="password" placeholder="Confirm Password" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <button class="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">Register</button>
        </form>
        <p class="mt-4 text-center text-gray-600">
          Already have an account? <a routerLink="/login" class="text-indigo-600 hover:underline">Login</a>
        </p>
      </div>
    </section>
  `,
  standalone: true
})
export class RegisterComponent {}
