// Fetch API
const listaUsuarios = () => fetch("http://localhost:3000/perfil").then( (respuesta) => respuesta.json());

const crearUsuario = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarUsuario = ( id ) => {
  //console.log("Eliminar a --->", id);
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

const detalleUsuario = ( id ) => {
  //console.log("Eliminar a --->", id);
  return fetch(`http://localhost:3000/perfil/${id}`).then( (respuesta) => respuesta.json());
};

const actualizarUsuario = ( nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email })
  }).then( respuesta => respuesta ).catch(err => console.log(err));
};

export const userServices = {
  listaUsuarios,
  crearUsuario,
  eliminarUsuario,
  detalleUsuario,
  actualizarUsuario,
};