import React from 'react';
// use media methods with styled-component instead of raw @media queries
import {styled} from '@sgabskit/theme'
import isEmpty from 'lodash.isempty';

export const theme = {

  color: {
    primary_color: '#e9041e',
    primary_color_light: '#FFEBEE',
    primary_color2: '#4285f4',
    primary_grey: '#555555',
    primary_grey1: '#333333',
    primary_grey2: '#fafafa',
    primary_grey3: '#ededed',
    primary_grey4: '#e6e6e6',
    primary_grey5: '#777777',
    primary_grey6: '#8e8e8e',
    primary_grey7: '#f0f0f0',
    primary_grey8: '#efefef',
    primary_green: '#0fbe74',
    primary_orange: '#f5930d',


    primary_white: '#fff',
    primary_black: '#000000',

  },
  ButtonPrimary: props => `
    border-radius: 5px !important;
    background-color: #e9041e !important;
    color:#fff;
    text-transform: uppercase;
    transition: 0.7s all ease;
    font-size:14px;
    
     &:hover {
      
     }
  `,
  PageTitle: (width,afterWidth,maxWidth) => `
    color:#000;
    font-size:22px;
    max-width: ${maxWidth};
    width: ${width};
    font-family:Montserrat;
    font-weight:600;
    position: relative;
    
    &::after {
        content: "";
        position: absolute;
        left:0;
        bottom:-10px;
        width: ${afterWidth};
        border-bottom:4px solid #e9041e;
        animation-name :underline;
        animation-duration:1s;
        animation-fill-mode;forwards;
        animation-timing-function:ease;
    }
  `,
  FontTheme1:(weight,size,important)=>`
      font-family: Montserrat ${!isEmpty(important) ?important:''};
      font-weight:${weight} ${!isEmpty(important) ?important:''};
      font-size:${size} ${!isEmpty(important) ?important:''};
  `,
  BorderTheme:(size,color,radius,important)=>`
      border: ${size} solid ${color} ${important ? important:''};
      border-radius: ${radius} ${important ? important:''};
  `,
  FontTheme2:(weight,size,important)=>`
      font-family: Source Sans Pro ${!isEmpty(important) ?important:''};
      font-weight:${weight} ${!isEmpty(important) ?important:''};
      font-size:${size} ${!isEmpty(important) ?important:''};
  `

}


