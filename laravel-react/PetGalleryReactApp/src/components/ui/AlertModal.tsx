import React from "react";

interface AlertModalProps {
  isOpen: boolean;
  type: "success" | "error";
  title?: string;
  message: string;
  buttonText?: string;
  onConfirm: () => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  type,
  title,
  message,
  buttonText,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 text-center flex flex-col items-center animate-in fade-in zoom-in duration-200">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
            isSuccess
              ? "bg-blue-50 text-blue-500 border-2 border-blue-500"
              : "bg-red-50 text-red-500 border-2 border-red-500"
          }`}
        >
          {isSuccess ? (
            <svg
              className="w-8 h-8 stroke-current fill-none stroke-[2.5]"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 stroke-current fill-none stroke-[2.5]"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        {/* Title */}
        <h3
          className={`text-2xl font-bold mb-2 ${isSuccess ? "text-blue-600" : "text-red-600"}`}
        >
          {title || (isSuccess ? "Success!" : "Oooops!")}
        </h3>

        {/* Message */}
        <p className="text-slate-500 text-sm mb-6 max-w-[240px] leading-relaxed">
          {message}
        </p>

        {/* Action Button */}
        <button
          onClick={onConfirm}
          className={`w-full py-2.5 px-4 rounded-lg text-white font-semibold shadow-md transition duration-150 active:scale-95 ${
            isSuccess
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {buttonText || (isSuccess ? "Continue" : "Try Again")}
        </button>
      </div>
    </div>
  );
};
