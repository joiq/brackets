module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0 || str == undefined || bracketsConfig == undefined) {
    return false;
  }

  let exitLoop = true;

  while (str.length != 0 && exitLoop) {
    exitLoop = false;

    for (let elem of bracketsConfig) {
      let pair = elem.join('');
      
      if (str.includes(pair)) {
        str = str.replace(pair, '');
        console.log(str);
        exitLoop = true;
      }
    }
  }

  return str.length == 0;
};

