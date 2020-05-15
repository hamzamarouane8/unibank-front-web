import React, { createContext } from 'react';

const Form = createContext({});

const FormProvider = ({ value, children }) => (
  <Form.Provider value={value}>{children}</Form.Provider>
);

let FormContext = Form;
let FormConsumer = Form.Consumer;

export { FormContext, FormProvider, FormConsumer };
