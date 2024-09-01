 //Genera un número aleatorio entre 1 y 10
function generarNumeroMaquina() {
    return Math.floor(Math.random() * 10) + 1;
}

// Solicitar el número al usuario
function solicitarNumero(vidas) {
    const usuarioInput = prompt("Ingresa un número del 1 al 10. Tienes " + vidas + " vidas restantes:");
    return parseInt(usuarioInput);
}

// Verifica si el número ingresado es válido
function esNumeroValido(numero) {
    return !isNaN(numero) && numero >= 1 && numero <= 10;
}


function jugar() {
    const numeroMaquina = generarNumeroMaquina();
    let vidas = 3; // Número de vidas

    while (vidas > 0) { 
        const usuarioNum = solicitarNumero(vidas);

        // Verificar si el número ingresado es válido
        if (!esNumeroValido(usuarioNum)) {
            console.log("Por favor, ingresa un número entre 1 y 10.");
            alert("Por favor, ingresa un número entre 1 y 10.");
            continue; // Volver a pedir el número
        }

        // Comparar el número ingresado con el número de la máquina
        if (usuarioNum === numeroMaquina) {
            console.log("¡Felicidades! Adivinaste el número: " + numeroMaquina);
            alert("¡Felicidades! Adivinaste el número: " + numeroMaquina);
            return; // Salir de la función si el usuario adivina
        } else {
            vidas--; // Restar una vida
            console.log("Incorrecto. El número: "+ usuarioNum + " no es el correcto. Te quedan " + vidas + " vidas.");
            alert("Incorrecto. El número: "+ usuarioNum + " no es el correcto. Te quedan " + vidas + " vidas.");
        }
    }

    // Si se quedan sin vidas
    console.log("¡Se te acabaron las vidas! El número era " + numeroMaquina + ".");
    alert("¡Se te acabaron las vidas! El número era " + numeroMaquina + ".");
}

// Iniciar el juego
jugar();
