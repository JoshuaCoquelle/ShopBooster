<template>
  <div
    class="h-full w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
  >
    <div
      :style="{ backgroundImage: `url(${product.image})` }"
      class="flex flex-col items-end justify-end h-56 w-full bg-cover"
    >
      <button
        @click="addProductToCart"
        class="p-2 rounded-full bg-primary text-white mx-5 -mb-4 hover:bg-black focus:outline-none"
      >
        <svg
          class="h-5 w-5"
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
      </button>
    </div>

    <div class="px-5 py-3">
      <p class="text-gray-700 uppercase text-xs">{{ props.product.title }}</p>
      <p class="text-gray-500 mt-2 text-sm font-semibold">
        ${{ Math.round(product.price) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/products/product.types";
import { useProductStore } from "@/products/product.store";
import { useCartStore } from "@/cart/cart.store";

const props = defineProps({
  product: Object as IProduct,
});

const addProductToCart = () => {
  const productStore = useProductStore();
  const cartStore = useCartStore();

  cartStore.addToCart(props.product);
  productStore.removeProduct(props.product.id);
};
</script>
