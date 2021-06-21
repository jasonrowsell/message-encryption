const { caesarCipher } = require('../src/encryptors');

describe('caesarCipher', () => {
  it('returns string parameter as the output', () => {
    expect(caesarCipher('foo')).toEqual('foo');
  });
});
