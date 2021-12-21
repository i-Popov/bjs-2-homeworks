function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [];
        this.marks.push(mark);
    } else {
        this.marks.push(mark);
    }
};

Student.prototype.addMarks = function ( ...args) {
    if (this.marks === undefined) {
        this.marks = [];
        args.map(elem => this.marks.push(elem));
    } else {
        args.map(elem => this.marks.push(elem));
    }
};

Student.prototype.getAverage = function () {
    let sum = 0;
    this.marks.map(elem => sum += elem);
    return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};