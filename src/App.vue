<template>
  <AppShell />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/products/product.store";
import AppShell from "@/layout/AppShell.vue";

const productStore = useProductStore();
onMounted(async () => await productStore.setProducts());
</script>
