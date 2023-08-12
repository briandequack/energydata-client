
export function extractLetters(string){
    var regexGetLetters = /([a-zA-Z]+)/g;
    let letters = string.match(regexGetLetters).join('');
    letters = letters.replace(/\s+/g, '').toUpperCase();
    return letters;
}

export function extractNumbers(string){
    const regexGetNumbers = /([0-9]+)/g;
    let numbers = string.match(regexGetNumbers).join('');
    numbers = numbers.replace(/\s+/g, '');
    return numbers;
}
