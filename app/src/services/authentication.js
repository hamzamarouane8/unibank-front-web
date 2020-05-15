import {client} from './_config'

export default class AuthService {
  //TODO: value static SN for purpose of test , i will remove it when i integrate 'choose country US'
  login = (credentials, tenant) => client.passport.authenticate(tenant, credentials.username, credentials.password).then((auth) => auth)
}
