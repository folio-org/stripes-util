/**
 * Apply a promise function to an array in sequence
 *
 * @param arr Array of values to be passed to @fn
 * @param fn Function to apply to @arr (must return a promise)
 *
 * NOTE: this function previously lived in ui-users; it was moved here for
 * future use, not being required in users at the moment.
 */
export default function eachPromise(arr, fn) {
  if (!Array.isArray(arr)) return Promise.reject(new Error('Array not found'));
  return arr.reduce((prev, cur) => (prev.then(() => fn(cur))), Promise.resolve());
}
