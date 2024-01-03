import { toast, ToastOptions } from "react-hot-toast";

export class PakamToasts {
  static success(message: string, options?: ToastOptions) {
    return toast.success(message, {
      ...options,
      style: {
        background: "green",
        color: "white",
      },
      className: "pakam-toast",
    });
  }

  static error(message: string, options?: ToastOptions, isSupport?: boolean) {
    return toast.error(message, {
      ...options,
      style: {
        background: "red",
        color: "white",
      },
      className: "pakam-toast",
    });
  }
}