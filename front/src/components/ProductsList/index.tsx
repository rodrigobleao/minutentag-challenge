import { View, Image } from 'react-native';
import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import { AddIcon } from '../Icon/svgIcons';
import COLORS from '@/styles/colors';
import { useHomeStackNavigation } from '@/app/navigation/hooks/useHomeStackNavigation';
import { HomeProductData } from '@/types/product';
import useImage from '@/hooks/useImage';

interface ProductsListProps {
  products: HomeProductData[] | null;
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const { goToDetailsScreen } = useHomeStackNavigation();

  return (
    <View className="flex-row flex-wrap justify-between mt-4">
      {products &&
        products.map((product) => (
          <View
            key={product.id}
            className="items-center rounded-xl bg-white mt-3"
            style={{
              width: '48%',
              shadowColor: COLORS.lightGray,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 4,
            }}
          >
            <Typography fontSize="16" fontWeight="500">
              {product.brand}
            </Typography>
            <Image
              source={useImage(product.id)}
              className="h-40 w-full"
              resizeMode="contain"
            />
            <View className="flex-row justify-between items-end w-full">
              <Typography fontSize="18" fontWeight="400" className="pb-2 pl-4">
                ${(product.price / 100).toFixed(2)}
              </Typography>
              <Button
                className="rounded-tl-xl rounded-tr-none rounded-br-xl rounded-bl-none p-2"
                onPress={() =>
                  goToDetailsScreen({ id: product.id, brand: product.brand })
                }
              >
                <AddIcon size={24} color="white" />
              </Button>
            </View>
          </View>
        ))}
    </View>
  );
};

export default ProductsList;
