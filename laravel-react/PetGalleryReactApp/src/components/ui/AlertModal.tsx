import React from "react";
import SuccessSvg from "../../assets/svg/success.svg";
import SendSvg from "../../assets/svg/send.svg";
import WarningSvg from "../../assets/svg/warning.svg";
import FailedSvg from "../../assets/svg/failed.svg";
import ProcessingSvg from "../../assets/svg/processing.svg";

interface AlertModalProps {
  isOpen: boolean;
  type: "success" | "error" | "sent" | "warning" | "processing";
  title?: string;
  message: string;
  buttonText?: string;
  onConfirm: () => void;
}

const typeConfig = {
  success: {
    titleText: "text-[#00bf15]",
    defaultTitle: "SUCCESS",
    svgAsset: SuccessSvg,
    btnBorder: "border-[#00bf15]",
    btnTxtColor: "text-[#00bf15]",
    defaultBtnText: "Continue",
  },
  error: {
    titleText: "text-[#ef2525]",
    defaultTitle: "OOPS !",
    svgAsset: FailedSvg,
    btnBorder: "border-[#ef2525]",
    btnTxtColor: "text-[#ef2525]",
    defaultBtnText: "Try Again",
  },
  warning: {
    titleText: "text-[#ff862f]",
    defaultTitle: "WARNING",
    svgAsset: WarningSvg,
    btnBorder: "border-[#ff862f]",
    btnTxtColor: "text-[#ff862f]",
    defaultBtnText: "Go Back",
  },
  sent: {
    titleText: "text-[#4286df]",
    defaultTitle: "SENT",
    svgAsset: SendSvg,
    btnBorder: "border-[#4286df]",
    btnTxtColor: "text-[#4286df]",
    defaultBtnText: "OK",
  },
  processing: {
    titleText: "text-[#f1ca24]",
    defaultTitle: "PROCESSING",
    svgAsset: ProcessingSvg,
    btnBorder: "border-[#f1ca24]",
    btnTxtColor: "text-[#f1ca24]",
    defaultBtnText: "Go Back",
  },
};

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  type,
  title,
  message,
  buttonText,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const currentTheme = typeConfig[type] || typeConfig.success;
  const {
    titleText,
    defaultTitle,
    svgAsset,
    btnBorder,
    btnTxtColor,
    defaultBtnText,
  } = currentTheme;

  //const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-[340px] bg-white rounded-[32px] shadow-2xl overflow-hidden text-center flex flex-col items-center pb-6 animate-in fade-in zoom-in duration-200">
        {/* FIXED: Removed fixed height wrapper completely. Let the SVG scale down naturally */}
        <div className="w-full relative select-none">
          <img
            src={svgAsset}
            alt={`${type} header`}
            className="w-full h-auto block"
          />
        </div>

        {/* Content Section with Tight Padding */}
        <div className="w-full px-6 flex flex-col items-center mt-3">
          {/* Main Title Heading - Matches your font style precisely */}
          <h3
            className={`text-4xl font-extrabold font-cooper-black tracking-wide uppercase mb-6 ${titleText}`}
          >
            {title || defaultTitle}
          </h3>

          {/* User Message Text */}
          <p className="text-black font-normal font-poppins-reg text-sm mb-6 max-w-[240px] leading-relaxed">
            {message}
          </p>

          {/* Action Confirmation Button */}
          <button
            onClick={onConfirm}
            className={`w-auto min-w-[110px] py-1.5 px-5 rounded-full border-2 
            text-sm font-poppins-reg font-bold tracking-wide whitespace-nowrap
            transition duration-150 active:scale-95 bg-white 
            hover:bg-stone-50 active:bg-stone-100 cursor-pointer
            ${btnBorder} ${btnTxtColor}`}
          >
            {buttonText || defaultBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};
