
module.exports = function pangram(string) {
  if(typeof string != 'string') {
    return false;
  }

  var isPangram = false;
  var count = 0;
  var letters = {};
  var phrase = string.toLowerCase().replace(/\s+[^A-Za-z]/g, '').split('');

  phrase.forEach(function(letter, i) {
    if(!letters[letter]) {
      letters[letter] = true;
      count ++;

      if(count === 26) {
        isPangram = true;
      }
    }
  })

  return isPangram;
}
