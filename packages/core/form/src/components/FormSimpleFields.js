import React from 'react';
import { FormConsumer } from '../support/context';
import FormFields from './FormFields';
import FormField from './FormField';
import map from 'lodash.map';

export default ({spans, compact}) => (
  <FormConsumer>
    {({ fields }) => (
      <FormFields>
        {map(fields, (f, name) => (
          <FormField key={name} name={name} spans={spans} compact={compact}/>
        ))}
      </FormFields>
    )}
  </FormConsumer>

);
