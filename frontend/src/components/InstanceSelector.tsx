import React, { useState, useEffect, useRef } from 'react';
import { X } from './icons/X';
import { ChevronDown } from './icons/ChevronDown';
import { Plus } from './icons/Plus';

interface Instance {
  id: string;
  name: string;
  difficulty: string;
  cores: string[];
  iconPath: string;
}

export default function InstanceSelector () {
  const [isOpen, setIsOpen] = useState(false);
  const [instances, setInstances] = useState<Instance[]>([
    { id: '1', name: 'ICC 25', difficulty: 'H', cores: ['Core #1', 'Core #2'], iconPath: 'logoIcon.jfif' },
    { id: '2', name: 'SR 25', difficulty: 'H', cores: ['Core #1'], iconPath: 'logohalion.jfif' },
  ]);
  const [selected, setSelected] = useState({ instance: 'ICC 25H', core: 'Core #1' });

  const [pathURL, setPathURL] = useState('');

  const getPathIcon = (name: string) => {
    if (name === instances[0].name) {
      setPathURL(instances[0].iconPath);
      return
    };
    if (name === instances[1].name) {
      setPathURL(instances[1].iconPath);
      return
    };

    setPathURL(instances[0].iconPath);
    return;
  }

  // Modals state
  const [showInstanceModal, setShowInstanceModal] = useState(false);
  const [showCoreModal, setShowCoreModal] = useState(false);
  const [activeInstanceId, setActiveInstanceId] = useState<string | null>(null);

  const [newInstanceName, setNewInstanceName] = useState('');
  const [newCoreName, setNewCoreName] = useState('');

  // Refs para cierre al hacer clic afuera
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceModalRef = useRef<HTMLDivElement>(null);
  const coreModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Cierra el menú desplegable si se hace clic fuera del contenedor
      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false);
      }

      // Cierra el modal de instancia si se hace clic fuera de la tarjeta interna
      if (showInstanceModal && instanceModalRef.current && !instanceModalRef.current.contains(target)) {
        setShowInstanceModal(false);
      }

      // Cierra el modal de core si se hace clic fuera de la tarjeta interna
      if (showCoreModal && coreModalRef.current && !coreModalRef.current.contains(target)) {
        setShowCoreModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showInstanceModal, showCoreModal]);

  // Handlers
  const handleAddInstance = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newInstanceName.trim() || instances.length >= 3) return;

    const newInst = {
      id: Date.now().toString(),
      name: newInstanceName.trim(),
      cores: ['Core #1'],
      difficulty: 'H',
      iconPath: 'logoIcon.jfif'
    };
    setInstances([...instances, newInst]);
    setNewInstanceName('');
    setShowInstanceModal(false);
  };

  const handleAddCore = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newCoreName.trim() || !activeInstanceId) return;

    setInstances(instances.map(inst => {
      if (inst.id === activeInstanceId) {
        return { ...inst, cores: [...inst.cores, newCoreName.trim()] };
      }
      return inst;
    }));
    setNewCoreName('');
    setShowCoreModal(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left w-full mt-2 select-none font-display">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#080d19] border border-surface hover:border-[#3b82f6] text-white p-2.5 rounded-md shadow-lg transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden relative">
            <img
              src={pathURL ? pathURL : instances[0].iconPath}
              alt="Icon Wolk"
              className="w-full h-full object-cover scale-150 mix-blend-screen"
            />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-gray-100">{selected.instance}</div>
            <div className="text-xs text-gray-400">{selected.core}</div>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-bg border border-surface rounded-md shadow-2xl z-40 overflow-hidden text-sm">
          <div className="max-h-80 overflow-y-auto p-2 space-y-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#080d19] [&::-webkit-scrollbar-thumb]:bg-surface [&::-webkit-scrollbar-thumb]:rounded hover:[&::-webkit-scrollbar-thumb]:bg-blue-600">
            {instances.map((inst) => (
              <div key={inst.id} className="border-b border-surface/60 pb-2 last:border-0 last:pb-0">
                <div className="font-bold text-blue-400 px-2 py-1 text-xs uppercase tracking-wider">
                  {inst.name}
                </div>
                <div className="space-y-0.5 mt-1">
                  {inst.cores.map((core, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelected({ instance: inst.name, core });
                        setIsOpen(false);
                        getPathIcon(inst.name);
                      }}
                      className="w-full text-left px-4 py-1.5 text-gray-300 hover:bg-surface hover:text-white rounded transition-colors"
                    >
                      • {core}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setActiveInstanceId(inst.id);
                      setShowCoreModal(true);
                    }}
                    className="w-full flex items-center gap-1 px-4 py-1.5 text-xs text-blue-400 hover:text-blue-300 hover:bg-surface/50 rounded transition-colors"
                  >
                    <Plus className="w-3 h-3" /> Agregar core
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 bg-[#080d19] border-t border-surface">
            <button
              disabled={instances.length >= 3}
              onClick={() => setShowInstanceModal(true)}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-xs font-semibold rounded border border-blue-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Plus className="w-4 h-4" />
              {instances.length >= 3 ? 'Límite alcanzado (3/3)' : 'Agregar instancia'}
            </button>
          </div>
        </div>
      )}

      {showInstanceModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div ref={instanceModalRef} className="bg-[#0b1329] border border-surface rounded-lg w-full max-w-sm p-5 relative shadow-2xl">
            <button onClick={() => setShowInstanceModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-base font-bold text-white mb-4">Nueva Instancia</h3>
            <form onSubmit={handleAddInstance} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Nombre de la instancia</label>
                <input
                  type="text"
                  placeholder="Ej: TOC 25H"
                  value={newInstanceName}
                  onChange={(e) => setNewInstanceName(e.target.value)}
                  className="w-full bg-[#080d19] border border-surface rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                  autoFocus
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowInstanceModal(false)}
                  className="px-3 py-1.5 text-xs text-gray-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs bg-blue-600 hover:bg-blue-500 text-white font-medium rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showCoreModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div ref={coreModalRef} className="bg-[#0b1329] border border-surface rounded-lg w-full max-w-sm p-5 relative shadow-2xl">
            <button onClick={() => setShowCoreModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-base font-bold text-white mb-4">Nuevo Core</h3>
            <form onSubmit={handleAddCore} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Nombre del core</label>
                <input
                  type="text"
                  placeholder="Ej: Core #3"
                  value={newCoreName}
                  onChange={(e) => setNewCoreName(e.target.value)}
                  className="w-full bg-[#080d19] border border-surface rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                  autoFocus
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCoreModal(false)}
                  className="px-3 py-1.5 text-xs text-gray-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs bg-blue-600 hover:bg-blue-500 text-white font-medium rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}