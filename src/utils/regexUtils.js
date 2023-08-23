
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

export function formatPrice(number, len = 2) {
    function generateZeros(length) {
        return new Array(length + 1).join('0');
    }

    const [whole, fractional = generateZeros(len)] = String(number).split('.');
    const formattedFractional = fractional.length > len ? fractional.slice(0, len) : fractional.padEnd(len, '0');
    
    const formattedNumber = '€ ' + whole + ',' + formattedFractional;
    return formattedNumber;
}

