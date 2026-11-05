// console.log("Hola JS esta OK"); con esto me doy cuenta que esta todo OK

// Memoria inicial del programa, va a ir cambiando
const seccionPaleta = document.querySelector(".seccion-paleta");
let cantidad = 6;
let formato = "hsl";

// Funciones colores aleatorios
function colorAleatorioHsl() {
  return `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`;
}

function colorAleatorioRgba() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b}, 1)`;
}

//Funcion de dibujar paleta, agrega html
function dibujarPaleta() {
  let html = "";
  for (let i = 0; i < cantidad; i++) {
    let colorAleatorio;
    if (formato === "hsl") {
      colorAleatorio = colorAleatorioHsl();
    } else {
      colorAleatorio = colorAleatorioRgba();
    }
    html += `<div class="seccion-paleta--color" style="background-color:${colorAleatorio}">${colorAleatorio}</div>`;
  }
  seccionPaleta.innerHTML = html;
}


// selecciono boton principal
const botonPrincipal = document.querySelector(".boton-principal");
// eventos
botonPrincipal.addEventListener("click", dibujarPaleta);

const botonesCantidad = document.querySelectorAll("#seccion-cantidad .boton-seleccion");
const botonesFormato = document.querySelectorAll("#seccion-formato .boton-seleccion");

botonesCantidad.forEach(boton =>{
  boton.addEventListener("click", function () {

    // saco la clase a todos los botones
      botonesCantidad.forEach(function (b) {
      b.classList.remove("activo");
    });

    // se la pongo solo al que se clickeó
    boton.classList.add("activo");

    // actualizo la variable de estado, cantidad
    cantidad = Number(boton.textContent);
    dibujarPaleta();
  })
})


// evento formato


botonesFormato.forEach(function (boton) {
  boton.addEventListener("click", function () {
    botonesFormato.forEach(function (b) {
      b.classList.remove("activo");
    });
    boton.classList.add("activo");
    formato = boton.textContent.toLowerCase();
    dibujarPaleta();
  });
});