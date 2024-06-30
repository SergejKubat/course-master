interface ISwitchProps {
    isToggled: boolean;
    handleToggle: () => void;
}

const Switch = (props: ISwitchProps) => {
    return (
        <label className="flex items-center cursor-pointer select-none ">
            <div className="relative">
                <input type="checkbox" checked={props.isToggled} className="sr-only" onChange={props.handleToggle} />
                <div
                    className={`box block w-[100px] h-[42px] ${
                        props.isToggled ? "bg-[#074b57]" : "bg-primary"
                    } rounded-full transition-colors duration-300`}
                />
                <div
                    className={`absolute left-1 top-1 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white transition ease-in-out duration-300 ${
                        props.isToggled ? "translate-x-[58px]" : ""
                    }`}
                />
            </div>
        </label>
    );
};

export default Switch;
