console.log("Hola JS esta OK")

// Memoria inicial del programa, va a ir cambiando
const seccionPaleta = document.querySelector(".seccion-paleta")
let cantidad = 6;
let formato = "hsl";

// Funciones colores aleatorios
function colorAleatorioHsl() {
    return `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`;
}

function colorAleatorioRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//Funcion de dibujar paleta, agrega html
function dibujarPaleta() {
    let html = "";
    for (let i = 0; i < cantidad; i++) {
        let colorAleatorio;
        if (formato === "hsl") {
            colorAleatorio = colorAleatorioHsl()
        }else{
            colorAleatorio = colorAleatorioRgb()
        }
        html += `<div class="seccion-paleta--color" style="background-color:${colorAleatorio}">${colorAleatorio}</div>`;
    }
    seccionPaleta.innerHTML = html;
}

dibujarPaleta();
