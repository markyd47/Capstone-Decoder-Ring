// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    const shiftedOutput = [];
    const inputLower = input.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // guard clause
    if (!shift || shift < -25 || shift > 25) return false;
    // decode
    if (!encode) shift *= -1;
    // shift up
    if (shift >= 0) {
      for (let i = 0; i < inputLower.length; i++) {
        const currentPosition = inputLower[i];
        const index = alphabet.indexOf(currentPosition);
        if (!alphabet.includes(currentPosition)) {
          shiftedOutput.push(currentPosition);
        } else if (index + shift > 25) {
          const remainder = ((index + shift) % 25) - 1;
          const newLetter = alphabet[remainder];
          shiftedOutput.push(newLetter);
        } else {
          const newLetter = alphabet[index + shift];
          shiftedOutput.push(newLetter);
        }
      }
    }
    // shift down
    if (shift < 0) {
      for (let i = 0; i < inputLower.length; i++) {
        const currentPosition = inputLower[i];
        const index = alphabet.indexOf(currentPosition);
        if (!alphabet.includes(currentPosition)) {
          shiftedOutput.push(currentPosition);
        } else {
          const letter = alphabet.slice(
            index + shift,
            index + shift + 1 ? index + shift + 1 : undefined
          );
          shiftedOutput.push(letter);
        }
      }
    }
    return shiftedOutput.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
