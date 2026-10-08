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
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-1">
          User Login
        </h2>
        <p className="text-sm text-slate-500 text-center mb-6">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Username"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md text-sm shadow transition duration-150 disabled:opacity-50"
            >
              {loading ? "Authenticating..." : "Sign In"}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToSignup}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register here
          </button>
        </p>

        <AlertModal
          isOpen={modalState.isOpen}
          type={modalState.type}
          message={modalState.message}
          onConfirm={closeModal}
        />
      </div>
    </div>
  );
};

export default Login;
