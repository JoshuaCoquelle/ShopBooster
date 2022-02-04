import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/products/components/ProductList.vue";
import CartList from "@/cart/components/CartList.vue";
import CartSuccess from "@/cart/components/CartSuccess.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "products",
      component: ProductList,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartList,
    },
    {
      path: "/success",
      name: "cart-success",
      component: CartSuccess,
    },
  ],
});

export default router;
