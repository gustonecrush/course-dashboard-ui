import React from "react";

function Button({ children, bg, textColor }) {
  return (
    <div className={`rounded-lg bg-${bg} text-${text} py-2 px-2`}>
      {children}
    </div>
  );
}

export default Button;
