const caesarCipher = (str, amount = 0) => {
  const encryptedMessage = str.split('').map((char, index) => {
    const code = str.charCodeAt(index);
    const shiftedCode = code + amount;
    return String.fromCharCode(shiftedCode);
  });
  return encryptedMessage.join('');
};

module.exports.caesarCipher = caesarCipher;
