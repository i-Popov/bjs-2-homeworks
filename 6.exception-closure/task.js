// Задача №1. Форматтер чисел
function parseCount(x) {
    let parsed = Number.parseInt(x);
    if (Number.isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(y) {
    try {
        let parsed = parseCount(y);
        return parsed;
    } catch (err) {
        return Error("Невалидное значение");
    }
}

// Задача №2. Треугольник
class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (b + c) < a || (c + a) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(perimeter) {
        return perimeter = this.a + this.b + this.c;
    }

    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getArea: function () {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter: function () {
                return 'Ошибка! Треугольник не существует';
            },
        }
    }
}

