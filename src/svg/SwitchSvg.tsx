import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
import {colors} from '../themes/colors';
const SwitchSvg = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={colors.blue}
        fillRule="evenodd"
        d="M4.195 1.529c.26-.26.683-.26.943 0l2.667 2.666a.667.667 0 1 1-.943.943L5.333 3.609v9.058a.667.667 0 1 1-1.333 0V3.609L2.47 5.138a.667.667 0 1 1-.942-.943L4.195 1.53Zm7.138 1.138c.368 0 .667.298.667.666v9.057l1.528-1.528a.667.667 0 0 1 .943.943l-2.666 2.666a.667.667 0 0 1-.943 0l-2.667-2.666a.667.667 0 1 1 .943-.943l1.529 1.528V3.333c0-.368.298-.666.666-.666Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M1.333 1.333h13.333v13.333H1.333z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SwitchSvg;
