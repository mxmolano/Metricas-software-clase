// Exercise 7 → Array: Definir un tipo de dato que puede contener múltiples valores del mismo tipo

// Forma de declaracion
let numeros: number[] = [1, 2, 3, 4, 5];
let frutas: string[] = ["manzana", "banana", "naranja"];
let booleanos: boolean[] = [true, false, true];
let numeros2: Array<number> = [6, 7, 8, 9, 10];

// tipos de datos personalizados
type Producto = { nombre: string; precio: number }; //Objetos
let productos: Producto[] = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Teléfono", precio: 500 },
  { nombre: "Tablet", precio: 300 },
];

// Acceder a un valor
let primero = numeros[0]; // 1
let segundo = frutas[1]; // "banana"

// Actualizar un valor
numeros2[1] = Math.max(10, 5); // [6, 10, 8, 9, 10]

// Agregar un valor
frutas.push("uva"); // ["manzana", "banana", "naranja", "uva"]
numeros.push(11); // [1, 2, 3, 4, 5, 11]

// iterar sobre un array
for (let f of frutas) {
    console.log(f); // Imprime cada fruta
}

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Imprime cada número
}
