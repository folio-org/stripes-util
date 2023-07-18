import { describe, expect, test } from '@jest/globals';

import escapeCqlValue from './escapeCqlValue';

describe('escapeCqlValue masks all five CQL special characters', () => {
  test.each([
    ['', ''],
    ['foo_bar baz%', 'foo_bar baz%'],
    ['f"o\\o^b*a?r', 'f\\"o\\\\o\\^b\\*a\\?r'],
    ['?*^\\"??**^^\\\\""', '\\?\\*\\^\\\\\\"\\?\\?\\*\\*\\^\\^\\\\\\\\\\"\\"'],
  ])('escapeCqlValue(%p) should be %p', (raw, expected) => {
    expect(escapeCqlValue(raw)).toEqual(expected);
  });
});
