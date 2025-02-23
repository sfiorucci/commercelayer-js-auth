import { AuthScope } from './authenticate'
import { ClientId, Endpoint, AuthReturnType } from './index'

export interface User {
  username: string
  password: string
}

export interface ClientCredentials {
  clientId: ClientId
  endpoint: Endpoint
  scope: AuthScope
}

export interface GetCustomerToken {
  (clientCredential: ClientCredentials, user: User): AuthReturnType
}

export default interface SalesChannel {
  (clientCredentials: ClientCredentials, user?: User): AuthReturnType
}
