import { SkuData, SkuUpdateReturn } from '@/types/product';
import { useState, useEffect } from 'react';

const useUpdateStockPrice = (productCode: string) => {
  const [skus, setSkus] = useState<SkuData[]>([]);
  const [initialSelectedSkuCode, setInitialSelectedSkuCode] =
    useState<string>();

  useEffect(() => {
    const fetchSkus = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/stock-price/${productCode}`
        );
        if (!response.ok) {
          throw new Error('SKU not found');
        }
        const data: SkuUpdateReturn = await response.json();
        setSkus(data.skus);
        setInitialSelectedSkuCode(data.selectedSku);
      } catch (err) {
        console.error((err as Error).message);
      }
    };

    fetchSkus();

    const intervalId = setInterval(fetchSkus, 5000);

    return () => clearInterval(intervalId);
  }, [productCode]);

  return { skus, initialSelectedSkuCode };
};

export default useUpdateStockPrice;
