var Rombo = /** @class */ (function () {
    function Rombo(diagonver, diagohor) {
        this.DiagonalVertical = diagonver;
        this.DiagonalHorizontal = diagohor;
    }
    return Rombo;
}());
var instancia = new Rombo(2, 3);
function area() {
    var Area = instancia.DiagonalHorizontal * instancia.DiagonalVertical;
    console.log("El área es: " + Area + " m cuadrado");
}
area();
