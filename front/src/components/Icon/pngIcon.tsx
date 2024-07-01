import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

interface PngIconProps {
  iconName: 'BeerMug' | 'WineGlass';
  size: number;
}

const PngIcon: React.FC<PngIconProps> = ({ iconName, size = 20 }) => {
  let iconPath: ImageSourcePropType;

  switch (iconName) {
    case 'BeerMug':
      iconPath = require('@assets/icons/BeerMug.png');
      break;
    case 'WineGlass':
      iconPath = require('@assets/icons/WineGlass.png');
      break;
  }

  return <Image source={iconPath} style={{ width: size, height: size }} />;
};

export default PngIcon;
