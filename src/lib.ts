//
// lib module
//

/**
 * Generic config for a deconf deployment
 * @deprecated
 */
export interface DeconfConfig {
  admins: Array<{ email: string }>
  mail: {
    fromEmail: string
    replyToEmail: string
  }
  organiser: {
    name: string
    email: string
  }
  carbon: {
    originCountry: string
  }
}

/** A decoded JWT to verify a user's email address */
export interface EmailLoginToken {
  kind: 'email-login'
  sub: number
  user_roles: string[]
  redirect?: string
}

/** A decoded JWT to provide app authorization */
export interface AuthToken {
  kind: 'auth'
  sub: number
  user_roles: string[]
  user_lang: string
}

/** A decoded JWT to verify a user */
export interface VerifyToken {
  kind: 'verify'
  sub: number
}
