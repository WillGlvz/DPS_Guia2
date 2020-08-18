var numeros = /** @class */ (function () {
    function numeros(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
    return numeros;
}());
var numbers = new numeros(4, 7);
function calculadora() {
    var suma = numbers.numero1 + numbers.numero2;
    var resta = numbers.numero1 - numbers.numero2;
    var multi = numbers.numero1 * numbers.numero2;
    var division = numbers.numero1 / numbers.numero2;
    console.log("N\u00FAmeros: " + numbers.numero1 + " y " + numbers.numero2 + " \nSuma: " + suma + "\nResta: " + resta + "\nMultiplicaci\u00F3n: " + multi + "\nDivisi\u00F3n: " + division.toFixed(2));
}
calculadora();
