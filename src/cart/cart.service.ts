import type { ICartService } from "@/cart/cart.types";

export const CartService: ICartService = {
  checkout(): Promise<void> {
    return new Promise((resolve) => {
      console.log("checking out ...");
      setTimeout(() => {
        resolve();
        console.log("DONE!");
      }, 2500);
    });
  },
};
