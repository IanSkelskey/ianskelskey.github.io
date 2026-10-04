import type { MouseEvent } from "react";
import type { PopupWindow } from "../types";

/** Reused across clicks, so a second "Download now" replaces the first window. */
const WINDOW_NAME = "hub-popup";

/**
 * Click handler for a link with a `popup`: opens it in a small window centered
 * over this one, instead of navigating.
 *
 * Progressive enhancement — the link's own `href` still works:
 * - modified or non-primary clicks (new tab, new window) are left alone;
 * - if the browser blocks the popup, the default navigation goes ahead.
 */
export const openPopup = (event: MouseEvent<HTMLAnchorElement>, popup: PopupWindow) => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  // Never taller than the screen; the page inside scrolls.
  const height = Math.min(popup.height, window.screen.availHeight - 80);
  const left = Math.round(window.screenX + (window.outerWidth - popup.width) / 2);
  const top = Math.round(window.screenY + (window.outerHeight - height) / 2);

  const opened = window.open(
    popup.href,
    WINDOW_NAME,
    `popup,width=${popup.width},height=${height},left=${left},top=${top}`,
  );
  if (!opened) return;

  // Cut the back-reference so the popup cannot navigate this page. Not
  // `noopener` in the features string: that makes window.open return null,
  // which would be indistinguishable from a blocked popup.
  opened.opener = null;
  opened.focus();
  event.preventDefault();
};
