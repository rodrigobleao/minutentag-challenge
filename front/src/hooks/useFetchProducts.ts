import { useState, useEffect } from 'react';
import useImage from './useImage';
import { FetchHomeProductsResponse, HomeProductData } from '@/types/product';

const useProducts = () => {
  const [products, setProducts] = useState<HomeProductData[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: FetchHomeProductsResponse = await response.json();

        const productsWithImages = data.availableProducts.map(
          (product: HomeProductData) => ({
            ...product,
            image: useImage(product.id),
          })
        );

        setProducts(productsWithImages);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default useProducts;
