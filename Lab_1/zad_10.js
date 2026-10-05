function bingo(ticket, win) {
    let count = 0;
    for (let i = 0; i < ticket.length; i++) {
        let letters = ticket[i][0].split('');
        for (let j = 0; j < letters.length; j++) {
            if (letters[j].charCodeAt(0) == ticket[i][1]) {
                count++;
                break;
            }
        }
    }
    if (count >= win) {
        return 'Winner!';
    }
    else {
        return 'Loser!';
    }
}