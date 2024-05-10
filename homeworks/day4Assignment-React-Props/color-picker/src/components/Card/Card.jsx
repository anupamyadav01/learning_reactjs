import PropTypes from "prop-types";

const Card = ({ colorName, colorHexCode }) => {
  return (
    <div className="w-[210px] shadow-md mb-4 rounded-md">
      <section
        className=" w-full h-[250px]"
        style={{ backgroundColor: colorHexCode }}
      ></section>
      <section className="ml-4 py-4">
        <h2 className="text-3xl font-semibold">#FF6663</h2>
        <p style={{ color: colorHexCode }}>{colorName}</p>
      </section>
    </div>
  );
};

Card.propTypes = {
  colorName: PropTypes.string,
  colorHexCode: PropTypes.string,
};

export default Card;
