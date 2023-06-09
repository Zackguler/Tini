import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const DeleteIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#808089"
      d="M7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 0 0 1.414-1.414L13.414 12l4.293-4.293a1 1 0 0 0-1.414-1.414L12 10.586 7.707 6.293Z"
    />
  </Svg>
);
export default DeleteIcon;
