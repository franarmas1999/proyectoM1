// console.log("Hola JS esta OK"); con esto me doy cuenta que esta todo OK

 //MEMORIA AL INICIAR, VA A IR CAMBIANDO 
const seccionPaleta = document.querySelector(".seccion-paleta");
let cantidad = 6;
let formato = "hsl";
let paleta = [];


//* FUNCIONES COLORES ALEATORIOS
function colorAleatorioHsl() {
  return `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`;
}

//*Funcion clave para pasar de formato sin reiniciar la paleta
function hslARgba(colorHsl) {
  const auxiliar = document.createElement("div");
  auxiliar.style.backgroundColor = colorHsl;
  const rgb = auxiliar.style.backgroundColor;
  return rgb.replace("rgb", "rgba").replace(")", ", 1)");
}


/*function colorAleatorioRgba() {  //!ESTA FUNCION TUVO QUE SER ELIMINADA, CADA VEZ QUE TOCABA EL FORMATO, SE GENERABA NUEVA PALETA
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b}, 1)`;
}*/

//*FUNCIONES PARA LA PALETA
//*Funcion que dibuja el html en el DOM
function dibujarPaleta() {
  let html = "";
  for (let i = 0; i < paleta.length; i++) {
    const colorHsl = paleta[i];
    const codigo = formato === "hsl" ? colorHsl : hslARgba(colorHsl);
    html += `<div class="seccion-paleta--color" style="background-color:${colorHsl}">${codigo}</div>`;
  }
  seccionPaleta.innerHTML = html;
}

//*Funcion que permite reiniciar paleta, y vuelve a dibujar
function generarPaleta() {
  paleta = [];
  for (let i = 0; i < cantidad; i++) {
    paleta.push(colorAleatorioHsl());
  }
  dibujarPaleta();
}

//*BOTON PRINCIPAL EVENTO
const botonPrincipal = document.querySelector(".boton-principal");

botonPrincipal.addEventListener("click", generarPaleta);

//*BOTONES CANTIDAD Y FORMATO EVENTOS
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
    generarPaleta();
  })
})

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