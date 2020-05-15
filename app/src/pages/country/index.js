import React from 'react';
import * as store from '@sgabskit/local-storage';
import Countries from './Countries'
export default({router}) => {
  return(
  <Countries router={router} />
  )
}
