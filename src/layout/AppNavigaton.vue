<template>
  <nav class="p-4 mb-5 shadow">
    <div class="container flex justify-between items-center mx-auto">
      <RouterLink to="/" class="text-primary text-2xl font-bold">
        ShopBooster
      </RouterLink>

      <div class="flex items-center">
        <RouterLink to="cart">
          <svg
            class="h-7 w-7 mr-2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </RouterLink>

        <span class="text-primary text-bold">
          {{ cartStore.cartItemCount }}
        </span>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useCartStore } from "@/cart/cart.store";

const cartStore = useCartStore();
</script>
