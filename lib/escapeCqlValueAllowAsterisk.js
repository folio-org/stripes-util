/**
 * Escape quote ("), backslash (\), caret(^), question mark (?) characters in a string
 * by pre-pending them with a single backslash. Don't escape asterisk (*).
 *
 * @param string a string
 * @return string the input string with the four special CQL characters masked
 */
export default function escapeCqlValueAllowAsterisk(str) {
  return str.replace(/["\\^?]/g, c => '\\' + c);
}
