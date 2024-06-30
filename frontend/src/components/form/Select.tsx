import { ComponentProps } from "react";

const Select = (props: ComponentProps<"select">) => {
    const { children, className, ...other } = props;

    return (
        <select
            className={`
                    py-3 rounded-2xl transition-all duration-200 ease-in-out
                    ${className ?? ""}
                `}
            {...other}
        >
            {children}
        </select>
    );
};

export default Select;
