const btn_encriptar = document.getElementById('encriptar');
const btn_desencriptar = document.getElementById('desencriptar');
const btn_copiar = document.getElementById('copiar');
let input = document.querySelector('#ingresaTexto');
var textoIngresado;

  function minusculas(texto){
    return textoMinusculas = texto.toLowerCase();
  }


// ------------------------- ENCRIPTAR ---------------------------
//Una sola función que acciona todos los métodos requeridos
btn_encriptar.addEventListener('click', () =>{

    if(input.value.length == 0)
        alert("Debes ingresar un texto sin caracteres especiales");

    if(carEspecial(input.value)){
        alert("No debes ingresar caracteres especiales");
        document.getElementById('ingresaTexto').value = "";
    }

    else{
        ocultarElementos();
        textoIngresado = minusculas(document.getElementById('ingresaTexto').value);
        document.getElementById('resultado').value = encriptar(textoIngresado);
        document.getElementById('ingresaTexto').value = "";
        // alert(textoIngresado);

    }
});

function ocultarElementos(){
    let muñeco = document.getElementById('muñeco').style.display = 'none';
    let texto1 = document.getElementById('msjNotFound').style.display = 'none';
    let texto2 = document.getElementById('ingresaTextoEncriptar').style.display = 'none';

    let textarea = document.getElementById('resultado').style.display = 'block';
    let btn_copiar = document.getElementById('copiar').style.display = 'block';
}



function encriptar(texto) {
  // Convierte cada letra del texto de entrada según el diccionario
  const conversiones = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };


  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
        if(letra in conversiones) 
        textoEncriptado += conversiones[letra];
    
        else 
        textoEncriptado += letra;
    
  }

  return textoEncriptado;
}


// ------------------- DESENCRIPTAR -----------------------

btn_desencriptar.addEventListener('click', () => {
    if(input.value.length == 0)
        alert("Ingresa un texto encriptado");

    else{
        ocultarElementos();
        textoIngresado = minusculas(document.getElementById('ingresaTexto').value);
        document.getElementById('ingresaTexto').value = "";
        document.getElementById('resultado').value = desencriptar(textoIngresado);
        // alert(textoIngresado);

    }
});

function desencriptar(texto) {
    var textoDesencriptado = texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");

    return textoDesencriptado;
}


//---------------------------- COPIAR ------------------------
btn_copiar.addEventListener('click', ()=>{
    var txtCopiado = document.getElementById('resultado').value;
    navigator.clipboard.writeText(txtCopiado);

    document.getElementById('resultado').value = "";
})


//----------------------- CARACTERES ESPECIALES -------------------------
function carEspecial(texto){
    return texto.match(/[^\w\s]/gi);
}