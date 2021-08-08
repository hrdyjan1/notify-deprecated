function noop() {}

function isDefined<T>(x: T | undefined | null): x is T {
  return !(typeof x === 'undefined' || x === null);
}

function isNotDefined<T>(x: T | undefined | null): x is undefined | null {
  return !isDefined(x);
}

function isString(x: unknown): x is string {
  return typeof x === 'string';
}

export {isDefined, isString, isNotDefined, noop};
