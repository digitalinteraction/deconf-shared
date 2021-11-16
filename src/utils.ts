// prettier-ignore
/** A helper to take out dates from an object (as JSON would) */
export type JsonRepresentation<T> = T extends Date
  ? string
  : T extends object
    ? { [K in keyof T]: JsonRepresentation<T[K]> }
    : T

/** An object of things that have been localised */
export type Localised = Record<string, string | undefined>
