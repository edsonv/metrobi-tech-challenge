function hasProperBrackets(text) {
  let brackets = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  let verified = [];

  for (let char in text) {
    /*
      - If the character is defined in brackets object then push it to verified array
      - Else if the character is defined as the value of a property inside brackets object and if the first element in the verified array is not equal to the current charracter, then return false inmediately.
    */
    if (brackets.hasOwnProperty(text[char])) {
      verified.push(brackets[text[char]]);
    } else if (
      Object.values(brackets).includes(text[char]) &&
      verified.pop() !== text[char]
    ) {
      return false;
    }
  }

  return verified.length === 0;
}

console.log(hasProperBrackets('{[]}')); // true
console.log(hasProperBrackets('{(])}')); // false
console.log(hasProperBrackets('{([)]}')); // false
console.log(hasProperBrackets('{a}')); // true
