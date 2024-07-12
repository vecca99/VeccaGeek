import { clientServices } from "../service/client-service.js";

/* const url = new URL(windows.location); */
/* console.log(url.searchParams.get("id")); */
/* const id = url.searchParams.get("id"); */

const formulario = document.querySelector("[data-form]");

/* const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null) {
        window.location.href = "/screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]"); */
    /* clientServices.detalleCliente(id).then( perfil => console.log(perfil) ); */
    /* clientServices.detalleCliente(id).then( (perfil) => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    });
}; */

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null) {
        window.location.href = "/screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    try{
        const perfil = await clientServices.detalleCliente(id);//se quita el then ya lo maneja el await
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        }else{
            throw new Error();
        }
        
    }catch(error){
        /* console.log("Catch Error - ", error); */
        /* alert("Hubo un error"); */
        window.location.href = "/screens/error.html";
    }

    
    
};
// lo mismo de tarea hacer con async await en los demas casos

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();//evitar que el formulario haga la peticion
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    /* console.log(nombre, "   ", email); */

    clientServices.actualizarCliente(nombre, email, id).then(() => {
        window.location.href = "/screens/edicion_concluida.html";
    });
});
