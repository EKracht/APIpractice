
module.exports = {

  cube: (n) => {return Math.pow(n, 3)},

  square: (n) => {return n * n},

  add: (nums) => {
    var sum = nums.reduce(function(sum, num){
      return parseFloat(sum) + parseFloat(num);
    }, 0);
    return sum;
  },

  subtract: (nums) => {
    var zeroMinusNums = nums.reduce(function(acc, num){
      return parseFloat(acc) - parseFloat(num);
    }, 0);
    return zeroMinusNums;
  },

  multiply: (nums) => {
    var product = nums.reduce(function(acc, num){
        return parseFloat(acc) * parseFloat(num);
    });
    return product;
  },

  divide: (nums) => {
  var quotient = nums.reduce(function(acc, num){
      return parseFloat(acc) / parseFloat(num);
    });
    return quotient;
  },
  
  counter: (str) => {
    var wordsArr = str.split(" ");
    var words = wordsArr.length;
    var charArr = str.split("");
    var chars = charArr.length;
    var spaces = words - 1;
    var letters = chars - spaces;
    var strObject = {
      "letters": letters,
      "spaces": spaces,
      "words": words
    }
    return strObject;
  }

}

