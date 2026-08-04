function isPalindrome(s) {
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (i = 0, j = cleaned.length - 1; i < j; i++, j--) {
    if (cleaned[i] != cleaned[j]) {
      return false;
    }
  }
  return true;
}

const string = 'adnan'

console.log(isPalindrome(string));
