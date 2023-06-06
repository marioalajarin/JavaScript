// Obtener referencia a la pantalla de visualización y al teclado
const display = document.getElementById('display');
const teclado = document.querySelector('.teclado');

// Inicializar variables
let operando1 = null;
let operando2 = null;
let operador = null;

// Función para manejar los eventos de los botones
function manejarClick(event) {
  // Obtener el valor del botón pulsado
  const valor = event.target.innerText;

  // Comprobar el tipo de botón pulsado
  if (valor === 'C') {
    // Botón de limpieza: resetear la calculadora
    display.innerText = '0';
    operando1 = null;
    operando2 = null;
    operador = null;
  } else if (valor === '+' || valor === '-' || valor === 'x' || valor === '÷' || valor === '√' || valor === '%' || valor === 'x²') {
    // Botón de operación: guardar operador y operando1
    operador = valor;
    operando1 = parseFloat(display.innerText);
    display.innerText = operando1;
    display.innerText = operador;
    display.innerText = operando2;
  } else if (valor === '=') {
    // Botón de igual: realizar la operación y mostrar el resultado
    operando2 = parseFloat(display.innerText);
    let resultado = 0;
    switch (operador) {
      case '+':
        resultado = operando1 + operando2;
        break;
      case '-':
        resultado = operando1 - operando2;
        break;
      case 'x':
        resultado = operando1 * operando2;
        break;
      case '÷':
        resultado = operando1 / operando2;
        break;
      case '√':
        resultado = Math.sqrt(operando2);
        break;
      case '%':
        resultado = operando1%operando2;
        break;
      case 'x²':
        resultado = Math.pow(operando1,2);
        break;
    }
    display.innerText = resultado;
    operando1 = resultado;
    operando2 = null;
    operador = null;
  } else {
    // Botón numérico: añadir el dígito a la pantalla de visualización
    if (display.innerText === '0') {
      display.innerText = valor;
    } else {
      display.innerText += valor;
    }
  }
}

// Asignar el manejador de eventos a cada botón del teclado
teclado.addEventListener('click', manejarClick);

const buttons = document.querySelectorAll('.boton');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Añadir el color del fondo al botón cuando se cambia
    button.style.backgroundColor = "pink";
    // Después de 50 milisegundos cambia el color a su color original 
    setTimeout(() => {
      button.style.backgroundColor = "";
    }, 50);
  });
});
