import type {
  ReactNode,
} from "react";

import {
  closeTopPopup,
} from "./popup";

interface PopupModalProps {
  children: ReactNode;

  title?: string;

  width?: string;

  showCloseButton?: boolean;
}

export function PopupModal ({
  children,

  title,

  width = "max-w-lg",

  showCloseButton = true,
}: PopupModalProps) {
  return (
    <div
      className={`
        w-full
        ${width}
        rounded-xl
        bg-white
        shadow-2xl
        dark:bg-zinc-900
      `}
    >
      {/* HEADER */}

      {(title ||
        showCloseButton) && (
          <div
            className="
            flex
            items-center
            justify-between
            border-b
            border-zinc-200
            px-6
            py-4
            dark:border-zinc-700
          "
          >
            {title && (
              <h2
                className="
                text-lg
                font-semibold
                text-zinc-900
                dark:text-white
              "
              >
                {title}
              </h2>
            )}

            {showCloseButton && (
              <button
                type="button"
                onClick={() =>
                  closeTopPopup()
                }
                className="
                rounded-md
                p-2
                text-zinc-500
                hover:bg-zinc-100
                hover:text-zinc-900
                dark:hover:bg-zinc-800
              "
              >
                ✕
              </button>
            )}
          </div>
        )}

      {/* CONTENT */}

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}