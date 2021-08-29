import React, { CSSProperties, FC, useState } from 'react';

const fullCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  height: 200
};

const counter = {
  width: 80,
  height: 80,
  borderRadius: 20,
  borderWidth: 0,
  fontWeight: 900,
  color: '#ffffff'
};

type Props = {
  bg?: string;
};

export const CountDownCampaign: FC<Props> = ({ bg = '#4CAF50' }) => {
  const [count, setCount] = useState<number | string>(10);

  const handleClick = () =>
    setCount(prev => {
      return typeof prev === 'number' && prev > 1 ? prev - 1 : 'Winner!';
    });

  return (
    <div style={fullCenter}>
      <button onClick={handleClick} style={{ ...counter, backgroundColor: bg }}>
        <p>{count}</p>
      </button>
    </div>
  );
};
