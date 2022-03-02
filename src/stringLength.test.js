const stringLength = require('./stringLength');

describe('stringLength', () =>{
  it('should verify the string is more than 0', () =>{
    const string = '';
    const output = () => stringLength(string);
    expect(output).toThrow('failed test');   
  });
});