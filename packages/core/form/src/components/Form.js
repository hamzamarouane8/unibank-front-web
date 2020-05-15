import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import forEach from 'lodash.foreach';
import isString from 'lodash.isstring';
import isEmpty from 'lodash.isempty';
import pick from 'lodash.pick';
import get from 'lodash.get';
import * as Yup from 'yup';
import { Sizes } from '@sgabskit/constants';
// ------------------------------------------------------------------------
import { FormProvider } from '../support/context';
import FormSubmit from './FormSubmit';
import FormButton from './FormButton';
import FormActions from './FormActions';
import FormFields from './FormFields';
import FormField from './FormField';
import FormSimpleFields from './FormSimpleFields';
import FormSimpleActions from './FormSimpleActions';

// import 'semantic-ui-css/components/form.css';

class Form extends PureComponent {

  static Fields = FormFields;
  static Field = FormField;
  static Submit = FormSubmit;
  static Button = FormButton;
  static Actions = FormActions;
  static SimpleActions = FormSimpleActions;
  static SimpleFields = FormSimpleFields;

  constructor(props) {
    super(props);

    if (!props.fields) {
      throw new Error('INVALID_FORM_NO_FIELDS');
    }

    const shape = {};

    forEach((props.schema || props.fields), (f, name) => {
      shape[name] = Yup.string();
      let check = f.validation || f.check || {};
      if (f.required || check.required) {
        shape[name] = shape[name].required(isString(f.required) ? f.required : 'Obligatoire');

      } else {
        shape[name] = shape[name].nullable();
      }
      if (f.email || check.email || f.type === 'email') {
        shape[name] = shape[name].email(isString(f.email) ? f.email : 'Email invalide');
      }
      if (f.minLength || check.min) {
        shape[name] = shape[name].min(f.minLength || check.min, `Minimum: ${f.minLength || check.min} caractères`);
      }
    });

    this.fieldsKeys = Object.keys(props.fields).concat('id');
    this.schema = Yup.object().shape(shape);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {

    const { initialValues, children, render, onError, fields, onSubmit, ...props } = this.props;
    const size = Sizes.fromProps(props);

    let _initialValues = {};

    if (!isEmpty(initialValues)) {
      this.fieldsKeys.forEach((name) => {
        let value = get(initialValues, name);
        if (fields[name]) {
          if (fields[name].path) {
            _initialValues[name] = get(initialValues, fields[name].path) || value;
          } else {
            _initialValues[name] = value;
          }
        } else {
          _initialValues[name] = value;
        }
      });
    }
    return (
      <Formik initialValues={_initialValues}
              isInitialValid={this.schema.isValidSync(_initialValues || {})}
              validationSchema={this.schema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const filteredValues = pick(values, this.fieldsKeys);
                if (isEmpty(filteredValues)) {
                  setSubmitting(false);
                  return;
                }
                Promise.resolve(onSubmit(filteredValues)).then((res) => {
                  // setSubmitting(false)
                  if (this.mounted && res !== false) {
                    resetForm(_initialValues || {});
                  }
                }).catch((e) => {
                  onError && onError(e);
                }).finally(() => {
                  if (this.mounted) {
                    setSubmitting(false);
                  }
                });
              }}>
        {({ values, errors, touched, isValid, handleChange, setFieldValue, handleBlur, handleSubmit, isSubmitting, resetForm }) => {
         const submitDisabled = isSubmitting || !isValid;
          return (
            <form autocomplete="off" onSubmit={handleSubmit}>
              <FormProvider
                value={{
                  values,
                  size,
                  resetForm,
                  errors,
                  touched,
                  handleChange,
                  setFieldValue,
                  handleBlur,
                  isSubmitting,
                  handleSubmit,
                  submitDisabled,
                  fields,
                  isValid
                }}>
                {render && render()}
                {children}
              </FormProvider>
            </form>
          );
        }}
      </Formik>
    );
  }

}

export default (Form);

