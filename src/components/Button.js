import React from 'react';

const Button = ({ label},{url}) => (
  <button href={url} className="button">
    {label}
  </button>
);

export default Button;
