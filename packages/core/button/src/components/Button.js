import React from 'react';
import {Button,Icon} from 'semantic-ui-react';
import styled from 'styled-components';
import isString from 'lodash.isstring'

export default ({
                  type, size, minimal, loading, primary, secondary, className, active,
                  disabled, icon, appearance, fill, children, text, compact, onClick, styled
                }) => {

  return (
    <ButtonStyled size={size}
                  active={active}
                  className={className}
                  primary={primary || appearance === 'primary'}
                  secondary={secondary || appearance === 'secondary'}
                  fluid={fill}
                  loading={loading}
                  compact={compact}
                  onClick={onClick}
                  type={type}
                  disabled={disabled}
                  style={styled}>
      {isString(icon) && <Icon name={icon} />}
      {text || children || ''}
    </ButtonStyled>
  );
}

const ButtonStyled = styled(Button)`
  border-radius: 2px !important;
  font-weight: 500;
  letter-spacing: 0.05em;
  
  &.compact {
    font-size: 0.9em !important;
  }
  
  &.ui.button {
    line-height: 1.4em;
    font-weight: 400;
  }
  
  &.ui.primary.button {
    background: #3f51b5;
    
    &:hover, &:active {
      background: #333854 !important;
    }
  }
  
  &.ui.button.large {
    font-size: 1.1em !important;
    line-height: 1.8em !important;
    height: auto !important;
    max-height: auto !important;
  }
  
`;
