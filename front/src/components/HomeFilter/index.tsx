import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../Button';
import PngIcon from '../Icon/pngIcon';

type FilterOptions = 'All' | 'Beer' | 'Wine';

interface FilterComponentProps {
  onFilterChange?: (filter: FilterOptions) => void;
}

const ProductFilter: React.FC<FilterComponentProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<FilterOptions>('Beer');

  const handleFilterChange = (filter: FilterOptions) => {
    if (filter !== activeFilter) {
      setActiveFilter(filter);
      onFilterChange && onFilterChange(filter);
    }
  };

  const getButtonVariant = (filter: FilterOptions) => {
    return activeFilter === filter ? 'filled' : 'text';
  };

  return (
    <View className="flex flex-row justify-between pt-4">
      <Button
        title="All"
        variant={getButtonVariant('All')}
        className="flex-1 p-3"
        onPress={() => handleFilterChange('All')}
      />
      <Button
        title="Beer"
        variant={getButtonVariant('Beer')}
        className="flex-1 p-3"
        onPress={() => handleFilterChange('Beer')}
      >
        <PngIcon iconName="BeerMug" size={20} />
      </Button>
      <Button
        title="Wine"
        variant={getButtonVariant('Wine')}
        className="flex-1 p-3"
        onPress={() => handleFilterChange('Wine')}
      >
        <PngIcon iconName="WineGlass" size={20} />
      </Button>
    </View>
  );
};

export default ProductFilter;
