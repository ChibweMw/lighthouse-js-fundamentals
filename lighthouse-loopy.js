function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    if (i % (multiples[0] * multiples[1]) === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
//loopyLighthouse([1, 231], [8, 3], ["Rogger", "Rabbit"]);