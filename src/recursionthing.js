var options = [[1], [2], [3], [4]];

var comFun = function(n, result){
  var newResult = [];
  result = result || [];

  if (result.length === 0) {
    for (var j = 0; j < options.length; j++) {
      result[j] = [options[j]];
    }
  }

  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < n; j++) {
      var newElement = result[i].concat([options[j]]);
      newResult.push(newElement);
      }
    }
  n--;
  if (n === 0) {
    return result;
  }
  return comFun(n, newResult);
};