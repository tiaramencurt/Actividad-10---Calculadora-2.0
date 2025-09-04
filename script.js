let operadores = ['+', '-', '*', '/'];
let ListaNumeros = [];
let ListaOperadores = [];
function EscribirNumero(valor){
    const operacion = document.getElementById('operacion');
    if(operadores.includes(operacion.innerHTML[operacion.innerHTML.lenght - 1]))
    {
        ListaNumeros.push(valor);
    }else
    {
        ListaNumeros[ListaNumros.lenght-1] += valor;
    }
    operacion.innerHTML += valor;
}
function EscribirOperador(valor){
    const operacion = document.getElementById('operacion');
    if(!(operadores.includes(operacion.innerHTML[operacion.innerHTML.lenght - 1])))
    {
        if(ListaOperadores.length < 1)
        {
            ListaOperadores.push(valor);
            operacion.innerHTML += valor;
        }else
        {
            Calcular();
            
        }
    }
}
function BorrarUltimo(){
    let operacion = document.getElementById('operacion');
    operacion.innerHTML = operacion.innerHTML.slice(0, -1);
    ListaElementos.pop();
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