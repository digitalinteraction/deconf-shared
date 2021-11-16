//
// Attendance module
//

import { JsonRepresentation } from './utils'

/** How many people are attending a session */
export interface SessionAttendance {
  session: string
  count: number
}

/** A record of an attendee attending a session */
export interface Attendance {
  id: number
  created: Date
  attendee: number
  session: string
}

/** `Attendance` when stored as JSON */
export type AttendanceJson = JsonRepresentation<Attendance>

/** Attendance information for a user in a session */
export interface UserSessionAttendance {
  isAttending: boolean
  sessionCount: number
}

/** All a user's attendance */
export interface UserAttendance {
  attendance: Attendance[]
}

/** `UserAttendance` stored in json */
export type UserAttendanceJson = JsonRepresentation<UserAttendance>
