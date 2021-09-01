//
// Registration module
//

export interface RegisterRequest {
  name: string
  email: string
  language: string
  country: string
  affiliation: string
}

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
}
