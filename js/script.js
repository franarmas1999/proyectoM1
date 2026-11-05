console.log("Hola JS esta OK")

const seccionPaleta = document.querySelector(".seccion-paleta")

function colorAleatorioHsl() {
    return `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`;
}

function colorAleatorioRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

