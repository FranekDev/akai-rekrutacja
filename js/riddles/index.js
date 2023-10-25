// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  // uzupełnij tutaj
  const numbers = Array.from(String(number));
  const reversedNumbers = numbers.reverse();
  const reversedNumber = reversedNumbers.join('');
  
  return parseInt(reversedNumber);
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  // uzupełnij tutaj
  let sum = 0;

  array.reduce((acc, curr) => {
    return curr % 2 === 0 ? sum += curr : curr;
  }, sum);

  return sum;
}

console.log("2.", addEven(tab));
