const caesarCipher = (str, amount = 0) => {
  const encryptedMessage = str.split('').map((char, index) => {
    const code = str.charCodeAt(index);
    if (code >= 97 && code <= 122) {
      const shiftedCode = code + amount;
      return String.fromCharCode(shiftedCode);
    }
    return char;
  });
  return encryptedMessage.join('');
};

module.exports.caesarCipher = caesarCipher;
