//
// Registration module
//

import { JsonRepresentation } from './utils'

/** A request to register */
export interface RegisterRequest {
  name: string
  email: string
  language: string
  country: string
  affiliation: string
  userData: unknown
}

/** A registration record with unknown `userData` */
export interface Registration {
  id: number
  created: Date
  name: string
  email: string
  language: string
  country: string
  affiliation: string
  verified: boolean
  consented: Date
  userData: unknown
}

/** Registration when stored as JSON */
export type RegistrationJson = JsonRepresentation<Registration>
