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
    let arr = expr.match(/.{1,10}/g)
    let newArr  = []
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].match(/.{1,2}/g)
      for (let j = 0; j < arr[i].length; j++) {
        if(arr[i][j] === "10") {
          arr[i][j] = "."
        }
        if(arr[i][j] === "11") {
            arr[i][j] = "-"
        }
        if(arr[i][j] === "**") {
            arr[i][j] = "aa"
        }
      }
      newArr.push(arr[i].join(''))
    }

    let re = /00/gi
    let star = /aaaaaaaaaa/gi
    
    for (let a = 0; a < newArr.length; a++) {
      newArr[a] = newArr[a].replace(re, "")
      newArr[a] = newArr[a].replace(star, " ")
      for (key in MORSE_TABLE) {
        if(newArr[a] ===  key){
          newArr[a] = MORSE_TABLE[key]
        }
      }
    }
    return newArr.join('')
}

module.exports = {
    decode
}