import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const DepartureDate = () => (
  <Svg width={24} height={24} fill="none">
    <G fill="#808089" clipPath="url(#a)">
      <Path d="M8 2a1 1 0 0 1 1 1v1h6V3a1 1 0 1 1 2 0v1h1a4 4 0 0 1 4 4v3a1 1 0 0 1-1 1H4v7.998l.002.002H8.5a1 1 0 1 1 0 2H4.003C2.903 22 2 21.109 2 20V8a4 4 0 0 1 4-4h1V3a1 1 0 0 1 1-1Z" />
      <Path d="m18.707 14.293 3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 19H12a1 1 0 1 1 0-2h6.586l-1.293-1.293a1 1 0 0 1 1.414-1.414Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M2 2h20v20H2z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DepartureDate;
