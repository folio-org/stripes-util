/**
 * Escape quote ("), backslash (\), caret(^), star (*) and question mark (?)
 * characters in a string by pre-pending them with a single backslash.
 * See https://www.loc.gov/standards/sru/cql/contextSets/theCqlContextSet.html
 *
 * @param string a string
 * @return string the input string with the five special CQL characters masked
 */
export default function escapeCqlValue(str) {
  return str.replace(/["\\^*?]/g, c => '\\' + c);
}
