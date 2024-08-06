import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { FooterData } from './data'; 

const Footer = () => {
  return (
    <div className='footer'>
      {FooterData.map((props, index) => (
        <div className='col' key={index}>
          <h6>{props.category}</h6>
          <div className='links'>
            {props.linka.map((l, idx) => (
              <Link key={idx} to={l.to}>
                {l.link}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Footer;
