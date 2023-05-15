import {LayoutChangeEvent, ViewStyle} from 'react-native';

export interface ISvgIcon {
  size?: number;
  color?: string;
  style?: ViewStyle;
  fill?: string;
  onLayout?: (event: LayoutChangeEvent) => void;
  onClick?: () => void;
}
