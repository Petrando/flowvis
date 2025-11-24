import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button 
        style={{
            backgroundColor:"#4ade80",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            color: "white",
            cursor: "pointer",
        }} 
        onClick={onClick}
    >
        {children}
    </button>;
};