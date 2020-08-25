const findLongestWord = function (string) {
  const stringArray = string.split(" ");
  let numberOfLettersArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    let letterInArray = stringArray[i].length;
    numberOfLettersArray.push(letterInArray);
  }
  const longestNumber = Math.max.apply(null, numberOfLettersArray);
  const corespondingWord = numberOfLettersArray.indexOf(longestNumber);
  return stringArray.splice(corespondingWord, 1)[0];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
