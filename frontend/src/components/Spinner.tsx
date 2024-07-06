interface ISpinnerProps {
    size?: number;
    width?: number;
    color?: string;
}

const Spinner = (props: ISpinnerProps) => {
    return (
        <div className="flex justify-center items-center w-full h-[60vh]">
            <div
                className="loader"
                style={{
                    width: `${props.size ? props.size : "4"}rem`,
                    height: `${props.size ? props.size : "4"}rem`,
                    borderWidth: `${props.width ? props.width : "0.5"}rem`,
                    borderColor: props.color ? `${props.color}` : "#93c5fd",
                    borderBottomColor: "transparent"
                }}
            />
        </div>
    );
};

export default Spinner;
