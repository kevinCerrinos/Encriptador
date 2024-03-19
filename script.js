const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
let toastBox = document.getElementById('toastBox')


function encriptar(cadena){
  let matriz = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']]
  cadena = cadena.toLowerCase()

  for(let i = 0; i < matriz.length; i++){
    if(cadena.includes(matriz[i][0])){
      cadena = cadena.replaceAll(matriz[i][0],matriz[i][1])
    }
  }
  return cadena
}


function desencriptar(cadenaencriptada){
  let matriz = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']]
  cadenaencriptada = cadenaencriptada.toLowerCase()

  for(let i = 0; i < matriz.length; i++){
    if(cadenaencriptada.includes(matriz[i][1])){
      cadenaencriptada = cadenaencriptada.replaceAll(matriz[i][1],matriz[i][0])
    }
  }
  return cadenaencriptada
}


function btnEncriptar(){
  const textEncriptado = encriptar(textArea.value)
  mensaje.value = textEncriptado
  textArea.value = '';
  mensaje.style.backgroundImage = "none"
}

function btnDesencriptar(){
  const textEncriptado = desencriptar(textArea.value)
  mensaje.value = textEncriptado
  textArea.value = '';
  mensaje.style.backgroundImage = "none"
}

function btncopiar(){
  mensaje.select();
  document.execCommand('copy');
  mensaje.value = ''
  showToast('Texto copiado!')
}

function showToast(text){
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = text
  toastBox.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  },1000);
}
