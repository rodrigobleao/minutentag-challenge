import { ProductDetails } from '@/types/product';
import { useState, useEffect } from 'react';

const useFetchDetails = (productId: number, productBrand: string) => {
  const [details, setDetails] = useState<ProductDetails | null>(null);

  const formattedUrl =
    `http://localhost:3000/api/${productId}-` +
    productBrand.toLowerCase().replace(/ /g, '-');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(formattedUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data: ProductDetails = await response.json();
        setDetails(data);
      } catch (error) {
        console.error(
          `Failed to fetch product details for product ${productId}:`,
          error
        );
      }
    };

    fetchProductDetails();

    // Limpar os detalhes ao desmontar o componente
    return () => {
      setDetails(null);
    };
  }, [productId]);

  return details;
};

export default useFetchDetails;
