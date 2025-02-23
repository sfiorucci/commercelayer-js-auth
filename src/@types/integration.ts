import { ClientId, ClientSecret, Endpoint, AuthReturnType } from './index'
import { User } from './salesChannel'
import { AuthScope } from './authenticate'

export interface IntegrationCredentials {
  clientId: ClientId
  clientSecret: ClientSecret
  endpoint: Endpoint
  scope?: AuthScope
}

export default interface Integration {
  (credentials: IntegrationCredentials, user?: User): AuthReturnType
}
