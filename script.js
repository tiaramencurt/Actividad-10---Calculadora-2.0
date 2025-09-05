let operadores = ['+', '-', '*', '/'];
let ListaNumeros = [];
let operador = null;
function EscribirNumero(valor){
    const operacion = document.getElementById('operacion');
    console.log("Valor que llegó: " + valor);
    if(operadores.includes(operacion.innerHTML[operacion.innerHTML.length - 1]) || operacion.innerHTML === '')
    {
        ListaNumeros.push(toString(valor));
    }else
    {
        ListaNumeros[ListaNumeros.length-1] += toString(valor);
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
    resultado = null;
    if(ListaNumeros.length == 2)
    {
        if(operador === '+')
        {
            resultado = parseFloat(ListaNumeros[0]) + parseFloat(ListaNumeros[1]);
        }else if(operador === '-')
        {
            resultado = parseFloat(ListaNumeros[0]) - parseFloat(ListaNumeros[1]);
        }else if(operador === '*')
        {
            resultado = parseFloat(ListaNumeros[0]) * parseFloat(ListaNumeros[1]);
        }else if(operador === '/')
        {
            if(parseFloat(ListaNumeros[1]) !== 0)
                {
                    resultado = parseFloat(ListaNumeros[0]) / parseFloat(ListaNumeros[1]);
                }else
                    {
                        //Hay que fijarse que hacer cuando es 0
                    }
        }
    }
    const resultHTML = document.getElementById('resultado');
    resultHTML.innerHTML = resultado;
    console.log("Resultado:" + resultado);
    console.log(ListaNumeros);
    return toString(resultado);
}
function BorrarUltimo(){
    let operacion = document.getElementById('operacion');
    operacion.innerHTML = operacion.innerHTML.slice(0, -1);
    ListaNumeros[ListaNumeros.length].slice(0, -1);
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