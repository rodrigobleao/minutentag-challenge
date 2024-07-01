export type SkuData = {
  code: string;
  name: string;
  stock: number;
  price: number;
};

export interface SkuUpdateReturn {
  id: number;
  skus: SkuData[];
  selectedSku: number;
}

export type ProductDetails = {
  id: number;
  brand: string;
  origin: string;
  information: string;
  selectedSku: SkuData;
};

export type HomeProductData = {
  id: number;
  brand: string;
  price: number;
  image?: string;
};

export type FetchHomeProductsResponse = {
  availableProducts: HomeProductData[];
};

export type DetailsProductData = {
  id: number;
  brand: string;
};
