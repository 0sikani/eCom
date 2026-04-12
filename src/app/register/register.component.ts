import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="flex items-center justify-center min-h-[80vh]">
      <div class="card p-8 w-full max-w-md">

        <h2 class="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <div class="space-y-4">
          <input class="input" placeholder="Full Name">
          <input class="input" placeholder="Email">
          <input type="password" class="input" placeholder="Password">

          <button class="w-full bg-indigo-600 text-white py-2 rounded-lg" class="hover:scale-105 active:scale-95 transition duration-200">
            Register
          </button>
        </div>

        <p class="text-sm text-center mt-4">
          Already have an account?
          <a routerLink="/login" class="text-indigo-600">Login</a>
        </p>

      </div>
    </section>
  `
})
export class RegisterComponent {}