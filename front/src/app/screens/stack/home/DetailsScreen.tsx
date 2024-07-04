import Typography from '@/components/Typography';
import { ScrollView, Image, View } from 'react-native';
import Button from '@/components/Button';
import { DetailsScreenRouteProp } from '@navigation/types/homeStackNavigationTypes';
import { useHomeStackNavigation } from '@navigation/hooks/useHomeStackNavigation';
import HeaderDetail from '@/components/Header/headerDetail';
import ExpandableText from '@/components/ExpandableText';
import { BagIcon } from '@/components/Icon/svgIcons';
import COLORS from '@/styles/colors';
import SizeSelector from '@/components/DetailsSizeSelector';
import useImage from '@/hooks/useImage';
import useFetchDetails from '@/hooks/useFetchDetails';
import { useState, useEffect } from 'react';
import useUpdateStockPrice from '@/hooks/useUpdateStockPrice';

export default function Details({ route }: DetailsScreenRouteProp) {
  const { id, brand } = route.params;
  const { goBack } = useHomeStackNavigation();
  const detailsData = useFetchDetails(id, brand);
  const { skus, initialSelectedSkuCode } = useUpdateStockPrice(id);
  const [selectedSkuCode, setSelectedSkuCode] = useState<string>();

  useEffect(() => {
    if (!selectedSkuCode) {
      setSelectedSkuCode(initialSelectedSkuCode);
    }
  }, [initialSelectedSkuCode]);

  const selectedSku = skus.find(
    (sku) => sku.code === selectedSkuCode?.toString()
  );

  if (!detailsData || !selectedSku || !selectedSkuCode) return null;

  return (
    <ScrollView
      className="flex-1 bg-background px-8 pt-5"
      contentContainerStyle={{ paddingBottom: 28 }}
    >
      <HeaderDetail goBack={goBack} />
      <Image
        source={useImage(id)}
        className="h-80 w-full mt-2"
        resizeMode="contain"
      />
      <View className="flex w-full flex-row justify-between mt-10">
        <Typography fontSize="24" fontWeight="700" className="text-black">
          {detailsData.brand}
        </Typography>
        <Typography fontSize="24" fontWeight="700" className="text-primary">
          {(selectedSku.price / 100).toFixed(2)}
        </Typography>
      </View>
      <Typography fontSize="16" fontWeight="400" className="text-darkGray mt-1">
        {`Origin: ${detailsData.origin} | Stock: ${selectedSku.stock}`}
      </Typography>
      <Typography fontSize="18" fontWeight="500" className="text-black mt-7">
        Description
      </Typography>
      <ExpandableText text={detailsData.information} />
      <Typography fontSize="18" fontWeight="500" className="text-black mt-6">
        Size
      </Typography>
      <SizeSelector
        skus={skus}
        filter={selectedSkuCode}
        setFilter={setSelectedSkuCode}
        className="mt-3"
      />
      <View className="flex flex-row h-16 items-center mt-12">
        <Button variant="outlined" className="w-16 h-16">
          <BagIcon size={24} color={COLORS.primary} />
        </Button>
        <Button title="Add to cart" className="flex-1 ml-5 h-full" />
      </View>
    </ScrollView>
  );
}
