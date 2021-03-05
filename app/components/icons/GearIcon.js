import React, { memo } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const GearIcon = (props) => (
  <Svg width={24} height={24} fill="inherit" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.688 3.782c.469-.417 1.158-.427 1.682-.083l1.166.767c.087.057.176.104.267.14a8.448 8.448 0 011.937-.802c.038-.09.068-.187.09-.288l.281-1.367c.127-.614.622-1.095 1.248-1.13a11.172 11.172 0 011.281 0c.627.035 1.122.516 1.248 1.13l.283 1.367c.02.101.05.197.09.288.683.188 1.332.46 1.936.803.09-.037.18-.084.267-.141l1.166-.767c.524-.345 1.214-.334 1.682.082.32.285.622.588.906.907.417.468.428 1.158.083 1.682l-.767 1.166a1.52 1.52 0 00-.14.267c.343.604.614 1.253.802 1.937.09.038.187.068.288.09l1.367.282c.615.126 1.095.621 1.13 1.248a11.14 11.14 0 010 1.28c-.035.627-.515 1.122-1.13 1.248l-1.367.283a1.53 1.53 0 00-.288.09 8.448 8.448 0 01-.803 1.936c.037.09.084.18.141.267l.767 1.166c.345.524.334 1.214-.082 1.682-.285.32-.588.622-.907.906-.468.417-1.158.428-1.682.083l-1.166-.767a1.52 1.52 0 00-.267-.14 8.448 8.448 0 01-1.937.802c-.038.09-.068.187-.09.288l-.281 1.367c-.127.614-.622 1.095-1.249 1.13a11.224 11.224 0 01-1.28 0c-.627-.035-1.122-.516-1.248-1.13l-.283-1.367a1.527 1.527 0 00-.09-.288 8.447 8.447 0 01-1.936-.803 1.52 1.52 0 00-.267.141l-1.166.767c-.524.344-1.213.334-1.682-.083-.319-.284-.622-.587-.906-.907-.417-.468-.427-1.157-.083-1.681l.767-1.166c.057-.086.104-.176.14-.267a8.448 8.448 0 01-.802-1.937 1.53 1.53 0 00-.288-.09l-1.367-.281c-.614-.127-1.094-.622-1.13-1.248a11.17 11.17 0 010-1.281c.036-.627.516-1.122 1.13-1.249l1.367-.282c.101-.02.197-.05.288-.09.188-.683.46-1.332.802-1.936a1.525 1.525 0 00-.14-.267L3.699 6.37c-.344-.524-.334-1.213.083-1.681.284-.32.587-.623.906-.907zM12 15a3 3 0 100-6 3 3 0 000 6z"
    />
  </Svg>
);

export default memo(GearIcon);