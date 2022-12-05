import React from 'react';
import Carousel from './Carousel';
import LandingPage from './LandingPage';
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
            <div className="summaryContainerDesk">
              <div className="contentWrapDesk">
                <div className="summaryHeaderDesk">
                  <div className="imgWrapDesk" style={{ marginRight: '20px' }}>
                    사진
                  </div>
                  <span>김효성 회원님, 반갑습니다 👋</span>
                </div>
                <p className="sectionDesk">
                  <img
                    style={{ width: '20px', marginRight: '15px' }}
                    src="https://cdn-icons-png.flaticon.com/512/3007/3007303.png"
                  />
                  로또 구매 금액 : 1670000원
                </p>
                <p className="sectionDesk">
                  <img
                    style={{ width: '20px', marginRight: '15px' }}
                    src="https://cdn-icons-png.flaticon.com/512/2374/2374909.png"
                  />
                  로또 당첨 횟수 : 1번
                </p>
                <p className="sectionDesk">
                  <img
                    style={{ width: '20px', marginRight: '15px' }}
                    src="https://cdn-icons-png.flaticon.com/512/2053/2053445.png"
                  />
                  로또 최고 수익률 : 730000원
                </p>
                <p className="sectionDesk">
                  <img
                    style={{ width: '20px', marginRight: '15px' }}
                    src="https://cdn-icons-png.flaticon.com/512/1041/1041158.png"
                  />
                  로또 최고 순위 : 3등
                </p>
              </div>
            </div>
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
