// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let output = false;
    // guard clause
    if (input.replace(/ /g, '').length % 2 !== 0 && !encode) return output;
    // encode string
    if (encode) {
      const inputLowerArr = input.toLowerCase().split('');

      output = inputLowerArr.reduce((acc, curr) => {
        switch (curr) {
          case 'a':
            acc += '11';
            break;
          case 'b':
            acc += '21';
            break;
          case 'c':
            acc += '31';
            break;
          case 'd':
            acc += '41';
            break;
          case 'e':
            acc += '51';
            break;
          case 'f':
            acc += '12';
            break;
          case 'g':
            acc += '22';
            break;
          case 'h':
            acc += '32';
            break;
          case 'i':
          case 'j':
            acc += '42';
            break;
          case 'k':
            acc += '52';
            break;
          case 'l':
            acc += '13';
            break;
          case 'm':
            acc += '23';
            break;
          case 'n':
            acc += '33';
            break;
          case 'o':
            acc += '43';
            break;
          case 'p':
            acc += '53';
            break;
          case 'q':
            acc += '14';
            break;
          case 'r':
            acc += '24';
            break;
          case 's':
            acc += '34';
            break;
          case 't':
            acc += '44';
            break;
          case 'u':
            acc += '54';
            break;
          case 'v':
            acc += '15';
            break;
          case 'w':
            acc += '25';
            break;
          case 'x':
            acc += '35';
            break;
          case 'y':
            acc += '45';
            break;
          case 'z':
            acc += '55';
            break;
          default:
            acc += curr;
        }
        return acc;
      }, '');
    }
    // decode string
    if (!encode) {
      const inputSplitBySpace = input.split(' ');
      const createdArrByTwoNumbers = [];

      for (let i = 0; i < inputSplitBySpace.length; i++) {
        let numString = inputSplitBySpace[i];
        for (let j = 0; j < numString.length; j++) {
          if (j % 2 !== 0) {
            continue;
          } else if (j === numString.length - 2) {
            createdArrByTwoNumbers.push(numString[j].concat(numString[j + 1]));
            createdArrByTwoNumbers.push(' ');
          } else {
            createdArrByTwoNumbers.push(numString[j].concat(numString[j + 1]));
          }
        }
      }

      output = createdArrByTwoNumbers.reduce((acc, curr) => {
        switch (curr) {
          case '11':
            acc += 'a';
            break;
          case '21':
            acc += 'b';
            break;
          case '31':
            acc += 'c';
            break;
          case '41':
            acc += 'd';
            break;
          case '51':
            acc += 'e';
            break;
          case '12':
            acc += 'f';
            break;
          case '22':
            acc += 'g';
            break;
          case '32':
            acc += 'h';
            break;
          case '42':
            acc += '(i/j)';
            break;
          case '52':
            acc += 'k';
            break;
          case '13':
            acc += 'l';
            break;
          case '23':
            acc += 'm';
            break;
          case '33':
            acc += 'n';
            break;
          case '43':
            acc += 'o';
            break;
          case '53':
            acc += 'p';
            break;
          case '14':
            acc += 'q';
            break;
          case '24':
            acc += 'r';
            break;
          case '34':
            acc += 's';
            break;
          case '44':
            acc += 't';
            break;
          case '54':
            acc += 'u';
            break;
          case '15':
            acc += 'v';
            break;
          case '25':
            acc += 'w';
            break;
          case '35':
            acc += 'x';
            break;
          case '45':
            acc += 'y';
            break;
          case '55':
            acc += 'z';
            break;
          default:
            acc += curr;
        }
        return acc;
      }, '');
    }

    return output.trim();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
