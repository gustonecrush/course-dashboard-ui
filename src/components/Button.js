import React from "react";

function Button({ children, bg, textColor, margin = 0 }) {
  return (
    <button
    
      className={`rounded-lg bg-[${bg}] text-[${textColor}] ml-${margin} py-2 px-2 flex items-center`}
    >
      {children}
    </button>
  );
}

export default Button;
