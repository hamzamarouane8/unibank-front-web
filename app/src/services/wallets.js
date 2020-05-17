import get from "lodash.get"

import {client} from "./_config";
import {transactions} from './samples/wallte_transacions';
let token ='';

const transactionsMock = (token , code) => {
  return Promise.resolve(transactions);
};
const walletMock = (token , code) => {
  return Promise.resolve({clientName:'waller numero 1',balance:"1000.00",currency:"CFA"});
};
export default class WalletService {

  constructor(session) {
    token = get(session, 'user.data.access_token');
  }

  loadWillets = (code) => walletMock(token,code).then((data)=>data).catch((error)=> error)
  loadTransactions = (code) => transactionsMock(token,code).then((data)=>data.transactions).catch((error)=> error)

}
