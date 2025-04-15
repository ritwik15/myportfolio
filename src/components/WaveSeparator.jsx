import React from 'react';

const WaveSeparator = ({ flip = false }) => {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 150"
        style={{
          transform: flip ? 'rotate(180deg)' : 'none',
          display: 'block',
          width: '100%',
          height: '75px',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,96L80,106.7C160,117,320,139,480,122.7C640,107,800,53,960,42.7C1120,32,1280,64,1360,80L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveSeparator;
