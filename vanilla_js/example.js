// *DEV
const data = {
    channel: 'web',
    redirectUri: 'http://localhost:8080/callback/',
    domain: 'dev-sfcc.coppel.auth0app.com',
    clientId: 'Yb2iV4g0Yq8N4s5XPNdNP0EuHw8P7irx'
}

window.addEventListener("load", (event) => {
    window.guard_module.AuthService.initialize(data);
});

// Selecciona el botón por su ID
const btnIniciarSesion = document.getElementById('btnIniciarSesion');

// Agrega un event listener al botón
btnIniciarSesion.addEventListener('click', () => {
    // Llama a la función que deseas ejecutar al hacer clic
    iniciarSesion();
});

// Función de ejemplo para iniciar sesión
function iniciarSesion() {
    window.guard_module.AuthService.getInstance().login();
}