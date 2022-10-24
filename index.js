// All odd Fibbonaci's
function sumOddFibsBasic(number) {

  let previousNum = 0;
  let currentNum = 1;
  let result = 0;

  while (currentNum <= number) {
    if (currentNum % 2 !== 0) {
      result += currentNum;
    }
 
    currentNum += previousNum;
    previousNum = currentNum - previousNum;
  }

  return result;
}

console.time('Start Algo 1');
console.log(sumOddFibsBasic(467));
console.timeEnd('Start Algo 1'); // Start Algo 1: 0.460693359375ms
