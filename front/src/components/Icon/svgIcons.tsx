import React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

interface SvgIconProps {
  size: number;
  color: string;
}

export const HomeIcon: React.FC<SvgIconProps> = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 20">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 20H16.8936C18.0602 20 19.0107 19.071 18.9999 17.9309V8.1763C18.9999 7.57456 18.7299 6.99393 18.2546 6.60333L10.8663 0.490895C10.0778 -0.163632 8.92207 -0.163632 8.13356 0.490895L0.745306 6.60333C0.270038 6.99393 0 7.564 0 8.1763V17.9309C0 19.071 0.950535 20 2.1171 20H7V14.5C7 13.1193 8.11929 12 9.5 12C10.8807 12 12 13.1193 12 14.5V20Z"
        fill={color}
      />
    </Svg>
  );
};

export const CheckOutIcon: React.FC<SvgIconProps> = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 20" fill="none">
      <Rect
        stroke={color}
        x="0.75"
        y="0.75"
        width="16.5"
        height="18.5"
        rx="3.25"
        strokeWidth="1.5"
      />
      <Path
        stroke={color}
        d="M6 6H11 M6 14H11 M6 10H13"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const BagIcon: React.FC<
  SvgIconProps & { notificationDot?: boolean }
> = ({ size, color, notificationDot }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 22" fill="none">
      <Circle cx="10" cy="5" r="4.25" stroke={color} strokeWidth="1.5" />
      <Path
        d="M2.30623 8.59689C2.50953 6.97049 3.89208 5.75 5.53113 5.75H14.4689C16.1079 5.75 17.4905 6.97049 17.6938 8.59689L18.6938 16.5969C18.9362 18.5367 17.4237 20.25 15.4689 20.25H4.53113C2.57626 20.25 1.06375 18.5367 1.30623 16.5969L2.30623 8.59689Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <Circle cx="7.75" cy="9.75" r="0.75" fill={color} />
      <Circle cx="11.75" cy="9.75" r="0.75" fill={color} />
      <Circle
        cx="17.5"
        cy="5.5"
        r="2.75"
        fill={notificationDot ? color : 'none'}
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export const SettingIcon: React.FC<SvgIconProps> = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 21">
      <Path
        fill="none"
        stroke={color}
        d="M17.3845 4.48878C17.1245 4.17878 16.6945 4.08878 16.3145 4.20878C15.5045 4.47878 14.5845 4.40878 13.7845 3.95878C12.9845 3.49878 12.4645 2.73878 12.2845 1.90878C12.1945 1.50878 11.8945 1.17878 11.4945 1.11878C10.4945 0.958778 9.45454 0.958778 8.43454 1.12878C8.03454 1.19878 7.74454 1.51878 7.65454 1.91878C7.47454 2.75878 6.96454 3.51878 6.16454 3.98878C5.36454 4.45878 4.44454 4.51878 3.63454 4.25878C3.25454 4.13878 2.82454 4.22878 2.56454 4.53878C1.91454 5.34878 1.40454 6.24878 1.05454 7.19878C0.914544 7.57878 1.05454 7.99878 1.35454 8.25878C1.98454 8.83878 2.38454 9.66878 2.39454 10.5888C2.39454 11.5188 1.99454 12.3388 1.36454 12.9188C1.06454 13.1888 0.934544 13.6088 1.07454 13.9788C1.25454 14.4488 1.47454 14.9188 1.73454 15.3688C1.99454 15.8188 2.29454 16.2388 2.61454 16.6288C2.87454 16.9388 3.30454 17.0288 3.68454 16.9088C4.49454 16.6388 5.41454 16.7088 6.21454 17.1588C7.01454 17.6188 7.53454 18.3788 7.71454 19.2088C7.80454 19.5988 8.09454 19.9288 8.49454 19.9888C9.50454 20.1488 10.5345 20.1488 11.5545 19.9788C11.9545 19.9088 12.2445 19.5888 12.3345 19.1888C12.5145 18.3488 13.0245 17.5888 13.8245 17.1188C14.6245 16.6488 15.5445 16.5888 16.3545 16.8488C16.7445 16.9688 17.1745 16.8788 17.4245 16.5588C18.0745 15.7488 18.5845 14.8488 18.9445 13.8988C19.0845 13.5188 18.9445 13.0988 18.6445 12.8388C18.0045 12.2688 17.6045 11.4388 17.5945 10.5188C17.5945 9.58878 17.9945 8.76878 18.6245 8.18878C18.9245 7.91878 19.0545 7.49878 18.9145 7.12878C18.7345 6.65878 18.5145 6.18878 18.2545 5.73878C18.0045 5.28878 17.7045 4.87878 17.3845 4.48878Z M10.0046 13.5188C11.6393 13.5188 12.9646 12.1935 12.9646 10.5588C12.9646 8.92399 11.6393 7.59875 10.0046 7.59875C8.36979 7.59875 7.04456 8.92399 7.04456 10.5588C7.04456 12.1935 8.36979 13.5188 10.0046 13.5188Z"
        strokeWidth="1.5"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const MenuIcon: React.FC<SvgIconProps> = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 20" fill="none">
      <Rect x="4" y="5" width="16" height="1.5" rx="0.75" fill={color} />
      <Rect x="4" y="11" width="10" height="1.5" rx="0.75" fill={color} />
      <Rect x="4" y="17" width="16" height="1.5" rx="0.75" fill={color} />
    </Svg>
  );
};

export const AddIcon: React.FC<SvgIconProps> = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="11" y="5" width="2" height="14" rx="1" fill="white" />
      <Rect
        x="5"
        y="13"
        width="2"
        height="14"
        rx="1"
        transform="rotate(-90 5 13)"
        fill={color}
      />
    </Svg>
  );
};

export const ArrowBackIcon: React.FC<SvgIconProps> = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 20" fill="none">
      <Rect x="5" y="11" width="15" height="1.5" fill={color} />
      <Path
        d="M11 5.20001L4 11.7L11 18.2"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export const EllipseDotsIcon: React.FC<SvgIconProps> = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 20" fill="none">
      <Circle cx="5.5" cy="11.5" r="1.5" fill={color} />
      <Circle cx="12.5" cy="11.5" r="1.5" fill={color} />
      <Circle cx="19.5" cy="11.5" r="1.5" fill={color} />
    </Svg>
  );
};

export const SearchIcon: React.FC<SvgIconProps> = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Circle
        cx="7.06471"
        cy="7.06471"
        r="6.31471"
        stroke={color}
        stroke-width="1.5"
      />
      <Path
        d="M12.0924 11.8441L15 14.6466"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};
