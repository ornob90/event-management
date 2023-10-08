import React from "react";

const Button = ({ children, className, onClick, type = "submit" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} active:scale-95 duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
