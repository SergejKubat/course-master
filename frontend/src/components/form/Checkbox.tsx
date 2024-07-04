interface ICheckboxProps {
    id: string;
    checked: boolean;
    handleChange: () => void;
}

const Checkbox = (props: ICheckboxProps) => {
    return (
        <input
            id={props.id}
            type="checkbox"
            checked={props.checked}
            className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-2"
            onChange={props.handleChange}
        />
    );
};

export default Checkbox;
