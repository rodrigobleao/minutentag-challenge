import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { HomeStackParamList } from '../types/homeStackNavigationTypes';
import { DetailsProductData } from '@/types/product';

export function useHomeStackNavigation() {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const goToDetailsScreen = (params: DetailsProductData) => {
    navigation.navigate('DetailsScreen', params);
  };

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const goBack = () => {
    navigation.goBack();
  };

  return {
    goToDetailsScreen,
    openDrawer,
    goBack,
  };
}
