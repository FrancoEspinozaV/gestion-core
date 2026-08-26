import type { ComponentType } from 'react'

export type PopupStrategy = 'stack' | 'queue' | 'position'

export interface PopupOptions {
  strategy?: PopupStrategy

  position?: number

  closeOnBackdrop?: boolean

  closeOnEscape?: boolean

  zIndex?: number
}

export interface PopupEntry {
  id: string

  component: ComponentType<unknown>

  props?: Record<string, unknown>

  strategy: PopupStrategy

  options: {
    closeOnBackdrop: boolean
    closeOnEscape: boolean
    zIndex: number
  }
}
