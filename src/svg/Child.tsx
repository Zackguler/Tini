import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Child = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#808089"
      d="M9 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM10.662 9h2.676a3 3 0 0 1 2.846 2.051l1.877 5.633A1 1 0 0 1 17.113 18H15l-.81 3.242a1 1 0 0 1-.97.758h-2.44a1 1 0 0 1-.97-.758L9 18H6.887a1 1 0 0 1-.948-1.316l1.877-5.633A3 3 0 0 1 10.662 9Z"
    />
  </Svg>
);
export default Child;
