//funcion para toCelsius, Fórmula: °C = (°F − 32) × 5/9, 
function toCelsius(f) {
    if (typeof f !== 'number' || !isFinite(f)) {
        throw new TypeError('El numero debe ser finito');
    }
    const celsius = (f - 32) * 5 / 9;
    return Math.round(celsius * 10) / 10; // Redondeo 
}   

//toFahrenheit(c), Fórmula: °F = (°C × 9/5) + 32
function toFahrenheit(c) {
    if (typeof c !== 'number' || !isFinite(c)) {
        throw new TypeError('El numero debe ser finito');
    }
    const fahrenheit = (c * 9 / 5) + 32;
    return Math.round(fahrenheit * 10) / 10; // Redondeo 
}

//movingAverage(series, window)
function movingAverage(series, window) {
    if (!Array.isArray(series) || series.some(num => typeof num !== 'number' || !isFinite(num))) {
        throw new TypeError('La serie debe ser un arreglo de números finitos');
    }
    if (typeof window !== 'number' || !Number.isInteger(window) || window < 2 || window > series.length) {
        throw new RangeError('La ventana estar entre 2 y la longitud de  serie');
    }
    const result = [];
    for (let i = 0; i <= series.length - window; i++) {
        const windowSlice = series.slice(i, i + window);
        const average = windowSlice.reduce((sum, num) => sum + num, 0) / window;
        result.push(Math.round(average * 100) / 100); // Redondeo
    }
    return result;
}

module.exports = {
    toCelsius,
    toFahrenheit,
    movingAverage
};