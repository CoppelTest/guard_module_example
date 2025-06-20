import { AuthService } from "guard-module";
import { useEffect, useState } from "react";

export default function Home() {
  const [authService, setAuthService] = useState<AuthService>();
  const [userData, setUserData] = useState<any>();
  const [token, setToken] = useState<string | null>();
  const [data, setData] = useState(null);

  const fetchData = async (path: string) => {
    console.log(await authService?.getAccessToken());

    const url = process.env.NEXT_PUBLIC_APIGEE_URL + path + '/protected'
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + await authService?.getAccessToken()
      },
    });

    const result = await res.json();
    setData(result);
  };

  function getJwtPayload (token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    const authService = AuthService.getInstance();
    setAuthService(authService);
    
    (async () => {
      if (await authService.isAuthenticated()) {
        setUserData(await authService.getUserData());
      }

      setToken(await authService.getAccessToken());
    })();
  }, []);

  return (
    <div>
      {
        !userData &&
        <div>
          <button
            onClick={() => authService?.login("/")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Login
          </button>
          <button
            onClick={() => authService?.createAccount("/")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Create Account
          </button>
        </div>
      }
      {
        userData &&
        <div>
          <button
            onClick={() => authService?.logout("http://localhost:3000")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            LogOut
          </button>
          {/* <button
            // onClick={() => authService?.refreshAccessToken()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Refresh Token
          </button> */}
          <button
            onClick={() => authService?.loginDeleteAccount("/")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Delete Account
          </button>
        </div>
      }
      <div>
        <button
          onClick={() => fetchData('entraID')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          EntraID
        </button>
        <button
          onClick={() => fetchData('auth0')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Auth0
        </button>
        <button
          onClick={() => fetchData('auth0-entraID')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          EntraID & Auth0
        </button>
      </div>

      <br />
      <pre>{authService && token && JSON.stringify(getJwtPayload(token), undefined, 2)}</pre>
      <br />
      <pre>{userData && JSON.stringify(userData, undefined, 2)}</pre>
    </div>
  );
}
