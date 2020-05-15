import React from 'react';
import { Row, Col } from './Grid';
import { Heading } from '@sgabskit/text';

export default ({ children, title, description }) => (
  <Row>
    <Col md={8}>
      <Heading xlarge text={title} caption={description}/>
    </Col>
    <Col md={4} className="text-right">
      {children}
    </Col>
  </Row>
)
