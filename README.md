# Notas de la clase
Para conocer qué lenguajes, tecnologías y herramientas están siendo más usados por los desarrolladores actualmente y así guiarnos sobre qué aprender para desarrollo móvil y software en general.
[Technology | 2024 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2024/technology)
## Estructura del semestre
1. **1er Corte → 35% → 4 Semanas**
	Parcial (Lápiz y Papel)
	Quiz, Talleres, Ejercicios, Tareas, Etc.
	
2. **2do Corte → 35% → 4 Semanas**
	Avance proyecto + Parcial
	Quiz, Talleres, Ejercicios, Tareas, Etc.
	
3. **3do Corte → 30% → 4 Semanas**
	Presentación del proyecto
	Quiz, Talleres, Ejercicios, Tareas, Etc.

---
## Proyecto del semestre
**Grupo:** 3 Personas obligatoriamente
**Requisitos técnicos:**
- Frontend: React Native (recomendado)
- Backend: Node.js + Express
	- Enfoque: Arquitectura Hexagonal
	- Lenguaje: TypeScript
- Base de datos: PostgreSQL
**Tema obligatorio:**
	Basado en los Objetivos de Desarrollo Sostenible (ODS)
	

---
## ¿Que es calidad de software?
La **calidad de software** se refiere al cumplimiento de **estándares**, **requisitos** y **modelos** para asegurar que un software funcione correctamente, sea confiable y satisfaga al usuario.

Elementos clave:
- **Requisitos:** Lo que el software debe hacer (funcionalidades esperadas).
- **Modelo:** Enfoque o metodología que se sigue para desarrollar el software (ej: cascada, ágil).
- **Cumplimiento:** Verificar si el software cumple con lo planeado.
- **Normas internacionales:**
    - **ISO 9001** → Gestión de calidad general
    - **ISO/IEC 25000 (antes 9126/14598)** → Calidad específica de software
    - **ISO/IEC 21434** → Seguridad funcional (autos, IoT, etc.)

---
### Ciclo Calidad de software
- **Herramientas** → Ayudan a desarrollar y medir (Postman, SonarQube, Jest).
- **Metodologías** → Organizan el proceso (Scrum, DevOps, Modelo V).
- **Estándares** → Definen qué es calidad (ISO 9001, ISO 25000, ISO 21434).

---
### Estándares de Programación
- **Buenas prácticas:** Código limpio, legible, reutilizable.
- **Calidad del código:** Evitar errores, seguir convenciones (nombres claros, estructuras lógicas).
- **Documentación:** Explicar qué hace el código y cómo usarlo.
- **Pruebas:** Validan que el código funcione (unitarias, integradas, etc.)
> 	_Dependen de la metodología usada._

---
#### Metodologías → Tipos y formas
- Ágil (Scrum, XP)
- Tradicional (Modelo en cascada, Modelo V)
- DevOps (automatización + entrega continua)

---
## ¿Que es Node.js?
`Node.js` es un **entorno de ejecución multiplataforma y de código abierto** que permite ejecutar **JavaScript en el lado del servidor**.

**Características clave:**
- Basado en `JavaScript`
- Asíncrono y orientado a eventos
- Ideal para crear aplicaciones **escalables en red** (network apps)
- Muy usado en **backend** y tiempo real (chats, APIs, etc.)

**Instalación**
1. Ir a [https://nodejs.org/es/](https://nodejs.org/es/)  
2. Descargar la **versión LTS**  
3. Instalar (incluye **`npm`**)  
4. Verificar en terminal:

``` Bash
node -v # Version de NodeJs
npm -v # Version de npm
```

---
## ¿Qué es TypeScript?
TypeScript es un **lenguaje de programación basado en `JavaScript`**, creado para **mejorar sus limitaciones**, especialmente en proyectos grandes y escalables.

> Es como una "capa extra" que agrega tipado estático y herramientas de desarrollo, sin reemplazar a JavaScript.

**Corrige problemas comunes de JavaScript:**
- Tipado débil → errores difíciles de detectar
- Errores en tiempo de ejecución
- Sobrescritura accidental de variables, funciones o clases
- Falta de información explícita en funciones o peticiones HTTP
- Problemas de mantenimiento y escalabilidad

---
**Ventajas de TypeScript:**
- Tipado estático (detecta errores antes de ejecutar)
- Autocompletado e inteligencia en editores
- Mejor organización y mantenimiento del código
- Ideal para proyectos grandes y equipos de trabajo

> [!tip] Dato
> TypeScript no reemplaza a JavaScript, lo complementa y lo mejora.

---
### Recursos Útiles 
-  **[Express](https://expressjs.com/)**  
	- Framework para crear servidores y APIs con Node.js.  
	- Documentación oficial: rutas, middlewares, ejemplos.

 - **[TypeScript](https://www.typescriptlang.org/)**  
	 - Lenguaje que mejora JavaScript con tipos.  
	 - Documentación oficial: guía, ejemplos y playground.

---
## ¿Qué es npm?
**npm** (Node Package Manager) es el **gestor de paquetes oficial de Node.js**.
`npm` es el **gestor de paquetes oficial de Node.js**.  

Sirve para:
- Instalar librerías como `express`, `typescript`, etc.
- Administrar dependencias del proyecto
- Ejecutar scripts definidos en `package.json`

### Iniciar Proyecto
``` bash
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
# Reinicio automático del servidor

# 🟢 OPCIONAL: CREAR ARCHIVOS
mkdir src && touch src/index.ts
# Crea la carpeta de código fuente y el archivo principal

# 🟢 EJECUTAR EL SERVIDOR
npx ts-node src/index.ts
# Ejecuta el archivo index.ts directamente con ts-node

```

### Scripts Personalizados
Es una parte del archivo `package.json` donde se configuran **Scripts personalizados** para que puedas ejecutar tareas comunes con un solo comando.
```json
"scripts": {
  "build": "tsc",
  // Invitar .ts del proyecto en archivo .js en carpeta dist
  
  "start": "node dist/index.js", 
  // Ejecuta el archivo Js Copilado (usado en produccion)
  
  "dev": "ts-node src/index.ts"
  // Ejecutar directamente sin necesidad de compilar
}
```

```bash
npm run build   # Compila el proyecto
npm run start   # Ejecuta el código ya compilado
npm run dev     # Ejecuta el archivo TypeScript directamente
```

---

## ¿Qué es tsconfig.json?
El archivo `tsconfig.json` es el archivo de **configuración del compilador de `TypeScript`**, - Le dice a TypeScript **cómo debe compilar tu código**. Define **dónde están tus archivos fuente**, **dónde guardar el código compilado**, y **qué reglas seguir**.

```json
/* ✅ Recomendado para proyectos Node.js */
{
  "compilerOptions": {

    "target": "es6", // Versión de JavaScript generada
    "module": "commonjs", // Sistema de módulos compatible con Node.js

	"sourceMap": true,  // Genera .map para depurar TS en navegadores, editores

    "rootDir": "./src", // Carpeta del código fuente (entrada)
    "outDir": "./dist", // Carpeta donde se guardará el código JS compilado

    "esModuleInterop": true, // Permite importar CommonJS como ESModules
    "moduleResolution": "node",// Resolución de módulos estilo Node.js

    "forceConsistentCasingInFileNames": true,  // Mayúsc coherentes en imports
    "strict": true, // Reglas estrictas de comprobación de tipos

    "skipLibCheck": true // Omite revisión en archivos .d.ts (más rápido)
  },

  "include": ["src/**/*", "src/index.ts"],    
  // Incluir todos los .ts del proyecto
  
  "exclude": ["node_modules", "dist"]         
  // Excluir dependencias y carpeta de salida
}

```

---
# Datos en TypesScript

---
1. Mostrar Valores
	- `console.log()` → Muestra el valor en consola. *Exercise1.Js*
	
2. **Primitivos** *Exercise2.Js*
	- `number` → Son números enteros, decimales, hexadecimales, binarios. 
	- `boolean` → Pueden tomar un valor falso o verdadero (True/False)
	- `string` → Cadena de caracteres
	- `undefined` → Es un dato indefinido (Esta vacía, nadie ha puesto nada por ahora )
	- `null`  →  Es la ausencia de valor (Esta vacía a propósito)
	
3. **Especiales**
	- `any` → Permite cualquier tipo de dato, No hay verificación de tipo.  *Exercise3.Js*
	- `unknow` → Tambien permite cualquier tipo de valor, pero exige verificar el tipo antes de usarlo. *Exercise4.Js*
	- `void` → Se usa cuando **una función no retorna ningún valor**. *Exercise5.Js*
	- `never` → Se usa cuando **una función nunca retorna**, Al Lanza un error o tiene un bucle infinito. *Exercise6.Js*
	
4. **Datos Compuestos o Estructurados** *Exercise7.Js*
	- `array` → Es una **lista ordenada** de elementos del mismo tipo.   [[#^948350]]
	- `tuple` → Es un **arreglo con longitud y tipos fijos** por posición.
	- `enum` → Sirve para **definir un conjunto de valores con nombre**, como opciones predefinidas.
	- `objeto literal `→ Es una estructura con **propiedades y valores nombrados**.
5. Personalizados
	1. Types Alias → Tipo personalizado, define un nombre personalizado par aun tipo
	2. Interfaces → Es una estructura que defina la forma que debe tener un objeto
	3. Uniones → permite que un contenedor tenga mas de un tipo
	4. Literales → Limita a valores especificos

## Métodos para usar con Arreglos

| Metodo    | Descripcion                              |
| --------- | ---------------------------------------- |
| Push()    | Agrega un elemento al final              |
| pop()     | Elimina el ultimo elemento               |
| shift()   | Elimina el primer elemento               |
| unshift() | Agrega un elemento al inicio             |
| map()     | Trasforma cada elemento                  |
| filter()  | Filtrar elementos segun una condicion    |
| find()    | Devuelve el primer elemento que coincida |
| forEach() | Ejecuta una funcion por cada elemento    |
^948350

## Otros tipos utilies en TypeScripts

| Tipo             | Para que sirve                                  |
| ---------------- | ----------------------------------------------- |
| Function         | Definir tipos de funciones                      |
| `Record<K,T>`    | Crear objetos con claves especificas            |
| `Readonly<T>`    | Hacer propiedades inmutables                    |
| `Partial<T>`     | Volver propiedades opcionales                   |
| `Requerid<T>`    | Volver propiedades olbligatorias                |
| `Pick<T,K>`      | Seleccionar propiedades Especificas             |
| `Omit<T,K`       | Excluir propiedades                             |
| `Exclude<T,U>`   | Eliminar tipos de una union                     |
| `NonNullable<T>` | Quitar null y undefined                         |
| `Typeof / Keyof` | Reflejar tipos de variables y claves de objetos |
| `Asserts`        | Verificación de tipos personalizadas            |




