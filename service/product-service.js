// Fetch API
const listaProductos = () => fetch("http://localhost:3000/productos").then( (respuesta) => respuesta.json());

const crearProducto = (nombre, email) => {
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarProducto = ( id ) => {
  //console.log("Eliminar a --->", id);
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = ( id ) => {
  //console.log("Eliminar a --->", id);
  return fetch(`http://localhost:3000/productos/${id}`).then( (respuesta) => respuesta.json());
};

const actualizarProducto = ( nombre, email, id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email })
  }).then( respuesta => respuesta ).catch(err => console.log(err));
};

export const productServices = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};