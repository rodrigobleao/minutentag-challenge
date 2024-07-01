import Typography from '@/components/Typography';
import { ScrollView } from 'react-native';
import SearchInput from '@/components/Search';
import { useHomeStackNavigation } from '@/app/navigation/hooks/useHomeStackNavigation';
import HeaderHome from '@/components/Header/headerHome';
import HomeSection from '@/components/HomeSection';
import ProductsList from '@/components/ProductsList';
import ProductFilter from '@/components/HomeFilter';
import useProducts from '@/hooks/useFetchProducts';

export default function Home() {
  const { openDrawer } = useHomeStackNavigation();
  const products = useProducts();

  return (
    <ScrollView
      className="flex-1 bg-background px-8 pt-5"
      contentContainerStyle={{ paddingBottom: 28 }}
    >
      <HeaderHome openDrawer={openDrawer} />
      <Typography fontSize="18" fontWeight="400" className="text-gray mt-6">
        Hi Mr. Michael,
      </Typography>
      <Typography fontSize="24" fontWeight="500" className="text-black mt-1">
        Welcome Back!
      </Typography>
      <SearchInput
        placeholder="Search burger, pizza, drink or etc..."
        className="mt-6"
      />
      <HomeSection title="Drink Category" className="mt-6" />
      <ProductFilter />
      <HomeSection title="Populer" className="mt-6" />
      <ProductsList products={products} />
    </ScrollView>
  );
}
