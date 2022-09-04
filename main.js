//Creo la clase para la construccion de objetos "productos".
class Productos {
  constructor(producto, precio, stock, precio_efectivo, precio_tarjeta) {
    this.producto = producto;
    this.precio = precio;
    this.stock = stock;
    this.precio_efectivo = precio_efectivo;
    this.precio_tarjeta = precio_tarjeta;
  }
}

//Se crea el Array vacio, para ir ingresandole productos.
let lista_productos = [];

// Se crea el ciclo para ir ingresando los productos a la lista, la pongo en uno para no tener que ingresar tantos datos y poder probar mas rapidamente, pero se puede cambiar para obtener una lista mas grande de productos.
for (let i = 0; i < 1; i++) {
  let producto = prompt("Ingrese el nombre del producto");
  let precio = parseInt(prompt("Ingrese el costo del producto"));
  let stock = parseInt(prompt("Ingrese la cantidad de stock"));
  let precio_efectivo = precio - precio * 0.1;
  let precio_tarjeta = precio + precio * 0.15;

  //Aqui es donde hago que cada ciclo se guarde en una variable.
  let nuevo_producto = new Productos(
    producto,
    precio,
    stock,
    precio_efectivo,
    precio_tarjeta
  );
  //Y aqui hago que la variable del ciclo se ingrese al array y quede guardada.
  lista_productos.push(nuevo_producto);
}

//Pido a la consolta que me muestre todos los datos que hay almacenados en el array
console.log(lista_productos);

for (let item of lista_productos) {
  console.log("<----Informacion del producto---->");
  console.log("Nombre del item: ", item.producto);
  console.log("Precio de lista: ", item.precio);
  console.log("Cantidad en stock ", item.stock);
  console.log("Precio con descuento en efectivo ", item.precio_efectivo);
  console.log("Precio con recargo por tarjeta", item.precio_tarjeta);
  console.log("");
}
