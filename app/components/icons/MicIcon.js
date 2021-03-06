import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

const MicIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}>
    <Path d="M12 3C10.3431 3 9 4.34315 9 6V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V6C15 4.34315 13.6569 3 12 3Z" />
    <Path d="M6.5 11C6.22386 11 6 11.2239 6 11.5V12C6 14.973 8.16229 17.441 11 17.917V19H8.5C8.22386 19 8 19.2239 8 19.5V20.5C8 20.7761 8.22386 21 8.5 21H15.5C15.7761 21 16 20.7761 16 20.5V19.5C16 19.2239 15.7761 19 15.5 19H13V17.917C15.8377 17.441 18 14.973 18 12V11.5C18 11.2239 17.7761 11 17.5 11H16.5C16.2239 11 16 11.2239 16 11.5V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V11.5C8 11.2239 7.77614 11 7.5 11H6.5Z" />
  </Svg>
);

export default memo(MicIcon);
