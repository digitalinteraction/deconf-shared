import { JsonRepresentation, Localised } from './utils'

//
// Conference module
//

/** A flag to enable/disable/show/hide a page in the app */
export interface PageFlag {
  enabled: boolean
  visible: boolean
}

/** General configuration for a conference */
export interface ConferenceConfig {
  atrium: PageFlag
  whatsOn: PageFlag
  schedule: PageFlag
  coffeeChat: PageFlag
  helpDesk: PageFlag

  startDate: Date
  endDate: Date
  isStatic: boolean
}

/** ConferenceConfig when stored as JSON */
export type ConferenceConfigJson = JsonRepresentation<ConferenceConfig>

/**
 * A localised link for a session
 */
export interface LocalisedLink {
  /** @deprecated Link parsing is preferred */
  type: string
  url: string
  title?: string
  language: string
}

/**
 * A localised link for a session
 * @deprecated use `LocalisedLink`
 */
export type SessionLink = LocalisedLink

/** The various states a session can be */
export enum SessionState {
  draft = 'draft',
  accepted = 'accepted',
  rejected = 'rejected',
  cancelled = 'cancelled',
  confirmed = 'confirmed',
}

/** The various visiblities a session can be */
export enum SessionVisibility {
  public = 'public',
  private = 'private',
}

/** A virtual session being hosted at a conference */
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
  participantCap: number | null

  proxyUrl?: string
  hideFromSchedule: boolean
}

/** A type of session */
export interface SessionType {
  id: string
  iconGroup: string
  iconName: string
  layout: string
  title: Localised
}

/** A time range that a session can be hosted in */
export interface SessionSlot {
  id: string
  start: Date
  end: Date
}

/** A SessionSlot stored as JSON */
export type SessionSlotJson = JsonRepresentation<SessionSlot>

/** A key person who is at a session */
export interface Speaker {
  id: string
  name: string
  role: Localised
  bio: Localised
  headshot?: string
}

/** A has-many taxonomy that a session can have */
export interface Theme {
  id: string
  title: Localised
}

/** A has-one taxonomy that a session can have */
export interface Track {
  id: string
  title: Localised
}

/** A full conference schedule with all data types */
export interface ScheduleRecord {
  sessions: Session[]
  settings: ConferenceConfig
  slots: SessionSlot[]
  speakers: Speaker[]
  themes: Theme[]
  tracks: Track[]
  types: SessionType[]
}
