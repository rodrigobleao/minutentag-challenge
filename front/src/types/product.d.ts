export type SkuData = {
  code: string;
  name: string;
  stock: number;
  price: number;
};

export interface SkuUpdateReturn {
  id: string;
  skus: SkuData[];
  selectedSku: string;
}

export type ProductDetails = {
  id: string;
  brand: string;
  origin: string;
  information: string;
  selectedSku: SkuData;
};

export type HomeProductData = {
  id: string;
  brand: string;
  price: number;
  image?: ImageSourcePropType;
};

export type FetchHomeProductsResponse = {
  availableProducts: HomeProductData[];
};

export type DetailsProductData = {
  id: string;
  brand: string;
};
