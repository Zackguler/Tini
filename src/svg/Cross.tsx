import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Cross = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#27272A"
      d="M4.293 18.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-1.414-1.414L12 10.586 5.707 4.293a1 1 0 1 0-1.414 1.414L10.586 12l-6.293 6.293Z"
    />
  </Svg>
);
export default Cross;
