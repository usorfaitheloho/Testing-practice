const Calculator = require('./calculator');
 
describe('Calculator', () =>{
    const check = new Calculator();
  it('should check for addition', () =>{
    expect(check.add(2,3)).toBe(5);   
  });
  it('should check for subtraction', () =>{
    expect(check.minus(3,1)).toBe(2);   
  });
  it('should check for multiplication', () =>{
    expect(check.multiply(3,1)).toBe(3);   
  });
  it('should check for division', () =>{
    expect(check. divide(6,2)).toBe(3);   
  });
});