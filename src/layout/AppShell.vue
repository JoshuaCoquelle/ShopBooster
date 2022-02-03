<template>
  <AppNavigaton />

  <main class="px-4 md:px-0 container mx-auto">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import AppNavigaton from "@/layout/AppNavigaton.vue";
</script>
