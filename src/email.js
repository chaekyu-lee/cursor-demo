// RFC 5322 addr-spec pattern (https://emailregex.com/, https://stackoverflow.com/a/1917982)
const RFC5322_EMAIL_REGEX =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

function extractEmails(members) {
  if (!Array.isArray(members)) {
    return [];
  }
  return members.map((member) => member.email);
}

function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  return RFC5322_EMAIL_REGEX.test(email);
}

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
