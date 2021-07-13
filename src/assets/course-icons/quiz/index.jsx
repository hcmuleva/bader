import React from 'react';
import Icon from '@ant-design/icons';

const QuizSvg = props => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='29.256'
      height='25.796'
      viewBox='0 0 29.256 25.796'
      {...props}
    >
      <g id='Quiz' transform='translate(-30.372 -531.758)'>
        <g
          id='chat_7_'
          data-name='chat (7)'
          transform='translate(30.872 532.258)'
        >
          <path
            id='Path_9053'
            data-name='Path 9053'
            d='M14.128,31.344c7.79,0,14.128,5.15,14.128,11.479a10.576,10.576,0,0,1-4.542,8.434,7.036,7.036,0,0,0,3.871,3.071.883.883,0,0,1-.085,1.731,10.936,10.936,0,0,1-1.45.081,18.936,18.936,0,0,1-8.607-2.162,16.763,16.763,0,0,1-3.315.323C6.338,54.3,0,49.152,0,42.823S6.338,31.344,14.128,31.344Z'
            transform='translate(0 -31.344)'
            fill='#5e94e4'
            stroke='#2f6fce'
            strokeWidth='1'
          />
        </g>
        <text
          id='Quiz-2'
          data-name='Quiz'
          transform='translate(34 547)'
          fill='#e3eaef'
          fontSize='10'
          fontFamily='NunitoSans-SemiBoldItalic, Nunito Sans'
          fontWeight='600'
          fontStyle='italic'
        >
          <tspan x='0' y='0'>
            Quiz
          </tspan>
        </text>
      </g>
    </svg>
  );
};

const QuizIcon = (props) => <Icon component={QuizSvg} {...props} />;

export default QuizIcon;
