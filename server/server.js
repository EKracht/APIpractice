'use strict';

var functions = require('./util');
var http = require('http');
var md5 = require('md5');

var server = http.createServer(function(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');

  var params = req.url.split('/');
  var routeOne = params[1];
  var routeTwo = params[2];

  switch(routeOne) {
    case 'math':
      switch(routeTwo){
        case 'cube':
          var num = params[3];
          res.write(num + " cubed is " + functions.cube(num) + "\n");
          break;
        case 'square':
          var num = params[3];
          res.write(num + " squared is " + functions.square(num) + "\n");
          break;
        case 'add':
          var nums = params.slice(3);
          var sum = functions.add(nums);
          res.write(`the sum is ${sum}\n`);
          break;
        case 'subtract':
          var nums = params.slice(3);
          var diff = functions.subtract(nums);
          res.write(`the difference is ${diff}\n`);
          break;
        case 'multiply':
          var nums = params.slice(3);
          var product = functions.multiply(nums);
          res.write(`the product is ${product}\n`);
          break;
        case 'divide':
          var nums = params.slice(3);
          var quotient = parseFloat(functions.divide(nums)).toFixed(5);
          res.write(`the quotient is ${quotient}\n`);
          break;
      } 
      break; 
    case 'gravatar':
      var email = params.slice(2);
      var emailLowerCase = email[0].toLowerCase();
      var hashEmail = md5(emailLowerCase);
      res.write('Your gravatar email is: http://www.gravatar.com/avatar/' + hashEmail + "\n");
      break;
    case 'sentence':
      var sentenceCoded = params.slice(2);
      var sentence = decodeURI(sentenceCoded[0]);
      var sentenceInfo = JSON.stringify(functions.sentenceCounter(sentence));
      res.write(sentenceInfo + "\n");
      break;
    default:
      res.write('Unknown operation\n');
    }
    res.end();
});

server.listen(8000);

