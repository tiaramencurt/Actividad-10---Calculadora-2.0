let operadores = ['+', '-', '*', '/'];
let ListaNumeros = [];
let operador = null;
function EscribirNumero(valor){
    const operacion = document.getElementById('operacion');
    console.log(valor);
    if(operadores.includes(operacion.innerHTML[operacion.innerHTML.lenght - 1]) || operacion.innerHTML === '')
    {
        ListaNumeros.push(valor);
    }else
    {
        ListaNumeros[ListaNumeros.lenght-1] += valor;
    }
    operacion.innerHTML += valor;
}
function EscribirOperador(valor){
    const operacion = document.getElementById('operacion');
    if(operador === null)
    {
        operador = valor;
        operacion.innerHTML += valor;
    }else
    {
        let resultado = Calcular();
        ListaNumeros = [resultado];
        operador = valor;
        operacion.innerHTML = resultado + valor;
    }
}

function Calcular(){
    if(ListaNumeros.length == 2)
    {
        if(operador === '+')
        {
            resultado = ListaNumeros[0] + ListaNumeros[1];
        }else if(operador === '-')
        {
            resultado = ListaNumeros[0] - ListaNumeros[1];
        }else if(operador === '*')
        {
            resultado = ListaNumeros[0] * ListaNumeros[1];
        }else if(operador === '/')
        {
            resultado = ListaNumeros[0] / ListaNumeros[1];
        }
    }
    resultado = null;
    const resultHTML = document.getElementById('resultado');
    resultHTML.innerHTML = resultado;
    console.log(resultado);
    console.log(ListaNumeros); // con 0 + 1 aparece 
    return resultado;
}
function BorrarUltimo(){
    let operacion = document.getElementById('operacion');
    operacion.innerHTML = operacion.innerHTML.slice(0, -1);
    ListaElementos.pop();
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