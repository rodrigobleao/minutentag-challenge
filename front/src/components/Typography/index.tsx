import React from 'react';
import { Text, TextProps, View } from 'react-native';

interface TypographyProps extends TextProps {
  children: React.ReactNode;
  fontWeight: '400' | '500' | '700';
  fontSize: '14' | '16' | '18' | '24';
}

const fontSizes = {
  '14': 'text-sm',
  '16': 'text-base',
  '18': 'text-lg',
  '24': 'text-3xl',
};

const fontWeights = {
  '400': 'font-regular',
  '500': 'font-medium',
  '700': 'font-bold',
};

const Typography: React.FC<TypographyProps> = ({
  fontWeight,
  fontSize,
  children,
  className,
  ...rest
}) => {
  const font = fontWeights[fontWeight];
  const size = fontSizes[fontSize];
  const textStyle = `${font} ${size}`;

  return (
    <View>
      <Text {...rest} className={`${className} ${textStyle}`}>
        {children}
      </Text>
    </View>
  );
};

export default Typography;
