import React from "react";

export interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  required = false,
  maxLength,
  placeholder,
  onChange,
}) => (
  <div>
    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
      {label} {required && "*"}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      maxLength={maxLength}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
);
