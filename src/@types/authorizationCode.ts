import * as ClientOAuth2 from 'client-oauth2'
import { AuthReturnType } from './index'

export default interface AuthorizationCode {
	(auth: ClientOAuth2, uri: string, code?: string): AuthReturnType
}
