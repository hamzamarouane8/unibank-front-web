import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { Sizes } from '@sgabskit/constants';

export default ({ children, text, style, caption, ...props }) => {
  const hz = Sizes.fromProps(props);
  return (
    <Styled className={classnames('clearfix', hz)} style={{ style }}>
      <h2>{text || children}</h2>
      {caption && <div className="rk rk-caption">{caption}</div>}
    </Styled>
  );
}

const Styled = styled.div`

  &.xxlarge {
    font-size: 2.1rem;
  } 
  &.xlarge {
    font-size: 1.7rem;
  } 
  &.large {
    font-size: 1.5rem;
  }
  
  &.hero {
    
    margin-top: 60px;
    
    .h2, h2, .h3, h3 {
      font-weight: 600 !important;
      letter-spacing: -1px;
      line-height: 1.2 !important;
    }  
    
    .h2, h2 {
      font-size: 3.8em;
    }
    
    .h3, h3 {
      font-size: 3.8em;
    }
  }
  
  h2 {
    font-size: 1em;
    margin: 0 !important;
    line-height: 1.4;
    font-weight: 500;
  }
  
  .rk-caption {
    font-size: 0.75em;
  }
  
  
  margin-bottom: 15px;
  
`;
