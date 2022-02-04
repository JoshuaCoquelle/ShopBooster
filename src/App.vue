<template>
  <AppShell />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/products/product.store";
import AppShell from "@/layout/AppShell.vue";

onMounted(async () => {
  const productStore = useProductStore();
  const cartSet = localStorage.getItem("cart") !== null;
  const productsSet = localStorage.getItem("products") !== null;

  if (!cartSet || !productsSet) await productStore.setProducts();
});
</script>
