import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Sizes } from '@sgabskit/constants';
// import 'semantic-ui-css/components/input.css'

export default ({ name, fluid, size, width, onChange, onBlur, type, value, loading, description, placeholder, icon,disabled ,setFieldValue,onFocus,...props}) => {

  let _size = null;

  if (_size === Sizes.XS) {
    _size = 'mini';
  }
  if(props.flagChange ){
    setFieldValue(name,value);
  }
  return (
    <>
      <TextField
        name={name}
        fluid={fluid !== false}
        onChange={(evt) => {
          evt.preventDefault();
          onChange(evt);
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        size={_size}
        icon={icon}
        type={type}
        disabled={disabled}
        style={{width}}
        value={value || ''}
        loading={loading}
        description={description}
        //placeholder={placeholder}
        //id="standard-password-input"
        label={placeholder}
        //autoComplete="current-password"
      />
    </>
  );
}
