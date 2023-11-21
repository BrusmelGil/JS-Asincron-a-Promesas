# JS-Asincron-a-Promesas

### 1. ¿Qué es un archivo JSON?

Es un formato ligero de texto que forma parte del sistema de JavaScript y que se deriva de su sintaxis, Se utiliza comúnmente para transmitir datos entre un servidor y un cliente web como una alternativa a XML (eXtensible Markup Language). Sin embargo, JSON es más legible para los humanos y más fácil de analizar para las máquinas.

# eje:

{
"nombre": "Juan",
"edad": 30,
"ciudad": "Ejemplo City",
"casado": false,
"hobbies": ["lectura", "viajes", "deportes"]
}

### 2. ¿Qué es la asincronía en Javascript?

La programación asíncrona es una técnica que le permite a tu programa iniciar una tarea de larga duración y seguir respondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado. Una vez que dicha tarea ha finalizado, tu programa presenta el resultado.

# eje: utilizando la función setTimeout:

console.log('Inicio');

setTimeout(function() {
console.log('Después de 2 segundos');
}, 2000);

console.log('Fin');

### 3. ¿Qué son las Promesas?

Las promesas es el mecanismo más estructurado y poderoso para manejar la asincronía en JavaScript. Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca. Permite encadenar operaciones asíncronas de una manera más legible y manejar los errores de manera más eficiente que los callbacks anidados.

# eje:

let miPromesa = new Promise((resolve, reject) => {
let exito = true;

if (exito) {
resolver("La operación fue exitosa");
} else {
reject("La operación falló");
}
});

.then((mensaje) => {
console.log("Éxito:", mensaje);
})
.catch((error) => {
console.error("Error:", error);
})

### 4. ¿Qué es y cómo se usa ‘Fetch’ en JS?

`fetch` Es una función en JavaScript que se utiliza para realizar solicitudes de red de manera asíncrona. Se utiliza comúnmente para hacer peticiones HTTP y recuperar recursos de una URL.
`fetch` devuelve una promesa que resuelve la respuesta a la solicitud, permitiendo un manejo flexible y encadenamiento de operaciones.

# eje: para hacer una solicitud GET a una API y manejar la respuesta:

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
if (!response.ok) {
throw new Error(`Error de red: ${response.status}`);
}
return response.json();
})
.then(data => {
console.log(data);
})
.catch(error => {
console.error('Error en la solicitud:', error);
});

### 5. ¿Cómo se usa Async/Await?

Async/Await es una característica de ECMAScript 2017 (también conocido como ES8) que proporciona una sintaxis más limpia y legible para trabajar con código asíncrono en JavaScript. Permite escribir código asíncrono de una manera que se asemeja a la programación síncrona, haciendo que el código sea más fácil de entender y mantener.
Para utilizar Async/Await, debes declarar una función como async. Dentro de esa función, puedes usar la palabra clave await antes de una expresión que devuelve una Promesa. La ejecución de la función async se pausará hasta que la Promesa se resuelva o se rechace.

#eje:

async function obtenerDatos() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
if (!response.ok) {
throw new Error(`Error de red: ${response.status}`);
}
const data = await response.json();
console.log(data);
} catch (error) {
console.error('Error en la solicitud:', error);
}
}
obtenerDatos();

### 6. ¿Cuándo deberíamos usar código asíncrono?

Deberíamos usar código asíncrono en JavaScript cuando necesitamos realizar operaciones que podrían llevar tiempo sin bloquear la ejecución del resto del programa. Las situaciones más comunes para el uso de código asíncrono incluyen:

# Solicitudes de red:

fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

# Operaciones de entrada/salida (I/O):

const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (error, data) => {
if (error) {
console.error('Error:', error);
} else {
console.log('Contenido del archivo:', data);
}
});

# Temporizadores y eventos:

console.log('Inicio');

setTimeout(function() {
console.log('Después de 2 segundos');
}, 2000);

console.log('Fin');

## En resumen, el código asíncrono se utiliza cuando necesitamos realizar operaciones que podrían llevar tiempo y queremos evitar bloquear la ejecución del programa principal. Esto es crucial para mantener una interfaz de usuario receptiva en aplicaciones web y para lograr un rendimiento eficiente en operaciones que podrían tardar un tiempo considerable en completarse.
