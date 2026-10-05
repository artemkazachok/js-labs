function findMissing(list) {
    let countList = list.length;
    let rad = (Math.abs(list[countList - 1] - list[0])) / countList;
    for (let i = 0; i < countList; i++) {
        if (list[i + 1] != list[i] + rad) {
            let found = list[i] + rad;
            return found;
        }
    }
}