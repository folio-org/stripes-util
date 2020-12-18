import { describe, expect, test } from '@jest/globals';

import eachPromise from './eachPromise';

describe('execute an array of promises in series', () => {
  test('rejects if the first argument is not an array', () => {
    expect.assertions(1);
    return eachPromise('abc', () => {}).catch(e => {
      expect(e.message).toEqual('Array not found');
    });
  });

  test('resolves to a single promise', () => {
    expect.assertions(1);
    const list = ['a', 'b', 'c'];
    return expect(eachPromise(list, (v) => Promise.resolve(v))).resolves.toEqual('c');
  });
});

/*

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

Copy
To test this function, we can use a mock function, and inspect the mock's state to ensure the callback is invoked as expected.

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[0].value).toBe(42);

*/
