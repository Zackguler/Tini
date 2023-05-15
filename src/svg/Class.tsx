import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const Class = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <G fill="#808089" clipPath="url(#a)">
      <Path d="M6.5 2h12a2 2 0 0 1 2 2v3.5H20a4 4 0 0 0-4 4v1H9v-1a4 4 0 0 0-4-4h-.5V4a2 2 0 0 1 2-2Z" />
      <Path d="M5 9a2.5 2.5 0 0 0-2.5 2.5V18a1 1 0 0 0 1 1h1v2a1 1 0 1 0 2 0v-2h12v2a1 1 0 1 0 2 0v-2h1a1 1 0 0 0 1-1v-6.5a2.5 2.5 0 0 0-5 0V13a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1.5A2.5 2.5 0 0 0 5 9Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M2.5 2h20v20h-20z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Class;
