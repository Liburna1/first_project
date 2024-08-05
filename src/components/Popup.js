import React, { useState } from 'react';
import './user.scss';

const Popup = () => {
  const [popup, setPopup] = useState(false);

  const showPopup = () => {
    setPopup(!popup);
  };

  const closePopup = () => {
    setPopup(false);
  };
  
  return (
    <div className='popup'>
        {popup ? <div className='backdrop' onClick={closePopup}></div> :null }
        <button type='button' onClick={showPopup}>Show Popup</button>
        {popup ? 
        <div className='card '>
            <h1>PopUp</h1>
            <p>Lorem Ispum dolor sit amet...</p>
            <p>Lorem Ispum dolor sit amet...</p>
            <p>Lorem Ispum dolor sit amet...</p>
        </div> : null}
    </div>
  )
}

export default Popup