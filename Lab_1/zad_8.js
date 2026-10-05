function expandedForm(num) {
    num = num.toString();
    let countNum = num.length;
    let masNum = num.split('');
    let all = [];
    for (let i = 0; i < num.length; i++) {
        if (masNum[i] != 0) {
            all.push(masNum[i] * (10 ** (num.length - 1 - i)));
        }
    }
    return all.join(' + ')
    console.log(all);
}