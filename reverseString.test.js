const reverseString = require('./reverseString');

describe('reverseString', () =>{
  it('should check if the string is reversed', () =>{
    const string = 'who';
    const output = reverseString(string);
    expect(output).toBe('ohw');   
  });
});