import { articulos } from "./utils/objetosKiosco.js";
const categoria = prompt(
  "Ingrese una categoría: Bebidas, Golosinas o Libreria"
);

function filtrarPorCategoria(categoria) {
  return articulos.filter((articulo) => articulo.categoria === categoria);
}

console.log("Bebidas:", filtrarPorCategoria("Bebidas"));
console.log("Golosinas:", filtrarPorCategoria("Golosinas"));
console.log("Libreria:", filtrarPorCategoria("Libreria"));

const articulosFiltrados = filtrarPorCategoria(categoria);

if (articulosFiltrados.length > 0) {
  const listado = articulosFiltrados
    .map((articulo, index) => `${index + 1}. ${articulo.nombre}`)
    .join("\n");

  let seleccionado = null;

  while (seleccionado === null) {
    const seleccion = prompt(
      `Artículos en la categoría "${categoria}":\n\n${listado}\n\nIngrese el número del artículo que desea ver:`
    );

    if (seleccion === null) {
      alert("Selección cancelada.");
      break;
    }

    const indiceSeleccionado = parseInt(seleccion) - 1;

    if (
      !isNaN(indiceSeleccionado) &&
      indiceSeleccionado >= 0 &&
      indiceSeleccionado < articulosFiltrados.length
    ) {
      const articulo = articulosFiltrados[indiceSeleccionado];

      const confirmacion = confirm(
        `Seleccionaste:\n\n${articulo.nombre}\nPrecio: $${articulo.precio}\nMarca: ${articulo.marca}\nDescripción: ${articulo.descripcion}\n\n¿Deseás confirmar esta selección?`
      );

      if (confirmacion) {
        alert(`¡Gracias! Seleccionaste: ${articulo.nombre}`);
        seleccionado = articulo;
      } else {
        alert("Operación cancelada. Volviendo al panel de selección...");
      }
    } else {
      alert("Selección inválida. Por favor, intentá nuevamente.");
    }
  }
} else {
  alert(`No se encontraron artículos para la categoría: ${categoria}`);
}
