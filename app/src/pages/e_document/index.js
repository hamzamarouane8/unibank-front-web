import React from 'react';
import Edocument from './Edocument'
import AccountsService from "../../services/accounts";

//TODO wait for ahmed to finish to  integrate API Call
export default ({session}) =>{
  const services = {
    accountsService :new AccountsService(session),
  }

  const onSubmit=(credentials) => {
      console.log('credentials',credentials)
    }

  return (<Edocument onSubmit={onSubmit} {...services}/>)
}

