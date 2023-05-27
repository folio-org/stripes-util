import { describe, expect, test } from '@jest/globals';

import maskCqlValue from './maskCqlValue';

describe('maskCqlValue escapes all five CQL special characters', () => {
  test.each([
    ['', ''],
    ['foo_bar baz%', 'foo_bar baz%'],
    ['f"o\\o^b*a?r', 'f\\"o\\\\o\\^b\\*a\\?r'],
    ['?*^\\"??**^^\\\\""', '\\?\\*\\^\\\\\\"\\?\\?\\*\\*\\^\\^\\\\\\\\\\"\\"'],
  ])('maskCqlValue(%p) should be %p', (raw, expected) => {
    expect(maskCqlValue(raw)).toEqual(expected);
  });
});
