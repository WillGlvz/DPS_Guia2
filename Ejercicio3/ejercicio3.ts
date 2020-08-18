class empleado
{
    nombre:string;
    salario:number;

    constructor(name:string, money:number)
    {
        this.nombre = name;
        this.salario = money;
    }
}

let instance = new empleado("Willian", 250);

function salarioTotal()
{
    let descuentos:number[] = [0.0725, 0.03];
    let AFP:number = instance.salario*descuentos[0];
    let ISSS:number = instance.salario*descuentos[1];
    let Tot:number = instance.salario - (AFP + ISSS);
    console.log(`El salario bruto del señor ${instance.nombre} es de $${instance.salario}, al aplicarle los descuentos tenemos un salario neto de $${Tot.toFixed(2)}`);
}

salarioTotal();