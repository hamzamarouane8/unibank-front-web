import React from 'react';
import Home from "./Home";
import ContentService from "../../services/content";
import {Helmet} from 'react-helmet';

export default ({router,session}) => {
  const services = {
    contentService: new ContentService()
  }
  return <Home router={router} {...services}/>

}
