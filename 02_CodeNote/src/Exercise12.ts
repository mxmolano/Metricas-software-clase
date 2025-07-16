// Exercise 11: Inferfaces → Puedes definir un contrato para un objeto, asegurando que cumpla con una estructura específica.

interface Product {
    readonly id: number; // Propiedad de solo lectura
    name: string;
    price: number;
    inStock: boolean;
    descuento?: number; // Propiedad opcional
    comprar: (cantidad: number) => string; // Método que recibe un número y devuelve un string
    baja: () => void;
    actualizar( ):boolean;
}