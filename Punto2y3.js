function realizarOperacion(Operacion,num1,num2){
    if (Operacion === "suma") {
        return num1 + num2;
    }else if (Operacion === "resta") {
        return num1 - num2;
    } else if (Operacion === "multiplicacion") {
        return num1 * num2;
    } else if (Operacion === "division") {
        if (num2 === 0) {
            return "No se puede dividir por cero";
        } 
        return num1 / num2;
    } else {
        return "Ingrese una operacion valida: suma, resta, multiplicacion o division";
    }
}
document.writeln("El resultado de la suma es: " + realizarOperacion("suma", 24, 2) + "<br>");
document.writeln("El resultado de la resta es: " + realizarOperacion("resta", 24, 2) + "<br>");
document.writeln("El resultado de la multiplicacion es: " + realizarOperacion("multiplicacion", 24, 2) + "<br>");
document.writeln("El resultado de la division es: " + realizarOperacion("division", 24, 2) + "<br>");
document.writeln("El resultado de la division por cero es: " + realizarOperacion("division", 24, 0) + "<br>");