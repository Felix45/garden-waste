import { useSelector } from "react-redux";

const SelectedItem = () => {
    const { options } = useSelector((state) => state.options);
    const item = options.find(option => option.selected === true);

    return (
            item ? (
                <footer className="selected-item flex flex-col justify-between text-lg bg-black shadow-md fixed bottom-0 left-0 w-full">
                    <div className="container mx-auto px-4">
                        <p className="my-3 text-white text-lg">
                            Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
                        </p>
                        <div className="flex justify-between text-white">
                            <div>
                                <div>{`${item.size} Yard Skip`} {item.hire_period_days} day hire</div>
                                <div className="font-bold">£{item.price_before_vat}</div>
                            </div>
                            <div className="flex space-x-2 mb-4">
                                <button className="bg-white text-black p-2">&laquo; Back</button>
                                <button className="bg-white text-black p-2">Continue &raquo;</button>
                            </div>
                        </div>
                    </div>
                </footer>
            ) : null
    );
}

export default SelectedItem;
