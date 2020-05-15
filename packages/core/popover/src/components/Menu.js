import React from 'react';
import { Menu, Position } from '@blueprintjs/core';
import styled from 'styled-components';
import Popover from './Popover';

export default ({ items, target, children }) => (
  <Popover position={Position.BOTTOM}
           target={target || children}
           content={(
             <StyledMenu>
               {items.map((item, index) => {
                 if (item === '-') return <Menu.Divider key={index}/>;
                 return (
                   <Menu.Item text={item.text}
                              key={index}
                              onClick={item.onClick}
                              labelElement={item.endIcon}
                              icon={item.icon}/>
                 );
               })}
             </StyledMenu>
           )}/>
)

const StyledMenu = styled(Menu)`
  li {
    margin: 0;
  }
`;
