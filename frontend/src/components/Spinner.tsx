interface ISpinnerProps {
    size?: number;
    width?: number;
    color?: string;
}

const Spinner = (props: ISpinnerProps) => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div
                className="loader"
                style={{
                    width: props.size ? `${props.size}rem` : "4rem",
                    height: props.size ? `${props.size}rem` : "4rem",
                    borderWidth: props.width ? `${props.width}rem` : "0.5rem",
                    borderColor: props.color ? `${props.color}` : "#001e53",
                    borderBottomColor: "transparent"
                }}
            />
        </div>
    );
};

export default Spinner;
