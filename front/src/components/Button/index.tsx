import React from 'react';
import { ButtonProps, TouchableOpacity, View } from 'react-native';
import Typography from '../Typography';

interface CustomButtonProps extends Omit<ButtonProps, 'title'> {
  title?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'gray';
  className?: string;
}

const Button: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  children,
  variant = 'filled',
  color = 'primary',
  className,
}) => {
  const buttonStyles = {
    filled: {
      primary: 'bg-primary',
      gray: 'bg-gray',
    },
    outlined: {
      primary: 'border-primary border rounded-2xl',
      gray: 'border-gray border rounded-2xl',
    },
    text: {
      primary: 'bg-transparent',
      gray: 'bg-transparent',
    },
  };

  const textStyles = {
    filled: {
      primary: 'text-white',
      gray: 'text-black',
    },
    outlined: {
      primary: 'text-primary',
      gray: 'text-gray',
    },
    text: {
      primary: 'text-black',
      gray: 'text-gray',
    },
  };

  const buttonVariant = buttonStyles[variant][color];
  const textVariant = textStyles[variant][color];

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex flex-row items-center justify-center gap-2 rounded-xl w-auto ${buttonVariant} ${className}`}
    >
      <View className={'flex flex-row gap-2 items-center justify-center'}>
        {children}
        {title && (
          <Typography fontWeight="500" fontSize="18" className={textVariant}>
            {title}
          </Typography>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
