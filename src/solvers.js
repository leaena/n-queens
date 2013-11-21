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
  // var allTheOptions = [];
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
  console.log(options);
  if(n === 1){
    return [[1]];
  }
  if(n === 2){
    return [];
  }


  var recurse = function(n, allTheOptions){
    allTheOptions = allTheOptions || [];
    if(allTheOptions.length === n){
      solutions.push(allTheOptions);
    } else {
      for(var h = 0; h < n; h++){
        recurse(n, allTheOptions.push(options[h]));
      }
    }
    // for (var k = 0; k < options.length; k++) {
    //   if (!allTheOptions.length) {
    //     allTheOptions.push([options[k]]);
    //   }
    //   for (var l = 0; l < options.length; l++) {
    //     var currentBoard = allTheOptions[k].concat(options[l]);
    //     allTheOptions[k] = currentBoard;
    //   }
    //   recurse(n-1, allTheOptions);
    // }
  };
  recurse(n);
  console.log(options);
  console.log(solutions);

//Experimental corner
  // var makeEmptyMatrix = function(n){
  //   return _(_.range(n)).map(function(){
  //     return _(_.range(n)).map(function(){
  //       return 0;
  //     });
  //   });
  // };

  // var matrix = makeEmptyMatrix(n);
  // var count = 0;

  // for (var k = 0; k < n; k++){
  //   matrix[0][k] = 1;
  //   for (var r = 1; r < n; r++){
  //     for (var t = 0; r < n; t++) {
  //       if (matrix[r][t]
  //     }
  //   }
  // }



//

for(var x = 0; x < solutions.length; x++){
  var currentOption = newBoard(solutions[x]);
  if(!currentOption.hasAnyQueensConflicts()){
    return currentOption;
  }
}
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = 0; //fixme
  var solutions = []; //fixme
  var options = [];
  // var allTheOptions = [];
  console.log(n);
  if(n === 0 || n === 1){
    return 1;
  }
  if(n === 2 || n === 3){
    return 0;
  }

  for(var i = 0; i < n; i++){
    options[i] = [];
    for(var j = 0; j < n; j++){
      options[i][j] = [];
      if(i === j){
        options[i][j].push(1);
      } else{
        options[i][j].push(0);
      }
    }
  }
  console.log(options);

  var recurse = function(n, allTheOptions){
    allTheOptions = allTheOptions || [];
    console.log(allTheOptions);
    if(allTheOptions.length === n){
      solutions.push(allTheOptions);
    } else {
      for(var h = 0; h < n; h++){
        allTheOptions.push(options[h]);
        recurse(n, allTheOptions);
      }
    }
    // for (var k = 0; k < options.length; k++) {
    //   if (!allTheOptions.length) {
    //     allTheOptions.push([options[k]]);
    //   }
    //   for (var l = 0; l < options.length; l++) {
    //     var currentBoard = allTheOptions[k].concat(options[l]);
    //     allTheOptions[k].push(currentBoard);
    //   }
    //   recurse(n-1, allTheOptions);
    // }
  };
  recurse(n);
  console.log(options, "options");

//Experimental corner
  // var makeEmptyMatrix = function(n){
  //   return _(_.range(n)).map(function(){
  //     return _(_.range(n)).map(function(){
  //       return 0;
  //     });
  //   });
  // };

  // var matrix = makeEmptyMatrix(n);
  // var count = 0;

  // for (var k = 0; k < n; k++){
  //   matrix[0][k] = 1;
  //   for (var r = 1; r < n; r++){
  //     for (var t = 0; r < n; t++) {
  //       if (matrix[r][t]
  //     }
  //   }
  // }



//

for(var x = 0; x < solutions.length; x++){
  var currentOption = new Board(solutions[x]);
  if(!currentOption.hasAnyQueensConflicts()){
    solutionCount++;
  }
}
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
