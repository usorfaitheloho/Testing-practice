const stringLength = (string) => {
   if (string.length > 1 && string.length < 10) return string.length;
 
   throw new Error('failed test');
 };

module.exports = stringLength;