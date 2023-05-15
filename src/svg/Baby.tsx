import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Baby = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="#808089" d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    <Path
      fill="#808089"
      d="M5.89 9.99a1.5 1.5 0 0 1 2.12-.1c1.128 1.028 2.513 1.61 3.99 1.61 1.477 0 2.862-.582 3.99-1.61a1.5 1.5 0 0 1 2.02 2.22 9.363 9.363 0 0 1-2.575 1.674l1.167 6.127a1.76 1.76 0 0 1-3.435.756l-.546-2.182a.64.64 0 0 0-1.242 0l-.546 2.182a1.76 1.76 0 0 1-3.435-.756l1.167-6.127A9.362 9.362 0 0 1 5.99 12.11a1.5 1.5 0 0 1-.1-2.119Z"
    />
  </Svg>
);
export default Baby;
