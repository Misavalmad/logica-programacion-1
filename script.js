/**Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales. */

let num1 = parseInt(prompt('Inserte un numero:'))
let num2 = parseInt(prompt('Inserte un segundo numero:'))
let num3 = parseInt(prompt('Inserte un tercer numero:'))

function orderNumber(num1, num2, num3){
    let HTMLresult = '';

    if (num1 === num2 && num2 === num3) {
        HTMLresult = 'Los tres números son iguales: ';
        HTMLresult += `${num1}, ${num2}, ${num3}`;
    } else if (num1 >= num2 && num1 >= num3) {
        HTMLresult = 'Num1 es mayor';
        if (num2 > num3){
            HTMLresult += `<br>Mayor a menor: ${num1}, ${num2}, y ${num3}`;
            HTMLresult += `<br>Menor a mayor: ${num3}, ${num2}, y ${num1}`;
        }  else {
            HTMLresult += `<br>Mayor a menor: ${num1}, ${num3}, y ${num2}`;
            HTMLresult += `<br>Menor a mayor: ${num2}, ${num3}, y ${num1}`;
        }
    } else if (num2 > num1 && num2 >= num3) {
        HTMLresult = 'Num2 es mayor';
        if (num1 > num3) {
            HTMLresult += `<br>Mayor a menor: ${num2}, ${num1}, y ${num3}`;
            HTMLresult += `<br>Menor a mayor: ${num3}, ${num1}, y ${num2}`;  
        } else {
            HTMLresult += `<br>Mayor a menor: ${num2}, ${num3}, y ${num1}`;
            HTMLresult += `<br>Menor a mayor: ${num1}, ${num3}, y ${num2}`;
            
        }
    } else if (num3 >= num1 && num3 >= num2) {
        HTMLresult = 'Num3 es mayor';
        if (num1 > num2) {
            HTMLresult += `<br>Mayor a menor: ${num3}, ${num1}, y ${num2}`;
            HTMLresult += `<br>Menor a mayor: ${num2}, ${num1}, y ${num3}`;
        } else {
            HTMLresult += `<br>Mayor a menor: ${num3}, ${num2}, y ${num1}`;
            HTMLresult += `<br>Menor a mayor: ${num1}, ${num2}, y ${num3}`;
            
        }
        
    }
    document.getElementById('result').innerHTML = HTMLresult;
}

orderNumber(num1, num2, num3)