export type Prettify<T extends object> = {
  [Key in keyof T]: T[Key]
} & {}

export type TypedOmit<T, K extends keyof T> = Omit<T, K>

export type Mutable<T> =
  T extends ReadonlyArray<infer U>
    ? Array<Mutable<U>>
    : T extends object
      ? { -readonly [P in keyof T]: Mutable<T[P]> }
      : T
