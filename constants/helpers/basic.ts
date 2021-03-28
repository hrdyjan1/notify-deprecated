function isDefined<T>(x: T | undefined | null): x is T {
  return !(typeof x === 'undefined' || x === null);
}

function isNumber(x: unknown): x is number {
    return typeof x === 'number';
  }
  

export { isDefined, isNumber };
