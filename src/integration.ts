import authenticate from './authenticate'
import { AuthConfig } from './@types/authenticate'
import Integration from './@types/integration'

const integration: Integration = async (
  { clientId, clientSecret, endpoint, scope },
  user
) => {
  const credentials: AuthConfig = {
    clientId,
    clientSecret,
    accessTokenUri: `${endpoint}/oauth/token`,
    redirectUri: '',
    username: user?.username,
    password: user?.password
  }
  return user
    ? authenticate('owner', credentials, scope)
    : authenticate('clientCredentials', credentials, scope)
}

export default integration
