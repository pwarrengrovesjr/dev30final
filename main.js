const findSum = function(array) {
  return array.reduce(function(sum, number) {
    return sum + number;
  }, 0);
};

const findFrequency = function(array) {
  array = array.reduce(function (acc, str) {
    if (acc.hasOwnProperty(str)) {
      acc[str] += 1;
    } else {
      acc[str] = 1;
    }
  
    return acc;
  }, {});

  let values = Object.values(array);

  let keys = Object.keys(array);

  let highestValue = Math.max(...values);

  let LowestValue = Math.min(...values);

  let highestIndex = values.indexOf(highestValue);

  let lowestIndex = values.indexOf(LowestValue);

  let most = keys.at(highestIndex);

  let least = keys.at(lowestIndex);

  return { most: `${most}`, least: `${least}` };
};

const isPalindrome = function(str) {
  str = str.toLowerCase();

  let splitStr = str.split('');

  let reverseSplitStr = splitStr.reverse();

  let reverseStr = reverseSplitStr.join('');

  if(str === reverseStr) {
    return true;
  } else {
    return false;
  }
};

const largestPair = function(array) {
  let arrayOfProducts = array.map(function (int, i, arr) {
    return arr[i] * arr[i + 1];
  });

  arrayOfProducts.splice(Number(array.length - 1), 1)

  return Math.max(...arrayOfProducts);
};

const removeParenth = function(str) {
  let beforeParenth = str.slice(0, str.indexOf('('));

  let afterParenth = str.slice(str.indexOf(')') + 1);

  let noParenthStr = beforeParenth.concat(afterParenth);

  return noParenthStr;
};

const scoreScrabble = function(str) {
  str = str.toLowerCase();
  
  const wordArray = str.split('');
  
  let scrabbleLetterPoints = [
    {points: 1, letters: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']},
    {points: 2, letters: ['d', 'g']},
    {points: 3, letters: ['b', 'c', 'm', 'p']},
    {points: 4, letters: ['f', 'h', 'v', 'w', 'y']},
    {points: 5, letters: ['k']},
    {points: 8, letters: ['j', 'x']},
    {points: 10, letters: ['q', 'z']}
  ]

  let wordLetterValues = wordArray.map(function (val, i, arr) {
    if (scrabbleLetterPoints[0].letters.includes(arr[i])) {
      return arr[i] = scrabbleLetterPoints[0].points;
    } else if (scrabbleLetterPoints[1].letters.includes(arr[i])) {
      return arr[i] = scrabbleLetterPoints[1].points;
    } else if (scrabbleLetterPoints[2].letters.includes(arr[i])) {
      return arr[i] = scrabbleLetterPoints[2].points;
    } else if (scrabbleLetterPoints[3].letters.includes(arr[i])) {
      return arr[i] = scrabbleLetterPoints[3].points;
    } else if (scrabbleLetterPoints[4].letters.includes(arr[i])) {
      return arr[i] = scrabbleLetterPoints[4].points;
    } else if (scrabbleLetterPoints[5].letters.includes(arr[i])) {
      return arr[i] = scrabbleLetterPoints[5].points;
    } else if (scrabbleLetterPoints[6].letters.includes(arr[i])) {
      return arr[i] = scrabbleLetterPoints[6].points;
    }
  });

  let wordScore = wordLetterValues.reduce(function (acc, points) {
    return acc + points;
  }, 0)

  return wordScore;
};
