const {suma} = require('../utils');

describe('Archivo de utils', () => {
    test('Sumo dos numeros correctamente', () => {
        // console.log(suma(1,2));
        expect(suma(1,2)).toBe(3);
        expect(suma(2,2)).toBe(4);
        expect(suma(1,4)).toBe(5);
        expect(suma(1,5)).toBe(6);

    });
});