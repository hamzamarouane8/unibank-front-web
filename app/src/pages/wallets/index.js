import React from 'react';
import Wallets from './Wallets'

import WalletService  from '../../services/wallets'

export default({session})=>{
  const service={
    walletService : new WalletService(session),
  }
  return(<Wallets {...service}/>)
}

