// Exercise 9 → Enums: Conjunto de valores constantes

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;

enum Estado {
    Activo = "Activo",
    Inactivo = "Inactivo",
    Pendiente = "Pendiente"
} 

console.log(Estado.Inactivo); // Imprime: Inactivo