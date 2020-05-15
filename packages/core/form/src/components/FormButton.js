import React from 'react';
import Button from '@sgabskit/button';
import { FormConsumer } from '../support/context';

export default ({ children, onClick, ...props }) => (
  <FormConsumer>
    {({ size }) => (
      <Button type="button" onClick={onClick} size={size} {...props}>
        {children}
      </Button>
    )}
  </FormConsumer>
);
