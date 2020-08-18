var empleado = /** @class */ (function () {
    function empleado(name, money) {
        this.nombre = name;
        this.salario = money;
    }
    return empleado;
}());
var instance = new empleado("Willian", 250);
function salarioTotal() {
    var descuentos = [0.0725, 0.03];
    var AFP = instance.salario * descuentos[0];
    var ISSS = instance.salario * descuentos[1];
    var Tot = instance.salario - (AFP + ISSS);
    console.log("El salario bruto del se\u00F1or " + instance.nombre + " es de $" + instance.salario + ", al aplicarle los descuentos tenemos un salario neto de $" + Tot.toFixed(2));
}
salarioTotal();
