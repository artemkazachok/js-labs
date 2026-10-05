Array.prototype.square = function () {
    return this.map(x => x ** 2);
}
Array.prototype.cube = function () {
    return this.map(x => x ** 3);
}
Array.prototype.average = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum / this.length;
}
Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
}
Array.prototype.even = function () {
    return this.filter(x => x % 2 == 0);
};
Array.prototype.odd = function () {
    return this.filter(x => x % 2 != 0);
};