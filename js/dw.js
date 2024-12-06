function calcularAngulos() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);

    if (esValidoTriangulo(a, b, c)) {
        const alfa = radianesAGrados(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)));
        const beta = radianesAGrados(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)));
        const gamma = 180 - alfa - beta;

        mostrarResultado(`Ángulos: α = ${alfa.toFixed(2)}°, β = ${beta.toFixed(2)}°, γ = ${gamma.toFixed(2)}°`);
    } else {
        mostrarError();
    }
}

function calcularMedianas() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);

    if (esValidoTriangulo(a, b, c)) {
        const mA = Math.sqrt((2 * b ** 2 + 2 * c ** 2 - a ** 2) / 4);
        const mB = Math.sqrt((2 * a ** 2 + 2 * c ** 2 - b ** 2) / 4);
        const mC = Math.sqrt((2 * a ** 2 + 2 * b ** 2 - c ** 2) / 4);

        mostrarResultado(`Medianas: mA = ${mA.toFixed(2)}, mB = ${mB.toFixed(2)}, mC = ${mC.toFixed(2)}`);
    } else {
        mostrarError();
    }
}

function calcularBisectrices() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);

    if (esValidoTriangulo(a, b, c)) {
        const p = (a + b + c) / 2;
        const bA = (2 / (b + c)) * Math.sqrt(b * c * p * (p - a));
        const bB = (2 / (a + c)) * Math.sqrt(a * c * p * (p - b));
        const bC = (2 / (a + b)) * Math.sqrt(a * b * p * (p - c));

        mostrarResultado(`Bisectrices: bA = ${bA.toFixed(2)}, bB = ${bB.toFixed(2)}, bC = ${bC.toFixed(2)}`);
    } else {
        mostrarError();
    }
}

function calcularAlturas() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);

    if (esValidoTriangulo(a, b, c)) {
        const area = calcularAreaTriangulo(a, b, c);
        const hA = (2 * area) / a;
        const hB = (2 * area) / b;
        const hC = (2 * area) / c;

        mostrarResultado(`Alturas: hA = ${hA.toFixed(2)}, hB = ${hB.toFixed(2)}, hC = ${hC.toFixed(2)}`);
    } else {
        mostrarError();
    }
}

function calcularPerimetro() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);

    if (esValidoTriangulo(a, b, c)) {
        const perimetro = a + b + c;
        mostrarResultado(`Perímetro: ${perimetro}`);
    } else {
        mostrarError();
    }
}

function calcularArea() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);

    if (esValidoTriangulo(a, b, c)) {
        const area = calcularAreaTriangulo(a, b, c);
        mostrarResultado(`Área: ${area.toFixed(2)}`);
    } else {
        mostrarError();
    }
}

function radianesAGrados(radianes) {
    return (radianes * 180) / Math.PI;
}

function calcularAreaTriangulo(a, b, c) {
    const s = (a + b + c) / 2; // semiperímetro
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function esValidoTriangulo(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function mostrarResultado(mensaje) {
    document.getElementById('salida').innerHTML = mensaje;
}

function mostrarError() {
    document.getElementById('salida').innerHTML = "Error: Los lados ingresados no forman un triángulo válido.";
}