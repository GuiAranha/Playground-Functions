// Desafio 10
function techList(listTec, name) {
  let listObj = [];

  listTec.sort();

  if (!listTec.length){
    let result = "Vazio!"
    return result;
  }else{
    for (let value of listTec){
      let techObj = {
        tech: value,
        name: name
      }
      listObj.push(techObj);
    }
    return listObj;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let telNumber;

  if (numbers.length != 11){
    return "Array com tamanho incorreto.";
  }else{
    for (index = 0; index < numbers.length; index+=1){
      if (numbers[index] < 0 || numbers[index] > 9){
        return "não é possível gerar um número de telefone com esses valores";
      }else{
        let count = 0;
        for (j = 0; j < numbers.length; j+=1){
          if (numbers[index] === numbers[j]){
            count += 1;
            if (count == 3){
              return "não é possível gerar um número de telefone com esses valores"
            }
          }
        }
        if (index === 0){
          telNumber = "(" + numbers[index];
        }else if (index === 1){
          telNumber = telNumber + numbers[index] + ") ";
        }else if (index === 6){
          telNumber = telNumber + numbers[index] + "-";
        }else{
          telNumber = telNumber + numbers[index];
        }
      }
    }
    return telNumber
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)){
    return true;
  }else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)){
    return true;
  }else if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)){
    return true;
  }else{
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
