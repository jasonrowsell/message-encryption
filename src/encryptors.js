const caesarCipher = (str, amount = 0) => {
  const encryptedMessage = str.split('').map((char, index) => {
    const code = str.charCodeAt(index);
    if (code >= 65 && code <= 90) {
      const shiftedCode = ((code + amount - 65) % 26) + 65;
      return String.fromCharCode(shiftedCode);
    }
    if (code >= 97 && code <= 122) {
      const shiftedCode = ((code + amount - 97) % 26) + 97;
      return String.fromCharCode(shiftedCode);
    }
    return char;
  });
  return encryptedMessage.join('');
};

module.exports.caesarCipher = caesarCipher;
