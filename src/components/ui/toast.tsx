import { useEffect } from "react";
import "./toast.css";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, isVisible, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="toast"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="toast-message">{message}</span>
    </div>
  );
}
