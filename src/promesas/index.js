/*
    Autor: Fran Jimenez
    Version: 1.0

    Script que genera peticiones a la API de Rick y Morty utilizando Promesas
*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/"; // Definimos la url
const PERSONAJE = "character/:id"; // parte de la url que pide los personajes, le ponemos el :id para luego substituirlo por la id que el usuario quera pedir

// creamos un arrow function que nos imprimira lo que llegue de la api
const imprimir = (objeto) =>
  console.log(
    `Hola mi nombre es ${objeto.name}, mi especie es ${objeto.species}, provengo de ${objeto.origin["name"]}.\n`
  );

function pedirData(id) {
  let request = new XMLHttpRequest();
  request.open("GET", API + PERSONAJE.replace(":id", id), true); // definimos la ruta y si es GET o POST
  request.send(); // Pedimos la info
  request.onreadystatechange = function () { // Cuando nos llegue la info ejecutamos el PROMISE
    return new Promise(function (resolve, reject) {
      if (request.readyState === 4) { // si readyState es 4 significa que se ha completado la peticion
        if (request.status === 200) { // si la respuesta es un OK 200 resolvemos la promesa
          resolve(JSON.parse(request.responseText));
        } else { //si hay algun lo enviamos al reject
          const ERROR = console.error("Error : "+ API + PERSONAJE.replace(":id", id));
          return reject(ERROR);
        }
      }
    })
      .then((objetoJson) => {
        // Si todo esta OK lo mandamos imprimir
        imprimir(objetoJson);
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

// Llamos a la función y le pasamos la id del personaje que queramos consultar
pedirData(1);