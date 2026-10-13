import React from "react";
import { userLoginForm } from "../hooks/userLoginForm";
import { InputField } from "./ui/InputFields";
import { AlertModal } from "./ui/AlertModal";

interface LoginProps {
  onSwitchToSignup: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToSignup }) => {
  const {
    formData,
    loading,
    modalState,
    handleChange,
    handleSubmit,
    closeModal,
  } = userLoginForm();

  return (
    <div className="min-h-screen bg-[#EADCC9] flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* Main container with split layout or side-by-side design */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 p-4">
        {/* Left Side: Branding / Tagline */}
        <div className="flex flex-col justify-center space-y-4 text-left px-2 md:px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#7C3F1E] tracking-tight font-serif italic leading-tight">
            Life's better with fur..
          </h1>
          <p className="text-lg text-[#5A3E2B] font-serif italic">
            capture wagging tails and memories that lasts a lifetime.
          </p>
        </div>

        {/* Right Side: Sign In Card */}
        <div className="w-full bg-[#FCF8F3] rounded-[2rem] shadow-xl border border-[#E4D5C3] p-8 sm:p-10 relative">
          {/* Logo / Header Branding */}
          <div className="flex flex-col items-center mb-6">
            <span className="text-xs font-bold tracking-widest text-[#7C3F1E] uppercase">
              CUDDLY
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#7C3F1E] uppercase flex items-center gap-1">
              G<span className="text-xs">🐾</span>LLERY
            </span>
            <h2 className="text-2xl font-black text-[#4A3324] tracking-wider mt-4">
              SIGN IN
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label=""
              placeholder="Username"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              // If your InputField component supports left icons/custom classes:
              // icon={<img src="/path-to-collar-icon.png" className="w-5 h-5" />}
            />

            <InputField
              label=""
              placeholder="Paws-word"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {/* Added third field matching your image: "Paws-code" */}
            <InputField
              label=""
              placeholder="Paws-code"
              name="pawsCode"
              value={(formData as any).pawsCode || ""}
              onChange={handleChange}
            />

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-[#C8A88B] hover:bg-[#B59578] text-[#4A3324] font-bold rounded-lg text-base shadow-sm transition duration-150 disabled:opacity-50 tracking-wide"
              >
                {loading ? "Authenticating..." : "Sign In"}
              </button>
            </div>
          </form>

          <div className="mt-4 text-right">
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="text-xs text-[#5A3E2B] hover:underline font-medium"
            >
              Paws here to register
            </button>
          </div>

          {/* Quote Footer */}
          <div className="mt-8 pt-6 border-t border-[#EEDFCF] text-center">
            <p className="text-xs italic text-[#7C5A42] font-serif">
              “Pets are not our whole life, but they make our lives whole.”
            </p>
            <p className="text-[10px] text-[#8C6A52] mt-1 tracking-widest uppercase">
              — Roger Caras —
            </p>
          </div>

          <AlertModal
            isOpen={modalState.isOpen}
            type={modalState.type}
            message={modalState.message}
            onConfirm={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
