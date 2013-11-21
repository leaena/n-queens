var options = [[1], [2], [3], [4]];

var comFun = function(n, result){
  result = result || options;
  var newResult = [];
  if (result.length === 0) {
    return result;
  }
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < n; j++) {
      var newElement = result[i].concat(options[j]);
      newResult.push(newElement);
      }
    }
  n--;
  if (n) {
    comFun(n, newResult);
  }
  return newResult;
};