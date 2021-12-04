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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
