/**
 * Mask/escape quote ("), backslash (\), caret(^), star (*) and question mark (?)
 * characters in a string by pre-pending them with a single backslash.
 * See https://www.loc.gov/standards/sru/cql/contextSets/theCqlContextSet.html
 *
 * To only escape quote and backslash use escapeCqlValue instead.
 *
 * @param string a string
 * @return string the input string with the five special characters masked
 */
export default function maskCqlValue(str) {
  return str.replace(/"|\\|\^|\*|\?/g, c => '\\' + c);
}
