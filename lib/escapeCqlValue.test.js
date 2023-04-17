import { describe, expect, test } from 'vitest';

import escapeCqlValue from './escapeCqlValue';

describe('correctly escapes CQL special characters', () => {
  test('does not modify non-special strings', () => {
    const str = 'abc';
    expect(escapeCqlValue(str)).toEqual(str);
  });

  test('escapes quote (") with a backslash', () => {
    const str = 'a"b"c';
    expect(escapeCqlValue(str)).toEqual('a\\"b\\"c');
  });

  test('escapes backslash (\\) with a backslash', () => {
    const str = 'a\\b\\c';
    expect(escapeCqlValue(str)).toEqual('a\\\\b\\\\c');
  });
});
