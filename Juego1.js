let opciones = ["Piedra", "Papel", "Tijeras"];
let intentos = Number(prompt('Ingrese el número de veces que quiere jugar:'));
let contador = 0;
let aciertosUsuario = 0;
let aciertosComputadora = 0;

function jugar(eleccionUsuario) {
  contador++;
  eleccionUsuario = eleccionUsuario.charAt(0).toUpperCase() + eleccionUsuario.slice(1).toLowerCase();

  if (opciones.indexOf(eleccionUsuario) === -1) {
    alert("Eleccion invalida, intentalo de nuevo.");
    return;
  }

  let indice = Math.floor(Math.random() * opciones.length);
  let opcionComputadora = opciones[indice];

  let resultado;

  if (eleccionUsuario === opcionComputadora) {
    resultado = "🤝 Empate!🤝 ";
  } else if ((eleccionUsuario === "Piedra" && opcionComputadora === "Tijeras") || (eleccionUsuario === "Papel" && opcionComputadora === "Piedra") || (eleccionUsuario === "Tijeras" && opcionComputadora === "Papel")) {
    resultado = "🎉Ganaste!🎉";
    aciertosUsuario++;
  } else {
    resultado = "😞 Perdiste!😞 ";
    aciertosComputadora++;
  }

  alert(`Elegiste ${eleccionUsuario}, la computadora eligió ${opcionComputadora}. ${resultado}`);

  if (contador === intentos) {
    alert(`Se han agotado los ${intentos} intentos.`);
    alert(`Juego terminado. Tuviste ${aciertosUsuario} aciertos y la computadora tuvo ${aciertosComputadora} aciertos.`);
  }
}


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

      if (contador == intentos) {
        alert(`Se han agotado los ${intentos} intentos.`);
        alert(`Juego terminado`)
      }
