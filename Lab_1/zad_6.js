function toWeirdCase(string) {
    let words = string.split(' ');
    let readytext = '';
    for (let i = 0; i < words.length; i++) {
        let letters = [];
        letters = words[i].split('');
        for (let j = 0; j < letters.length; j++) {
            if (j === 0 || j % 2 === 0) {
                readytext += (letters[j].toUpperCase());
            }
            else {
                readytext += (letters[j].toLowerCase());
            }
        }
        if (i + 1 < words.length) {
            readytext += (' ');
        }
    }
    console.log(readytext);
    return (readytext);
}