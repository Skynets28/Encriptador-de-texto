
function encriptar(){
    let texto = document.getElementById("mensaje-1").value;
    let textoModificado = texto.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");
    console.log(textoModificado);
    var h2Exists = $resultado.querySelector("h2");

    if (h2Exists) {
        const $mensajeResultado = document.getElementById("mensaje-modificado");
        $mensajeResultado.remove();
    }
    if(textoModificado===""){
        $resultado.appendChild($imagen);
        $resultado.appendChild($ningunMensaje);
        $resultado.appendChild($ningunTexto);
    }else{
        $imagen.remove();
        $ningunMensaje.remove();
        $ningunTexto.remove();
        const $mensajeModificado = document.createElement("h2");
        $mensajeModificado.setAttribute("id", "mensaje-modificado");
        $mensajeModificado.textContent = textoModificado;
        $resultado.appendChild($mensajeModificado);
    }
};

function desEncriptar(){
    let texto = document.getElementById("mensaje-1").value;
    let textoModificado = texto.replace(/ufat/g, "u").replace(/ober/g, "o").replace(/imes/g, "i").replace(/enter/g, "e").replace(/ai/g, "a");
    console.log(textoModificado);
    var h2Exists = $resultado.querySelector("h2");
    if (h2Exists) {
        const $mensajeResultado = document.getElementById("mensaje-modificado");
        $mensajeResultado.remove();
    }
    if(textoModificado===""){
        $resultado.appendChild($imagen);
        $resultado.appendChild($ningunMensaje);
        $resultado.appendChild($ningunTexto);
    }else{
        $imagen.remove();
        $ningunMensaje.remove();
        $ningunTexto.remove();
        const $mensajeModificado = document.createElement("h2");
        $mensajeModificado.setAttribute("id", "mensaje-modificado");
        $mensajeModificado.textContent = textoModificado;
        $resultado.appendChild($mensajeModificado);
    }
}

const $eventoEncriptar = document.getElementById("encriptar");
const $eventoDesEncriptar = document.getElementById("desencriptar");
const $imagen = document.getElementById("imagen-sin-mensaje");
const $ningunMensaje = document.getElementById("ningun-mensaje");
const $ningunTexto = document.getElementById("ningun-texto");
const $resultado = document.querySelector(".resultado");

$imagen.setAttribute("src", "./imagenes/Muñeco.png");
$imagen.setAttribute("alt", "Muñeco ningun mensaje");
$ningunMensaje.textContent ="Ningun mensaje fue encontrado";
$ningunTexto.textContent = "Ingresa el texto que desees encriptar o desencriptar";


$eventoEncriptar.onclick = encriptar;
$eventoDesEncriptar.onclick = desEncriptar;



