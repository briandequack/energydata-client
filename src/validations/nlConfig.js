import { extractNumbers, extractLetters } from "../utils/regexUtils";

const zipCode = {
    validate:(value) =>{       
        value = value.replace(/\s+/g, '');
        var regex = /^\s*((\d\s*){4}([a-zA-Z]\s*){2})$/;
        return regex.test(value);
    },
    format:(string) => {
        let letters = extractLetters(string).toUpperCase();
        let numbers = extractNumbers(string);
        return numbers + letters;
    },
    identifier: 'postcode',
    example: '1234AB'
}

const houseNumber = {
    validate:(value) =>{       
        value = value.replace(/\s+/g, '');
        var regex = /^\d+$/;
        return regex.test(value);
    },
    format:(string) => {
        let numbers = extractNumbers(string);
        return numbers;
    },
    identifier: 'huisnummer',
    example: '1'
}

const houseNumberSuffix = {
    validate:(value) =>{       
        value = value.replace(/\s+/g, '');
        var regex = /^[a-zA-Z]$/;
        return regex.test(value);
    },
    format:(string) => {
        let letter = extractLetters(string).toUpperCase();
        return letter;
    },
    identifier: 'huisnummer toevoeging',
    example: 'A'
}

const nlConfig = {
    zipCode: zipCode,
    houseNumber: houseNumber,
    houseNumberSuffix: houseNumberSuffix
};

export default nlConfig;
