// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;

    let output = [];
    const actualAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const inputArr = input.toLowerCase().split('');
    const encodedAlphabetArr = alphabet.toLowerCase().split('');
    const unique = [...new Set(encodedAlphabetArr)];
    // guard clause
    if (alphabet.length !== 26 || alphabet.length !== unique.length) {
      return false;
    }
    // encode string
    if (encode) {
      inputArr.forEach((char) => {
        if (actualAlphabet.includes(char)) {
          const letter = encodedAlphabetArr.slice(
            actualAlphabet.indexOf(char),
            actualAlphabet.indexOf(char) + 1
              ? actualAlphabet.indexOf(char) + 1
              : undefined
          );
          output = [...output, ...letter];
        } else {
          output = [...output, char];
        }
      });
      const reducedOutput = output.reduce((acc, curr) => acc + curr, '');
      return reducedOutput;
    }
    // decode string
    if (!encode) {
      const inputLower = input.toLowerCase();
      for (let i = 0; i < inputLower.length; i++) {
        const char = inputLower[i];
        const index = alphabet.indexOf(char);
        if (alphabet.includes(char)) {
          output = [
            ...output,
            actualAlphabet.slice(index, index + 1 ? index + 1 : undefined),
          ];
        } else {
          output = [...output, char];
        }
      }
      const reducedOutput = output.reduce((acc, curr) => acc + curr, '');
      return reducedOutput;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
