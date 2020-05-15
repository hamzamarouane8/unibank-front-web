import React from 'react'
import { FormConsumer } from '../support/context';
import { Col } from '@sgabskit/layout';
import Field from './Field';
let submit = false;
export default ({ name, spans, span, compact }) => (
    <FormConsumer>
      {({fields, touched, size, values, errors, handleBlur, handleChange, setFieldValue,handleFocus,isSubmitting,isValid}) => {
        if(isSubmitting) {
          submit= true;
        }
        return(
        <Col span={spans === false ? 12 : (span || fields[name].span || 12)}>
          <Field {...fields[name]}
                 error={submit && errors[name]}
                 name={name}
                 compact={compact}
                 size={size}
                 setFieldValue={(name, value) => {
                   submit=false
                   setFieldValue(name, value);
                   if (fields[name].onChange) {
                     fields[name].onChange(value)
                   }}
                 }
                 onChange={(evt)=>{
                   submit=false

                   return handleChange(evt)
                 }}
            /* onChange={(name, value) => {
               handleChange(name, value)
             }}*/

                 onBlur={handleBlur}
                 value={fields[name].manuallyValue ? fields[name].value : values && values[name]}/>
        </Col>
      )}}
    </FormConsumer>
  );
