class Rombo 
{
    DiagonalVertical:number;
    DiagonalHorizontal:number;
    Area:number;

    constructor(diagonver:number, diagohor:number)
    {
        this.DiagonalVertical = diagonver;
        this.DiagonalHorizontal = diagohor;
    }
}

let instancia:Rombo = new Rombo(2, 3);

function area()
{
    let Area:number = instancia.DiagonalHorizontal * instancia.DiagonalVertical;
    console.log("El área es: " + Area + " m cuadrado");
}

area();



