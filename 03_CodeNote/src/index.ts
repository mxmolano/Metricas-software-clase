import express from 'express';
import http from 'http';
import { Request, Response } from 'express';

// Crear una instancia de Express
const app = express();

// Inicicar el servidor en el puerto 4000
/* Una vez iniciado, muestra el mensaje de la consola, Dentro de los principios de solid, 
    que solo debe o basta una razon para modifciar una clase, aqui hay varias razones, se 
    gestiona el servidor y las ruta
*/
app.get("/", (request: Request, response: Response) => {
  response.send("¡Hola, mundo!");
});

const server = http.createServer(app);
server.listen(4000, () => { //Funcion tipo flecha anonima
  console.log('Servidor escuchando en el puerto 4000');
});



