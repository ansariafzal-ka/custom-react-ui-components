import React from "react";

const Button = ({ type, onClick, variant, children, className }) => {
  const variantClasses = {
    primary: "text-white font-medium bg-blue-500 rounded hover:bg-blue-600",
    secondary: "text-white font-medium bg-gray-600 rounded hover:bg-gray-700",
    success: "text-white font-medium bg-green-600 rounded hover:bg-green-700",
    warning: "text-white font-medium bg-yellow-500 rounded hover:bg-yellow-600",
    danger: "text-white font-medium bg-red-600 rounded hover:bg-red-700",
    violet: "text-white font-medium bg-violet-600 rounded hover:bg-violet-700",
    solid:
      "text-white font-medium bg-black border border-white rounded hover:bg-white hover:border hover:border-black hover:text-black",
    outlined:
      "font-medium border border-black text-black rounded bg-white hover:text-white hover:bg-black hover:border-white",
  };

  const variantclassName = variantClasses[variant] || variantClasses.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-1 ${variantclassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
