

function mostrardisplay(valor) {
  let elemento = document.getElementById("display");
  elemento.innerText = elemento.innerText + valor;
}
function borrarTodo() {
  let elemento = document.getElementById("display");
  elemento.innerText = "";
}
function borrarCaracter() {
  let elemento = document.getElementById('display');
  elemento.innerText = elemento.innerText.substring(0, elemento.innerText.length - 1);
}

function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function dividir(num1, num2) {
  if (num2 === 0) {
    return "Division para CERO";
  } else {
    return num1 / num2;
  }
}
function porcentaje(num1, num2) {
  return (num1 * num2) / 100;
}

function calcular() {
  let elemento = document.getElementById("display");
  let cadenaDisplay = elemento.innerText;

  let operadores = ['+', '-', '*', '/', '%'];
  let operadorEncontrado = null;
  let posicion = -1;


  for (let i = 0; i < cadenaDisplay.length; i++) {
    if (operadores.includes(cadenaDisplay[i]) && i !== 0) {
      operadorEncontrado = cadenaDisplay[i];
      posicion = i;
      break;
    }
  }


  if (operadorEncontrado === null) {
    alert("No hay operador válido.");
    return;
  }


  let num1 = parseFloat(cadenaDisplay.substring(0, posicion));
  let num2 = parseFloat(cadenaDisplay.substring(posicion + 1));


  let resultado;
  switch (operadorEncontrado) {
    case '+': resultado = sumar(num1, num2); break;
    case '-': resultado = restar(num1, num2); break;
    case '*': resultado = multiplicar(num1, num2); break;
    case '/': resultado = dividir(num1, num2); break;
    case '%': resultado = porcentaje(num1, num2); break;
  }


  elemento.innerText = cadenaDisplay + resultado;

}

