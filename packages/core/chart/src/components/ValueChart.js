import React from 'react';

import styled from 'styled-components';

export default ({ title, icon, value }) => {
  const Icon = icon;
  return (
      <StyledContent>
        {Icon && (
          <div className="rui rui-chart-icon">
            <Icon mini/>
          </div>
        )}
        <div className="rui-chart-value">{value}</div>
        <div className="rui-chart-title">{title}</div>
      </StyledContent>
  );
}

const StyledContent = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  .rui-chart-icon {
    text-align: center;
    background: #E6F3FE;
    color: #0484FF;
    margin: auto;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    padding-top: 5px
  }
  
  .rui-chart-value {
    font-weight: 500;
    font-size: 3em;
    color: #111;
  }
  
  .rui-chart-title {
    color: #555;
  }
`;
