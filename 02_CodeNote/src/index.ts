/*
# 🟢 INICIAR PROYECTO

npm init -y # Crea package.json
npm install -g typescript # Instala TypeScript global
npm install --save-dev typescript # TypeScript local al proyecto
tsc --init # Genera tsconfig.json

npm install express # Instala Express
npm install --save-dev @types/express # Tipos de Express para TS
npm install --save-dev ts-node # Ejecuta archivos .ts sin compilar

# 🔴 REINICIO: Reinicio del servidor
npm install --save-dev nodemon 
# Reinicion total del servidor al detectar cambios

# 🟢 OPCIONAL: CREAR ARCHIVOS
mkdir src && touch src/index.ts
# Crea la carpeta de código fuente y el archivo principal

# 🟡 EJECUTAR EL SERVIDOR
npx ts-node src/index.ts
# Ejecuta el archivo index.ts directamente con ts-node

 */

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

