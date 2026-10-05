function wave(str) {
    let countLet = str.length;
    let letters = str.toLowerCase().split('');
    let all = [];
    for (let i = 0; i < countLet; i++) {
        if (letters[i] != ' ') {
            let copy = letters.slice();
            copy[i] = copy[i].toUpperCase();
            all.push(copy.join(''));
        }
        else {
            continue;
        }
    }
    return (all);
}