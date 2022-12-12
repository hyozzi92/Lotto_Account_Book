import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import QrScanner from './Main/QrScan/QrScanner';
import Login from './Login/Login';
// import SignUp from './pages/SignUp/SignUp';
// import Register from './pages/Register/Register';

import Main from './Main/Main';

// import ScrollToTop from './components/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/QR" element={<QrScanner />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
