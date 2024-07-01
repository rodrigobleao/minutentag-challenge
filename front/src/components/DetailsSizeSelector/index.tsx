import { View } from 'react-native';
import Button from '../Button';
import { SkuData } from '@/types/product';

interface Props {
  skus?: SkuData[];
  className?: string;
  setFilter: (filter: number) => void;
  filter: number;
}

const SizeSelector: React.FC<Props> = ({
  skus,
  setFilter,
  filter,
  className,
}) => {
  const handleUpdateFilter = (sku: number) => {
    setFilter(sku);
  };

  const getButtonLabel = (name: string): string => {
    if (name.includes('-')) {
      return name.split(' ').slice(0, name.indexOf('-')).join(' ');
    } else {
      return name;
    }
  };

  const renderButtons = () => {
    return !skus
      ? null
      : skus.map((sku) => {
          const buttonName = getButtonLabel(sku.name);
          return (
            <Button
              key={sku.code}
              title={buttonName}
              variant="outlined"
              color={filter.toString() === sku.code ? 'primary' : 'gray'}
              className="px-2"
              onPress={() => handleUpdateFilter(parseInt(sku.code))}
            />
          );
        });
  };

  return (
    <View className={`flex flex-row flex-wrap gap-6 items-start ${className}`}>
      {renderButtons()}
    </View>
  );
};

export default SizeSelector;
