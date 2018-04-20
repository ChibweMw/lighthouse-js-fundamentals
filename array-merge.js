function merge(arrayOne, arrayTwo) {
  var newArray = [];
  if (arrayOne.length === arrayTwo.length) {
    for (var i = 0; i < arrayTwo.length; i++) {
      arrayOne.push(arrayTwo[i]);
    }
    newArray = arrayOne;
    newArray.sort();
    return newArray;
  } else if (arrayOne.length <= arrayTwo.length) {
    for ( i = 0; i < arrayTwo.length; i++) {
      arrayOne.push(arrayTwo[i]);
    }
    newArray = arrayOne;
    newArray.sort();
    return newArray;
  } else if (arrayOne.length >= arrayTwo.length) {
    for ( i = 0; i < arrayTwo.length; i++) {
      arrayOne.push(arrayTwo[i]);
    }
    newArray = arrayOne;
    newArray.sort();
    return newArray;
  } else if (arrayOne.length <= 0) {
    newArray = arrayTwo;
    newArray.sort();
    return newArray;
  } else if (arrayTwo.length <= 0) {
    newArray = arrayOne;
    newArray.sort();
    return newArray;
  }
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);