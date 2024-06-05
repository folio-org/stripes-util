/**
 * Escape quote (") and backslash (\) characters in a string by pre-pending
 * them with a single backslash. This function preserves asterisk (*),
 * question mark (?) and caret (^), allowing them to function as wildcards
 * in the query.
 *
 * @see escapeCqlWildcards for a function that escapes all CQL special characters
 *
 * @param string a string
 * @return string the input string with quotes and backslashes escaped
 */
export default function escapeCqlValue(str) {
  return str.replace(/"|\\/g, c => '\\' + c);
}
