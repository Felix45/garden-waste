import { useEffect, useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SelectedItem = () => {
    const [show, setShow] = useState(true);
    const { options } = useSelector((state) => state.options);
    const item = options.find(option => option.selected === true);

    const handleShow = () => {
        setShow((prevShow) => !prevShow);
    }

    useEffect(() => {
        item && setShow(true);
    }, [item]);

    return (
        (item && show) ? (
            <footer className="selected-item flex flex-col justify-between text-lg bg-black shadow-md fixed bottom-0 left-0 w-full">

                <div className="container mx-auto px-4">
                    <div className="flex">
                        <p className="text-white text-lg my-3">
                            Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
                        </p>
                        <div
                            onClick={handleShow}
                            role="button"
                            className="flex cursor-pointer justify-center items-center shadow-md p-3 text-2xl w-[48px] h-[48px] font-bold bg-white text-black">
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                    </div>
                    <div className="flex flex-col text-white md:flex-row md:items-center md:justify-between">
                        <div className="text-xl font-bold">
                            <div>{`${item.size} Yard Skip`} {item.hire_period_days} day hire</div>
                            <div>£{item.price_before_vat}</div>
                        </div>
                        <div className="flex my-2 space-x-2 mb-4 text-xl font-bold md:my-0">
                            <button className="bg-white text-black p-2">
                                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back</button>
                            <button className="bg-white text-black p-2">
                                Continue <FontAwesomeIcon icon={faArrowRight} className="mr-2" /></button>
                        </div>
                    </div>
                </div>
            </footer>
        ) : null
    );
}

export default SelectedItem;
