// Exercise 8 → tuplas: Contener múltiples valores de diferentes tipos

let persona: [string, number, boolean] = ["Juan", 30, true];
let coordenadas: [number, number] = [40.7, -74.0]; // Latitud y Longitud

// Retorno varios valores
function dividir(a: number, b: number): [number, number] {
    return [Math.floor(a / b), a % b]; // cociente y residuo
}
const [cociente, residuo] = dividir(10, 3);
console.log(cociente, residuo); // Imprime: 3 1
