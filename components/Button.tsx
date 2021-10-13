import React from "react";
export interface Props {
    color?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<Props> = ({
    children,
    disabled,
    ...props
}) => {
    return (
        <button disabled={disabled}>{children}</button>
    );
};

export default Button;
