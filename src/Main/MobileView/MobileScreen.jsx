import { height } from '@mui/system';
import React from 'react';
import Carousel from '../Carousel/CarouselDesktop';
import LandingPage from '../Map/LandingPage';
import './MobileScreen.scss';

const MobileScreen = () => {
  return (
    <div>
      <div>
        <div className="slider">
          <Carousel />
        </div>
        <div className="mainBox">
          <div className="summaryContainer" style={{ marginTop: '30px' }}>
            <div className="contentWrap">
              <div className="summaryHeader">
                <div className="imgWrap" style={{ marginRight: '20px' }}>
                  사진
                </div>
                <span>김효성 회원님, 반갑습니다 👋</span>
              </div>
              <p className="section" style={{ marginTop: '15px' }}>
                <img
                  style={{ width: '20px', marginRight: '15px' }}
                  src="https://cdn-icons-png.flaticon.com/512/3007/3007303.png"
                />
                로또 구매 금액 : 1670000원
              </p>
              <p className="section" style={{ marginTop: '15px' }}>
                <img
                  style={{ width: '20px', marginRight: '15px' }}
                  src="https://cdn-icons-png.flaticon.com/512/2374/2374909.png"
                />
                로또 당첨 횟수 : 1번
              </p>
              <p className="section" style={{ marginTop: '15px' }}>
                <img
                  style={{ width: '20px', marginRight: '15px' }}
                  src="https://cdn-icons-png.flaticon.com/512/2053/2053445.png"
                />
                로또 최고 수익률 : 730000원
              </p>
              <p className="section" style={{ marginTop: '15px' }}>
                <img
                  style={{ width: '20px', marginRight: '15px' }}
                  src="https://cdn-icons-png.flaticon.com/512/1041/1041158.png"
                />
                로또 최고 순위 : 3등
              </p>
            </div>
          </div>
          <div className="chatContainer"></div>

          <div className="rightSide">
            <div className="qrContainer" style={{ marginTop: '50px' }}>
              <div className="qrWrap">
                <button style={{ marginTop: '50px', height: '50px' }}>
                  QR코드 인증하기
                </button>
                <div className="headerWrap">
                  <p className="lottoWord">로또</p>
                  <span className="result">1043회 당첨결과</span>
                  <span className="resultDate">2022-11-26</span>
                </div>
                <div className="lottoNumWrap">
                  <div className="lottoNum">1</div>
                  <div className="lottoNum">1</div>
                  <div className="lottoNum">1</div>
                  <div className="lottoNum">1</div>
                  <div className="lottoNum">1</div>
                  <div className="lottoNum">1</div>
                  <img
                    style={{ width: '40px' }}
                    src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"
                  />
                  <div className="lottoNum">1</div>
                </div>
                <div className="moneyInfoWrap">
                  <p className="winMoney">1등 당첨금 </p>
                  <p className="winMoneyAmount">250억</p>
                  <p className="getMoneyPeople">(17명/15억)</p>
                </div>
              </div>
            </div>
            <div className="mapContainer" style={{ marginTop: '50px' }}>
              <LandingPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
