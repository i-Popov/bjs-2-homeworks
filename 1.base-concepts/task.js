function solveEquation(a, b, c) {
    let d = [(parseInt(Math.pow(b, 2) - (4 * a * c)))];
    d = Number(d);

    let arr = [];

    let x = -b / (2 * a);
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);

    if (d > 0) {
        arr = [x1, x2];
        console.log(arr);
    } else if (d === 0) {
        arr = [x];
        console.log(arr);
    } else {
        arr = [];
        console.log(arr);
    }
    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  let dateMilliseconds = date.getTime() - Date.now();
  let n = Math.round(dateMilliseconds / 2592000000);
    console.log(n);

    let p = percent / 12 / 100;
    let paymentMonth = (amount - contribution) * (p + (p / (Math.pow((1 + p), n)-1)));
    console.log(paymentMonth);


    let totalAmount = Math.round((paymentMonth * n) * 100) / 100;
  return totalAmount;
}

//Не забывайте, что вы должны работать с числами: если параметр функции будет строкой, то попытайтесь преобразовать в число.
// Во всех остальных случаях возвращайте строку: `“Параметр <название параметра> содержит неправильное значение <значение параметра>”`.
