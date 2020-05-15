import React from 'react';
import Branches from './Branches'
import BankService from "../../services/bank";

export default ({router, session}) => {
  const service = new BankService(session)
  return (
    <Branches router={router} service={service}/>
  )
}
