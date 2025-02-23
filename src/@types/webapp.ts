import {
  ClientId,
  ClientSecret,
  CallbackUrl,
  Endpoint,
  AuthReturnType
} from '.'

import { AuthScope } from './authenticate'

export interface WebappCredentials {
  clientId: ClientId
  clientSecret: ClientSecret
  callbackUrl: CallbackUrl
  endpoint: Endpoint
  scope?: AuthScope
  callbackUrlWithCode?: string
}

export interface WebappCredentialsToken extends WebappCredentials {
  callbackUrlWithCode: string
}

export interface GetWebappToken {
  (credentials: WebappCredentialsToken): AuthReturnType
}

export default interface Webapp {
  (credentials: WebappCredentials): AuthReturnType
}
