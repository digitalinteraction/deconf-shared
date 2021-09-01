//
// Interpret module
//

/** Someone who is responsible for broadcasting audio for different languages */
export interface Interpreter {
  id: string
  name: string
  email: string
}

/** A Booth where interpreters broadcast to a specific channel in a session */
export interface InterpretBooth {
  sessionId: string
  channel: string
}

/** A booth that is being actively interpreted to */
export interface ActiveBooth {
  socketId: string
  attendee: number
  interpreter: Interpreter
}

/**
 * Information for an active interpreter,
 * stored to quickly keep track and optimise audio-sending
 */
export interface ActiveInterpreter {
  booth: InterpretBooth
}
