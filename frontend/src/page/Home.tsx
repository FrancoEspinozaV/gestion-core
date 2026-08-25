import { format } from "@formkit/tempo";
import { useTitle } from "../components/hooks/useTitle";
import { Calendar } from "../components/icons/Calendar";
import { NavBar } from "../components/NavBar";
import { RaidComposition } from "../components/RaidComposition";
import { mockRaids } from "../mocks/raid.mock";
import { User } from "../components/icons/User";
import { Clock } from "../components/icons/Clock";
import { Shield } from "../components/icons/Shield";
import { Swords } from "../components/icons/Swords";
import { X } from "../components/icons/X";
import { Wand } from "../components/icons/Wand";

export function Home () {
  useTitle('Home');
  const raid = mockRaids[0];
  const date = format(new Date(raid.date), "medium")
  return (
    <div className="min-h-screen bg-bg text-white grid lg:grid-cols-[300px_minmax(0,1fr)_350px] gap-4">
      <NavBar />
      <main className="rounded-xl p-4 gap-10 flex flex-col">
        <div className="flex justify-between font-display">
          <h1 className="text-2xl font-bold mb-4">CIUDADELA DE CORONA DE HIELO - LICH KING (25 H) - CORE #1</h1>
          <div className="flex justify-center items-center gap-2">
            <Calendar />
            <div className="flex flex-col items-center text-sm font-sans">
              <span className="font-light">25/06/2023</span>
              <span className="text-slate-400">ultima raid</span>
            </div>
          </div>
        </div>
        <RaidComposition raidData={raid} />


        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 w-full min-w-0">
          <div className="bg-surface/20 border border-slate-800 rounded-lg p-4 sm:w-auto min-w-65 ">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
                Información de raid
              </h2>
              <Wand className="w-4 h-4 text-slate-400 stroke-2 shrink-0" />
            </div>

            <ul className="text-slate-400 text-xs tracking-wide space-y-1.5">
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 stroke-1 text-slate-500 shrink-0" />
                <span>Fecha: <strong className="text-slate-300 font-normal">{date}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <User className="w-4 h-4 stroke-1 text-slate-500 shrink-0" />
                <span>Líder: <strong className="text-slate-300 font-normal">{raid.leader}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <User className="w-4 h-4 stroke-1 text-slate-500 shrink-0" />
                <span>Uploader: <strong className="text-slate-300 font-normal">{raid.uploader}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 stroke-1 text-slate-500 shrink-0" />
                <span>Boss: <strong className="text-slate-300 font-normal">{raid.boss}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Swords className="w-4 h-4 stroke-1 text-slate-500 shrink-0" />
                <span>Core: <strong className="text-slate-300 font-normal">{raid.coreName}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 stroke-1 text-slate-500 shrink-0" />
                <span>Duración: <strong className="text-slate-300 font-normal">{raid.timeTotalcombat}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 stroke-1 text-slate-500 shrink-0" />
                <span>Wipes totales: <strong className="text-slate-300 font-normal">{raid.Totalwipes}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 stroke-1 text-slate-500 shrink-0" />
                <span>Wipes en boss: <strong className="text-slate-300 font-normal">{raid.wipesInFinalBoss}</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-surface/20 border border-slate-800 rounded-lg p-4 flex-1 min-w-70 col-span-2">
            <h2 className="text-sm font-semibold tracking-wider text-slate-200 uppercase mb-2">
              Notas
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolores.
            </p>
          </div>

          <div className="flex-1 min-w-70 flex flex-col col-span-2">
            <textarea
              placeholder="Ej: WCR-ICC25H-8F3K9-X2M7Q-L9P4A-6D2RK-7N8XP-Q4M2L-H7K9D-P3X8A-R6W2N-V9F4K-C8L3Q-M7P2X-D5R8N-K4A9W-X6Q3L-B8M7P-J2K5R-H9D4X-N7C2A-L5F8Q-M3V6K-Z9..."
              className="bg-surface/20 border border-slate-800 rounded-lg p-4 w-full h-full min-h-30 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-slate-700 resize-none"
            />
            <button className="bg-surface rounded-lg p-2 mt-2 hover:bg-surface/80 cursor-pointer">subir</button>
          </div>
        </div>
      </main>
      <aside className="rounded-xl bg-slate-800 p-4">
        Información
      </aside>
    </div>
  )
}