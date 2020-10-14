const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arrTmp = [];
    for (let i = 0; i < expr.length; i += 10) {
        arrTmp.push(expr.slice(i, i + 10))
    }
    arrTmp = arrTmp.map((item) => {
        if (item !== '**********') {
            return item.slice(item.indexOf("1"));
        } else {
            return " ";
        }
    })

    arrTmp = arrTmp.map((item) => {
        return item.replace(/(10)|(11)/g, function (match, p1, p2) {
            if (p1) {
                return ".";
            }
            if (p2) {
                return "-";
            }
        });
    })

    return arrTmp.map((item) => {
        if(item !== " ") {
            return MORSE_TABLE[item];
        } else {
            return item;
        }
    }).join("");
}

module.exports = {
    decode
}
