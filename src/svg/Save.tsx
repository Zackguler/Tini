import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const Save = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <G clipPath="url(#clip0_1471_20647)">
      <Path
        d="M7.50016 8.33332C7.50016 7.87309 7.87326 7.49999 8.3335 7.49999H9.16683V6.66666C9.16683 6.20642 9.53993 5.83332 10.0002 5.83332C10.4604 5.83332 10.8335 6.20642 10.8335 6.66666V7.49999H11.6668C12.1271 7.49999 12.5002 7.87309 12.5002 8.33332C12.5002 8.79356 12.1271 9.16666 11.6668 9.16666H10.8335V9.99999C10.8335 10.4602 10.4604 10.8333 10.0002 10.8333C9.53993 10.8333 9.16683 10.4602 9.16683 9.99999V9.16666H8.3335C7.87326 9.16666 7.50016 8.79356 7.50016 8.33332Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.3335 3.33332C3.3335 2.41285 4.07969 1.66666 5.00016 1.66666H15.0002C15.9206 1.66666 16.6668 2.41285 16.6668 3.33332V17.5C16.6668 17.8121 16.4924 18.0981 16.2148 18.241C15.9373 18.3838 15.6031 18.3595 15.3491 18.1781L10.0002 14.3574L4.65119 18.1781C4.39718 18.3595 4.06307 18.3838 3.78551 18.241C3.50795 18.0981 3.3335 17.8121 3.3335 17.5V3.33332ZM15.0002 3.33332L5.00016 3.33332V15.8807L9.5158 12.6552C9.80555 12.4483 10.1948 12.4483 10.4845 12.6552L15.0002 15.8807V3.33332Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1471_20647">
        <Rect
          width={16.6667}
          height={16.6667}
          fill="white"
          transform="translate(1.66675 1.66666)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Save;
