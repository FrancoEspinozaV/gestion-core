import { useEffect } from "react";
import { createPortal } from "react-dom";

import { usePopupStore } from "./popup.store";
import {
  closePopup,
  closeTopPopup,
} from "./popup";

export function PopupHost () {
  const popups = usePopupStore(
    (state) => state.popups
  );

  /*
   * Cerrar el popup superior con ESC
   */
  useEffect(() => {
    if (popups.length === 0) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key !== "Escape") {
        return;
      }

      const topPopup =
        popups[popups.length - 1];

      if (
        topPopup.options.closeOnEscape
      ) {
        closeTopPopup();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [popups]);

  /*
   * Evitar problemas durante SSR.
   * En una aplicación Vite normal esto no debería
   * ser un problema, pero lo dejamos seguro.
   */
  if (typeof document === "undefined") {
    return null;
  }

  if (popups.length === 0) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 pointer-events-none">
      {popups.map((popup, index) => {
        const Component = popup.component;

        /*
         * Solamente el último popup es el que
         * debe responder al backdrop.
         */
        const isTop =
          index === popups.length - 1;

        return (
          <div
            key={popup.id}
            className="fixed inset-0 pointer-events-none"
            style={{
              zIndex:
                popup.options.zIndex + index,
            }}
          >
            {/* 
              BACKDROP
              
              Ocupa toda la pantalla.
              Solamente el popup superior puede
              cerrarse mediante este backdrop.
            */}
            <div
              className="
                absolute
                inset-0
                bg-black/50
                backdrop-blur-[2px]
                pointer-events-auto
              "
              onClick={() => {
                if (
                  isTop &&
                  popup.options.closeOnBackdrop
                ) {
                  closePopup(popup.id);
                }
              }}
            />

            {/*
              CONTENEDOR DEL MODAL

              pointer-events-none permite que el
              backdrop siga recibiendo clicks en
              las zonas exteriores.

              El componente real vuelve a activar
              pointer-events.
            */}
            <div
              className="
                relative
                z-10
                flex
                min-h-full
                items-center
                justify-center
                p-4
                pointer-events-none
              "
            >
              <div
                className="pointer-events-auto"
                onClick={(event) => {
                  /*
                   * Evitamos que cualquier click
                   * dentro del modal sea interpretado
                   * como un click exterior.
                   */
                  event.stopPropagation();
                }}
              >
                <Component
                  {...popup.props}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>,
    document.body
  );
}