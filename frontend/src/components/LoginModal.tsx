import React, { useState } from 'react';
import { X } from './icons/X';
import { User } from './icons/User';
import { Lock } from './icons/Lock';
import { Login } from './icons/Login';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
  closeOnOutsideClick?: boolean;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToRegister,
  closeOnOutsideClick = true,
}) => {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
    rememberMe: false,
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos de inicio de sesión:', formData);
  };

  const handleBackdropClick = () => {
    if (closeOnOutsideClick) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-xl border border-cyan-400/40 bg-bg/95 p-6 shadow-[0_0_35px_rgba(56,189,248,0.2)] text-gray-200"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-cyan-400 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6 mt-2">
          <h2 className="text-lg font-bold tracking-wider text-white uppercase">
            Iniciar Sesión en
          </h2>
          <span className="text-sm font-semibold tracking-widest text-cyan-400 uppercase block">
            Frostmourne Raid Manager
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block mb-1 font-medium text-gray-300">
              Usuario o Correo Electrónico
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3 h-4 w-4 text-cyan-400/80" />
              <input
                type="text"
                name="emailOrUsername"
                value={formData.emailOrUsername}
                onChange={handleChange}
                placeholder="Ej. Tirion123 o tirion@gremio.com"
                required
                className="w-full rounded-md border border-cyan-900/60 bg-bg-primary py-2 pl-9 pr-3 text-gray-100 placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">
              Contraseña
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 h-4 w-4 text-cyan-400/80" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full rounded-md border border-cyan-900/60 bg-bg-primary py-2 pl-9 pr-3 text-gray-100 placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-3.5 w-3.5 rounded border-gray-700 bg-bg-primary text-cyan-500 focus:ring-cyan-400 focus:ring-offset-0"
              />
              <span>Recordarme</span>
            </label>

            <a
              href="#forgot-password"
              className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 rounded-md bg-cyan-400 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] active:scale-[0.98]"
          >
            <Login className="h-4 w-4" />
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-5 text-center text-xs text-gray-400">
          ¿Aún no tienes una cuenta?{' '}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-cyan-400 underline hover:text-cyan-300 font-medium"
          >
            Regístrate
          </button>
        </div>
      </div>
    </div>
  );
};