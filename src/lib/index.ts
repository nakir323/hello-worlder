export class UUID {
  private value: string;

  constructor() {
    var S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var N = 16;
    this.value = [...Array(N)]
      .map(() => S[Math.floor(Math.random() * S.length)])
      .join('');
  }

  toString() {
    return this.value;
  }
}

export const uuid = () => {
  return new UUID();
};
