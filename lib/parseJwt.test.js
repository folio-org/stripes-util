import { describe, expect, test } from '@jest/globals';

import parseJwt from './parseJwt';

describe('handles valid tokens', () => {
  test('fully populated element', () => {
    const t = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb21lX3VzZXIiLCJ1c2VyX2lkIjoiZGVhZGJlZWYtZGVhZC1iZWVmLWRlYWQtYmVlZjAwY29mZmVlIiwiaWF0IjoxNjA4MzA1ODQwLCJ0ZW5hbnQiOiJ0aHVuZGVyY2hpY2tlbiJ9.SYjIGoM78zfPygP1rvC9WTUtlb0-mjkdtmB_Z3KQrik';
    const expected = {
      'sub': 'some_user',
      'user_id': 'deadbeef-dead-beef-dead-beef00coffee',
      'iat': 1608305840,
      'tenant': 'thunderchicken'
    };
    expect(parseJwt(t)).toMatchObject(expected);
  });
});

describe('rejects invalid tokens', () => {
  test('rejects an obviously malformed token', () => {
    expect(() => {
      parseJwt('this is not a valid token');
    }).toThrow('Could not parse token');
  });

  test('rejects a subtly malformed token', () => {
    const t = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb21lX3VzZXIiLCJ1c2VyX2lkIjoiZGVhZGJlZWYtZGVhZC1iZWVmLWRlYWQtYmVlZjAwY29mZmVlIiwiaWF0IjoxNjA4MzA1ODQwLCJ0ZW5hbnQiOiJ0aHVuZGVyY2hpY2tlbiJ.SYjIGoM78zfPygP1rvC9WTUtlb0-mjkdtmB_Z3KQri';
    expect(() => {
      parseJwt(t);
    }).toThrow('Could not parse token');
  });

  test('rejects a correctly formed token missing required attributes', () => {
    expect(() => {
      parseJwt('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb21lX3VzZXIiLCJ1c2VyX2lkIjoiZGVhZGJlZWYtZGVhZC1iZWVmLWRlYWQtYmVlZjAwY29mZmVlIiwiaWF0IjoxNjA4MzA1ODQwfQ.SZ7KLBfsAnkGoZC2W0tcnFwcWgJXQWy9SeHC6Tkw_YE');
    }).toThrow('Could not parse token');
  });
});
