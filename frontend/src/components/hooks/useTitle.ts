import { useEffect } from 'react'

export function useTitle(title: string) {
  useEffect(() => {
    // Cambia el título de la pestaña
    document.title = `${title} | Frostmourne Raid Manager`

    // (Opcional) Restaurar un título por defecto al desmontar el componente
    return () => {
      document.title = 'Frostmourne Raid Manager'
    }
  }, [title])
}
