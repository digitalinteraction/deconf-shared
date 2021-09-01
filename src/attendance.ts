//
// Attendance module
//

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
