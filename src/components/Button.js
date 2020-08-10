import React from 'react';

const Button = ({ label ,href}) => (
  <button href={href} className="button">
    {label}
  </button>
);

export default Button;
