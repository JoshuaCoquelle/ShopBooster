import type { IProduct } from "@/products/product.types";

export interface ICartService {
  checkout: () => Promise<void>;
}

export interface ICartState {
  cart: IProduct[];
}
