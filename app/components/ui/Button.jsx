import React from "react";

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-slate-500 text-white font-semibold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-75 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
