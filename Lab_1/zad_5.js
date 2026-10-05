function primeFactors(n) {
    let d = 2;
    let numarr = [];
    let countarr = [];
    let i = 0;
    while (n >= d) {
        if (n % d == 0) {
            numarr[i] = d;
            let count = 0;
            while (n % d == 0) {
                n = n / d;
                count++;
            }
            countarr[i] = count;
            i++;
        }
        d++;
    }
    let answer = '';
    for (let j = 0; j < i; j++) {
        if (countarr[j] > 1) {
            answer += ('(' + numarr[j] + '**' + countarr[j] + ')');
        }
        else {
            answer += ('(' + numarr[j] + ')');
        }
    }
    console.log(answer);
    return (answer);
}