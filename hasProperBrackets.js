function hasProperBrackets(text) {
  // if (!text) return false;
  let t = text;
  let validator = '';
  for (; (validator = t.replace(/\[\]|\{\}|\(\)/, '')) !== t; t = validator);
  return !validator;
}

console.log(hasProperBrackets('{[]}'));
console.log(hasProperBrackets('{(])}'));
console.log(hasProperBrackets('{([)]}'));
