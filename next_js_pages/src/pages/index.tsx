import { AuthService } from 'guard-module';
import { useEffect, useState } from 'react';


export default function Home() {

  const [authService, setAuthService] = useState<AuthService>();

  function onClickLogin() {
    authService?.login('/');
  }

  useEffect(() => {
    setAuthService(AuthService.getInstance());
  }, [])


  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <button onClick={onClickLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          {authService?.isAuthenticated() ? 'LogOut' : 'Login'}
        </button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
