<template>
  <li class="py-6 flex">
    <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md">
      <img
        :src="props.product.image"
        :alt="props.product.description"
        class="w-full h-full object-center object-cover"
      />
    </div>

    <div class="ml-4 flex-1 flex flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3 class="max-w-[60%]">
            {{ props.product.title }}
          </h3>
          <p class="ml-4">${{ Math.round(props.product.price) }}</p>
        </div>
        <p class="mt-1 text-xs text-gray-500 max-w-[70%]">
          {{ props.product.description }}
        </p>
      </div>

      <div class="flex-1 flex items-end text-sm mt-4">
        <button
          @click="removeProductFromCart"
          type="button"
          class="font-medium text-primary hover:text-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useProductStore } from "@/products/product.store";
import { useCartStore } from "@/cart/cart.store";

const props = defineProps(["product"]);

const removeProductFromCart = () => {
  const productStore = useProductStore();
  const cartStore = useCartStore();

  cartStore.removeFromCart(props.product.id);
  productStore.addProduct(props.product);
};
</script>
