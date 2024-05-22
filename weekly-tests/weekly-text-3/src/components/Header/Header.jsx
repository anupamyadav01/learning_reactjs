import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full bg-[#48CAE4] text-black px-8 py-4">
      <NavLink to="/" className="font-bold text-2xl">
        Photo Editor
      </NavLink>
      <ul className="flex gap-5 text-lg">
        <li>
          <NavLink to="/dashboard/convert">Convert</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/removebg">Remove Bg</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/search">Search Image</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
