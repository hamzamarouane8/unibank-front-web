import {Service, client} from "./_config";
/**
 * Charge le descripteur JSON contenant tous les informations pour faire le rendu de la page d'accueil
 * pour la filiale.
 */
export default class ContentService extends Service {

  constructor() {
    super('https://bankup.s3.eu-west-3.amazonaws.com');
  }

  //loadBaseContent = (bankId) =>   this._get('/bank.json?v=122').then((response)=>response.data)

}
