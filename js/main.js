// se seleccionan todos los botones de compra
let btn_compra = document.querySelectorAll(".botonCompra");

// se crea el evento para cuando se hace click en alguno de los botones
for (let boton of btn_compra) {
  boton.addEventListener("click", agregar_a_carrito);
}

// creo el array que va a contener los productos que se hayan clickeado para comprar
let carrito = [];

function agregar_a_carrito(e) {
  let hijo = e.target;
  let padre = hijo.parentNode;
  let abuelo = padre.parentNode;

  let nombre_prodcuto = padre.querySelector("h5").textContent;
  let precio = padre.querySelector("span").textContent;
  let img = abuelo.querySelector("img").src;

  let producto = {
    nombre: nombre_prodcuto,
    img,
    precio: precio,
    cantidad: 1,
  };

  // a continuacion realizo una serie de pasos para ver si el producto que se clickeo ya se encuentra en el array, es decir en la lista

  // primero veo si el producto ya esta, en que posicion esta.
  let indice = carrito.findIndex(
    (producto) => producto.nombre === nombre_prodcuto // nombre producto es el parametro de comparacion
  );

  // si el valor no esta, me devuelve un -1 cualquier otro valor es el indice dentro del array
  if (indice > -1) {
    let cantidad_actual = carrito[indice].cantidad;
    producto.cantidad = cantidad_actual + 1;

    carrito[indice] = producto;
  } else {
    carrito.push(producto);
  }

  let arreglo_JSON = JSON.stringify(carrito);
  localStorage.setItem("carrito", arreglo_JSON);

  mostrar_carrito(carrito);
}

// aqui viene la creacion de la funcion para mostrar el carrito en la pagina con su tabla y tambien el boton de borrar

function mostrar_carrito(carrito) {
  let tabla = document.getElementById("tbody");

  tabla.innerHTML = "";

  carrito.forEach((producto) => {
    let fila = document.createElement("tr");

    fila.innerHTML = `<td><img src="${producto.img}" class="imagen_carrito"></td>
    <td class="nombre_producto_carrito">${producto.nombre}</td>
    <td>${producto.cantidad}</td>
    <td>${producto.precio}</td>
    <td><button class="btn-danger borrar_elemento">Borrar</button></td>`;

    tabla.append(fila);
  });

  let botones_borrar = document.querySelectorAll(".borrar_elemento");

  for (let boton of botones_borrar) {
    boton.addEventListener("click", borrar_producto);
  }
}

// aca se crea la funcion para borrar el producto de la tabla y la libreria sweet alert para confirmar que se ha borrado exitosamente

function borrar_producto(e) {
  let abuelo = e.target.parentNode.parentNode;
  console.log(abuelo);
  let producto_borrar = abuelo.getElementsByClassName(
    "nombre_producto_carrito"
  )[0].innerHTML;

  // aqui realizo la gestion para lograr que el objeto que se borra, se quite del array

  let indice = carrito.findIndex(
    (producto) => producto.nombre === producto_borrar
  );

  carrito.splice(indice, 1);

  Swal.fire({
    icon: "success",
    text: "El producto se elimino correctamente",
  });
  abuelo.remove();
}

// aqui incorporo un fetch que fue utilizado para el desafio y lo dejo porque entiendo que el proyecto final lo solicita tambien

let contenedor = document.getElementById("clima");
let ciudad = "Buenos Aires";

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=" +
    ciudad +
    "&lang=es&units=metric&appid=bbf8893c6e8030e157bb633d11a66e17"
)
  .then((response) => response.json())
  .then((data) => {
    contenedor.innerHTML = `<span> Cuidad: ${data.name}</span>
                            <span> Temp: ${data.main.temp}</span>`;
  });
