function hasTwoCubeSums(n) {
    let all = 0;
    const limit = Math.floor(Math.cbrt(n)) + 1;
    for (let a = 1; a <= limit; a++) {
        for (let b = a + 1; b <= limit; b++) {
            if (a ** 3 + b ** 3 == n) {
                all++;
            }
        }
    }
    return all >= 2;
}