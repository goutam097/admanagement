// import React, { JSX } from 'react';

type ButtonProps = {
  text: string | any;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  type = 'button',
  className = '',
  onClick,
  disabled = false
}) => {
  return (
    <button
      className={`${className} btnAll gradientBtn`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;