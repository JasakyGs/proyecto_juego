//se definen las variables que se usarán en el juego:
let opciones = ["Piedra", "Papel", "Tijeras"];
let intentos = Number(prompt('Ingrese el número de veces que quiere jugar:'));
let contador = 0;
let aciertosUsuario = 0;
let aciertosComputadora = 0;

// Ciclo "while" para validar que el usuario ingrese un número entero mayor a 0 para los intentos.
while (isNaN(intentos) || intentos <= 0) {
  alert("Error, ingrese un número entero mayor a 0.");
  intentos =+ (prompt('Ingrese el número de veces que quiere jugar:'));
}

//función jugar() Recibe como parámetro la elección del usuario.
function jugar(eleccionUsuario) {
  contador++;
  eleccionUsuario = eleccionUsuario.charAt(0).toUpperCase() + eleccionUsuario.slice(1).toLowerCase();

 //Verifica si la elección del usuario es válida
  if (opciones.indexOf(eleccionUsuario) === -1) {
    alert("Eleccion invalida, intentalo de nuevo.");
    return;
  }
  
// la eleccion de la computadora con una funcion match.random y que recorra el arreglo de opcione
  let indice = Math.floor(Math.random() * opciones.length);
  let opcionComputadora = opciones[indice];

  let resultado;

  // condiciones para saber si la eleccion del usuario y de la computadora es igual o no, si es igual, alertara empate si no que gano o perdio
  if (eleccionUsuario === opcionComputadora) {
    resultado = "🤝 Empate!🤝 ";
  } else if ((eleccionUsuario === "Piedra" && opcionComputadora === "Tijeras") || (eleccionUsuario === "Papel" && opcionComputadora === "Piedra") || (eleccionUsuario === "Tijeras" && opcionComputadora === "Papel")) {
    resultado = "🎉Ganaste!🎉";
    aciertosUsuario++;
  } else {
    resultado = "😞 Perdiste!😞 ";
    aciertosComputadora++;
  }

  // alerta de quien fue el ganador y que elijio cada parte, la condicional cierra los intentos ingresados por el usuario, osea compara ambos y si ya lelgaron al indice ingresado por el usuario (intetnos 3 == contador 3)entonces imprime los resultados finales y los aciertos de casa parte.
  alert(`Elegiste ${eleccionUsuario}, la computadora eligió ${opcionComputadora}. ${resultado}`);

  if (contador === intentos) {
    alert(`Se han agotado los ${intentos} intentos.`);
    alert(`Juego terminado. Tuviste ${aciertosUsuario} aciertos y la computadora tuvo ${aciertosComputadora} aciertos.`);
  }
}

//cuando el boton sea oprimido, analiza cual boton oprimio y a que corresponde (piedra,papel,tijera) luego toma la funcion de jugar y toma por resultado la eleccion del jugador osea (si fue piedra,papel,tijera )
document.getElementById("boton1").addEventListener("click", () => {
  let eleccionUsuario = prompt("Elige Piedra, Papel o Tijeras:");
  jugar(eleccionUsuario);
});

document.getElementById("boton2").addEventListener("click", () => {
  jugar("Piedra");
});

document.getElementById("boton3").addEventListener("click", () => {
  jugar("Papel");
});

document.getElementById("boton4").addEventListener("click", () => {
  jugar("Tijeras");
});

let fila = tablaResultados.insertRow();
      let celdaJuego = fila.insertCell();
      let celdaEleccionUsuario = fila.insertCell();
      let celdaOpcionComputadora = fila.insertCell();
      let celdaResultado = fila.insertCell();
      
      celdaJuego.textContent = contador;
      celdaEleccionUsuario.textContent = eleccionUsuario;
      celdaOpcionComputadora.textContent = opcionComputadora;
      celdaResultado.textContent = resultado;

// condcional para cuando el contador sea igual a los intetnos ingresados alerte al usuairo de que sus intentos se acabaron y el juego termino
      if (contador == intentos) {
        alert(`Se han agotado los ${intentos} intentos.`);
        alert(`Juego terminado`)
      }
