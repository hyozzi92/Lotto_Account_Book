import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [isFade, setIsFade] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isFailModal, setIsFailModal] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValues;

  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=65dad30c0c49c858f7e5d9dae309e20e&redirect_uri=http://localhost:3000/login`;

  const handleLogin = () => {
    window.location.href = kakaoLoginUrl;
    console.log(window.location.href, '정보');
  };

  useEffect(() => {
    setTimeout(() => {
      setIsFade(true);
    }, 500);

    return () => {
      setIsFade(false);
    };
  }, []);

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToMain = () => {
    navigate('/');
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const loginBtn = e => {
    e.preventDefault();

    const isAllFilled = email && password;

    if (!isAllFilled) {
      setIsFailModal(true);

      return;
    }

    const kakaoLogin = () => {
      fetch();
    };
  };
  return (
    <div className={`loginWrap${isFade ? ' end' : ''}`}>
      <div className="loginWord">로그인</div>
      <div className="subTextLogin"> 이메일 로그인</div>
      <form className="inputWrap">
        <input
          name="email"
          value={email}
          onChange={handleInput}
          className="inputText"
          placeholder="아이디(이메일 주소)를 입력하세요"
        />
        <input
          name="password"
          value={password}
          onChange={handleInput}
          className="inputText"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button onClick={loginBtn} className="loginBtn">
          로그인
        </button>
      </form>
      <p className="forgetInput"> 아이디 / 비밀번호 찾기 </p>
      <div className="kakakLogin" onClick={handleLogin}>
        카카오로그인
      </div>
      <div className="goToSignUp">
        <span>LAB 회원이신가요?</span>
        <span onClick={goToSignUp} className="goToSignUpBtn">
          회원가입하기
        </span>
      </div>
      {/* <ModalPortal>
        {isModal && (
          <Modal
            title="로그인 성공!"
            comment={`환영합니다. ${localStorage.getItem('name')}님`}
            closeModal={() => setIsModal(false)}
            confirm={goToMain}
          />
        )}
      </ModalPortal>
      <ModalPortal>
        {isFailModal && (
          <Modal
            title="알림"
            comment="아이디 또는 비밀번호를 확인해주세요."
            closeModal={() => setIsFailModal(false)}
            confirm={() => setIsFailModal(false)}
          />
        )}
      </ModalPortal> */}
    </div>
  );
};

export default Login;
