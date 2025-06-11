import { AuthService } from "guard-module";
import { useEffect, useState } from "react";

export default function Home() {
  const [authService, setAuthService] = useState<AuthService>();
  const [userData, setUserData] = useState<Map<String, String>>();
  const [token, setToken] = useState<string>();
  const [data, setData] = useState(null);

  function handleClick() {
    if (authService?.isAuthenticated()) {
      authService.logout("http://localhost:3000");
    } else {
      authService?.login("/");
    }
  }

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

  useEffect(() => {
    setAuthService(AuthService.getInstance());
    setUserData(AuthService.getInstance()?.getUserData());
    AuthService.getInstance().getAccessToken().then(
      (token) => setToken(token)
    );
  }, []);

  return (
    <div>
      <div>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          {authService?.isAuthenticated() ? "LogOut" : "Login"}
        </button>
        {authService?.isAuthenticated() && <button
          onClick={() => authService?.refreshAccessToken()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Refresh Token
        </button>}
        {authService?.isAuthenticated() && <button
          onClick={() => authService?.loginDeleteAccount("/")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Delete Account
        </button>}
      </div>
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
      {/* <div>{userData && JSON.stringify(userData)}</div> */}
      <pre>{authService && token && JSON.stringify(authService.getJwtPayload(token), undefined, 2)}</pre>
    </div>
  );
}
