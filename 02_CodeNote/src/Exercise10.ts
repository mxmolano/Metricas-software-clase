// Exercise 10 → Objeto literal: Atributos y valores de un objeto.

type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
};

const usuarios: Usuario[] = [
  {
    nombre: "Juan",
    edad: 30,
    activo: true,
  },
  {
    nombre: "Ana",
    edad: 25,
    activo: false,
  },
  {
    nombre: "Luis",
    edad: 35,
    activo: true,
  },
];

console.log(usuarios);
