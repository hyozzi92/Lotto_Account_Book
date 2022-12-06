import React from 'react';
import Carousel from '../Carousel/CarouselDesktop';
import LandingPage from '../Map/LandingPage';
import LottoSummary from '../LottoSummary/LottoSummary';
import './DesktopScreen.scss';

const DesktopScreen = () => {
  return (
    <div>
      <div>
        <div className="slider">
          <Carousel />
        </div>
        <div className="mainBoxDesk">
          <div className="leftSideDesk">
            <LottoSummary />
            <div className="chatContainerDesk"></div>
          </div>
          <div className="rightSideDesk">
            <div className="qrContainerDesk">
              <div className="qrWrapDesk">
                <button style={{ marginTop: '10px', fontSize: '50px' }}>
                  QR코드 인증하기
                </button>
                <div className="headerWrapDesk">
                  <p className="lottoWordDesk">로또</p>
                  <span className="resultDesk">1043회 당첨결과</span>
                  <span className="resultDateDesk">2022-11-26</span>
                </div>
                <div className="lottoNumWrapDesk">
                  <div className="lottoNumDesk">1</div>
                  <div className="lottoNumDesk">1</div>
                  <div className="lottoNumDesk">1</div>
                  <div className="lottoNumDesk">1</div>
                  <div className="lottoNumDesk">1</div>
                  <div className="lottoNumDesk">1</div>
                  <img
                    style={{ width: '40px' }}
                    src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"
                  />
                  <div className="lottoNumDesk">1</div>
                </div>
                <div className="moneyInfoWrapDesk">
                  <p className="winMoneyDesk">1등 당첨금 </p>
                  <p className="winMoneyAmountDesk">250억</p>
                  <p className="getMoneyPeopleDesk">(17명/15억)</p>
                </div>
              </div>
            </div>
            <div className="mapContainerDesk">
              <LandingPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopScreen;
