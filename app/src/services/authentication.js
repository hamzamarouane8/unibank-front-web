import { client } from './_config'

const login1 = ({ tenant, username, password }) => {
  return Promise.resolve({ auth: { name: "hamza", token: "fdsdsdsdsdsds" } })

};
export default class AuthService {

  //TODO: value static SN for purpose of test , i will remove it when i integrate 'choose country US'
  login = (credentials, tenant) => login1(tenant, credentials.username, credentials.password).then((auth) => auth)
}
