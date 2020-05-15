import {client} from './_config'

/**
 * Charge le descripteur JSON contenant tous les informations pour faire le rendu de la page CGU
 */

export default class BankService {
  loadAtms = (codeCountry) => client.branches.atms(codeCountry).then((response)=>response.data).catch(error=>error)
  loadBranches = (codeCountry) => client.branches.branches(codeCountry).then((response)=>response.data).catch(error=>error)
}
