import Card from "./Card";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

const Option = ({ option }) => {

    const dispatch = useDispatch();

    const {
        id,
        size,
        hire_period_days,
        transport_cost,
        per_tonne_cost,
        price_before_vat,
        selected,
        vat,
        postcode,
        area,
        forbidden,
        created_at,
        updated_at,
        allowed_on_road,
        allows_heavy_waste
    } = option;

    const bg_color = selected ? "bg-blue-500" : "bg-gray-500";

    const handleSubmit = (id) => {
        dispatch({
            type: 'options/selected',
            payload: { id }
        });
    };

    return (
        <li 
          onClick={() => handleSubmit(id)}
          className="mb-8 border-2 cursor-pointer border-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100">
            <Card
                title={`${size} Yard Skip`}
                description={`${hire_period_days} days hire period`}
                price={`£${price_before_vat}`}
                imageUrl={`/images/${size}-yarder-skip.jpg`}
                allowed_on_road={allowed_on_road}
                allows_heavy_waste={allows_heavy_waste}
            />
            <button className={`p-3 w-full text-white text-xl font-bold ${bg_color} mt-2`} >
                {selected ? "Selected " : "Select "}
                <span className="text-lg text-white">{selected ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />}</span>
            </button>
        </li>
    );
}

export default Option;
