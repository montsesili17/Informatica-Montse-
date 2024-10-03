function dado(){
    let numero = document.getElementById('num').value;
    let salida = document. getElementById('out');
    let random = Math.ceil(Math.random()* numero);
    salida.textContent = random; 
}