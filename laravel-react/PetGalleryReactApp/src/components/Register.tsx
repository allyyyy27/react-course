import React from "react";
import { userRegisterForm } from "../hooks/userRegisterForm"; // Adjust import name if hook uses userRegisterForm or useSignupForm
import { InputField } from "./ui/InputFields";
import { AlertModal } from "./ui/AlertModal";

interface RegisterProps {
  onSwitchToLogin?: () => void;
}

const Register: React.FC<RegisterProps> = ({ onSwitchToLogin }) => {
  const {
    formData,
    loading,
    modalState,
    handleChange,
    handleSubmit,
    closeModal,
  } = userRegisterForm(onSwitchToLogin);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-1">
          User Registration
        </h2>
        <p className="text-sm text-slate-500 text-center mb-6">
          Enter your credentials to create an account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Section */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-4">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sm:col-span-3">
              <InputField
                label="Middle Name"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-3">
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sm:col-span-2">
              <InputField
                label="Suffix"
                name="suffix"
                placeholder="e.g. Jr."
                value={formData.suffix}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Account Details Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <InputField
              label="Username"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />

            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact & Auth Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <InputField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <InputField
              label="PIN Code"
              name="pinCode"
              type="password"
              maxLength={6}
              placeholder="4-6 digits"
              value={formData.pinCode}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md text-sm shadow transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Register"}
            </button>
          </div>
        </form>

        {onSwitchToLogin && (
          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Log in here
            </button>
          </p>
        )}

        {/* Modal replacing inline alert */}
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

export default Register;
