import logo from "../Images/images.png";
import Button from "../Button/Button";
import Hamburger from "../../assets/images/menu.png";
const Navbar = () => {
  let links = ["Platform", "Plans", "Enterprise", "Resources", "Education"];
  return (
    <nav className="flex items-center justify-between w-full py-3">
      <div className="flex gap-5 items-center justify-between max-lg:w-full">
        <img className="w-36" src={logo} alt="" />
        <ul className="flex gap-5 font-bold max-md:hidden">
          {links.map((link, idx) => {
            return <li key={link + idx}>{link}</li>;
          })}
        </ul>
      </div>

      <div className="flex gap-4 items-center font-medium max-lg:hidden">
        <a href="#">Contact Us</a>
        <a href="#">Log in</a>
        <Button btnName="Sign Up" />
      </div>
      <div className="hidden max-md:block">
        <img className="w-8" src={Hamburger} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
