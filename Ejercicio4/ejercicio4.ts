class numeros
{
    numero1:number;
    numero2:number;

    constructor(num1:number, num2:number)
    {
        this.numero1 = num1;
        this.numero2 = num2;
    }
}

let numbers = new numeros(4, 7);

function calculadora()
{
    let suma:number = numbers.numero1 + numbers.numero2;
    let resta:number = numbers.numero1 - numbers.numero2;
    let multi:number = numbers.numero1 * numbers.numero2;
    let division:number = numbers.numero1 / numbers.numero2;
    console.log(`Números: ${numbers.numero1} y ${numbers.numero2} \nSuma: ${suma}\nResta: ${resta}\nMultiplicación: ${multi}\nDivisión: ${division.toFixed(2)}`);
}

calculadora();