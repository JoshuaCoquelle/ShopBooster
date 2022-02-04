import { defineStore } from "pinia";
import { CartService } from "@/cart/cart.service";
import type { ICartState } from "@/cart/cart.types";
import type { IProduct } from "@/products/product.types";

export const useCartStore = defineStore({
  id: "cart",

  state: (): ICartState => ({
    cart: [],
  }),

  getters: {
    cartItemCount: (state: ICartState): number => state.cart.length,
  },

  actions: {
    addToCart(product: IProduct) {
      this.cart.push(product);
    },

    removeFromCart(productId: IProduct["id"]) {
      this.cart = this.cart.filter(
        (cartItem: IProduct) => cartItem.id !== productId
      );
    },

    async checkout(): Promise<void> {
      try {
        await CartService.checkout();
        this.cart = [];
      } catch (error) {
        alert(error);
      }
    },
  },
});
