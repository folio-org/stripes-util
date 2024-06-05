import escapeCqlWildcards from './escapeCqlWildcards';

describe('correctly escapes CQL special characters', () => {
  test('does not modify non-special strings', () => {
    const str = 'abc';
    expect(escapeCqlWildcards(str)).toEqual(str);
  });

  test('escapes asterisk (*) with a backslash', () => {
    const str = 'a*b*c';
    expect(escapeCqlWildcards(str)).toEqual('a\\*b\\*c');
  });

  test('escapes question mark (?) with a backslash', () => {
    const str = 'a?b?c';
    expect(escapeCqlWildcards(str)).toEqual('a\\?b\\?c');
  });

  test('escapes caret (^) with a backslash', () => {
    const str = 'a^b^c';
    expect(escapeCqlWildcards(str)).toEqual('a\\^b\\^c');
  });

  test('escapes quote (") with a backslash', () => {
    const str = 'a"b"c';
    expect(escapeCqlWildcards(str)).toEqual('a\\"b\\"c');
  });

  test('escapes backslash (\\) with a backslash', () => {
    const str = 'a\\b\\c';
    expect(escapeCqlWildcards(str)).toEqual('a\\\\b\\\\c');
  });
});
