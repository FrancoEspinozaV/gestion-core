import { NavLink } from "react-router-dom"
import { route } from "../routes/path"
import { Swords } from "./icons/Swords"
import InstanceSelector from "./InstanceSelector"

const NavMenu = [
  {
    name: 'Resumen',
    icon: <Swords />,
    path: route.home
  },
  {
    name: 'Raid',
    icon: <Swords />,
    path: route.game
  },
  {
    name: 'Items council',
    icon: <Swords />,
    path: route.root
  },
  {
    name: 'Loot',
    icon: <Swords />,
    path: route.root
  },
  {
    name: 'Notas',
    icon: <Swords />,
    path: route.root
  },
  {
    name: 'Configuraciones',
    icon: <Swords />,
    path: route.root
  },
]

export function NavBar () {
  return (
    <aside
      className="rounded-xl lg:row-auto font-display"
    >
      <button className="lg:hidden">
        ☰
      </button>

      <nav className="hidden lg:block">
        <NavLink to={route.home}>
          <img src="logo.jfif" className="w-full h-30 object-cover" />
        </NavLink>
        <InstanceSelector />
        <div className="mt-4 px-3">
          <ul className="flex flex-col gap-3">
            {
              NavMenu.map((item, index) => (
                <li key={index} className="cursor-pointer flex w-full hover:bg-primary/35 rounded-lg">
                  <NavLink className={({ isActive }) => !isActive ? "cursor-pointer p-4 rounded-lg w-full flex gap-3" : "w-full flex gap-3 bg-primary/40 rounded-lg p-4"} to={item.path}> {item.icon} <span>{item.name}</span>
                  </NavLink>
                </li>
              ))
            }

          </ul>
        </div>
      </nav>
    </aside>

  )
}