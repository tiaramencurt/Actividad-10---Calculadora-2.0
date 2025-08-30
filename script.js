function Escribir(valor){
    const operacion = document.getElementById('operacion');
    operacion.innerHTML += valor;
}
function BorrarUltimo(){
    let operacion = document.getElementById('operacion');
    operacion.innerHTML = operacion.innerHTML.slice(0, -1);
}
function Calcular(){
    let expresion = document.getElementById('operacion').innerHTML;
    let primerosUltimos = ['+', '-', '*', '/'];
    if(primerosUltimos.includes(expresion[0]) || primerosUltimos.includes(expresion[expresion.length - 1])){
        document.getElementById('resultado').innerHTML = 'Operación inválida';
    }
    for(let i = 0; i < expresion.length - 1; i++){
        if(primerosUltimos.includes(expresion[i]) && primerosUltimos.includes(expresion[i+1])){
            document.getElementById('resultado').innerHTML = 'Operación inválida';
        }
    }
}
function Memorizar(){
    let ultimoResultado = document.getElementById('resultado').innerHTML;
    let resultados = document.getElementById('resultados');
    if(ultimoResultado !== '' && ultimoResultado !== 'Operación inválida' && !resultados.innerHTML.includes(`<li>${ultimoResultado}</li>`)){
        resultados.innerHTML += `<li>${ultimoResultado}</li>`;
    }
}
function EscribirMemoria(){
    let lista = document.getElementById('resultados');
    let operacion = document.getElementById('operacion');
    if(lista.innerHTML !== ''){
        let resultados = lista.innerHTML.split('</li>');
        let ultimoResultado = resultados[resultados.length - 2];//no funcionaba con 1
        ultimoResultado = ultimoResultado.replace('<li>', '');
        operacion.innerHTML += ultimoResultado;
    }
}