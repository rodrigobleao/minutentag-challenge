import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

interface HeaderProps {
  children: ReactNode;
}

const HeaderBase: React.FC<HeaderProps> = ({ children }) => {
  return (
    <View className={'flex flex-row justify-between items-center'}>
      {children}
    </View>
  );
};

export default HeaderBase;
