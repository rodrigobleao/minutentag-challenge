import { DetailsProductData } from '@/types/product';
import { RouteProp } from '@react-navigation/native';

export type DetailsScreenRouteProp = {
  route: RouteProp<{ DetailsScreen: DetailsProductData }, 'DetailsScreen'>;
};

export type HomeStackParamList = {
  DetailsScreen: DetailsProductData;
  HomeDrawerNavigation: undefined;
};
