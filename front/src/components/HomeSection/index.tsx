import { Touchable, View } from 'react-native';
import React from 'react';
import Typography from '../Typography';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface HomeSectionProps {
  title: string;
  className?: string;
  action?: () => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  className,
  action,
}) => {
  return (
    <View className={`flex-row w-full justify-between ${className}`}>
      <Typography fontSize="18" fontWeight="700">
        {title}
      </Typography>
      <TouchableOpacity onPress={action}>
        <Typography fontSize="16" fontWeight="400" className="text-gray">
          See All
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default HomeSection;
