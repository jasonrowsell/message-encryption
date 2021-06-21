const { caesarCipher } = require('../src/encryptors');

describe('caesarCipher', () => {
  it('returns input string', () => {
    expect(caesarCipher('foobar')).toEqual('foobar');
  });

  it('receives a string and shift value to return a new string', () => {
    expect(typeof caesarCipher('foobar', 1)).toBe('string');
  });

  it('shifts alphabetical characters by given amount', () => {
    expect(caesarCipher('foo', 1)).toBe('gpp');
    expect(caesarCipher('foo', 2)).toBe('hqq');
  });

  it('does not affect numerical characters', () => {
    expect(caesarCipher('foo123', 1)).toBe('gpp123');
  });

  it('handles wrapping past the end of the alphabet', () => {
    expect(caesarCipher('xyz', 2)).toBe('zab');
  });
});
