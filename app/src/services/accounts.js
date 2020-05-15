import get from "lodash.get"
import {client} from './_config'
/**
 * Charge le descripteur JSON contenant tous les informations pour faire le rendu de la page Mes Comptes
 * pour la filiale.
 */

let token ='';


export default class AccountsService {

  constructor(session) {
    token = get(session, 'user.data.access_token');
  }
  loadAccounts=()=>client.accounts.accounts(token).then((data)=>data.data).catch((error)=> error)
  loadAccountDetails = (accountNumber) =>   client.accounts.accountDetails(token,'16111904344').then((data)=>data).catch((error)=> error)
  loadAccountTransactions = (accountNumber) => client.accounts.transactions(token,'16111904344').then((data)=>data)

}
