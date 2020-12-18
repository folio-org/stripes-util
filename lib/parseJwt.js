/**
 * Parse a JWT token and return the resultant object. Throw an error if
 * parsing fails or the object does not contain the required keys sub,
 * user_id, iat, and tenant.
 *
 * verbatim from https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
 *
 * @param token string a JWT token
 * @return object containing the keys sub, user_id, iat, tenant
 *
 */
export default function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const p = JSON.parse(jsonPayload);
    // there's gotta be a better way to validate this, right?
    // is there an object-shape defined somewhere? anywhere? buehler?
    if (p.sub && p.user_id && p.iat && p.tenant) {
      return p;
    }
    throw new Error('Could not parse token');
  }
  catch(e) {
    throw new Error('Could not parse token');
  }
}
