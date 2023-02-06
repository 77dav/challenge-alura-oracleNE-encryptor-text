let input = document.querySelector("input");
let b1 = document.getElementById("botonencriptar");
let b2 = document.getElementById("botondesencriptar");
let p = document.getElementById("parrafo");
let vocales = ["a", "e", "i", "o", "u"];
let reemplazos = ["ai", "enter", "ines", "ober", "ufat"];

input.focus();

function encriptarTexto(){

    let textoIngresado = input.value;
    let textoEncriptado = "";

    for(let i = 0; i < textoIngresado.length; i++){
    
        switch(textoIngresado[i]){
            case vocales[0]:
                textoEncriptado += reemplazos[0];
                break;
            case vocales[1]:
                textoEncriptado += reemplazos[1];
                break;
            case vocales[2]:
                textoEncriptado += reemplazos[2];
                break;
            case vocales[3]:
                textoEncriptado += reemplazos[3];
                break;
            case vocales[4]:
                textoEncriptado += reemplazos[4];
                break;
            default:
                textoEncriptado += "<strong>"+ textoIngresado[i] + "</strong>";
                break;
        }
    }
    
    return textoEncriptado;
}

function mostrarTextoEncriptado(){
    let mostrarTEncriptado = encriptarTexto();
    p.innerHTML = mostrarTEncriptado;
}

b1.onclick = mostrarTextoEncriptado;