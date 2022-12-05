import React, { useState } from 'react';
import MapContainer from './MapContainer';

function LandingPage() {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const onChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  };

  return (
    <>
      <div
        className="searchBar"
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px auto',
        }}
      >
        <form className="inputForm" onSubmit={handleSubmit}>
          <input
            placeholder="검색어를 입력하세요"
            onChange={onChange}
            value={InputText}
          />
          <button type="submit">검색</button>
        </form>
      </div>
      <MapContainer searchPlace={Place} />
    </>
  );
}

export default LandingPage;
