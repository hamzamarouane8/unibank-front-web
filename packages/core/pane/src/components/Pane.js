import React from 'react';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';

export default ({ children }) => <StyledSegment>{children}</StyledSegment>

const StyledSegment = styled(Segment)`
  &.ui.segment { 
    border-radius: 2px;
    border: 1px solid rgba(67,90,111,0.12);
    box-shadow: none;
  }
`;

// box-shadow: 0 0 1px rgba(67, 90, 111, 0.3), 0 2px 4px -2px rgba(67, 90, 111, 0.47);
