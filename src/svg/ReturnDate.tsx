import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const ReturnDate = () => (
  <Svg width={24} height={24} fill="none">
    <G fill="#808089" clipPath="url(#a)">
      <Path d="M15 3a1 1 0 1 1 2 0v1h1a4 4 0 0 1 4 4v12c0 1.109-.903 2-2.003 2H15.5a1 1 0 1 1 0-2h4.498l.002-.002V12H3a1 1 0 0 1-1-1V8a4 4 0 0 1 4-4h1V3a1 1 0 0 1 2 0v1h6V3Z" />
      <Path d="M6.707 15.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L5.414 19H12a1 1 0 1 0 0-2H5.414l1.293-1.293Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M22 2H2v20h20z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ReturnDate;
