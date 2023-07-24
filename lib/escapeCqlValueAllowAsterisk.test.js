import { describe, expect, test } from '@jest/globals';

import escapeCqlValueAllowAsterisk from './escapeCqlValueAllowAsterisk';

describe('escapeCqlValueAllowAsterisk only escapes four CQL special characters and does not escape asterisk', () => {
  test.each([
    ['', ''],
    ['foo_bar baz%', 'foo_bar baz%'],
    ['f"o\\o^b*a?r', 'f\\"o\\\\o\\^b*a\\?r'],
    ['?*^\\"??**^^\\\\""', '\\?*\\^\\\\\\"\\?\\?**\\^\\^\\\\\\\\\\"\\"'],
  ])('escapeCqlValue(%p) should be %p', (raw, expected) => {
    expect(escapeCqlValueAllowAsterisk(raw)).toEqual(expected);
  });
});
