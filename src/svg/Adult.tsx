import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Adult = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#808089"
      d="M9 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM7 12a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3.434a1 1 0 0 1-.485.857L14.5 17.5V21a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3.5l-2.014-1.209A1 1 0 0 1 7 15.434V12Z"
    />
  </Svg>
);
export default Adult;
