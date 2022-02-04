<template>
  <AppShell />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/products/product.store";
import AppShell from "@/layout/AppShell.vue";

onMounted(async () => {
  const productStore = useProductStore();
  const cartCached = localStorage.getItem("cart") !== null;
  const productsCached = localStorage.getItem("product") !== null;

  if (!cartCached && !productsCached) await productStore.setProducts();
});
</script>
