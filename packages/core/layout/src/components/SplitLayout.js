import React from 'react';
import styled from 'styled-components';
import isArray from 'lodash.isarray';
import { Container, Row, Col } from './Grid';

export default ({ children, sidebar, sidebarBackground }) => {
  if (isArray(children) && children.length > 2) throw new Error('SplitLayout expect 2 children max.');

  const start = isArray(children) ? children[0] : children;
  const end = isArray(children) ? children[1] : null;

  return (
    <Root fluid>
      <Row>
        <Col md={12 - (sidebar || 3)} className="rui-sl-start">
          <div className="rui-region">
            {start}
          </div>
        </Col>
        <Col md={sidebar} className="rui-sl-end" style={{ backgroundImage: `url(${sidebarBackground})` }}>
          <div className="rui-region">
            {end}
          </div>
        </Col>
      </Row>
    </Root>
  );
}

const Root = styled(Container)`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  &, & > .row {
    height: 100%;
  }

  .rui-sl-start
    display: block;
    float: left;
    background: #FFF;
    height: 100%;
  }

  .rui-sl-end {
    width: 25%;
    height: 100%;
    background: #F6F7F8;

    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
