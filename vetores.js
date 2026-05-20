
let numeros = [50, 60, 8, 21, 14, 75];
let pares = 0
let impares = 0
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    
    if (numero % 2 === 0) {
        pares++;
    }
    else {
        impares++
    }
}
console.log("numero pares:", pares);
console.log("números ímpares:", impares);