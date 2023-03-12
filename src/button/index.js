import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ singPh, page, buttonName, linkUrl }) => {
  return (
    <div>
      <button
        style={{
          width: '505px',
          height: '44px',
          border: 'none',
          borderRadius: '6PX',
          backgroundColor: '#2B60D8',
          marginTop: '30px',
          fontSize: '16px',
          color: 'white',
        }}
      >
        {buttonName}
      </button>
      <footer
        style={{ marginTop: '30px', textAlign: 'center', fontSize: '28px' }}
      >
        <span style={{ fontSize: '16px' }}>{singPh}</span>
        <span style={{ color: '#2D65E4', fontSize: '16px' }}>
          <Link style={{ textDecoration: 'none' }} to={linkUrl}>
            {page}
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default Button;
