import { describe, expect, test } from '@jest/globals';

import escapeCqlValue from './escapeCqlValue';

describe('escapeCqlValue escapes quote and backslash', () => {
  test.each([
    ['', ''],
    ['abc', 'abc'],
    ['a"b"c', 'a\\"b\\"c'],
    ['a\\b\\c', 'a\\\\b\\\\c'],
    ['^*? _%', '^*? _%'],
  ])('escapeCqlValue(%p) should be %p', (raw, expected) => {
    expect(escapeCqlValue(raw)).toEqual(expected);
  });
});
