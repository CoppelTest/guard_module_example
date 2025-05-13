(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["guard_module"] = factory();
	else
		root["guard_module"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_2__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_0__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.ApiService = void 0;
    class ApiService {
        constructor(baseUrl) {
            // Validar que la URL base use HTTPS
            if (!baseUrl.startsWith('https://')) {
                throw new Error('La URL base debe utilizar HTTPS.');
            }
            this.baseUrl = baseUrl;
        }
        // Realizar una solicitud GET
        get(endpoint, headers = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(`${this.baseUrl}${endpoint}`, {
                        method: 'GET',
                        headers: Object.assign({}, headers)
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = yield response.json();
                    return data;
                }
                catch (error) {
                    console.error('Error in GET request:', error);
                    throw error;
                }
            });
        }
        // Realizar una solicitud POST
        post(endpoint, data, headers = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(`${this.baseUrl}${endpoint}`, {
                        method: 'POST',
                        headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                        body: JSON.stringify(data)
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const responseData = yield response.json();
                    return responseData;
                }
                catch (error) {
                    console.error('Error in POST request:', error);
                    throw error;
                }
            });
        }
        // Realizar una solicitud PUT
        put(endpoint, data, headers = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(`${this.baseUrl}${endpoint}`, {
                        method: 'PUT',
                        headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                        body: JSON.stringify(data)
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const responseData = yield response.json();
                    return responseData;
                }
                catch (error) {
                    console.error('Error in PUT request:', error);
                    throw error;
                }
            });
        }
        // Realizar una solicitud DELETE
        delete(endpoint, headers = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(`${this.baseUrl}${endpoint}`, {
                        method: 'DELETE',
                        headers: Object.assign({}, headers)
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                }
                catch (error) {
                    console.error('Error in DELETE request:', error);
                    throw error;
                }
            });
        }
        postDataFormUrlEncoded(endpoint, data) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // Convierte el objeto `data` a un formato `application/x-www-form-urlencoded`
                    const formBody = Object.keys(data)
                        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                        .join('&');
                    const response = yield fetch(`${this.baseUrl}${endpoint}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded', // Indica que el cuerpo es x-www-form-urlencoded
                        },
                        body: formBody, // Usamos el formato adecuado para el cuerpo
                    });
                    // Verifica si la respuesta fue exitosa
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    // Convierte la respuesta a JSON
                    const responseData = yield response.json();
                    return responseData; // Retorna la respuesta procesada
                }
                catch (error) {
                    console.error('Error in POST request:', error);
                    throw error; // Propaga el error
                }
            });
        }
    }
    exports["default"] = ApiService;
    exports.ApiService = ApiService;
}).apply(__WEBPACK_LOCAL_MODULE_0__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__exports));
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_1__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.CustomError = void 0;
    class CustomError extends Error {
        constructor(code, message) {
            super(message);
            this.code = code;
            this.name = 'CustomError';
            // Captura la pila de errores si es posible
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, CustomError);
            }
            else {
                // Fallback para entornos que no soportan captureStackTrace
                this.stack = (new Error()).stack;
            }
        }
        toJSON() {
            return {
                code: this.code,
                message: this.message,
            };
        }
    }
    exports["default"] = CustomError;
    exports.CustomError = CustomError;
}).apply(__WEBPACK_LOCAL_MODULE_1__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__exports));
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_2__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.setupRequestInterceptor = void 0;
    const setupRequestInterceptor = () => {
        (function (open) {
            XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
                // Llamar al método original
                open.call(this, method, url, async, user, password);
                // Sobrescribir setRequestHeader para agregar el token de autorización
                const token = localStorage.getItem('access_token');
                if (token) {
                    this.setRequestHeader('Authorization', `Bearer ${token}`);
                }
            };
        })(XMLHttpRequest.prototype.open);
    };
    exports.setupRequestInterceptor = setupRequestInterceptor;
}).apply(__WEBPACK_LOCAL_MODULE_2__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_2__ === undefined && (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__exports));
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_1__], __WEBPACK_LOCAL_MODULE_3__ = (function (require, exports, ApiServices_1, CustomError_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.AuthService = void 0;
    class AuthService {
        constructor(config) {
            this.config = config;
        }
        static initialize(initialConfig) {
            if (!AuthService._instance) {
                const config = {
                    domain: initialConfig.domain,
                    clientId: initialConfig.clientId,
                    redirectUri: initialConfig.redirectUri
                };
                AuthService._instance = new AuthService(config);
                AuthService.getTokenAzureNoLoggued();
            }
        }
        static isTokenAzureExpired(token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                const now = Math.floor(Date.now() / 1000);
                return payload.exp < now;
            }
            catch (err) {
                console.error('Token inválido al verificar expiración:', err);
                return true;
            }
        }
        static getTokenAzureNoLoggued() {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                if ((_a = AuthService.getInstance()) === null || _a === void 0 ? void 0 : _a.isAuthenticated()) {
                    sessionStorage.removeItem('azt');
                    return;
                }
                if (typeof window !== 'undefined') {
                    const existingToken = sessionStorage.getItem('azt');
                    if (existingToken && !AuthService.isTokenAzureExpired(existingToken)) {
                        return;
                    }
                    try {
                        const response = yield fetch('http://localhost:4201/api/tokenAzure', {
                            method: 'POST'
                        });
                        if (!response.ok) {
                            console.error('Error al obtener el token desde backend');
                            return;
                        }
                        const data = yield response.json();
                        sessionStorage.setItem('azt', data.access_token);
                    }
                    catch (err) {
                        console.error('Error en fetch del token:', err);
                    }
                }
            });
        }
        static getInstance() {
            return AuthService._instance;
        }
        generateCodeVerifier() {
            const array = new Uint32Array(56 / 2);
            window.crypto.getRandomValues(array);
            return Array.from(array, dec => ("0" + dec.toString(16)).slice(-2)).join("");
        }
        generateState() {
            return Math.random().toString(36).substring(2);
        }
        ;
        generateCodeChallenge(codeVerifier) {
            return __awaiter(this, void 0, void 0, function* () {
                const encoder = new TextEncoder();
                const data = encoder.encode(codeVerifier);
                const digest = yield window.crypto.subtle.digest("SHA-256", data);
                return btoa(String.fromCharCode(...Array.from(new Uint8Array(digest))))
                    .replace(/\+/g, "-")
                    .replace(/\//g, "_")
                    .replace(/=+$/, "");
            });
        }
        login(redirectAfterLogin) {
            return __awaiter(this, void 0, void 0, function* () {
                const currentUrl = window.location.href;
                const orderId = currentUrl.includes('tienda')
                    ? this.getCookie('WC_CartOrderId_10152')
                    : this.getCookie('WC_CartOrderId_10151');
                const codeVerifier = this.generateCodeVerifier();
                sessionStorage.setItem('code_verifier', codeVerifier);
                const state = this.generateState();
                sessionStorage.setItem('oauth_state', state);
                sessionStorage.setItem('redirect_after_auth', redirectAfterLogin);
                const codeChallenge = yield this.generateCodeChallenge(codeVerifier);
                let authUrl = `https://${this.config.domain}/authorize` +
                    `?response_type=code` +
                    `&client_id=${this.config.clientId}` +
                    `&redirect_uri=${encodeURIComponent(this.config.redirectUri)}` +
                    `&code_challenge=${codeChallenge}` +
                    `&code_challenge_method=S256` +
                    `&scope=openid profile email` +
                    `&audience=https://www.coppel.com`;
                if (orderId) {
                    authUrl += `&orderId=${orderId}`;
                }
                window.location.href = authUrl;
            });
        }
        // Function to get a cookie by name
        getCookie(name) {
            var _a;
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2)
                return ((_a = parts.pop()) === null || _a === void 0 ? void 0 : _a.split(';').shift()) || null;
            return null;
        }
        handleRedirectCallback(callAfterGetTokens) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.isAuthenticated()) {
                    return;
                }
                const urlParams = new URLSearchParams(window.location.search);
                const codeVerifier = sessionStorage.getItem('code_verifier');
                const redictAfterAuth = sessionStorage.getItem('redirect_after_auth');
                const authorizationCode = urlParams.get('code');
                if (!authorizationCode || !codeVerifier) {
                    throw new CustomError_1.CustomError(500, 'Authorization code or code verifier not found');
                }
                const tokenUrl = `https://${this.config.domain}`;
                const data = {
                    grant_type: 'authorization_code',
                    client_id: this.config.clientId,
                    code: authorizationCode,
                    redirect_uri: this.config.redirectUri,
                    code_verifier: codeVerifier,
                };
                const apiService = new ApiServices_1.ApiService(tokenUrl);
                try {
                    const response = yield apiService.postDataFormUrlEncoded('/oauth/token', data);
                    const { access_token, id_token } = response;
                    sessionStorage.setItem('at', access_token);
                    sessionStorage.setItem('it', id_token);
                    if (callAfterGetTokens)
                        yield callAfterGetTokens();
                    window.history.replaceState({}, document.title, window.location.pathname);
                    sessionStorage.removeItem('redirect_after_auth');
                    window.location.href = redictAfterAuth;
                }
                catch (error) {
                    throw new CustomError_1.CustomError(501, 'Error in oauth/tokenLe');
                }
            });
        }
        handleRedirectCallbackHCL(callAfterGetTokens) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.isAuthenticated()) {
                    return;
                }
                const urlParams = new URLSearchParams(window.location.search);
                const codeVerifier = sessionStorage.getItem('code_verifier');
                const authorizationCode = urlParams.get('code');
                if (!authorizationCode || !codeVerifier) {
                    throw new CustomError_1.CustomError(500, 'Authorization code or code verifier not found');
                }
                const tokenUrl = `https://${this.config.domain}`;
                const data = {
                    grant_type: 'authorization_code',
                    client_id: this.config.clientId,
                    code: authorizationCode,
                    redirect_uri: this.config.redirectUri,
                    code_verifier: codeVerifier,
                };
                const apiService = new ApiServices_1.ApiService(tokenUrl);
                try {
                    const response = yield apiService.postDataFormUrlEncoded('/oauth/token', data);
                    const { access_token, id_token } = response;
                    sessionStorage.setItem('at', access_token);
                    sessionStorage.setItem('it', id_token);
                    if (callAfterGetTokens)
                        yield callAfterGetTokens();
                    window.history.replaceState({}, document.title, window.location.pathname);
                    window.location.href = this.config.redirectUri;
                }
                catch (error) {
                    throw new CustomError_1.CustomError(501, 'Error in oauth/tokenLe');
                }
            });
        }
        getRedirectAfterAuth() {
            return sessionStorage.getItem('redirect_after_auth');
        }
        validateToken(jwt) {
            const decodedToken = this.getJwtPayload(jwt);
            const currentTime = Math.floor(Date.now() / 1000);
            if (decodedToken.exp < currentTime) {
                console.error('Token has expired');
                return false;
            }
            return true;
        }
        getJwtPayload(jwt) {
            const base64Url = jwt.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload);
        }
        isAuthenticated() {
            const idToken = sessionStorage.getItem('it');
            const accessToken = sessionStorage.getItem('at');
            if (!idToken || !accessToken)
                return false;
            const validateToken = this.validateToken(idToken);
            console.log("validateToken: " + validateToken);
            return validateToken;
        }
        getIdToken() {
            return sessionStorage.getItem('it');
        }
        getAccessToken() {
            if (this.isAuthenticated()) {
                return sessionStorage.getItem('at');
            }
            else {
                return sessionStorage.getItem('azt');
            }
        }
        getUserData() {
            const idToken = sessionStorage.getItem('it');
            if (idToken)
                return this.getJwtPayload(idToken);
            else
                return null;
        }
        logout(redirectAfterLogOut) {
            sessionStorage.removeItem('at');
            sessionStorage.removeItem('it');
            window.location.href = `https://${this.config.domain}/v2/logout?` +
                `client_id=${this.config.clientId}` +
                `&returnTo=${encodeURIComponent(redirectAfterLogOut)}`;
        }
        createAccount(redirectAfterCreateAccount) {
            return __awaiter(this, void 0, void 0, function* () {
                const currentUrl = window.location.href;
                const orderId = currentUrl.includes('tienda')
                    ? this.getCookie('WC_CartOrderId_10152')
                    : this.getCookie('WC_CartOrderId_10151');
                const codeVerifier = this.generateCodeVerifier();
                sessionStorage.setItem('code_verifier', codeVerifier);
                const state = this.generateState();
                sessionStorage.setItem('oauth_state', state);
                sessionStorage.setItem('redirect_after_auth', redirectAfterCreateAccount);
                const codeChallenge = yield this.generateCodeChallenge(codeVerifier);
                let authUrl = `https://${this.config.domain}/authorize` +
                    `?response_type=code` +
                    `&client_id=${this.config.clientId}` +
                    `&redirect_uri=${encodeURIComponent(this.config.redirectUri)}` +
                    `&code_challenge=${codeChallenge}` +
                    `&code_challenge_method=S256` +
                    `&scope=openid profile email` +
                    `&audience=https://www.coppel.com` +
                    `&screen_hint=signup`;
                if (orderId) {
                    authUrl += `&orderId=${orderId}`;
                }
                window.location.href = authUrl;
            });
        }
        resetPasswordAccount() {
            const passwordResetUrl = `https://${this.config.domain}/lo/reset` +
                `?client_id=${this.config.clientId}` +
                `&connection=Username-Password-Authentication`;
            window.location.href = passwordResetUrl;
        }
    }
    exports.AuthService = AuthService;
}).apply(__WEBPACK_LOCAL_MODULE_3__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__exports));
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ModulGuard_1, InterceptorModul_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    __exportStar(ModulGuard_1, exports);
    __exportStar(InterceptorModul_1, exports);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(440);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});