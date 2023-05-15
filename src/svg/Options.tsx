import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Options = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M5.8335 10C5.8335 10.6904 5.27385 11.25 4.5835 11.25C3.89314 11.25 3.3335 10.6904 3.3335 10C3.3335 9.30964 3.89314 8.75 4.5835 8.75C5.27385 8.75 5.8335 9.30964 5.8335 10Z"
      fill="white"
    />
    <Path
      d="M16.6668 10C16.6668 10.6904 16.1072 11.25 15.4168 11.25C14.7265 11.25 14.1668 10.6904 14.1668 10C14.1668 9.30964 14.7265 8.75 15.4168 8.75C16.1072 8.75 16.6668 9.30964 16.6668 10Z"
      fill="white"
    />
    <Path
      d="M10.0002 11.25C10.6905 11.25 11.2502 10.6904 11.2502 10C11.2502 9.30964 10.6905 8.75 10.0002 8.75C9.30981 8.75 8.75016 9.30964 8.75016 10C8.75016 10.6904 9.30981 11.25 10.0002 11.25Z"
      fill="white"
    />
  </Svg>
);
export default Options;