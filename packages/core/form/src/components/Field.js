import React from 'react';
import styled from 'styled-components';
import {Icon} from 'semantic-ui-react'
import includes from 'lodash.includes';
import classnames from 'classnames'
import Button from '@sgabskit/button'
import DatePicker from './FieldDate';
import Dropdown from './FieldDropdown'
import Select from './FieldSelect';
import Checkbox from './FieldCheckbox';
import Search from './FieldSearch';
import Input from './FieldInput';
import FloateGroup from './FieldFloateGroup';

import isEmpty from 'lodash.isempty'

export default ({compact, type, error, size, label, required, placeholder, ...props}) => {
  let field = [];
  let _placeholder = placeholder;
  if (!placeholder && label) {
    if (!required) {
      _placeholder = 'Facultatif';
    } else {
      _placeholder = 'Obligatoire';
    }
  }

  if (type === 'checkbox') {
    if (!isEmpty(props.elements)) {
      field = props.elements.map((item, index) => {
        return [...field, <Checkbox {...props} checked={item.initValue} value={item.value} label={item.label}
                                    radio={props.details === 'radio' ? true : false}
                                    toggle={props.details === 'toggle' ? true : false} key={index}/>]
      })
    } else {
      field = <Checkbox {...props} radio={props.details === 'radio' ? true : false}
                        toggle={props.details === 'toggle' ? true : false} label={label}/>
    }

  } else if (type === 'search') {

    field = <Search {...props} placeholder={_placeholder} label={label}/>;

  } else if (type === 'date') {
    field = <DatePicker  {...props} placeholder={_placeholder}/>;

  } else if (type === 'select') {
    field = <Select {...props} placeholder={_placeholder}/>;
  } else if (type === 'dropdown') {
    field = <Dropdown placeholder={placeholder} {...props} />
  } else if (type === 'floatedGroup') {
    field = <FloateGroup {...props} />
  } else if (!type || includes(['text', 'number', 'password', 'email'], type)) {
    field = <Input {...props} placeholder={_placeholder} type={type}/>;
  } else if (type === 'button') {
    field = <Button type='reset' icon={<Icon name={props.icon}/>} onClick={props.onClick}>{props.labelButton} </Button>
  } else {
    throw new Error('Unknown field type: ' + type);
  }

  return (
    <Styled className={props.className || classnames('field-wrapper', size, {compact: 'compact'})}>
      <div className="field-label clearfix">
        {label && <label>{label}</label>}

      </div>
      {field}
      {error && <div className="error-message">{error}</div>}

    </Styled>
  );

}

const Styled = styled.div`

  &.compact {
    font-size: 0.8em;
  }

  label .is-required {
    font-weight: 500;
    position: relative;
    margin-top: 4px;
  }

  .field-label label {
    float: left;
    font-family: inherit;
    margin-bottom: 0.15em;
    font-weight: 500;
    font-size: 0.95em;
  }
  
  .error-message {
    float: left;
    color: #e0321c;
    font-size: 0.8em;
    padding-top: 1px
  }

  .bp3-input,
  .ui.dropdown,
  .ui.input input {
    border-radius: 2px !important;
    padding-top: 0.8em;
    padding-bottom: 0.85em;
    font-size: 0.95em;
    line-height: 1;
    height: 3.3em;
    
    &, *, .text {
      font-weight: 500 !important;
    }

    &:focus {
      border-color: #888 !important;
    }
  }
  
  .ui.search .prompt {
    border-radius: 500rem !important;
    padding-left: 2rem;
  }
  
  .ui.fluid, .ui.fluid .input {
    width: 100%;
  }

  .ui.dropdown {
    min-height: 3.3em;
    
    .text {
      margin-top: 0.45em !important;
      
      &.default {
        margin-top: 0.15em !important;
      }
    }
    
    .dropdown.icon {
      margin-top: -0.5em !important;
    }
  }
  
  &.compact .ui.dropdown {
  
    .text {
      margin-top: 0.3em !important;
      
      &.default {
        margin-top: 0.03em !important;
      }
    }
  
  }
  
  .ui.dropdown .menu>.item {
    font-size: 1em;
  }
  
  &.large {
    
    font-size: 1.2em;
    
    
    bp3-input,
    .ui.dropdown,
    .ui.input input {
    }
  }

  margin-bottom: 1em;
`;
