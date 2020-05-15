import React from 'react';
import {Dropdown} from 'semantic-ui-react';
import isFunction from 'lodash.isfunction';
import isArray from 'lodash.isarray';
import isEmpty from 'lodash.isempty';

import isString from 'lodash.isstring';
import get from 'lodash.get';
import template from 'lodash.template';
import styled from 'styled-components';

export default ({
                  name, placeholder, loading, options,
                  value, onChange, onBlur, fluid, metas, required, setFieldValue, initValue, disabled
                }) => {
  return (
    <DropdownStyled placeholder={placeholder}
                    options={options}
                    name={name}
                    defaultValue={initValue}
                    selection fluid
                    disabled={disabled}
                    onChange={(event, value) => {
                      setFieldValue(name, value.value)
                    }}
    />
  );
}

const DropdownStyled = styled(Dropdown)`
    .default.text {
    padding-top: 3px;
  }
  .dropdown.icon {
    margin-top: 3px; 
  }  
  
`;
