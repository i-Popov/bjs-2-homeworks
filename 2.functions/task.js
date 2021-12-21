// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity ;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
       max = arr[i];
    }
    if (arr[i] < min){
        min = arr[i];
    }
  }

  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

getArrayParams([5]);


// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
  }
  let difference = max - min;

  return difference;
}
