import { FaBars, FaHeart, FaShoppingCart } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const BottomNavbar = () => {
  return (
    <nav className="bg-[#3C474D] mt-2">
      <div className="flex px-5 justify-between text-lg max-w-7xl mx-auto  items-center">
        <div className="flex items-center gap-10">
          <div className="bg-[#FED233] flex w-[290px] justify-between px-6 py-5">
            <div className="flex items-center gap-2">
              <FaBars size={20} />
              <p>Categories</p>
            </div>
            <div>
              <RiArrowDropDownLine size={30} />
            </div>
          </div>
          <ul className="flex text-white gap-4">
            <li className="text-[#FED233] ">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Shop Details</a>
            </li>
            <li className="flex">
              <a href="#">Pages </a>
              <RiArrowDropDownLine size={30} />
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* icons  */}
        <div className="flex text-[#FED233] gap-4">
          <span className="flex gap-1">
            <FaHeart size={20} />
            <h1 className="text-white">0</h1>
          </span>
          <span className="flex gap-1">
            <FaShoppingCart size={20} />
            <p className="text-white">0</p>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
