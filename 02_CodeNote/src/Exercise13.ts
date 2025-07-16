//Exercise 14 → Uniones y literales de cadena: Puedes combinar tipos para crear estructuras más complejas.

// Uniones
let id: number | string;
id = 123; 
id = "abc"; 

// Literales 
let direccion: "Izquierda" | "Derecha" | "Centro";
direccion = "Izquierda"; // Válido
// direccion = "Arriba"; // Error: "Arriba" no es un valor permitido