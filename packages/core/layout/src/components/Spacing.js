import React from 'react';
import { Sizes } from '@sgabskit/constants';
import styled from 'styled-components';
import classnames from 'classnames';

export default (props) => {

  const size = Sizes.fromProps(props);

  return (
    <Root className={classnames('clearfix', size)}>
      {
       // children
      }
    </Root>
  );
}

const Root = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
