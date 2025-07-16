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