const { caesarCipher } = require('../src/encryptors');

describe('caesarCipher', () => {
  it('returns input string', () => {
    expect(caesarCipher('foobar')).toEqual('foobar');
  });

  it('receives a string and shift value to return a new string', () => {
    expect(typeof caesarCipher('foobar', 1)).toBe('string');
  });
});
