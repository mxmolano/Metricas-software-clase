// Exercise 11 → type alias:Puedes darle un nombre a un tipo de dato para reutilizarlo en tu código.
type Usuarios  = {
    nombre: string;
    edad: number;
    activo: boolean;
}

let user1 : Usuarios = {
    nombre: "Juan",
    edad: 30,
    activo: true,
};

let user2 : Usuarios = {
    nombre: "Ana",
    edad: 25,
    activo: false,
};  

// Con un primitivo
type ID = number;
let userId: ID = 101;

// Uniones
type Resultados= "ok" | "error" | "pendiente";
let estado: Resultados = "ok";

//Tuplas
type Coordenada = [x: number, y: number];
let punto: Coordenada = [10, 20];

// Funciones
type Sumar = (a: number, b: number) => number;
const suma: Sumar = (a, b) => a + b;

