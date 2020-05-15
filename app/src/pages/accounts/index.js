import React from 'react';
import Accounts from './Accounts'
import AccountsService from "../../services/accounts";
//import * as accountsService from "../../services_mocked/dashboard";

export default ({session}) => {
  const services = {
    accountsService :new AccountsService(session),
  }
return (<Accounts {...services}/>)

}
