function createPhoneNumber(numbers) {
    let str = numbers.join('');
    let part1 = str.slice(0, 3);
    let part2 = str.slice(3, 6);
    let part3 = str.slice(6);
    return '(' + part1 + ') ' + part2 + '-' + part3;
}