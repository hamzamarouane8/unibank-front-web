import React from 'react';
import FormActions from './FormActions';
import FormButton from './FormButton';
import FormSubmit from './FormSubmit';
import { FormConsumer } from '../support/context';

export default ({ submiText, cancelText,  onCancel, compact }) => (
  <FormConsumer>
    {({ resetForm }) => (
      <FormActions>
        {onCancel && (
          <FormButton compact={compact} onClick={() => {
            resetForm();
            onCancel();
          }}>
            {cancelText || 'Annuler'}
          </FormButton>
        )}
        <FormSubmit compact={compact}>{submiText || 'Enregistrer'}</FormSubmit>
      </FormActions>
    )}
  </FormConsumer>
);

