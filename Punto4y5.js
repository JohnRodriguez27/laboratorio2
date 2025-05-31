function realizarOperacion() {
    while (true) {
        let operacion = prompt("Ingrese la operación suma, resta, multiplicacion, division");

        let resultado;
        if (operacion === "suma") {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            resultado = num1 + num2;
            alert("El resultado de la suma es: " + resultado);

        } else if (operacion === "resta") {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            resultado = num1 - num2;
            alert("El resultado de la resta es: " + resultado);

        } else if (operacion === "multiplicacion") {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            resultado = num1 * num2;
            alert("El resultado de la multiplicación es: " + resultado);

        } else if (operacion === "division") {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            if (num2 === 0) {
                let num1 = parseFloat(prompt("Ingrese el primer número:"));
                let num2 = parseFloat(prompt("Ingrese el segundo número:"));
                alert("No se puede dividir por cero<br>");
            } else {
                resultado = num1 / num2;
                alert("El resultado de la división es: " + resultado);

            }
        } else {
            alert("Ingrese una operación válida: suma, resta, multiplicación o división");
        }


    }
}
realizarOperacion();