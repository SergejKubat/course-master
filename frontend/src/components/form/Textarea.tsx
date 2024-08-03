import { useState, useEffect, ChangeEvent, Dispatch, SetStateAction } from "react";

interface TextareaProps {
    id?: string;
    name?: string;
    value: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    touched: boolean;
    errorMessage?: string;
    rows?: number;
    validation?: (value: string) => boolean;
    onChange: Dispatch<SetStateAction<string>>;
}

const Textarea = (props: TextareaProps) => {
    const [value, setValue] = useState(props.value);
    const [touched, setTouched] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
        setTouched(props.touched);
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
            <textarea
                id={props.id}
                name={props.name}
                value={value}
                placeholder={props.placeholder}
                disabled={props.disabled}
                rows={props.rows}
                className={`p-3 text-[14px] dark:text-white bg-gray-200 dark:bg-gray-800 border border-gray-600 outline-none rounded-lg resize-none ${props.className}`}
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

export default Textarea;
