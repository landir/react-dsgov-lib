import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary",
    inverted?: boolean,
    icone?: "string",
}

const Button: React.FC<ButtonProps> = ({
    children,
    disabled,
    className = "br-button mt-3 mt-sm-0 ml-sm-3",
    type = "button",
    variant = "secondary",
    inverted = "",
    icone = "",
    ...props
}) => {
    return (
        <button
            className={[`${className}`, variant, inverted].join(' ')}
            type={type}
            disabled={disabled}
        >
            {icone && <i className={`fas ${icone} mr-1`} aria-hidden="true" />}
            {children}
        </button>
    );
};

export default Button;
