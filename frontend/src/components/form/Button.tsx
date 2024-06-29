import { ComponentProps } from "react";

const Button = (props: ComponentProps<"button">) => {
    const { children, className, ...other } = props;

    return (
        <button
            className={`py-2 px-3 text-[16px] text-white rounded-2xl transition-all duration-200 ease-in-out ${className ?? ""}`}
            {...other}
        >
            {children}
        </button>
    );
};

export default Button;
