let usuario = prompt("Ingresa tu usuario");
let clave = prompt("Ingresa tu clave");
const claveUsuario = "banco123"
const nombreUsuario = "christian"
const saldo = "$45.846.364.oo."
let limiteIntentos = 4;
let intentos = 0;

// for (let intentos = 0; intentos < limiteIntentos; intentos++) {
// }


if ((intentos < limiteIntentos) && (clave === claveUsuario) && (usuario === nombreUsuario)) {
    alert("Su saldo es: " + saldo);
} else if ((intentos < limiteIntentos) && ((clave !== claveUsuario) || (usuario !== nombreUsuario))){
    intentos++;
    alert("Intento fallido # " + intentos);
    let usuario = prompt("Ingresa tu usuario");
    let clave = prompt("Ingresa tu clave");
    if ((intentos < limiteIntentos) && (clave === claveUsuario) && (usuario === nombreUsuario)) {
        alert("Su saldo es: " + saldo);
    } else if ((intentos < limiteIntentos) && ((clave !== claveUsuario) || (usuario !== nombreUsuario))){
        intentos++;
        alert("Intento fallido # " + intentos);
        let usuario = prompt("Ingresa tu usuario");
        let clave = prompt("Ingresa tu clave");
        if ((intentos < limiteIntentos) && (clave === claveUsuario) && (usuario === nombreUsuario)) {
            alert("Su saldo es: " + saldo);
        } else if ((intentos < limiteIntentos) && ((clave !== claveUsuario) || (usuario !== nombreUsuario))){
            intentos++;
            alert("Intento fallido # " + intentos);
            let usuario = prompt("Ingresa tu usuario");
            let clave = prompt("Ingresa tu clave");
            if ((intentos < limiteIntentos) && (clave === claveUsuario) && (usuario === nombreUsuario)) {
                alert("Su saldo es: " + saldo);
            } else if ((intentos < limiteIntentos) && ((clave !== claveUsuario) || (usuario !== nombreUsuario))){
                intentos++;
                alert("Intento fallido # " + intentos);
                alert("Usuario bloqueado!!!");
            }
        }
    }
}

