import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import DesktopScreen from './DesktopScreen';
import MobileScreen from './MobileScreen';

const Main = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isTabletScreen = useMediaQuery({ maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 700 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isRetina = useMediaQuery({ minResolution: '2dppx' });
  const navigate = useNavigate();
  return (
    <div>
      {isDesktopOrLaptop && <DesktopScreen />}
      {isTabletScreen && <MobileScreen />}
    </div>
  );
};

export default Main;
