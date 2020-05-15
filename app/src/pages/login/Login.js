import React from 'react';
import Login from '../../features/login';
import store from "store";
import {TENANT} from '../../components/commons/Constants'


export default ({session, router, services}) => {

  const [error,setError] = React.useState('');

  const handleError = () =>{
    setError('');
  }
  const controller = {
    login: (credentials) => services.authService.login(credentials,'SN')
      .then((data) => session.login(data))
      .then(() => {
        router.redirect('/cgu')
      }).catch(error=>{
        setError(error)
      }),
  }
  return (<Login router={router} onLogin={controller.login} reportError={error} contentService={services.contentService}handleError={handleError}/>);
}
