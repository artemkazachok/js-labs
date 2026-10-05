function solution(str) {
    let letters = str.split('');
    let sumlet = str.length;
    let mas = [];
    for (let i = 0; i < sumlet; i += 2) {
        let nextlet = letters[i + 1] != undefined ? letters[i + 1] : '_'
        mas.push(letters[i] + nextlet);
    }
    return (mas);
}