import get from "lodash.get"
import {client} from './_config'

/**
 * Charge le descripteur JSON contenant tous les informations pour faire le rendu de la page CGU
 */
let token ='';

export default class CguService {
  constructor(session) {
    token = get(session, 'user.data.access_token');
  }
  loadCguDetails = (tenant) => client.content.termsLatest(tenant).then((data) => data.data)
  //checkCguByClient = (version) => client.passport.isTermsApproved(version,token).then((data) => data)
  acceptCgu = (version) => client.passport.approveTerms(version,token).then((data) => data)
}
