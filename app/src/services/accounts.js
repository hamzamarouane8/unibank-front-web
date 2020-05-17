import get from "lodash.get"
import { client } from './_config'
import { accounts } from './samples/accounts';
import { accountDetails } from './samples/accountsDetails';
import { transactions } from './samples/account_operations';

/**
 * Charge le descripteur JSON contenant tous les informations pour faire le rendu de la page Mes Comptes
 * pour la filiale.
 */

let token = '';

const loadAccountsMock = (token) => {
  return Promise.resolve(accounts);
};

const accountDetailsMock = (token, accountId) => {
  return Promise.resolve(accountDetails);
};

const transactionMock = (token, accountId) => {
  return Promise.resolve(transactions);
};

export default class AccountsService {

  constructor(session) {
    token = get(session, 'user.data.access_token');
  }
  loadAccounts = () => loadAccountsMock(token).then((data) => data.accounts).catch((error) => error)
  loadAccountDetails = (accountNumber) => accountDetailsMock(token, '16111904344').then((data) => data).catch((error) => error)
  loadAccountTransactions = (accountNumber) => transactionMock(token, '16111904344').then((data) => data)

}
