const capitalizeStringFC = require('./capitalize');

describe('capitalize first letter', () =>{
  it('should check if the first letter of the string is capitalized', () =>{
    const string = 'who';
    const output = capitalizeStringFC(string);
    expect(output).toMatch('Who');   
  });
});