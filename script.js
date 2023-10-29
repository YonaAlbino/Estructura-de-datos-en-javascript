/*
La Prefectura cuenta con los datos de la altura máxima mensual del río Paraná en los
años 2019 y 2020.
Escribir un programa que, utilizando funciones, informe:
a) en qué mes de cada uno de los años ocurrió la mayor altura
b) cuál fue la mayor altura en los dos años
c) en qué año se dio la mayor altura
*/

var matriz = new Array(2);
var mayorAltura1 = 0;
var mayorAltura2 = 0;
var mes = 0;
var mes1 = 0;
var mes2 = 0;

for (let i = 0; i < 2; i++) {
    matriz[i] = new Array(12);
}

for (let i = 0; i < 2; i++) {

    for (let j = 0; j < 12; j++) {
        matriz[i][j] = Number(prompt("Ingrese una altura maxima"));
    }
}

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 12; j++) {
        document.write("[" + matriz[i][j] + "]" + "<br>");
    }
}

function getAlturaMaxuma(matriz, fila) {
    let max = 0;

    for (let j = 0; j < 12; j++) {
        if (matriz[fila][j] > max) {
            max = matriz[fila][j];
        }
    }
    return max;
}

function getMes(matriz, fila) {
    let max = 0;
    let mes = 0;

    for (let j = 0; j < 12; j++) {
        if (matriz[fila][j] > max) {
            max = matriz[fila][j];
            mes = j;
        }
    }
    return mes + 1;
}

function mayorDeDos() {

    valor1 = getAlturaMaxuma(matriz, 0);
    valor2 = getAlturaMaxuma(matriz, 1);

    if (valor1 > valor2)
        return "2019";
    else
        return "2020";
}

document.write("Mayor altura 1: " + getAlturaMaxuma(matriz, 0) + " ocurrio en el mes de: " + getMes(matriz, 0) + " <br>" + "Mayor altura 2: " + getAlturaMaxuma(matriz, 1) + " ocurrio en el mes de: " + + getMes(matriz, 1) + "<br>");

document.write("La altura máxima ocurrio en el año: " + mayorDeDos());



