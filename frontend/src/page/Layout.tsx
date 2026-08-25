import { RegisterModal } from "../components/RegisterModal";
import { LoginModal } from "../components/LoginModal";
import { useState } from 'react';
import { UserPlus } from "../components/icons/UserPlus";
import { Login } from "../components/icons/Login";

export function Layout () {
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const handleOpenRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };
  const handleCloseRegister = () => setIsRegisterOpen(false);

  const handleOpenLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };
  const handleCloseLogin = () => setIsLoginOpen(false);

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-bg text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-lg space-y-4">
        <h1 className="text-3xl font-extrabold uppercase tracking-widest text-info">
          Frostmourne Raid Manager
        </h1>
        <p className="text-sm text-gray-400">
          Gestiona las asistencias, composiciones de raid y loot de tu gremio en un solo lugar.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={handleOpenRegister}
            className="flex items-center gap-2 rounded-md bg-info px-4 py-2 text-sm font-bold text-slate-950 transition-all hover:bg-info hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <UserPlus className="h-5 w-5" />
            Registrarse
          </button>

          <button
            onClick={handleOpenLogin}
            className="flex items-center gap-2 rounded-md border border-info/50 bg-transparent px-4 py-2 text-sm font-bold text-info transition-all hover:bg-cyan-950/40 hover:border-info"
          >
            <Login className="h-5 w-5" />
            Iniciar Sesión
          </button>
        </div>
      </div>

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        onSwitchToLogin={handleSwitchToLogin}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
        onSwitchToRegister={handleSwitchToRegister}
      />
    </div>
  );
}