function solveEquation(a, b, c) {
    const discriminant = Number([(parseInt(Math.pow(b, 2) - (4 * a * c)))]);

    let x = -b / (2 * a);
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    let arr;

    if (discriminant > 0) {
        arr = [x1, x2];
    } else if (discriminant === 0) {
        arr = [x];
    } else {
        arr = [];
    }
    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let percentTest = parseInt(percent,10)
    if (Number.isNaN(percentTest)) {
        return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
    }

    let contributionTest = parseInt(contribution,10)
    if (Number.isNaN(contributionTest)) {
        return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
    }

    let amountTest = parseInt(amount,10)
    if (Number.isNaN(amountTest)) {
        return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
    }

    if (date.getTime() < Date.now()) {
        return `Параметр "Дата" введен неверно. Дата должна быть не ранее сегодняшнего дня))`
    }


  let dateMilliseconds = date.getTime() - Date.now();
  let n = Math.round(dateMilliseconds / 2631600000);
    console.log(n);

    let p = percent / 12 / 100;
    let paymentMonth = (amount - contribution) * (p + (p / (Math.pow((1 + p), n)-1)));
    console.log(paymentMonth);


    let totalAmount = Math.round((paymentMonth * n) * 100) / 100;
  return totalAmount;
}
