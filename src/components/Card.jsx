import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
const Card = ({ title, description, imageUrl, price, allowed_on_road, allows_heavy_waste }) => {
  return (
    <div className="relative card">
      <div className="absolute top-0 left-0 text-xl bg-white font-bold p-3 border-4 shadow-lg">
        { price }
      </div>
      <img src={imageUrl} alt={title} className="rounded-lg card-image mx-auto h-40 md:h-48 lg:h-56 object-cover" />
      <div className="flex justify-between card-content my-2">
        <h2 className="text-lg font-bold card-title">{title}</h2>
        <p className="text-lg card-description">{description}</p>
      </div>
      <div className="flex justify-between py-3">
        {allowed_on_road ? (
          <div className="flex items-start">
            <FontAwesomeIcon icon={faWarning} className="text-green-500 mr-2" />
            <span className="text-sm mr-2">Allowed on road</span>
          </div>
        ) : (
          <div className="flex items-start">
            <FontAwesomeIcon icon={faWarning} className="text-red-500 mr-2" />
            <span className="text-sm mr-2">Not allowed on road</span>
          </div>
        )}
        {allows_heavy_waste && (
          <div className="flex items-start">
            <FontAwesomeIcon icon={faWarning} className="text-green-500 mr-2" />
            <span className="text-sm">Allows heavy waste</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
