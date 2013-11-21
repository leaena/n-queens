/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var solution = [];
  for(var i = 0; i < n; i++){
    solution[i] = [];
    for(var j = 0; j < n; j++){
      if(i === j){
        solution[i][j] = 1;
      } else{
        solution[i][j] = 0;
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){

  var recurse = function(i){
    if(i === 1){
      return 1;
    }
    return i * recurse(i-1);
  };

  var solutionCount = recurse(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solutions = []; //fixme
  var options = [];
  var num = n;
  if(n === 0 || n === 1){
    return 1;
  }
  if(n === 2 || n === 3){
    return 0;
  }

  for(var i = 0; i < n; i++){
    options[i] = [];
    for(var j = 0; j < n; j++){
      if(i === j){
        options[i].push(1);
      } else{
        options[i].push(0);
      }
    }
  }
  var comFun = function(n, result){
    var newResult = [];
    result = result || [];

    if (result.length === 0) {
      for (var j = 0; j < options.length; j++) {
        result[j] = [options[j]];
      }
    }

    for (var i = 0; i < result.length; i++) {
      for (var k = 0; k < num; k++) {
        var newElement = result[i].concat([options[k]]);
        newResult.push(newElement);
      }
    }
    n--;
    if (n === 0) {
      return result;

    }
    return comFun(n, newResult);
  };

  solutions = comFun(n);

  for(var x = 0; x < solutions.length; x++){
    var currentOption = new Board(solutions[x]);
    if(!currentOption.hasAnyQueensConflicts()){
      return solutions[x];
    }
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = 0; //fixme
  var solutions = []; //fixme
  var options = [];
  var num = n;
  if(n === 0 || n === 1){
    return 1;
  }
  if(n === 2 || n === 3){
    return 0;
  }

  for(var i = 0; i < n; i++){
    options[i] = [];
    for(var j = 0; j < n; j++){
      if(i === j){
        options[i].push(1);
      } else{
        options[i].push(0);
      }
    }
  }
var comFun = function(n, result){
  var newResult = [];
  result = result || [];

  if (result.length === 0) {
    for (var j = 0; j < options.length; j++) {
      result[j] = [options[j]];
    }
  }

  for (var i = 0; i < result.length; i++) {
    for (var k = 0; k < num; k++) {
      var newElement = result[i].concat([options[k]]);
      newResult.push(newElement);
    }
  }
  n--;
  if (n === 0) {
    return result;

  }
  return comFun(n, newResult);
};

  solutions = comFun(n);

  var resultsObject = {};

  for(var x = 0; x < solutions.length; x++){
    var currentOption = new Board(solutions[x]);
    if(!currentOption.hasAnyQueensConflicts()){
      resultsObject[solutions[x]] = true;
    }
  }
  for(var key in resultsObject){
    solutionCount++;
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
