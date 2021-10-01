import React from "react";
import './button.css'

const Button = () => {
  return (
    <div className = 'buttonWrap'>
      <button>LOGIN</button>
      <a href="http:google.com">Sign in with Google</a>
    </div>
  );
};

export default Button;
