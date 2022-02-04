import type { ICartService } from "@/cart/cart.types";

export const CartService: ICartService = {
  checkout(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  },
};
