const test = require('../src/hello');

describe('test', () => {
  it('test works', () => {
    expect(1 + 2).toEqual(3);
  });
});

describe('hello', () => {
  it('returns hello', () => {
    expect(test.hello()).toEqual('hello');
  });
});
