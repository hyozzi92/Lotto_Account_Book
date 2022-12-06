import React from 'react';
import '../LottoSummary/LottoSummary.scss';
const LottoSummary = () => {
  return (
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
  );
};

export default LottoSummary;
