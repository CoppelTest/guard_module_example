

window.addEventListener("load", (event) => {
  window.guard_module.AuthService.initialize({
      channel: 'web',
      redirectUri: 'http://localhost:4201/auth/callback',
      domain: 'dev.coppel-dev.auth0app.com',
      clientId: '06zyOAzsdFY3pS49cfe3cyaafPmws3e2'
    })
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