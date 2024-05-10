import BottomNavbar from "../../components/Navbar/BottomNavbar";
import MiddleNavbar from "../../components/Navbar/MiddleNavbar";
import UpperNavbar from "../../components/Navbar/UpperNavbar";

const Header = () => {
  return (
    <div className="w-full mx-auto">
      <UpperNavbar />
      <MiddleNavbar />
      <BottomNavbar />
    </div>
  );
};

export default Header;
