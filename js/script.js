const sClean = "";
const txtEntradaTexto = document.getElementById("txt_entrada_texto");
const btnEncriptar = document.getElementById("btn_encriptar");
const btnDesencriptar = document.getElementById("btn_desencriptar");
const divSalidaTexto = document.getElementById("div-salida_texto");
const txtSalidaTexto = document.getElementById("txt_salida_texto");
const divResultado = document.getElementById("div-resultado");
const divBtnSalidaTexto = document.getElementById("div-btn_salida_texto");
const btnCopiar = document.getElementById("btn_copiar");

function limpiar(){
    txtEntradaTexto.value = sClean;
    txtSalidaTexto.value = sClean;
    divResultado.style.display = "flex";
    divSalidaTexto.style.display = "none";
    divBtnSalidaTexto.style.display = "none";
}

function copiarTexto(){
    var copiar = txtSalidaTexto;

    try {
        copiar.select();
        copiar.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copiar.value);
        limpiar();
        swal("Perfecto!", "El texto se copio correctamente", "success");
    } catch (error) {
        swal("Error!", error, "error");
    }
}

function matrizCodigo(){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    return matriz;
}

function encriptar(sTexto){
    let matriz = matrizCodigo();
    sTexto = sTexto.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (sTexto.includes(matriz[i][0])) {
            sTexto = sTexto.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    return sTexto;
}

function desencriptar(sTexto){
    let matriz = matrizCodigo();
    sTexto = sTexto.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (sTexto.includes(matriz[i][1])) {
            sTexto = sTexto.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }

    return sTexto;
}

function vistaEncriptar(){
    if (txtEntradaTexto.value.trim() != "") {
        const textoEncriptado = encriptar(txtEntradaTexto.value);
        txtEntradaTexto.value = sClean;
        txtSalidaTexto.value = textoEncriptado;
        divResultado.style.display = "none";
        divSalidaTexto.style.display = "flex";
        divBtnSalidaTexto.style.display = "flex";
    }
    else{
        limpiar();
        swal("Error!", "No se encontro ningún contenido", "error");
    }
}

function vistaDesencriptar(){
    if (txtEntradaTexto.value.trim() != "") {
        const textoDesencriptado = desencriptar(txtEntradaTexto.value);
        txtEntradaTexto.value = sClean;
        txtSalidaTexto.value = textoDesencriptado;
        divResultado.style.display = "none";
        divSalidaTexto.style.display = "flex";
        divBtnSalidaTexto.style.display = "flex";
    }
    else{
        limpiar();
        swal("Error!", "No se encontro ningún contenido", "error");
    }
}

window.addEventListener('load', limpiar);
btnEncriptar.addEventListener('click', vistaEncriptar);
btnDesencriptar.addEventListener('click', vistaDesencriptar);
btnCopiar.addEventListener('click', copiarTexto);