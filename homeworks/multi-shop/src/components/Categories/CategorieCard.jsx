import PropTypes from "prop-types";

const CategorieCard = ({ prouctName, image, productLeft }) => {
  return (
    <div className="m-5 w-[300px] border-2 border-black p-5 text-center">
      <img src={image} className="h-[200px]" alt={prouctName} />
      <div>
        <h3>{prouctName}</h3>
        <p>{productLeft} left in stock</p>
      </div>
    </div>
  );
};

CategorieCard.propTypes = {
  prouctName: PropTypes.string,
  image: PropTypes.string,
  productLeft: PropTypes.number,
};

export default CategorieCard;
