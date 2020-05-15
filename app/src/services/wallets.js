import get from "lodash.get"

import {client} from "./_config";
let token ='';

export default class WalletService {

  constructor(session) {
    token = get(session, 'user.data.access_token');
  }

  loadWillets = (code) => client.wallet.validateWalletPin(token,code).then((data)=>data.data).catch((error)=> error)
  loadTransactions = (code) => client.wallet.transactions(token,code).then((data)=>data.data).catch((error)=> error)

}
