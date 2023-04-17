const suma = (a, b ) => a + b;

const resta = (a, b ) => a - b;

const promedio = (a, b ) => (a + b ) / 2;

const palindromo = (str) => {
    const strReverse = str.split("").reverse().join("");
    return str = strReverse;
}

module.exports = {
    suma,
    resta,
    promedio,
    palindromo,
}


