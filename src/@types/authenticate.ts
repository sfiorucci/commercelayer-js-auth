import { AuthReturnType } from './index'

export interface AuthConfig {
	clientId: string
	clientSecret?: string
	accessTokenUri: string
	authorizationUri?: string
	redirectUri?: string
	username?: string
	password?: string
}

export type AuthType = 'clientCredentials' | 'owner' | 'authorizationCode'

export type AuthScope = string[] | string

export interface Authenticate {
	(
		type: AuthType,
		config: AuthConfig,
		scope?: AuthScope,
		code?: string
	): AuthReturnType
}
