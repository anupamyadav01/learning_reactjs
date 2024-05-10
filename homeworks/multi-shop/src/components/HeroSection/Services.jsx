import {
  FaCheck,
  FaShippingFast,
  FaExchangeAlt,
  FaPhoneVolume,
} from "react-icons/fa";
const Services = () => {
  return (
    <div className="mx- auto flex max-w-7xl justify-between px-5 py-10 text-xl font-medium">
      <div className="flex items-center gap-3">
        <FaCheck size={60} className="text-[#FED233]" />
        <p>Quality Products</p>
      </div>{" "}
      <div className="flex items-center gap-3">
        <FaShippingFast size={60} className="text-[#FED233]" />
        <p>Free Shipping</p>
      </div>{" "}
      <div className="flex items-center gap-3">
        <FaExchangeAlt size={60} className="text-[#FED233]" />
        <p>14-Day Return</p>
      </div>{" "}
      <div className="flex items-center gap-3">
        <FaPhoneVolume size={60} className="text-[#FED233]" />
        <p>24/7 Support</p>
      </div>
    </div>
  );
};

export default Services;
