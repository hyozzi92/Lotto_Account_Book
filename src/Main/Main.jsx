import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';
import Carousel from './Carousel';
const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="slider">
        <Carousel />
      </div>
      <div className="mainBox">
        <div className="rightSide">
          <div className="qrContainer"></div>
          <div className="mapContainer"></div>
        </div>
        <div className="leftSide">
          <div className="summaryContainer"></div>
          <div className="chatContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
