module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  while (str.length != 0) {

    for (let elem of bracketsConfig) {
      let pair = elem.join('');
      
      if (str.includes(pair)) {
        str = str.replace(pair, '');
        console.log(str);
      }
    }
  }

  return str.length == 0;
};

