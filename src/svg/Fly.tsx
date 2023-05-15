import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type FlyTypes = 'up' | 'down';

export interface FlyProps {
  type: FlyTypes;
}

const Fly = ({type}: FlyProps) => {
  const d =
    type === 'up'
      ? 'm2.163 12.119-.256-6.132a.5.5 0 0 1 .631-.503l.79.215a1 1 0 0 1 .666.593L4.74 8.15l2.897.777-.851-7.139a.5.5 0 0 1 .704-.514l1.556.708a1 1 0 0 1 .538.605l2.4 7.504 4.588 1.23a2.25 2.25 0 1 1-1.164 4.347l-13.245-3.55ZM1 18a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H1Z'
      : 'M6.375 17.064 3.087 11.88a.5.5 0 0 1 .295-.751l.793-.209a1 1 0 0 1 .872.18l1.575 1.237 2.898-.776-4.307-5.756a.5.5 0 0 1 .352-.798l1.702-.165a1 1 0 0 1 .769.256l5.83 5.298 4.588-1.229a2.25 2.25 0 0 1 1.165 4.347L6.375 17.064ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z';
  return (
    <Svg width={24} height={24} fill="none">
      <Path fill="#808089" d={d} />
    </Svg>
  );
};
export default Fly;
