let textarea = document.querySelector("textarea");
let b1 = document.querySelector(".boton-encriptar");
let b2 = document.querySelector(".boton-desencriptar");
let b3 = document.getElementById("boton-copiar");
let salidaTexto = document.getElementById("salida-de-texto");
let textoPanel = document.querySelector(".texto-panel");
let vocales = ["a", "e", "i", "o", "u"];
let reemplazos = ["ai", "enter", "imes", "ober", "ufat"];

//textarea.focus();

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
    textoPanel.style.visibility = "hidden"; //oculta los elementos del div texto-panel
    salidaTexto.innerHTML = mostrarTEncriptado;
    document.getElementById("boton-copiar").style.visibility = "visible";
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

function copiarTexto() {
    navigator.clipboard.writeText(salidaTexto.textContent);
}

b3.onclick = copiarTexto;
b1.onclick = mostrarTextoEncriptado;
b2.onclick = mostrarTextoDesencriptado;