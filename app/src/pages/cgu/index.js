import React from 'react';
import CguServices from "../../services/cgu";
import Cgu from './Cgu';

export default({router , session})=>{
  const services = {
    cguServices: new CguServices(session)
  }
  return(<Cgu router={router} session={session} {...services}/>)
}
