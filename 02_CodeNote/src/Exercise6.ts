//Exercise 6 → Tipos Never → Nunca termina, lanza un error o entra en un bucle infinito

//Cuando una funcion lanza un error y nunca termina
function lanzarError(mensaje:string): never {
    throw new Error(mensaje);
}

//Cuando una funcion entra en un bucle infinito
function funcionInfinita(): never {
    while (true) {
        console.log("Esta funcion nunca termina");
    }
}

//En validacion exhaustiva de tipos (switch, if)
type Forma = "circulo" | "cuadrado" | "triangulo";

function processarForma(forma: Forma) {
    switch (forma) {
        case "circulo":
            console.log("Es un circulo");
            break;
        case "cuadrado":
            console.log("Es un cuadrado");
            break;
        case "triangulo":
            console.log("Es un triangulo");
            break;
        default:
            const exhaustivo: never = forma;
            break;
    }
}

