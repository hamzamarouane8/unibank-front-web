import React from 'react';
import styled from 'styled-components';
import Button from '@sgabskit/button';
import isEmpty from 'lodash.isempty';
import isString from 'lodash.isstring';
import classnames from 'classnames';

export default ({ data, action, onClick, children, header, description, image, background }) => {

  if (children && !isEmpty(data)) return children;

  return (
    <Root className={ classnames('clearfix', background)}>
      <div className="rui-content">
        {isString(image) ? <img src={image} alt="" width={100}/> : image}
        {header && <h4>{header}</h4>}
        <p>{description}</p>
        {action && (
          <div className="mt-4 clearfix rui-actions">
            <Button size="large" primary onClick={onClick}>{action}</Button>
          </div>
        )}
      </div>
    </Root>
  );
}

const Root = styled.div`

  background: #FFF;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  display: block;
  
  &.dark {
    background: #F6F7F8;
  }
  padding: 60px;
  margin-top: 40px;
  
  & > .rui-content {
    margin: auto;
    max-width: 400px;
    line-height: 1.6;
    text-align: center;
    
    h4 {
      margin-top: 20px;
      font-weight: bold;
      font-size: 1.6em;
      color: rgb(23, 43, 77);
    }
    
    p {
      margin-top: 20px;
      font-weight: 400;
      font-size: 1.2em;
    }
  }
`;
