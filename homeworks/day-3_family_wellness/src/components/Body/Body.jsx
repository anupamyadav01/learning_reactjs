import Address from "../Address/Address.jsx";
import Details from "../Details/Details.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import KnowMore from "../KnowMore/KnowMore.jsx";

const Body = () => {
  console.log();
  return (
    <div>
      <ImageGallery />
      <KnowMore />
      <Details />
      <hr className="border-2 border-gray-400" />
      <Address />
    </div>
  );
};

export default Body;
