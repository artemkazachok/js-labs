function whatCentury(year) {
    let century = Math.ceil(year / 100);
    let suf = 'th';
    if (century < 11 || century > 13) {
        if (century % 10 == 1) {
            suf = 'st';
        }
        else if (century % 10 == 2) {
            suf = 'nd';
        }
        else if (century % 10 == 3) {
            suf = 'rd';
        }
    }
    return century + suf;
}