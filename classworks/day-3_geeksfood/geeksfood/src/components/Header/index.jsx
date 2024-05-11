import "./styles.css";
import styles from "./styles.module.css";
import logoImage from "../images/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <a href=""></a>
      <nav>
        <div className="logo">
          <img src={logoImage} alt="" />
          <a href="/">GeekFoods</a>
        </div>

        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/quotes">Quote</NavLink>
            </li>
            <li>
              <NavLink to="/restaurents">Resturants</NavLink>
            </li>
            <li>
              <NavLink to="/foods">Foods</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <button className={styles.btnStyling}>Get started</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
