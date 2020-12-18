import { describe, expect, test } from '@jest/globals';

import getFullName from './getFullName';

describe('correctly coalesces last, first, and middle names', () => {
  test('handles lname only', () => {
    const name = { personal: { lastName: 'Last' } };

    expect(getFullName(name)).toEqual('Last  ');
  });

  test('handles lname, fname only', () => {
    const name = { personal: { lastName: 'Last', firstName: 'First' } };

    expect(getFullName(name)).toEqual('Last, First ');
  });

  test('handles lname/fname/mname', () => {
    const name = { personal: { lastName: 'Last', firstName: 'First', middleName: 'Middle' } };

    expect(getFullName(name)).toEqual('Last, First Middle');
  });
});
