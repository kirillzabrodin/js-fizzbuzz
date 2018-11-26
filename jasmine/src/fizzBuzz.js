var FizzBuzz = function() {}

FizzBuzz.prototype.play = function(number) {
  var output = "";
  if (!(number%3)) output+="Fizz";
  if (!(number%5)) output+="Buzz";
  if (output === "") output = number;
  return output;
}

FizzBuzz.prototype.till = function(last) {
  for(var i=0;i<last;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)
};
