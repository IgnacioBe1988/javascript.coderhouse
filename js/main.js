let btn_compra = document.querySelectorAll(".botonCompra");
console.log(btn_compra);

for (let boton of btn_compra) {
  boton.addEventListener("click", agregar_a_carrito);
}

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
    img: img,
    precio: precio,
    cantidad: 1,
  };

  carrito.push(producto);

  let arreglo_JSON = JSON.stringify(carrito);
  localStorage.setItem("carrito", arreglo_JSON);

  mostrar_carrito(producto);
}

function mostrar_carrito(producto) {
  let fila = document.createElement("tr");

  fila.innerHTML = `<td><img src="${producto.img}" class="imagen_carrito"></td>
  <td>${producto.cantidad}</td>
  <td>${producto.precio}</td>
  <td><button class="btn-danger borrar_elemento">Borrar</button></td>`;

  let tabla = document.getElementById("tbody");
  tabla.append(fila);

  let botones_borrar = document.querySelectorAll(".borrar_elemento");

  for (let boton of botones_borrar) {
    boton.addEventListener("click", borrar_producto);
  }
}

function borrar_producto(e) {
  let abuelo = e.target.parentNode.parentNode;
  Swal.fire({
    icon: "success",
    text: "El producto se elimino correctamente",
  });
  abuelo.remove();
}
