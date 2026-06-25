"use client";

import { useEffect } from "react";

const resizeObserverMessages = [
  "ResizeObserver loop completed with undelivered notifications.",
  "ResizeObserver loop limit exceeded",
];

function isResizeObserverLoopError(message: unknown) {
  return (
    typeof message === "string" &&
    resizeObserverMessages.some((known) => message.includes(known))
  );
}

export default function ResizeObserverErrorGuard() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    function handleError(event: ErrorEvent) {
      if (!isResizeObserverLoopError(event.message)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    }

    function handleUnhandledRejection(event: PromiseRejectionEvent) {
      const reason = event.reason as { message?: unknown } | string | undefined;
      const message = typeof reason === "string" ? reason : reason?.message;
      if (!isResizeObserverLoopError(message)) return;
      event.preventDefault();
    }

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  return null;
}
