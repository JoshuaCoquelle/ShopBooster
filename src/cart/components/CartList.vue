<template>
  <div v-if="cartStore.cartItemCount">
    <CartCheckoutButton @click="handleCheckout" v-if="!loading" />

    <ul class="max-w-[80%] mx-auto divide-y divide-gray-200" v-if="!loading">
      <CartListItem
        :key="product.id"
        :product="product"
        v-for="product in cartStore.cart"
      />
    </ul>

    <div v-else class="flex justify-center items-center h-[50vh]">
      <div
        class="w-10 h-10 border-4 border-primary border-solid rounded-full animate-spin border-t-transparent"
      />
    </div>

    <CartCheckoutButton @click="handleCheckout" v-if="!loading" />
  </div>

  <CartEmpty v-else />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { router } from "@/router";
import { useCartStore } from "@/cart/cart.store";
import CartListItem from "@/cart/components/CartListItem.vue";
import CartCheckoutButton from "@/cart/components/CartCheckoutButton.vue";
import CartEmpty from "@/cart/components/CartEmpty.vue";

const cartStore = useCartStore();
const loading = ref(false);

const handleCheckout = async () => {
  loading.value = true;
  await cartStore.checkout();
  loading.value = false;
  router.push("/success");
};
</script>
