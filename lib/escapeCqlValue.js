/**
 * Escape quote (") and backslash (\) characters in a string by pre-pending
 * them with a single backslash.
 *
 * To also escape the other three special CQL characters caret (^), star (*)
 * and question mark (?) use maskCqlValue instead.
 *
 * @param string a string
 * @return string the input string with quotes and backslashes escaped
 */
export default function escapeCqlValue(str) {
  return str.replace(/["\\]/g, c => '\\' + c);
}
