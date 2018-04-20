function concat(arrayOne, arrayTwo) {
  var newArray = [];
  if (arrayOne.length === arrayTwo.length) {
    for (var i = 0; i < arrayTwo.length; i++) {
      arrayOne.push(arrayTwo[i]);
    }
    newArray = arrayOne;
    return newArray;
  } else if (arrayOne.length <= arrayTwo.length) {
    for (var i = 0; i < arrayTwo.length; i++) {
      arrayOne.push(arrayTwo[i]);
    }
    newArray = arrayOne;
    return newArray;
  } else if (arrayOne.length >= arrayTwo.length) {
    for (var i = 0; i < arrayTwo.length; i++) {
      arrayOne.push(arrayTwo[i]);
    }
    newArray = arrayOne;
    return newArray;
  } else if (arrayOne.length <= 0) {
    newArray = arrayTwo;
    return newArray;
  } else if (arrayTwo.length <= 0) {
    newArray = arrayOne;
    return newArray;
  }

}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);