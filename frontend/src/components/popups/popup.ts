import type { ComponentType } from 'react'

import { usePopupStore } from './popup.store'

import type { PopupOptions } from './popup.type'

export function openPopup(
  component: ComponentType<unknown>,
  props?: Record<string, unknown>,
  options?: PopupOptions,
) {
  return usePopupStore.getState().openPopup(component, props, options)
}

export function closePopup(id: string) {
  usePopupStore.getState().closePopup(id)
}

export function closeTopPopup() {
  usePopupStore.getState().closeTop()
}

export function closeAllPopups() {
  usePopupStore.getState().closeAll()
}
