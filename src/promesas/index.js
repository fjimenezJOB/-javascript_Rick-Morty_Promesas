/*
    Autor: Fran Jimenez
    Version: 1.0

    Script que genera peticiones a la API de Rick y Morty utilizando Promesas
*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/";
const PERSONAJE = "character/:id";
const imprimir = objeto => console.log(`Hola mi nombre es ${objeto.name}, mi especie es ${objeto.species}, provengo de ${objeto.origin['name']}.\n`);

function pedirData() {
  let request = new XMLHttpRequest();
    request.open("GET", API + PERSONAJE.replace(":id", 1),true);
    request.send();
    request.onreadystatechange = function() {
    return new Promise(function (resolve, reject) {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(JSON.parse(request.responseText));
        } else {
          const ERROR = console.error("Error :");
          return reject(ERROR);
          console.
        }
      }
    })
    .then(objetoJson => {imprimir(objetoJson)})
    .catch((err) => {console.error(err)});

  }
}
pedirData();