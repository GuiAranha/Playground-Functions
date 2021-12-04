// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true){
    return true;

  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  let result = text.split(" ");
  return result
}

// Desafio 4
function concatName(names) {
  let newNames = [names[names.length-1], names[0]];
  let concatenateNames = newNames.join(", ");
  return concatenateNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (3*wins) + ties;
  return result;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let max = Math.max.apply(Math, numbers);

  numbers.forEach((element) => {
    if (element === max){
      count++;
    }
  });

  return count;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  let result;

  if (distanceCat1 < 0){
    distanceCat1 = distanceCat1 * (-1);
  }
  if (distanceCat2 < 0){
    distanceCat2 = distanceCat2 * (-1);
  }

  if (distanceCat1 < distanceCat2){
    result = "cat1";
  }else if (distanceCat2 < distanceCat1){
    result = "cat2";
  }else{
    result = "os gatos trombam e o rato foge";
  }

  return result;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
