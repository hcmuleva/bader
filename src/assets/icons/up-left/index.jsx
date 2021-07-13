import React from 'react';
import Icon from '@ant-design/icons';

const UpLeftSvg = props => {
  return (
    <svg
      height='80px'
      viewBox='0 -1 502.624 502'
      width='80px'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='m470.625 468.992188h32v32h-32zm0 0' fill='#42a5f5' />
      <path d='m470.625 404.992188h32v32h-32zm0 0' fill='#42a5f5' />
      <path
        d='m502.625 372.992188h-32v-80c0-114.6875-93.3125-208-208-208h-240v-32h240c132.335938 0 240 107.664062 240 240zm0 0'
        fill='#1e88e5'
      />
      <path
        d='m64 132.992188-64-64 64-64c6.238281-6.238282 16.382812-6.238282 22.625 0 6.238281 6.238281 6.238281 16.382812 0 22.625l-41.378906 41.375 41.378906 41.375c6.238281 6.242187 6.238281 16.386718 0 22.625-6.242188 6.238281-16.386719 6.238281-22.625 0zm0 0'
        fill='#42a5f5'
      />
      <path
        d='m438.625 292.992188h-32c0-79.40625-64.609375-144-144-144v-32c97.039062 0 176 78.945312 176 176zm0 0'
        fill='#80deea'
      />
    </svg>
  );
};

const UpLeftIcon = props => <Icon component={UpLeftSvg} {...props} />;

export default UpLeftIcon;
