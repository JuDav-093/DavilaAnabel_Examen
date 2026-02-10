
const { toCelsius, toFahrenheit, movingAverage } = require('./grads');

describe('Función toCelsius', () => {
    //caso  32°F → 0.0°C
    test('32°F debería convertir a 0.0°C', () => {
        expect(toCelsius(32)).toBe(0.0);
    });

    // Casos normales
    test('212°F debería convertir a 100°C', () => {
        expect(toCelsius(212)).toBe(100.0);
    });
    
    test('-40°F debería convertir a -40°C', () => {
        expect(toCelsius(-40)).toBe(-40.0);
    });

    // Casos límite
    test('Temperatura muy alta: 1000°F', () => {
        expect(typeof toCelsius(1000)).toBe('number');
    });

    test('Temperatura muy baja: -500°F', () => {
        expect(typeof toCelsius(-500)).toBe('number');
    });

    // Casos de error
    test('Debería lanzar error si no es un número', () => {
        expect(() => toCelsius('32')).toThrow(TypeError);
    });

    test('Debería lanzar error si es undefined', () => {
        expect(() => toCelsius(undefined)).toThrow(TypeError);
    });

    test('Debería lanzar error si es null', () => {
        expect(() => toCelsius(null)).toThrow(TypeError);
    });

    test('Debería lanzar error si es Infinity', () => {
        expect(() => toCelsius(Infinity)).toThrow(TypeError);
    });

});

describe('Función toFahrenheit', () => {
    // caso  referencia 0°C → 32.0°F
    test(' 0°C debería convertir a 32.0°F', () => {
        expect(toFahrenheit(0)).toBe(32.0);
    });

    // caso referencia 100°C → 212.0°F
    test('100°C debería convertir a 212.0°F', () => {
        expect(toFahrenheit(100)).toBe(212.0);
    });

    // caso referencia −40°C ↔ −40°F
    test('-40°C debería convertir a -40.0°F', () => {
        expect(toFahrenheit(-40)).toBe(-40.0);
    });

    // Casos normales
    test('20°C debería convertir a 68.0°F', () => {
        expect(toFahrenheit(20)).toBe(68.0);
    });

    test('-10°C debería convertir a 14.0°F', () => {
        expect(toFahrenheit(-10)).toBe(14.0);
    });

    // Casos límite
    test('Temperatura muy alta: 1000°C', () => {
        expect(typeof toFahrenheit(1000)).toBe('number');
    });

    test('Temperatura muy baja: -500°C', () => {
        expect(typeof toFahrenheit(-500)).toBe('number');
    });

    // Casos de error
    test('Debería lanzar error si no es un número', () => {
        expect(() => toFahrenheit('0')).toThrow(TypeError);
    });

    test('Debería lanzar error si es undefined', () => {
        expect(() => toFahrenheit(undefined)).toThrow(TypeError);
    });

    test('Debería lanzar error si es null', () => {
        expect(() => toFahrenheit(null)).toThrow(TypeError);
    });

    test('Debería lanzar error si es Infinity', () => {
        expect(() => toFahrenheit(Infinity)).toThrow(TypeError);
    });

});

describe('Función movingAverage', () => {
    // caso movingAverage([10,20,30,40], 2) → [15.00, 25.00, 35.00]
    test('Caso referencia: movingAverage([10,20,30,40], 2) debería retornar [15.00, 25.00, 35.00]', () => {
        expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
    });

    // caso movingAverage([1,2,3], 3) → [2.00]
    test('Caso referencia: movingAverage([1,2,3], 3) debería retornar [2.00]', () => {
        expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
    });

    // Casos normales
    test('movingAverage([5, 10, 15, 20], 3) debería retornar [10.00, 15.00]', () => {
        expect(movingAverage([5, 10, 15, 20], 3)).toEqual([10.00, 15.00]);
    });

    test('movingAverage([1, 2, 3, 4, 5], 2) debería retornar [1.5, 2.5, 3.5, 4.5]', () => {
        expect(movingAverage([1, 2, 3, 4, 5], 2)).toEqual([1.5, 2.5, 3.5, 4.5]);
    });

    // Casos límite
    test('Ventana igual al array: movingAverage([100, 200, 300], 3)', () => {
        expect(movingAverage([100, 200, 300], 3)).toEqual([200.00]);
    });

    test('Array con negativos: movingAverage([-10, -20, -30], 2)', () => {
        expect(movingAverage([-10, -20, -30], 2)).toEqual([-15.00, -25.00]);
    });

    test('Array con ceros: movingAverage([0, 0, 0, 0], 2)', () => {
        expect(movingAverage([0, 0, 0, 0], 2)).toEqual([0.00, 0.00, 0.00]);
    });


    // Casos de error
    test('Debería lanzar error si no es un array', () => {
        expect(() => movingAverage('no es array', 2)).toThrow(TypeError);
    });

    test('Debería lanzar error si la serie contiene null', () => {
        expect(() => movingAverage([1, null, 3], 2)).toThrow(TypeError);
    });

    test('Debería lanzar error si la serie contiene Infinity', () => {
        expect(() => movingAverage([1, Infinity, 3], 2)).toThrow(TypeError);
    });

    test('Debería lanzar error si window no es un número', () => {
        expect(() => movingAverage([1, 2, 3], '2')).toThrow(RangeError);
    });

    test('Debería lanzar error si window es un decimal', () => {
        expect(() => movingAverage([1, 2, 3], 2.5)).toThrow(RangeError);
    });

    test('Debería lanzar error si window es menor a 2', () => {
        expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
    });

    test('Debería lanzar error si window es 0', () => {
        expect(() => movingAverage([1, 2, 3], 0)).toThrow(RangeError);
    });

    test('Debería lanzar error si window es negativo', () => {
        expect(() => movingAverage([1, 2, 3], -2)).toThrow(RangeError);
    });

    test('Debería lanzar error si window es mayor que la longitud del array', () => {
        expect(() => movingAverage([1, 2, 3], 5)).toThrow(RangeError);
    });

    test('Debería lanzar error si array está vacío', () => {
        expect(() => movingAverage([], 2)).toThrow(RangeError);
    });
});