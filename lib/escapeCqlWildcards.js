/**
 * Escape all CQL wildcard characters in a string by pre-pending each with
 * a single backslash (\). Wildcards are given by
 * https://www.loc.gov/standards/sru/cql/contextSets/theCqlContextSet.html
 * (see the section "Masking"):
 *
 * * asterisk (*)
 * * question mark (?)
 * * caret (^) (sic)
 * * backslash (\)
 * * quote (")
 *
 * @param string a string
 * @return string the input string with quotes and backslashes escaped
 */
export default function escapeCqlWildcards(str) {
  return str.replace(/\*|\?|\^|"|\\/g, c => '\\' + c);
}
