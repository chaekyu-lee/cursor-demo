/**
 * RFC 5322 addr-spec 정규식.
 * @see https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1
 * @see https://emailregex.com/ (General Email Regex, RFC 5322 Official Standard)
 * @see https://stackoverflow.com/a/1917982 (IP 옥텟 `00` 허용 버그 수정본)
 */
const RFC5322_EMAIL_REGEX =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

/**
 * 회원 목록에서 이메일 문자열을 추출한다.
 * @param {Array<{ email?: string }>} members - 회원 객체 배열
 * @returns {string[]} 이메일 문자열 배열
 */
function extractEmails(members) {
  if (!Array.isArray(members)) {
    return [];
  }
  return members.map((member) => member.email);
}

/**
 * RFC 5322 addr-spec 형식에 맞는 이메일인지 검사한다.
 * @param {unknown} email - 검사할 값
 * @returns {boolean} 유효하면 true
 */
function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  return RFC5322_EMAIL_REGEX.test(email);
}

/**
 * 회원 목록에서 유효한 이메일만 추출한다.
 * @param {Array<{ email?: string }>} members - 회원 객체 배열
 * @returns {string[]} 유효 이메일 배열
 */
function getValidEmails(members) {
  return extractEmails(members).filter(isValidEmail);
}

/**
 * 회원 목록에서 유효한 이메일만 추출하고 중복을 제거한다.
 * @param {Array<{ email?: string }>} members - 회원 객체 배열
 * @returns {string[]} 중복이 제거된 유효 이메일 배열
 */
function uniqueValidEmails(members) {
  return [...new Set(getValidEmails(members))];
}

module.exports = {
  extractEmails,
  isValidEmail,
  getValidEmails,
  uniqueValidEmails,
};
