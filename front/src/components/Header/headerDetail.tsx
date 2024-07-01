import React from 'react';
import HeaderBase from './base';
import { ArrowBackIcon, EllipseDotsIcon } from '../Icon/svgIcons';
import Button from '../Button';
import COLORS from '@/styles/colors';
import Typography from '../Typography';

interface HeaderDetailProps {
  goBack: () => void;
  action?: () => void;
}

const HeaderDetail: React.FC<HeaderDetailProps> = ({ goBack, action }) => {
  return (
    <HeaderBase>
      <Button onPress={goBack} className="w-12 h-12 p-2 bg-white">
        <ArrowBackIcon size={24} color={COLORS.iconDarkColor} />
      </Button>
      <Typography fontSize="18" fontWeight="700">
        Detail
      </Typography>
      <Button onPress={action} className="w-12 h-12 p-2 bg-white">
        <EllipseDotsIcon size={24} color={COLORS.iconDarkColor} />
      </Button>
    </HeaderBase>
  );
};

export default HeaderDetail;
