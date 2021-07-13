import React from 'react';
import Icon from '@ant-design/icons';

const NoticeboardSvg = props => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 20.197 23.187'
      {...props}
      style={{ ...props.style, fontSize: 18 }}
    >
      <g
        id='Group_4276'
        data-name='Group 4276'
        transform='translate(-3671 3605.947)'
      >
        <path
          id='Path_8682'
          data-name='Path 8682'
          d='M208.363,1.808h-2.7V.3a.3.3,0,0,1,.3-.3h2.107a.3.3,0,0,1,.3.3V1.808Z'
          transform='translate(3474.336 -3605.947)'
          style={{ fill: props.fill || '#fff' }}
        />
        <g
          id='Group_4245'
          data-name='Group 4245'
          transform='translate(3675 -3589.625)'
        >
          <path
            id='Path_8206'
            data-name='Path 8206'
            d='M221.448,323.4a.631.631,0,0,0-.631.631v3.833a.631.631,0,1,0,1.263,0V324.03A.631.631,0,0,0,221.448,323.4Z'
            transform='translate(-215.765 -323.399)'
            style={{ fill: props.fill || '#fff' }}
          />
          <path
            id='Path_8207'
            data-name='Path 8207'
            d='M277.863,329.367l-2.526-5.6a.631.631,0,1,0-1.151.519l2.526,5.6a.631.631,0,1,0,1.151-.519Z'
            transform='translate(-266.552 -323.394)'
            style={{ fill: props.fill || '#fff' }}
          />
          <path
            id='Path_8208'
            data-name='Path 8208'
            d='M117.6,323.451a.632.632,0,0,0-.835.316l-2.526,5.6a.631.631,0,1,0,1.151.519l2.526-5.6A.632.632,0,0,0,117.6,323.451Z'
            transform='translate(-114.183 -323.395)'
            style={{ fill: props.fill || '#fff' }}
          />
        </g>
        <path
          id='Path_8683'
          data-name='Path 8683'
          d='M31.548,51.42V39.049a.887.887,0,0,1,.887-.887H49.858a.887.887,0,0,1,.887.887V51.42a.887.887,0,0,1-.887.887H32.435A.887.887,0,0,1,31.548,51.42Z'
          transform='translate(3639.952 -3642.301)'
          fill='none'
          stroke='#fff'
          strokeWidth='1'
        />
      </g>
    </svg>
  );
};

const NoticeBoardIcon = props => <Icon component={NoticeboardSvg} {...props} />;

export default NoticeBoardIcon;
