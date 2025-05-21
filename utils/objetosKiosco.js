var Golosinas = [
  {
    id: 1,
    nombre: "Chicles",
    categoria: "Golosinas",
    marca: "Beldent",
    precio: 100,
    stock: 10,
    descripcion: "Chicles de menta",
  },

  {
    id: 2,
    nombre: "Pastillas",
    categia: "Golosinas",
    marca: "Halls",
    precio: 100,
    stock: 10,
    descripcion: "Pastillas de fruta",
  },
  {
    id: 3,
    nombre: "Chupetines",
    categoria: "Golosinas",
    marca: "Candypop",
    precio: 150,
    stock: 10,
    descripcion: "Chupetines bola",
  },
];
var Bebidas = [
  {
    id: 4,
    nombre: "Agua",
    categoria: "Bebidas",
    marca: "Villavicencio",
    precio: 100,
    stock: 10,
    descripcion: "Agua mineral",
  },
  {
    id: 5,
    nombre: "Gaseosa",
    categoria: "Bebidas",
    marca: "Coca-Cola",
    precio: 150,
    stock: 10,
    descripcion: "Gaseosa sabor cola",
  },
  {
    id: 6,
    nombre: "Jugo",
    categoria: "Bebidas",
    marca: "Tropicana",
    precio: 120,
    stock: 10,
    descripcion: "Jugo de naranja",
  },
];

let Libreria = [
  {
    id: 7,
    nombre: "Lapiz",
    categoria: "Libreria",
    marca: "Faber-Castell",
    precio: 50,
    stock: 10,
    descripcion: "Lapiz grafito",
  },
  {
    id: 8,
    nombre: "Cuaderno",
    categoria: "Libreria",
    marca: "Rivadavia",
    precio: 200,
    stock: 10,
    descripcion: "Cuaderno rayado",
  },
  {
    id: 9,
    nombre: "Lapicera",
    categoria: "Libreria",
    marca: "Bic",
    precio: 80,
    stock: 10,
    descripcion: "Lapicera azul",
  },
];

export const articulos = [...Bebidas, ...Golosinas, ...Libreria];
