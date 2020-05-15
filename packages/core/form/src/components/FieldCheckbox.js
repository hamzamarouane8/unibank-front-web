import React from 'react'
import {Checkbox} from 'semantic-ui-react';
// import 'semantic-ui-css/components/checkbox.css'

export default ({name, fluid, onChange, onBlur, value, description, label, initValue, checked, setFieldValue, toggle, radio, className, initvalue, ...props}) => {
  return (
    <Checkbox
      //fluid={fluid !== false}
      onChange={(event, value) => {
        if (value.toggle) {
          setFieldValue(name, value.checked)
        } else {
          setFieldValue(name, value.value)
        }
      }}
      className={className}
      checked={checked}
      onBlur={onBlur}
      toggle={toggle || false}
      radio={radio || false}
      value={value || ''}
      description={description}
      label={label}/>
  )
}
