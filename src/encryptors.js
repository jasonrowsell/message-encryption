const caesarCipher = (str, amount = 0) => {
  if (typeof str !== 'string' || typeof amount !== 'number') {
    return '';
  }

  const encryptedMessage = str.split('').map((char, index) => {
    const code = str.charCodeAt(index);
    const moduloShiftAmount = (amount % 26) + 26;

    if (code >= 65 && code <= 90) {
      const shiftedCode = ((code + moduloShiftAmount - 65) % 26) + 65;
      return String.fromCharCode(shiftedCode);
    }
    if (code >= 97 && code <= 122) {
      const shiftedCode = ((code + moduloShiftAmount - 97) % 26) + 97;
      return String.fromCharCode(shiftedCode);
    }
    return char;
  });
  return encryptedMessage.join('');
};

module.exports.caesarCipher = caesarCipher;
