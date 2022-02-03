import type { IProductService } from "@/products/product.types";

export const ProductService: IProductService = {
  all(): Promise<Response> {
    return fetch(`${import.meta.env.VITE_STORE_API_URL}/products`);
  },
};
