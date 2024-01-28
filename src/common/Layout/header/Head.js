import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBox } from '@fortawesome/free-solid-svg-icons';

export const Head = () => {
  const iconStyle = { color: '#d94e28' }; // Define the color style

  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <FontAwesomeIcon icon={faPhone} style={iconStyle} className="fa-icon" />
            <label>0352489278</label>
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} className="fa-icon" />
            <label>tn3p@gmail.com</label>
          </div>

          <div className='right row RText'>
            <FontAwesomeIcon icon={faBox} style={iconStyle} className="fa-icon" />
            <label>Kiểm tra đơn hàng</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;