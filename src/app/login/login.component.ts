import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="flex items-center justify-center min-h-[80vh]">
      <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

        <h2 class="text-2xl font-bold mb-6 text-center">Welcome Back</h2>

        <div class="space-y-4">
          <input class="input" placeholder="Email">
          <input type="password" class="input" placeholder="Password">

          <button class="w-full bg-indigo-600 text-white py-2 rounded-lg">
            Login
          </button>
        </div>

        <p class="text-sm text-center mt-4">
          No account?
          <a routerLink="/register" class="text-indigo-600">Register</a>
        </p>

      </div>
    </section>
  `
})
export class LoginComponent {}