import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Passenger = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#808089"
      d="M14.425 12.374a5 5 0 1 0-4.849 0 8.008 8.008 0 0 0-5.514 6.628c-.068.548.386.998.938.998h14c.552 0 1.007-.45.938-.998a8.009 8.009 0 0 0-5.513-6.628Z"
    />
  </Svg>
);
export default Passenger;
