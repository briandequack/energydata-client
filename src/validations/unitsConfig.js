import { extractNumbers, extractLetters } from "../utils/regexUtils";

const kwh = {
    validate:(value) =>{       
        value = value.replace(/\s+/g, '');
        var regex = /^\d+$/;
        return regex.test(value);
    },
    format:(string) => {
        let numbers = extractNumbers(string);
        return numbers;
    },
    identifier: "kwh",
    example: "1000"
}

const m3 = {
    validate:(value) =>{       
        value = value.replace(/\s+/g, '');
        var regex = /^\d+$/;
        return regex.test(value);
    },
    format:(string) => {
        let numbers = extractNumbers(string);
        return numbers;
    },
    identifier: "m3",
    example: "1000"
}

const unitsConfig = {
    kwh: kwh,
    m3, m3
};

export default unitsConfig;
