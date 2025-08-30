function Escribir(valor){
    const operacion = document.getElementById('operacion');
    operacion.innerHTML += valor;
}
function BorrarUltimo(){
    let operacion = document.getElementById('operacion');
    operacion.innerHTML = operacion.innerHTML.slice(0, -1);
}