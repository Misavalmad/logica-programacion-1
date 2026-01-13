/**Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales. */

let num1 = parseInt(prompt('Inserte un numero:'))
let num2 = parseInt(prompt('Inserte un segundo numero:'))
let num3 = parseInt(prompt('Inserte un tercer numero:'))

function orderNumber(num1, num2, num3){
    if (num1 === num2 && num2 === num3) {
        console.log(`Son iguales`);
    }
    
}

orderNumber(num1, num2, num3)