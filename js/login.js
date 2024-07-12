import { userServices } from "../service/user-service.js";

const botonEntrar = document.querySelector(".form__submit");

botonEntrar.addEventListener("click", () => {

    const email_input = document.querySelector("[data-email]").value;
    const password_input = document.querySelector("[data-password]").value;
    
    userServices.listaUsuarios().then((data) => {
    
        data.forEach(({email, password}) => {
        if (email_input == email && password_input == password){
        
        console.log("login ok");
        }else{
        
        console.log("login WRONG");
        }        
        
        });
    }).catch((error) => alert("Ocurrió un error."));

    
    

    
    
    //console.log(clientServices.listaClientes());
    

});