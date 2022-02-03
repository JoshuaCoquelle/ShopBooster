import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/products/ProductList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "products",
      component: ProductList,
    },
    // {
    //   path: "/cart",
    //   name: "cart",
    //   component: @TODO,
    // },
  ],
});

export default router;
