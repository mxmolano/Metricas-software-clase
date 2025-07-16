// Exercise 4 → Unknown → Cualquier tipo de Variable

let valorDesconocido: unknown = "Cadena";

if (typeof valorDesconocido === "string") {
    console.log(valorDesconocido.toUpperCase()); // "CADENA"
}

valorDesconocido = 10;

if (typeof valorDesconocido === "number") {
  console.log(valorDesconocido * 2); // 20
}