// This file defines shared types for the api & ui toolkits

//
// Conference
//

export interface Attendance {
  id: number
  created: Date
  attendee: number
  session: string
}

export interface ConfigFlag {
  enabled: boolean
  visible: boolean
}

export interface ConfigSettings {
  atrium: ConfigFlag
  whatsOn: ConfigFlag
  schedule: ConfigFlag
  coffeeChat: ConfigFlag
  helpDesk: ConfigFlag

  startDate: Date
  endDate: Date
  isStatic: boolean
}

export interface SessionLink {
  type: string
  url: string
  title?: string
  language: string
}

export type Localised = Record<string, string>

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

export enum SessionState {
  draft = 'draft',
  accepted = 'accepted',
  rejected = 'rejected',
  cancelled = 'cancelled',
  confirmed = 'confirmed',
}

export enum SessionVisibility {
  public = 'public',
  private = 'private',
}

export interface Session {
  id: string
  type: string
  slot?: string
  track: string
  themes: string[]
  coverImage?: string
  title: Localised
  content: Localised
  links: SessionLink[]
  hostLanguages: string[]
  enableInterpretation: boolean
  speakers: string[]
  hostOrganisation: Localised
  isRecorded: boolean
  isOfficial: boolean
  isFeatured: boolean
  visibility: SessionVisibility
  state: SessionState

  proxyUrl?: string
  hideFromSchedule: boolean
}

// export enum SessionLayout {
//   plenary = 'plenary',
//   workshop = 'workshop',
//   coffeechat = 'coffeechat',
// }

export interface SessionType {
  id: string
  iconGroup: string
  iconName: string
  layout: string
  title: Localised
}

export interface SessionSlotJson {
  id: string
  start: string
  end: string
}

export interface SessionSlot {
  id: string
  start: Date
  end: Date
}

export interface Speaker {
  id: string
  name: string
  role: Localised
  bio: Localised
  headshot?: string
}

export interface Theme {
  id: string
  title: Localised
}

export interface Track {
  id: string
  title: Localised
}

export interface Interpreter {
  id: string
  name: string
  email: string
}

//
// Authentication
//

export interface EmailLoginToken {
  kind: 'email-login'
  sub: number
  user_roles: string[]
}
export interface AuthToken {
  kind: 'auth'
  sub: number
  user_roles: string[]
  user_lang: string
}
