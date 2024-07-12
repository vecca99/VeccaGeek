import { clientServices } from "../service/user-service.js";


const crearNuevaLinea = (nombre, email, id) => {
    /* console.log(id); */
    const linea = document.createElement("tr");
    const  contenido = `
            <td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button" id="${id}"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
      const id = btn.id;
      /* console.log("El click", id); */
      clientServices.eliminarCliente(id).then( respuesta => {
        console.log(respuesta);
      }).catch(err => alert("Ocurrió un error."));

    });
    /* console.log(btn); */
    return linea;     
};

const table = document.querySelector("[data-table]");

clientServices.listaClientes().then((data) => {
    // console.log(data);
    /* data.forEach((perfil) => {
        console.log(perfil);
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
        });
}).catch((error) => alert("Ocurrió un error.")); */
      data.forEach(({nombre, email, id}) => {
      //data.forEach((perfil) => {  
        /* const { nombre, email, id } = perfil; */
        const nuevaLinea = crearNuevaLinea(nombre, email, id);
        table.appendChild(nuevaLinea);
        });
}).catch((error) => alert("Ocurrió un error."));

/* const eliminarCliente = (id) => {
  console.log("Elimina a: ", id);
} */