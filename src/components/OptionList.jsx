import { useSelector } from "react-redux";
import Option from "./Option";

const OptionList = () => {
    const { options } = useSelector((state) => state.options);

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {options.map((option, index) => (
                <Option key={index} option={option} />
            ))}
        </ul>
    )
}

export default OptionList;
