import React from 'react';
import Login from "./Login";
import AuthService from "../../services/authentication";
import ContentService from "../../services/content";

export default ({session, router}) => {
  const services = {
    authService: new AuthService(),
    contentService : new ContentService()
  }
  return <Login session={session} router={router} services={services}/>
}
