<template>
  <h3 class="text-center text-2xl font-semibold text-primary my-10">
    Products
  </h3>

  <div
    class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <ProductListItem
      :key="product.id"
      :product="product"
      v-for="product in productStore.products"
    />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "@/products/product.store";
import ProductListItem from "@/products/components/ProductListItem.vue";

const productStore = useProductStore();
</script>
