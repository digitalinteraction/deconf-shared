//
// Carbon module
//

/** An estimation of how much carbon a conference could have emitted from air travel */
export interface CarbonCalculation {
  totalDistance: number
  carbonNotEmitted: number
}

/** A country and lat/lng location */
export interface CountryLocation {
  code: string
  name: string
  location: {
    lat: number
    lng: number
  }
}
