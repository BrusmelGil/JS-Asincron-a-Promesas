console.log("conectado");


const data = './data.json'; 

/*Ejercicio1*/

async function obtenerDatos(url) {

    const response = await fetch(url);
const data = await response.json();
    console.log(data);

}
obtenerDatos('./data.json'); 

/*ejercicio2*/

fetch('./data.json')
.then(response => {

return response.json();
})
.then(data => {
console.log(data);
})



