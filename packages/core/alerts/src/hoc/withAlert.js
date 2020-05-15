import React from 'react';
import { withSnackbar } from 'notistack';
import get from 'lodash.get'



export default (Component) => {

  const HOC = ({ closeSnackbar, enqueueSnackbar, onPresentSnackbar, ...props }) => {
    const errors = {
      reportError: (e) => enqueueSnackbar(get(e, 'message') || e, { variant: 'error' })
    }
    return <Component {...props} {...errors} />;
  };

  return withSnackbar(HOC);

};
