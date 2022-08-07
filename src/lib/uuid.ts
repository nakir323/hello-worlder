export class UUID {
  constructor(private value: string) {}

  static from(value: string) {
    return new UUID(value)
  }

  toString() {
    return this.value
  }
}