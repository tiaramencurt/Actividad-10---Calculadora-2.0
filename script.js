let operadores = ['+', '-', '*', '/'];
let ListaNumeros = [];
let operador = null;
function EscribirNumero(valor){
    const operacion = document.getElementById('operacion');
    console.log("Valor que llegó a EscribirNumero: " + valor);
    if(operadores.includes(operacion.innerHTML[operacion.innerHTML.length - 1]) || operacion.innerHTML === '')
    {
        ListaNumeros.push(valor.toString());
    }else
    {
        ListaNumeros[ListaNumeros.length-1] += valor.toString();
    }
    operacion.innerHTML += valor;
}
function EscribirOperador(valor){
    const operacion = document.getElementById('operacion');
    if(operador === null && operacion.innerHTML !== '')
    {
        operador = valor;
        operacion.innerHTML += valor;
    }else
    {
        let resultado = Calcular();
        if(resultado !== null)
            {
                resultado = Calcular().toString();
                ListaNumeros = [resultado];
                operador = valor;
                operacion.innerHTML = resultado + valor;
            }
    }
}

function Calcular(){
    let resultado = null;
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
    console.log("Resultado de Calcular:" + resultado);
    console.log("Lista de numeros después de calcular: " + ListaNumeros);
    return resultado;
}
function BorrarUltimo(){
    let operacion = document.getElementById('operacion');
    if(operacion.innerHTML !== '')
        {
            if(operadores.includes(operacion.innerHTML[operacion.innerHTML.length - 1]))
            {
                operador = null;
            }else
                {
                    ListaNumeros[ListaNumeros.length - 1] = ListaNumeros[ListaNumeros.length - 1].slice(0, -1);
                    if (ListaNumeros[ListaNumeros.length - 1] === "")
                        {
                            ListaNumeros.pop();
                        }
                }
                console.log("Operador después de borrar el ultimo caracter: " + operador);
                console.log("Lista de numeros después de borrar el ultimo caracter: " + ListaNumeros);
            operacion.innerHTML = operacion.innerHTML.slice(0, -1);
        }
}
function Memorizar(){
    let ultimoResultado = document.getElementById('resultado').innerHTML;
    let resultados = document.getElementById('resultados');
    if(ultimoResultado !== '' && !resultados.innerHTML.includes(`<li>${ultimoResultado}</li>`)){
        resultados.innerHTML += `<li>${ultimoResultado}</li>`;
    }
}
function EscribirMemoria(){//No funciona cuando la ultima memoria es un numero negativo, o sea funciona pero depsués lo demás no
    let lista = document.getElementById('resultados');
    let operacion = document.getElementById('operacion');
    if(lista.innerHTML !== ''){
        let resultados = lista.innerHTML.split('</li>');
        let ultimoResultado = resultados[resultados.length - 2];//Hay que poner -2 en lugar de -1 porque como termina en 
        // </li> y estamos haciendo el split por eso, si, por ejemplo, tenemos dos elementos en la lista 
        // va a hacer dos separaciones, quedando 3 elementos en resultado; el ultimo vacio
        ultimoResultado = parseFloat(ultimoResultado.replace('<li>', ''));
        EscribirNumero(ultimoResultado);
    }
}