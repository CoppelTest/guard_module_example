
window.addEventListener("load", (event) => {
    window.guard_module.AuthService.initialize({
        channel: 'web',
        redirectUri: 'http://localhost:8080/callback/',
        domain: 'dev-sfcc.coppel.auth0app.com',
        clientId: 'Yb2iV4g0Yq8N4s5XPNdNP0EuHw8P7irx'
    })


      window.guard_module.AuthService.getInstance().handleRedirectCallback();
  });