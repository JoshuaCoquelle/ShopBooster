export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: "electronics" | "jewelery" | "men's clothing" | "women's clothing";
  image: string;
  price: number;
  rating: Record<string, number>;
}

export interface IProductService {
  all: () => Promise<Response>;
}

export interface IProductState {
  products: IProduct[];
}
