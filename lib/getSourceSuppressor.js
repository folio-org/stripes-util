/**
 * A factory that returns a suppressor function used in `<EditableList>`.
 *
 * The return function compares the entry source with the passed source (or list ofsources) and, if the values match, determines the result to be suppressed.
 *
 * @param {string | string[]} sourceValue
 * @returns {function({ source: string }): boolean} Suppressor
 */
const getSourceSuppressor = (sourceValue) => (entry) => {
  if (Array.isArray(sourceValue)) {
    return sourceValue.includes(entry.source);
  }

  return entry.source === sourceValue;
};

export default getSourceSuppressor;
