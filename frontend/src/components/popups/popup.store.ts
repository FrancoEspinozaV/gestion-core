import { create } from 'zustand'

import type { PopupEntry, PopupOptions } from './popup.type'

interface PopupStore {
  popups: PopupEntry[]

  openPopup: (
    component: PopupEntry['component'],
    props?: Record<string, unknown>,
    options?: PopupOptions,
  ) => string

  closePopup: (id: string) => void

  closeTop: () => void

  closeAll: () => void
}

export const usePopupStore = create<PopupStore>((set) => ({
  popups: [],

  openPopup: (component, props, options = {}) => {
    const id = crypto.randomUUID()

    const popup: PopupEntry = {
      id,

      component,

      props,

      strategy: options.strategy ?? 'stack',

      options: {
        closeOnBackdrop: options.closeOnBackdrop ?? true,

        closeOnEscape: options.closeOnEscape ?? true,

        zIndex: options.zIndex ?? 1000,
      },
    }

    set((state) => {
      const strategy = options.strategy ?? 'stack'

      // STACK
      // Último en entrar -> primero en salir
      if (strategy === 'stack') {
        return {
          popups: [...state.popups, popup],
        }
      }

      // QUEUE
      // Primero en entrar -> primero en salir
      if (strategy === 'queue') {
        return {
          popups: [...state.popups, popup],
        }
      }

      // POSITION
      if (strategy === 'position') {
        const position = Math.max(
          0,
          Math.min(
            options.position ?? state.popups.length,
            state.popups.length,
          ),
        )

        const popups = [...state.popups]

        popups.splice(position, 0, popup)

        return {
          popups,
        }
      }

      return state
    })

    return id
  },

  closePopup: (id) => {
    set((state) => ({
      popups: state.popups.filter((popup) => popup.id !== id),
    }))
  },

  closeTop: () => {
    set((state) => ({
      popups: state.popups.length === 0 ? [] : state.popups.slice(0, -1),
    }))
  },

  closeAll: () => {
    set({
      popups: [],
    })
  },
}))
