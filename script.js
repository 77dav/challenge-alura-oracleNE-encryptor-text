let textarea = document.querySelector("textarea");
let b1 = document.querySelector(".boton-encriptar");
let b2 = document.querySelector(".boton-desencriptar");
let salidaTexto = document.getElementById("salida-de-texto");
let vocales = ["a", "e", "i", "o", "u"];
let reemplazos = ["ai", "enter", "ines", "ober", "ufat"];

textarea.focus();

function encriptarTexto(){

    let textoIngresado = textarea.value;
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
    salidaTexto.innerHTML = mostrarTEncriptado;
}

function desencriptarTexto(){
    let textoIngresado = textarea.value;
    let textoDesencriptado = textoIngresado; 
    for(let i = 0; i < vocales.length; i++){
        textoDesencriptado = textoDesencriptado.replaceAll(reemplazos[i], vocales[i])
    }    
    return textoDesencriptado;
}

function mostrarTextoDesencriptado(){
    let mostrarTextoDesencriptado = desencriptarTexto();
    salidaTexto.innerHTML = mostrarTextoDesencriptado;
}

b1.onclick = mostrarTextoEncriptado;
b2.onclick = mostrarTextoDesencriptado;