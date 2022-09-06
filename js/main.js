// Variables
const productos = [
  {
    id: 1,
    name: "Estatuilla pequeña",
    valor: 1500,
  },
  {
    id: 2,
    name: "Estatuilla mediana",
    valor: 1750,
  },
  {
    id: 3,
    name: "Molde",
    valor: 1250,
  },
  {
    id: 4,
    name: "Estatuilla grande",
    valor: 2000,
  },
  {
    id: 5,
    name: "Abrojos",
    valor: 950,
  },
];

const contenedorProductos = document.querySelector("#contenedor-comidas");
const listadoFavoritos = [];

// Eventos
document.addEventListener("DOMContentLoaded", function () {
  //Mostrar nuestros productos
  mostrarProductos();
});

// Funciones
function mostrarProductos() {
  productos.forEach(function (producto) {
    const divProducto = document.createElement("div");
    divProducto.classList.add("card");

    const tituloProducto = document.createElement("h2");
    tituloProducto.textContent = producto.name;
    tituloProducto.classList.add("titulo-comida");

    const btnConsulta = document.createElement("button");
    btnConsulta.textContent = "Consultar precio";
    btnConsulta.classList.add("btn-favorito");
    // EVENTO BOTON
    btnConsulta.onclick = function () {
      agregarFavorito(producto.id);
    };

    //CARD
    divProducto.appendChild(tituloProducto);
    divProducto.appendChild(btnConsulta);

    //DOM
    contenedorProductos.appendChild(divProducto);
  });
}

function agregarFavorito(id) {
  let comidaEncontrada = productos.find(function (comida) {
    return comida.id === id;
  });
  console.log(
    "El precio del producto",
    comidaEncontrada.name,
    "es de",
    comidaEncontrada.valor
  );
}
