import { FaSearch } from "react-icons/fa";

const MiddleNavbar = () => {
  return (
    <nav className="bg-[#Fff] mt-1">
      <div className="flex justify-between px-5 py-2 text-lg max-w-7xl mx-auto  items-center">
        <div className="text-[40px] font-bold leading-none">
          <span className="bg-[#3C474D] text-[#FED233] px-2 pb-1">MULTI</span>
          <span className="bg-[#FED233] text-[#3C474D] px-2 pb-1">SHOP</span>
        </div>
        <div className="flex">
          <input
            type="text"
            className="border px-3 py-1 outline-none w-[300px]"
            placeholder="Search for products..."
          />
          <span className="border px-2 py-2 text-[#FED233] text-lg">
            <FaSearch />
          </span>
        </div>
        <div>
          <p>Customer Service</p>
          <h3 className=" font-semibold text-xl">+012 345 6789</h3>
        </div>
      </div>
    </nav>
  );
};

export default MiddleNavbar;
