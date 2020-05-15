import React from 'react';
import {EdocumentContainer} from './styles/edoc';
import Form from '@sgabskit/form';
import {
  FIELD_CHECKBOX,
  FIELD_DROPDOWN,
  LABEL_ACCOUNT_EDOC,
  LABEL_ACCOUNT_TIME,
  LABEL_CHECKBOX_EDOC_RIB,
  LABEL_CHECKBOX_EDOC_STATEMENT,
  LABEL_TYPE_EDOC,
  PLACE_HOLDER_EDOC,
  VAL_RIB_EDOC,
  VAL_STATEMENT_EDOC
} from "../../components/commons/Constants";
import Commons from '../../components/commons/Commons'
import ErrorState from '../../features/error/ErrorState';

//----------------------------------------------------------------------------

//TODO wait for HAJ to add balance in account api and also to change type account to significant values like "compte cheque" and not codes like 997 for now

export default ({onSubmit, reportError, accountsService}) => {

  const [accounts, setAccounts] = React.useState([]);
  const [checkedVal, setCheckedVal] = React.useState(true);
  const [dateInfo, setDateInfo] = React.useState(null);
  const [formType, setFormType] = React.useState(true);
  const [error, setError] = React.useState(false); // Error API call

  React.useEffect(() => {
    setDateInfo(Commons.getLastThreeMonths());
    accountsService.loadAccounts().then((data) => {
      setAccounts(data.accounts);
    }).catch((error) => {
      setError(true);
    })
  }, []);

  let listRadio = [{id: 0, value: VAL_RIB_EDOC, label: LABEL_CHECKBOX_EDOC_RIB, initValue: checkedVal},
    {id: 1, value: VAL_STATEMENT_EDOC, label: LABEL_CHECKBOX_EDOC_STATEMENT, initValue: !checkedVal}];

  let loginForm = {
    type: {
      type: FIELD_CHECKBOX, details: 'radio', elements: listRadio, onChange: (value) => {
        setFormType(value === VAL_STATEMENT_EDOC ? false : true)
        setCheckedVal(!checkedVal)
      },
      required: true, label: LABEL_TYPE_EDOC
    },
    account: {
      type: FIELD_DROPDOWN, placeholder: PLACE_HOLDER_EDOC,
      required: true, label: LABEL_ACCOUNT_EDOC, options: Commons.mapOptions(accounts)
    },
  }

  return (
    <ErrorState status={error}>
      <EdocumentContainer>
        {formType && dateInfo &&
        <Form large onSubmit={onSubmit} initialValues={{type: VAL_RIB_EDOC}} fields={loginForm} onError={reportError}
              render={() => (
                <>
                  <Form.SimpleFields/>
                  <Form.Actions>
                    <Form.Submit fill>Telecharger</Form.Submit>
                  </Form.Actions>
                </>
              )}/>}

        {!formType && dateInfo &&
        <Form large onSubmit={onSubmit} initialValues={{type: VAL_STATEMENT_EDOC, month: dateInfo[0].value}} fields={{
          ...loginForm, month: {type: 'floatedGroup', elements: dateInfo, required: true, label: LABEL_ACCOUNT_TIME},
        }} onError={reportError} render={() => (
          <>
            <Form.SimpleFields/>
            <Form.Actions>
              <Form.Submit fill>Telecharger</Form.Submit>
            </Form.Actions>
          </>
        )}/>}
      </EdocumentContainer>
    </ErrorState>
  );
}

