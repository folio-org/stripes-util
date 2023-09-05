import { getPermissionLabelString } from './permission';

describe('getPermissionLabelString', () => {
  test('uses displayName when available', () => {
    const expected = 'chicken';
    const f = (props) => props.defaultMessage;
    const p = {
      permissionName: 'permission.funky',
      displayName: 'chicken',
    };

    expect(getPermissionLabelString(p, f)).toEqual(expected);
  });

  test('uses permissionName when displayName is not available', () => {
    const expected = 'permission.funky';
    const f = (props) => props.defaultMessage;
    const p = {
      permissionName: 'permission.funky',
    };

    expect(getPermissionLabelString(p, f)).toEqual(expected);
  });

  test('shows permissionName and displayName when given "showRaw"', () => {
    const expected = 'permission.funky (chicken)';
    const f = (props) => props.defaultMessage;
    const p = {
      permissionName: 'permission.funky',
      displayName: 'chicken',
    };

    expect(getPermissionLabelString(p, f, true)).toEqual(expected);
  });

  class Foo {
    constructor(message) {
      this.message = message;
    }

    toString() {
      return this.message;
    }
  }

  test('ignores "@formatjs/intl Error MISSING_TRANSLATION" errors', () => {
    const error = jest.spyOn(console, 'error');
    const f = (props) => {
      const foo = new Foo('@formatjs/intl Error MISSING_TRANSLATION');
      console.error(foo);
      return props.defaultMessage;
    };

    const expected = 'chicken';
    const p = {
      permissionName: 'permission.funky',
      displayName: 'chicken',
    };

    const ret = getPermissionLabelString(p, f);

    expect(ret).toBe(expected);
    expect(error).toHaveBeenCalledTimes(0);

    error.mockReset();
  });

  test('displays other errors', () => {
    const error = jest.spyOn(console, 'error');
    const f = (props) => {
      const foo = new Foo('Kaboom');
      console.error(foo);
      return props.defaultMessage;
    };

    const expected = 'chicken';
    const p = {
      permissionName: 'permission.funky',
      displayName: 'chicken',
    };

    const ret = getPermissionLabelString(p, f);

    expect(ret).toBe(expected);
    expect(error).toHaveBeenCalledTimes(1);

    error.mockReset();
  });
});
