import { defineStore } from "pinia";
import { ProductService } from "@/products/product.service";
import type { IProduct, IProductState } from "@/products/product.types";

export const useProductStore = defineStore({
  id: "product",

  state: (): IProductState => ({
    products: [],
  }),

  actions: {
    async setProducts(): Promise<void> {
      try {
        const res: Response = await ProductService.all();
        const products: IProduct[] = await res.json();
        this.products = products;
      } catch (error) {
        alert("🤪 🤪 🤪");
      }
    },

    addProduct(product: IProduct) {
      this.products.push(product);
    },

    removeProduct(productId: IProduct["id"]) {
      this.products = this.products.filter(
        (product: IProduct) => product.id !== productId
      );
    },
  },
});
