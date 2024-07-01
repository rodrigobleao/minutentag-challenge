import React from 'react';
import HeaderBase from './base';
import { MenuIcon } from '../Icon/svgIcons';
import { Image } from 'react-native';
import Button from '../Button';
import COLORS from '@/styles/colors';

interface HeaderHomeProps {
  openDrawer: () => void;
}

const HeaderHome: React.FC<HeaderHomeProps> = ({ openDrawer }) => {
  return (
    <HeaderBase>
      <Button onPress={openDrawer} className="w-12 h-12 p-2 bg-white">
        <MenuIcon size={24} color={COLORS.iconDarkColor} />
      </Button>
      <Image
        source={require('@assets/images/avatar.jpg')}
        className="w-12 h-12 rounded-full"
      />
    </HeaderBase>
  );
};

export default HeaderHome;
