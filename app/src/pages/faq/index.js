import React from 'react'
import Faq from './Faq'
//import * as faqServices from '../../services_mocked/faq'
import FaqService from '../../services/faq'
export default({router,option})=>{
  console.log('option1',router)
const service={
  faqService:new FaqService()
  }
  return(<Faq router={router} {...service} option={option}/>)
}
