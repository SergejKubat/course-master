import { useState, useEffect, ChangeEvent, Dispatch, SetStateAction } from "react";

interface InputProps {
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    touched?: boolean;
    errorMessage?: string;
    min?: number;
    max?: number;
    step?: number;
    validation?: (value: string) => boolean;
    onChange?: Dispatch<SetStateAction<string>>;
}

const Input = (props: InputProps) => {
    const [value, setValue] = useState(props.value);
    const [touched, setTouched] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const _value = event.target.value;

        setValue(_value);

        if (touched && props.validation) {
            setError(!props.validation(_value));
        }

        if (props.onChange) {
            props.onChange(_value);
        }
    };

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    useEffect(() => {
        if (props.touched) {
            setTouched(props.touched);
        }
    }, [props.touched]);

    useEffect(() => {
        if (touched && props.validation) {
            // @ts-ignore
            setError(!props.validation(value));
        } else {
            setError(false);
        }
    }, [touched]);

    return (
        <>
            <input
                id={props.id}
                name={props.name}
                type={props.type ? props.type : "text"}
                value={value}
                placeholder={props.placeholder}
                disabled={props.disabled}
                min={props.min}
                max={props.max}
                step={props.step}
                readOnly={props.readOnly}
                className={`p-3 text-[14px] text-white bg-gray-800 border border-gray-600 outline-none rounded-lg ${props.className}`}
                style={{ border: error ? "1px solid #d93a3a" : "none" }}
                onBlur={() => setTouched(true)}
                onChange={onChange}
            />
            <p className={`mt-1 text-xs text-red-500${error ? "" : " hidden"}`}>
                {props.required && !value ? "Field must not be empty." : props.errorMessage}
            </p>
        </>
    );
};

export default Input;
